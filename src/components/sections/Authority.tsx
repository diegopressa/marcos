import Image from "next/image";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function Authority() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="aspect-[4/5] bg-zinc-900 rounded-[3rem] overflow-hidden border border-white/10 group">
                <Image 
                  src="/marcos-profile.jpg" 
                  alt="Marcos Montero Profile" 
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                />
             </div>
             <div className="absolute -bottom-10 -right-10 w-64 h-64 border-2 border-primary/20 rounded-full -z-10" />
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <p className="text-primary font-bold uppercase tracking-widest text-sm">Tu Entrenador</p>
            <h2 className="text-5xl md:text-6xl font-outfit font-black text-white leading-tight">
              Hola, soy <br /> Marcos Montero
            </h2>
            <div className="w-16 h-1.5 bg-primary rounded-full" />
            
            <div className="space-y-6 text-xl text-muted-foreground font-light leading-relaxed">
              <p>
                He dedicado los últimos 10 años a ayudar a personas reales a transformar no solo su físico, sino su estilo de vida.
              </p>
              <p>
                Mi enfoque no es la motivación vacía. Es la <strong>disciplina</strong>, el <strong>orden</strong> y la <strong>realidad</strong>. No te voy a prometer cambios mágicos en 3 días. Te voy a dar un sistema que funciona si estás dispuesto a trabajar.
              </p>
              <p>
                Entiendo lo que es tener más de 30, tener un trabajo demandante y sentir que el tiempo no alcanza. Mi programa está diseñado para vos.
              </p>
            </div>

            <div className="pt-6">
              <Link
                href="/sobre-marcos"
                className="inline-flex items-center text-white font-bold uppercase tracking-widest text-sm border-b-2 border-primary pb-2 hover:text-primary transition-colors"
              >
                Conocé mi historia completa
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
