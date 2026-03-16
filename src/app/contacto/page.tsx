import { siteConfig } from "@/config/site";
import { Mail, Instagram, MessageCircle, MapPin } from "lucide-react";

export const metadata = {
  title: "Contacto",
  description: "Ponete en contacto con Marcos Montero para cualquier duda sobre el programa.",
};

export default function Contacto() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20 bg-background overflow-hidden relative">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-8xl font-outfit font-black text-white mb-8 tracking-tighter uppercase">
              Hablemos <span className="text-primary">Claro.</span>
            </h1>
            <p className="text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              ¿Tenés alguna duda técnica? ¿No sabés si el programa es para vos? Escribime y te ayudo.
            </p>
         </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Vías Directas</h3>
              <div className="space-y-6">
                 <a 
                  href={siteConfig.links.whatsapp} 
                  target="_blank"
                  className="flex items-center space-x-6 p-6 bg-zinc-900 rounded-3xl border border-white/5 hover:border-primary/50 transition-all group"
                 >
                   <div className="w-14 h-14 bg-[#25D366]/10 text-[#25D366] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageCircle size={32} />
                   </div>
                   <div>
                      <p className="text-sm font-bold text-white/50 uppercase tracking-widest">WhatsApp</p>
                      <p className="text-xl font-bold text-white">Chateá conmigo ahora</p>
                   </div>
                 </a>

                 <a 
                  href={`mailto:${siteConfig.contact.email}`} 
                  className="flex items-center space-x-6 p-6 bg-zinc-900 rounded-3xl border border-white/5 hover:border-primary/50 transition-all group"
                 >
                   <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail size={32} />
                   </div>
                   <div>
                      <p className="text-sm font-bold text-white/50 uppercase tracking-widest">Email</p>
                      <p className="text-xl font-bold text-white">{siteConfig.contact.email}</p>
                   </div>
                 </a>

                 <a 
                  href={siteConfig.links.instagram} 
                  target="_blank"
                  className="flex items-center space-x-6 p-6 bg-zinc-900 rounded-3xl border border-white/5 hover:border-primary/50 transition-all group"
                 >
                   <div className="w-14 h-14 bg-pink-500/10 text-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Instagram size={32} />
                   </div>
                   <div>
                      <p className="text-sm font-bold text-white/50 uppercase tracking-widest">Instagram</p>
                      <p className="text-xl font-bold text-white">@marcosmontero</p>
                   </div>
                 </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-muted-foreground p-6">
               <MapPin size={20} className="text-primary" />
               <p>{siteConfig.contact.address}</p>
            </div>
          </div>

          <div className="bg-zinc-900 p-10 md:p-16 rounded-[4rem] border border-white/5">
             <h3 className="text-3xl font-black text-white mb-8">Enviame un mensaje</h3>
             <form className="space-y-6">
                <div className="space-y-2">
                   <label className="text-sm font-bold text-white/50 uppercase tracking-widest ml-4">Nombre Completo</label>
                   <input 
                    type="text" 
                    placeholder="Tu nombre..."
                    className="w-full bg-black border border-white/10 p-6 rounded-2xl focus:border-primary focus:outline-none text-white transition-all"
                   />
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-bold text-white/50 uppercase tracking-widest ml-4">Email</label>
                   <input 
                    type="email" 
                    placeholder="tu@email.com"
                    className="w-full bg-black border border-white/10 p-6 rounded-2xl focus:border-primary focus:outline-none text-white transition-all"
                   />
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-bold text-white/50 uppercase tracking-widest ml-4">Mensaje</label>
                   <textarea 
                    rows={4}
                    placeholder="¿En qué puedo ayudarte?"
                    className="w-full bg-black border border-white/10 p-6 rounded-2xl focus:border-primary focus:outline-none text-white transition-all resize-none"
                   ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-6 rounded-2xl font-black uppercase tracking-widest text-xl hover:bg-primary/90 transition-all shadow-[0_20px_40px_rgba(0,102,255,0.2)]"
                >
                  Enviar Mensaje
                </button>
             </form>
          </div>
        </div>
      </section>
    </div>
  );
}
