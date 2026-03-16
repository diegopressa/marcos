"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none group">
          <div className="text-2xl font-black tracking-tighter text-white">
            MARCOS<span className="text-primary group-hover:brightness-110 transition-all">MONTERO</span>
          </div>
          <div className="text-[10px] font-bold text-white/90 uppercase mt-[-2px] flex justify-between w-full">
            {"ENTRENADOR".split("").map((letter, i) => (
              <span key={i}>{letter}</span>
            ))}
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/el-programa"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-primary/90 transition-all transform hover:scale-105"
          >
            {siteConfig.hero.cta}
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[72px] bg-background z-40 md:hidden flex flex-col p-8 space-y-6">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-2xl font-bold hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/el-programa"
            className="bg-primary text-primary-foreground text-center py-4 rounded-xl text-lg font-bold uppercase tracking-wider"
            onClick={() => setIsOpen(false)}
          >
            {siteConfig.hero.cta}
          </Link>
        </div>
      )}
    </header>
  );
}
