import nodemailer from "nodemailer";
import { logger } from "./logger";

export interface InquiryMailPayload {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  service: string;
  subject: string;
  message: string;
}

function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value || value.trim() === "") {
    throw new Error(`Environment variable ${name} is required but was not provided.`);
  }
  return value.trim();
}

function getSmtpHost(): string {
  return getRequiredEnv("SMTP_HOST");
}

function getSmtpPort(): number {
  const raw = getRequiredEnv("SMTP_PORT");
  const port = Number(raw);
  if (Number.isNaN(port) || port <= 0) {
    throw new Error(`Invalid SMTP_PORT value: "${raw}"`);
  }
  return port;
}

function getSmtpUser(): string {
  return getRequiredEnv("SMTP_USER");
}

function getSmtpPass(): string {
  return getRequiredEnv("SMTP_PASS");
}

function getMailFrom(): string {
  return (
    process.env.MAIL_FROM ??
    process.env.SMTP_USER ??
    "info@consultkendra.com"
  );
}

function getMailTo(): string {
  return process.env.MAIL_TO ?? "info@consultkendra.com";
}

function createTransport(): nodemailer.Transporter {
  return nodemailer.createTransport({
    host: getSmtpHost(),
    port: getSmtpPort(),
    secure: getSmtpPort() === 465,
    requireTLS: true,
    auth: {
      user: getSmtpUser(),
      pass: getSmtpPass(),
    },
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 20000,
  });
}

export async function sendInquiryMail(payload: InquiryMailPayload): Promise<void> {
  const from = getMailFrom();
  const to = getMailTo();

  const text = [
    "A new inquiry was submitted through the Kendra Consultants website.",
    "",
    `Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Country: ${payload.country}`,
    `Service of interest: ${payload.service}`,
    "",
    `Subject: ${payload.subject}`,
    "",
    payload.message,
  ].join("\n");

  const html = [
    "<h2>New Website Inquiry</h2>",
    "<p>A new inquiry was submitted through the Kendra Consultants website.</p>",
    "<table cellspacing=\"0\" cellpadding=\"6\" style=\"border-collapse: collapse; font-size: 14px;\">",
    `<tr><td style="padding:6px;border:1px solid #ddd;"><strong>Name</strong></td><td style="padding:6px;border:1px solid #ddd;">${escapeHtml(payload.fullName)}</td></tr>`,
    `<tr><td style="padding:6px;border:1px solid #ddd;"><strong>Email</strong></td><td style="padding:6px;border:1px solid #ddd;">${escapeHtml(payload.email)}</td></tr>`,
    `<tr><td style="padding:6px;border:1px solid #ddd;"><strong>Phone</strong></td><td style="padding:6px;border:1px solid #ddd;">${escapeHtml(payload.phone)}</td></tr>`,
    `<tr><td style="padding:6px;border:1px solid #ddd;"><strong>Country</strong></td><td style="padding:6px;border:1px solid #ddd;">${escapeHtml(payload.country)}</td></tr>`,
    `<tr><td style="padding:6px;border:1px solid #ddd;"><strong>Service of interest</strong></td><td style="padding:6px;border:1px solid #ddd;">${escapeHtml(payload.service)}</td></tr>`,
    "</table>",
    `<p><strong>Subject:</strong> ${escapeHtml(payload.subject)}</p>`,
    `<p><strong>Message:</strong></p>`,
    `<p style="white-space: pre-wrap;">${escapeHtml(payload.message)}</p>`,
  ].join("\n");

  const transporter = createTransport();

  try {
    const info = await transporter.sendMail({
      from: { name: "Kendra Consultants Website", address: from },
      to,
      replyTo: payload.email,
      subject: `[Website Inquiry] ${payload.subject}`,
      text,
      html,
    });

    logger.info(
      { messageId: info.messageId, to },
      "Inquiry email sent",
    );
  } finally {
    transporter.close();
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
