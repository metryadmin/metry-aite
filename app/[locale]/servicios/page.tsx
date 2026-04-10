"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function ServiciosPage() {
  const t = useTranslations("Services");

  const services = t.raw("services_list") as Array<{
    id: string; title: string; category: string; short: string; desc: string;
  }>;

  const categoryColors: Record<string, string> = {
    "Estrategia": "bg-violet-100 text-violet-700 border-violet-200",
    "Strategy": "bg-violet-100 text-violet-700 border-violet-200",
    "Tecnología": "bg-blue-100 text-blue-700 border-blue-200",
    "Technology": "bg-blue-100 text-blue-700 border-blue-200",
    "Analítica": "bg-emerald-100 text-emerald-700 border-emerald-200",
    "Analytics": "bg-emerald-100 text-emerald-700 border-emerald-200",
    "Gobierno": "bg-amber-100 text-amber-700 border-amber-200",
    "Governance": "bg-amber-100 text-amber-700 border-amber-200",
    "Inteligencia Artificial": "bg-pink-100 text-pink-700 border-pink-200",
    "Artificial Intelligence": "bg-pink-100 text-pink-700 border-pink-200",
    "Ingeniería": "bg-sky-100 text-sky-700 border-sky-200",
    "Engineering": "bg-sky-100 text-sky-700 border-sky-200",
  };

  return (
    <div className="bg-[#07070f] min-h-screen relative overflow-hidden">
      {/* Background gradients and Mesh image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[500px] bg-violet-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-800/10 rounded-full blur-[120px]" />
        <img 
          src="/images/data-mesh.png"
          alt="Mesh Background"
          className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-color-dodge transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07070f]/50 via-transparent to-[#07070f]" />
      </div>

      {/* Hero */}
      <div className="relative pt-40 pb-20 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-violet-400 mb-6 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20">
            Nuestros Servicios
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.05]">
            {t("title")}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => (
            <div key={svc.id} className="group flex flex-col h-full p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-violet-500/30 hover:bg-white/10 hover:-translate-y-1 transition-all duration-500">
              <span className="self-start text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 mb-8">
                {svc.category}
              </span>
              <h2 className="text-2xl font-black text-white mb-4 group-hover:text-violet-400 transition-colors">
                {svc.title}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8 flex-grow text-sm">
                {svc.desc}
              </p>
              <Link href="/contacto" className="flex items-center gap-2 text-violet-400 font-bold text-sm group-hover:text-violet-300 transition-colors">
                Coordinar evaluación <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center p-16 rounded-3xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.1),transparent_70%)]" />
          <h3 className="text-3xl font-black text-white mb-4 relative z-10">Transformaciones hechas a medida</h3>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto relative z-10">
            Diseñamos arquitecturas y modelos operativos que se ajustan al caso de negocio específico de su corporación.
          </p>
          <Link href="/contacto" className="relative z-10">
            <button className="px-8 py-4 bg-white text-gray-900 font-black rounded-xl hover:bg-gray-100 transition-all shadow-lg text-sm">
              Agendar llamada estratégica
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
