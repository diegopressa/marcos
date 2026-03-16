import { siteConfig } from "@/config/site";
import { Check, X } from "lucide-react";

export default function WhoIsThisFor() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-outfit font-black text-white mb-6">
            {siteConfig.whoIsThisFor.headline}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* SI es para vos */}
          <div className="p-10 bg-zinc-900/50 rounded-[3rem] border border-white/5 space-y-8">
            <h4 className="text-3xl font-black text-white flex items-center">
              <span className="w-12 h-12 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mr-4">
                <Check size={28} />
              </span>
              SÍ es para vos si...
            </h4>
            <div className="space-y-6">
              {siteConfig.whoIsThisFor.yes.map((point, i) => (
                <div key={i} className="flex items-start">
                  <div className="mt-1.5 mr-4 w-1.5 h-1.5 bg-green-500 rounded-full shrink-0" />
                  <p className="text-lg text-white/80">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* NO es para vos */}
          <div className="p-10 bg-zinc-950 rounded-[3rem] border border-white/5 space-y-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <h4 className="text-3xl font-black text-white flex items-center">
              <span className="w-12 h-12 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mr-4">
                <X size={28} />
              </span>
              NO es para vos si...
            </h4>
            <div className="space-y-6">
              {siteConfig.whoIsThisFor.no.map((point, i) => (
                <div key={i} className="flex items-start">
                  <div className="mt-1.5 mr-4 w-1.5 h-1.5 bg-red-500 rounded-full shrink-0" />
                  <p className="text-lg text-white/50">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
