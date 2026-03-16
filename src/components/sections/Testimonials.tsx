import { siteConfig } from "@/config/site";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Resultados Reales</p>
          <h2 className="text-4xl md:text-5xl font-outfit font-black text-white">
            Lo que dicen mis alumnos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {siteConfig.testimonials.map((testimonial, i) => (
            <div key={i} className="bg-zinc-900 border border-white/5 p-12 rounded-[3rem] relative space-y-8">
              <Quote className="text-primary opacity-20 absolute top-12 right-12" size={80} />
              
              <div className="flex items-center space-x-6 relative z-10">
                <div className="w-20 h-20 rounded-full bg-zinc-800 border-2 border-primary/20 overflow-hidden shrink-0">
                  <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary font-bold text-2xl">
                    {testimonial.name[0]}
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">{testimonial.name}</h4>
                  <p className="text-primary font-medium">{testimonial.age} años</p>
                </div>
              </div>

              <p className="text-xl text-muted-foreground italic leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Before/After Placeholder */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
           {[1,2,3,4].map((n) => (
             <div key={n} className="aspect-[3/4] bg-zinc-900 rounded-2xl border border-white/5 overflow-hidden relative">
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent">
                   <p className="text-[10px] font-bold text-primary uppercase tracking-widest text-center">Cambio Físico Real</p>
                </div>
                <div className="w-full h-full flex items-center justify-center text-white/10 italic text-sm">
                  Espacio para Foto
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
