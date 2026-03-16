import { siteConfig } from "@/config/site";
import { Zap, TrendingUp, Shield, User, Calendar, CheckCircle, LucideIcon, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  TrendingUp,
  Shield,
  User,
  Calendar,
  CheckCircle,
};

export default function Benefits() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
       {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-outfit font-black text-white mb-6">
            {siteConfig.benefits.headline}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.benefits.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Check;
            return (
              <div 
                key={i} 
                className="group p-8 bg-zinc-900/40 border border-white/5 rounded-[2rem] hover:bg-zinc-900/60 transition-all duration-300 hover:border-primary/20"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon size={28} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
