import { siteConfig } from "@/config/site";
import Authority from "@/components/sections/Authority";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Sobre Marcos",
  description: "Conocé la historia y el enfoque de Marcos Montero.",
};

export default function SobreMarcos() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20 bg-background overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-10" />
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-8xl font-outfit font-black text-white mb-8 tracking-tighter">
              SU CAMINO ES EL <br /> <span className="text-primary italic">TUYO.</span>
            </h1>
            <p className="text-2xl text-muted-foreground font-light leading-relaxed">
              Descubrí por qué Marcos Montero cree que el crecimiento físico es el pilar fundamental para el éxito en todas las áreas de la vida.
            </p>
         </div>
      </section>

      <Authority />

      <section className="py-24 bg-zinc-950">
        <div className="max-w-3xl mx-auto px-4 space-y-12 text-xl text-muted-foreground leading-relaxed font-light">
          <h3 className="text-3xl font-black text-white italic uppercase tracking-widest text-center mb-16">Mi Filosofía</h3>
          
          <div className="bg-zinc-900/50 p-12 rounded-[3rem] border border-white/5 space-y-8">
            <p>
              "Entrenar no se trata solo de levantar kilitos o verse bien sin remera. Se trata de demostrarte a vos mismo que podés cumplir con tu palabra. Cuando decidís despertarte temprano y entrenar aunque no tengas ganas, estás construyendo el músculo de la <strong>disciplina</strong>."
            </p>
            <p>
              Durante mis más de 10 años como personal trainer, vi a mucha gente abandonar. ¿Por qué? Porque buscaban la gratificación instantánea. Mi enfoque es el largo plazo. La salud es una inversión, no un gasto.
            </p>
            <p>
              Acompaño a adultos de más de 30 porque compartimos la misma realidad: responsabilidades, cansancio acumulado, poco tiempo. Pero también compartimos la misma necesidad: ser la mejor versión para nosotros y para quienes nos rodean.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
