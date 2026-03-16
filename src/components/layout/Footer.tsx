import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Instagram, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <Link href="/" className="flex flex-col leading-none group mb-6">
            <div className="text-2xl font-black tracking-tighter text-white">
              MARCOS<span className="text-primary group-hover:brightness-110 transition-all">MONTERO</span>
            </div>
            <div className="text-[10px] font-bold text-white/90 uppercase mt-[-2px] flex justify-between w-full">
              {"ENTRENADOR".split("").map((letter, i) => (
                <span key={i}>{letter}</span>
              ))}
            </div>
          </Link>
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
            {siteConfig.description}
          </p>
          <div className="flex space-x-4">
            <Link
              href={siteConfig.links.instagram}
              className="p-2 bg-white/5 rounded-full hover:bg-primary/20 transition-colors"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href={`mailto:${siteConfig.contact.email}`}
              className="p-2 bg-white/5 rounded-full hover:bg-primary/20 transition-colors"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Explora</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            {siteConfig.navigation.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="hover:text-primary transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Contacto</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex items-center space-x-3">
              <Mail size={16} className="text-primary" />
              <span>{siteConfig.contact.email}</span>
            </li>
            <li className="flex items-center space-x-3">
              <MapPin size={16} className="text-primary" />
              <span>{siteConfig.contact.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">¿Listo para empezar?</h4>
          <Link
            href="/el-programa"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold uppercase tracking-wider text-sm hover:translate-y-[-2px] transition-all"
          >
            Comprar el Plan
          </Link>
          <p className="mt-4 text-[10px] text-muted-foreground">
            * Pago único. Acceso inmediato.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[12px] text-muted-foreground space-y-4 md:space-y-0">
        <p>{siteConfig.footer.legal}</p>
        <div className="flex space-x-6">
          {siteConfig.footer.links.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
