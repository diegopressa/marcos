import { siteConfig } from "@/config/site";
import { CheckCircle } from "lucide-react";

export default function Solution() {
  return (
    <section className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-outfit font-black mb-8 text-white leading-tight">
              {siteConfig.solution.headline}
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              {siteConfig.solution.description}
            </p>

            <div className="space-y-8">
              {siteConfig.solution.features.map((feature, i) => (
                <div key={i} className="flex space-x-4">
                  <div className="mt-1">
                    <CheckCircle className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
             <div className="absolute -inset-1 bg-gradient-to-r from-primary to-amber-600 rounded-[2.5rem] blur opacity-25" />
             <div className="relative aspect-square bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-white/10">
                {/* Image placeholder for solution/system */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a]">
                   <img 
                    src="/system-placeholder.jpg" 
                    alt="Sistema de entrenamiento" 
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-2xl font-black text-white mb-2 italic">DIFERENTE A TODO.</p>
                    <p className="text-sm text-white/50">Tu plan es tan único como tu vida.</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
