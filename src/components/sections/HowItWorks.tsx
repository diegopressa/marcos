import { siteConfig } from "@/config/site";

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-outfit font-black text-white mb-6">
            {siteConfig.howItWorks.headline}
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-white/5 z-0" />
          
          {siteConfig.howItWorks.steps.map((step, i) => (
            <div key={i} className="relative z-10 text-center space-y-6 group">
              <div className="w-24 h-24 rounded-3xl bg-zinc-900 border border-white/5 flex items-center justify-center mx-auto group-hover:bg-primary transition-all duration-500 group-hover:rotate-6 shadow-xl">
                <span className="text-4xl font-black text-white group-hover:scale-110 transition-transform">
                  {i + 1}
                </span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {step.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed px-4">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
