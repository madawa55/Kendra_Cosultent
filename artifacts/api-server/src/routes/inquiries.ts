import { Router, type IRouter } from "express";
import { SubmitInquiryBody, SubmitInquiryResponse } from "@workspace/api-zod";
import { sendInquiryMail } from "../lib/email";
import { logger } from "../lib/logger";

const router: IRouter = Router();

router.post("/inquiries", async (req, res) => {
  const parsed = SubmitInquiryBody.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: "Invalid inquiry payload" });
    return;
  }

  const { data } = parsed;

  try {
    await sendInquiryMail(data);
  } catch (err) {
    logger.error({ err }, "Failed to send inquiry email");
    res.status(500).json({ error: "Failed to deliver inquiry" });
    return;
  }

  const response = SubmitInquiryResponse.parse({ status: "received" });
  res.status(201).json(response);
});

export default router;
