import { siteConfig } from "@/config/site";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProgramContent() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-br from-zinc-900 to-black rounded-[4rem] border border-white/10 p-8 md:p-20 relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -mr-48 -mt-48" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 text-primary mb-6 bg-primary/10 px-4 py-2 rounded-full font-bold text-sm uppercase tracking-widest">
                <Sparkles size={16} />
                <span>Todo Incluido</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-outfit font-black text-white mb-8 leading-tight">
                {siteConfig.programContent.headline}
              </h2>
              
              <div className="space-y-6">
                {siteConfig.programContent.items.map((item, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary font-bold">
                      {i + 1}
                    </div>
                    <span className="text-xl text-white/90 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-800/50 p-10 rounded-[3rem] border border-white/10 backdrop-blur-xl">
               <div className="text-center space-y-8">
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">Inversión Única</h3>
                  <div className="space-y-2">
                    <p className="text-muted-foreground line-through text-2xl font-medium">$99.00 USD</p>
                    <p className="text-7xl font-black text-white">$49</p>
                    <p className="text-primary font-bold uppercase tracking-widest text-sm italic">Oferta de Lanzamiento</p>
                  </div>
                  
                  <div className="pt-6">
                    <Link
                      href="/el-programa"
                      className="block w-full bg-primary text-primary-foreground py-6 rounded-2xl font-black uppercase tracking-widest text-xl hover:bg-primary/90 transition-all shadow-[0_20px_40px_rgba(0,102,255,0.2)]"
                    >
                      Comprar Plan Ahora
                    </Link>
                    <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                      * Pago único, acceso de por vida. <br />
                      * Sin cobros mensuales.
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
