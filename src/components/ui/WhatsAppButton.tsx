"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function WhatsAppButton() {
  return (
    <a
      href={siteConfig.links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 md:bottom-12 md:right-12"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" />
      <span className="absolute -top-2 -left-2 flex h-5 w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-5 w-5 bg-white text-[#25D366] text-[10px] items-center justify-center font-bold">1</span>
      </span>
    </a>
  );
}
