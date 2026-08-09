import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import watermark from "@assets/WhatsApp_Image_2026-08-02_at_02.10.15_1785952366037.jpeg";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-1 pt-16 md:pt-[76px]">{children}</main>
      <Footer />
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none mix-blend-multiply opacity-[0.08]"
        style={{
          backgroundImage: `url(${watermark})`,
          backgroundSize: "55% auto",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
}
