import { siteConfig } from "@/config/site";
import { AlertCircle } from "lucide-react";

export default function Problem() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-outfit font-black mb-8 text-white">
          {siteConfig.problem.headline}
        </h2>
        <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
          {siteConfig.problem.description}
        </p>

        <div className="grid gap-4 max-w-2xl mx-auto">
          {siteConfig.problem.points.map((point, i) => (
            <div 
              key={i}
              className="group flex items-center p-6 bg-zinc-900/50 border border-white/5 rounded-2xl hover:border-primary/20 transition-all text-left"
            >
              <div className="mr-6 p-3 bg-red-500/10 rounded-full text-red-500 group-hover:scale-110 transition-transform">
                <AlertCircle size={24} />
              </div>
              <p className="text-lg font-medium text-white/90">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
