import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center space-y-12">
          <h2 className="text-5xl md:text-8xl font-outfit font-black text-white leading-[0.8] tracking-tighter italic uppercase">
            Es momento de <br /> <span className="text-primary">empezar de verdad.</span>
          </h2>
          
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            No dejes para el lunes lo que podés empezar a cambiar hoy mismo. <br className="hidden md:block" />
            Unite ahora y recibí acceso inmediato al sistema.
          </p>

          <div className="flex flex-col items-center space-y-6">
            <Link
              href="/el-programa"
              className="bg-primary text-primary-foreground px-16 py-8 rounded-[2rem] font-black uppercase tracking-widest text-2xl hover:bg-primary/90 transition-all transform hover:scale-110 shadow-[0_30px_60px_rgba(0,102,255,0.3)] flex items-center space-x-4"
            >
              <span>{siteConfig.hero.cta} ahora</span>
              <ArrowRight size={24} />
            </Link>
            
            <p className="text-sm font-bold text-white/50 tracking-[0.2em] uppercase">
              Pago único • Acceso de por vida • Sin riesgos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
