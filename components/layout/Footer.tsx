"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Linkedin, Twitter, Mail, Phone } from "lucide-react";

export default function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Navigation");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#07070f] border-t border-white/5">
      {/* Mini CTA strip */}
      <div className="border-b border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-gray-400 text-sm font-medium">¿Listo para transformar tus datos?</p>
          </div>
          <Link href="/contacto">
            <button className="px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-bold transition-colors shadow-md shadow-violet-500/20">
              Contáctanos →
            </button>
          </Link>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-2 transition-transform hover:scale-105">
              <img src="/images/logo-metry.png" alt="Metry Analytics" className="h-32 w-32 sm:h-48 sm:w-48 object-contain scale-125" />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-8">
              {t("description")}
            </p>
            <div className="flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-gray-500 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-300" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-gray-500 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-300" aria-label="Twitter">
                <Twitter size={16} />
              </a>
              <a href="mailto:admin@metryanalytics.com" className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-gray-500 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-300" aria-label="Email">
                <Mail size={16} />
              </a>
              <a href="tel:+50239891833" className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-gray-500 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-300" aria-label="Teléfono">
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-5">{t("links")}</h4>
            <ul className="space-y-3">
              {[
                { href: "/servicios", label: tNav("services") },
                { href: "/metodologia", label: tNav("methodology") },
                { href: "/industrias", label: tNav("industries") },
                { href: "/nosotros", label: tNav("team") },
                { href: "/insights", label: tNav("insights") },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-500 hover:text-violet-400 transition-colors font-medium">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-5">{t("legal")}</h4>
            <ul className="space-y-3 mb-8">
              <li>
                <Link href="/politica-de-privacidad" className="text-sm text-gray-500 hover:text-violet-400 transition-colors font-medium">
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-sm text-gray-500 hover:text-violet-400 transition-colors font-medium">
                  {t("terms")}
                </Link>
              </li>
            </ul>
            <div className="space-y-2">
              <a href="mailto:admin@metryanalytics.com" className="block text-xs text-gray-500 hover:text-violet-400 transition-colors">
                admin@metryanalytics.com
              </a>
              <a href="tel:+50239891833" className="block text-xs text-gray-500 hover:text-violet-400 transition-colors">
                +502 3989-1833
              </a>
              <p className="text-xs text-gray-600">Guatemala, Centroamérica · LATAM</p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-600">
            © {currentYear} Metry Analytics. {t("rights")}
          </p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
            <p className="text-xs text-gray-600">Guatemala, Centroamérica</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
