import { useTranslations } from "next-intl";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ShoppingCart, Landmark, Factory, Activity } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrias | Metry Analytics",
  description: "Experiencia real en Retail, Servicios Financieros, Manufactura y Salud. Soluciones de datos adaptadas a cada sector.",
};

export default function IndustriasPage() {
  const t = useTranslations("Industries");

  const industries = t.raw("industries_list") as Array<{
    id: string; title: string; desc: string; benefits: string[];
  }>;

  const icons = [
    <ShoppingCart key="retail" size={24} className="text-violet-400" />,
    <Landmark key="banca" size={24} className="text-indigo-400" />,
    <Factory key="mfg" size={24} className="text-emerald-400" />,
    <Activity key="salud" size={24} className="text-sky-400" />
  ];

  return (
    <div className="bg-[#07070f] min-h-screen relative overflow-hidden">
      {/* Background blueprint & radial */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.12),transparent_70%)]" />
        <img 
          src="/images/strategy-blueprint.png" 
          alt="Strategy Blueprint" 
          className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-color-dodge"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07070f]/40 via-transparent to-[#07070f]" />
      </div>

      {/* Hero */}
      <div className="relative pt-40 pb-20 overflow-hidden z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-violet-400 mb-6 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20">
            Sectores de expertise
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            {t("title")}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((ind, i) => (
            <div key={ind.id} className="group relative bg-[#0f0f1a] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              {/* Hover glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/0 rounded-full blur-3xl group-hover:bg-violet-600/10 transition-colors duration-500 pointer-events-none -mr-32 -mt-32" />
              
              {/* Icon + Title */}
              <div className="flex items-center gap-5 mb-8 relative z-10">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                  {icons[i]}
                </div>
                <h2 className="text-2xl font-black text-white group-hover:text-violet-400 transition-colors">{ind.title}</h2>
              </div>

              <p className="text-gray-400 leading-relaxed mb-10 relative z-10">{ind.desc}</p>

              {/* Benefits */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                {ind.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-gray-300 font-medium bg-white/3 border border-white/5 p-3 rounded-xl">
                    <CheckCircle2 size={16} className="text-violet-400 shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center p-16 rounded-3xl border border-white/10 bg-[#0f0f1a] relative overflow-hidden">
          {/* Inner ambient */}
          <div className="absolute inset-0 bg-gradient-to-t from-violet-600/5 to-transparent pointer-events-none" />
          
          <h3 className="text-3xl font-black text-white mb-4 relative z-10">¿Tu industria requiere un enfoque especializado?</h3>
          <p className="text-gray-400 mb-10 max-w-lg mx-auto relative z-10">Diseñamos soluciones bajo regulaciones específicas y necesidades de nicho.</p>
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
