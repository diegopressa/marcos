import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background/Gradient */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-background to-transparent" />

      <div className="max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>Acceso Inmediato</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-outfit font-black tracking-tight leading-[0.9] text-white">
            {siteConfig.hero.title.split(',').map((part, i) => (
              <span key={i} className="block">
                {part}{i === 0 && ","}
              </span>
            ))}
          </h1>

          <p className="text-xl text-muted-foreground max-w-xl md:text-2xl font-light">
            {siteConfig.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/el-programa"
              className="w-full sm:w-auto bg-primary text-primary-foreground px-10 py-5 rounded-2xl font-black uppercase tracking-wider text-lg hover:bg-primary/90 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(0,102,255,0.3)] flex items-center justify-center space-x-2"
            >
              <span>{siteConfig.hero.cta}</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              href="#como-funciona"
              className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-wider text-lg hover:bg-white/10 transition-all flex items-center justify-center"
            >
              {siteConfig.hero.secondaryCta}
            </Link>
          </div>

          <div className="flex flex-wrap gap-y-4 gap-x-8 pt-4">
            {siteConfig.hero.trustPoints.map((point) => (
              <div key={point} className="flex items-center space-x-2">
                <CheckCircle2 size={18} className="text-primary" />
                <span className="text-sm font-medium text-white/70">{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-500" />
          <div className="relative aspect-[4/5] bg-zinc-900 rounded-[2rem] overflow-hidden border border-white/10 mask-gradient">
            <Image 
              src="/111.jpg" 
              alt="Marcos Montero" 
              fill
              className="object-cover"
              priority
            />
          </div>

          
          <div className="absolute -bottom-6 -left-6 bg-background/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl max-w-[200px]">
             <p className="text-xs font-bold text-primary uppercase mb-2">Enfoque Real</p>
             <p className="text-sm font-medium text-white leading-tight">
               "Más de 10 años acompañando transformaciones físicas y personales."
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
