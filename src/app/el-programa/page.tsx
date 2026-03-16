import { siteConfig } from "@/config/site";
import ProgramContent from "@/components/sections/ProgramContent";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import { Check, Calendar, Laptop, Users, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "El Programa",
  description: "Detalles completos del programa de entrenamiento de Marcos Montero.",
};

export default function ElPrograma() {
  const details = [
    {
      title: "Planificación Completa",
      description: "Rutinas adaptadas para Gimnasio o Casa. Sabrás qué hacer cada día.",
      icon: Calendar
    },
    {
      title: "Plataforma Online",
      description: "Acceso desde cualquier dispositivo a los videos y guías.",
      icon: Laptop
    },
    {
      title: "Comunidad VIP",
      description: "Espacio exclusivo para alumnos donde compartimos progreso.",
      icon: Users
    },
    {
      title: "Garantía de Calidad",
      description: "Un sistema probado por cientos de personas reales.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20 bg-background overflow-hidden relative border-b border-white/5">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-outfit font-black text-white mb-8 tracking-tighter">
              EL SISTEMA <br /> <span className="text-primary italic">DEFINITIVO.</span>
            </h1>
            <p className="text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              Todo lo que necesitás para transformar tu cuerpo y tu mente en un solo lugar. Sin vueltas, sin suscripciones.
            </p>
         </div>
      </section>

      <ProgramContent />

      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {details.map((item, i) => (
              <div key={i} className="p-8 bg-zinc-900 border border-white/5 rounded-3xl hover:border-primary/20 transition-all">
                <item.icon className="text-primary mb-6" size={40} />
                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4">
           <h3 className="text-3xl font-black text-white text-center mb-16 uppercase tracking-widest">¿Qué sucede después de comprar?</h3>
           <div className="space-y-12">
             <div className="flex space-x-6">
                <div className="shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center font-black text-primary-foreground text-xl">1</div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">Acceso instantáneo</h4>
                  <p className="text-muted-foreground text-lg">Recibís un correo con tus credenciales para entrar a la plataforma de inmediato.</p>
                </div>
             </div>
             <div className="flex space-x-6">
                <div className="shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center font-black text-primary-foreground text-xl">2</div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">Evaluación inicial</h4>
                  <p className="text-muted-foreground text-lg">Completás un breve formulario para entender tu punto de partida y tus objetivos.</p>
                </div>
             </div>
             <div className="flex space-x-6">
                <div className="shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center font-black text-primary-foreground text-xl">3</div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">Manos a la obra</h4>
                  <p className="text-muted-foreground text-lg">Empezás tu primera semana de entrenamiento con guías claras de nutrición y hábitos.</p>
                </div>
             </div>
           </div>
        </div>
      </section>

      <FAQ />
      <FinalCTA />
    </div>
  );
}
