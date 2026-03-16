"use client";

import { siteConfig } from "@/config/site";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-outfit font-black text-white">
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="space-y-4">
          {siteConfig.faq.map((item, i) => (
            <div 
              key={i} 
              className={cn(
                "border border-white/5 rounded-2xl overflow-hidden transition-all duration-300",
                openIndex === i ? "bg-zinc-900 border-primary/20" : "bg-transparent"
              )}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center group"
              >
                <span className={cn(
                  "text-lg font-bold transition-colors",
                  openIndex === i ? "text-primary" : "text-white group-hover:text-primary"
                )}>
                  {item.question}
                </span>
                {openIndex === i ? (
                  <ChevronUp className="text-primary" />
                ) : (
                  <ChevronDown className="text-white/40" />
                )}
              </button>
              
              {openIndex === i && (
                <div className="px-6 pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
