"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { BookOpen, Cpu, ShieldCheck, Layers } from "lucide-react";

export default function InsightsPage() {
  const t = useTranslations("Insights");

  const insights = t.raw("insights_list") as Array<{
    id: string; category: string; title: string; excerpt: string; date: string;
  }>;

  const catIcons: Record<string, JSX.Element> = {
    "Gobierno": <ShieldCheck size={48} className="text-violet-400" />,
    "Governance": <ShieldCheck size={48} className="text-violet-400" />,
    "IA Aplicada": <Cpu size={48} className="text-indigo-400" />,
    "Applied AI": <Cpu size={48} className="text-indigo-400" />,
    "Arquitectura": <Layers size={48} className="text-sky-400" />,
    "Architecture": <Layers size={48} className="text-sky-400" />,
  };

  const getIcon = (category: string) => {
    if (category.includes("IA") || category.includes("AI")) return <Cpu size={32} className="text-indigo-400" />;
    if (category.includes("Gobierno") || category.includes("Governance")) return <ShieldCheck size={32} className="text-emerald-400" />;
    return <BookOpen size={32} className="text-violet-400" />;
  };

  const getCover = (id: string) => {
    switch (id) {
      case 'plataforma-metry': return "/images/cover-plataforma-metry.png";
      case 'estrategia-datos': return "/images/cover-estrategia-datos.png";
      case 'stack-moderno': return "/images/cover-stack-moderno.png";
      default: return "/images/insight-cover.png";
    }
  };

  return (
    <div className="bg-[#07070f] min-h-screen relative overflow-hidden">
      {/* Background blueprint & radial */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(167,139,250,0.1),transparent_70%)]" />
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
            Conocimiento
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            {t("title")}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </div>

      {/* Articles grid */}
      <div className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
        
        {/* Featured (first article) */}
        <Link href={`/insights/${insights[0].id}`} className="block mb-12 group cursor-pointer rounded-3xl bg-[#0f0f1a] border border-white/10 overflow-hidden shadow-2xl hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-500 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/0 via-violet-600/0 to-violet-600/0 group-hover:from-violet-600/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
          
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative z-10">
                <span className="inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 mb-6">
                  {insights[0].category}
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6 group-hover:text-violet-400 transition-colors leading-[1.15]">
                  {insights[0].title}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8 text-lg">{insights[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{insights[0].date}</span>
                  <span className="text-violet-400 font-bold text-sm tracking-wide">{t("read_more")}</span>
                </div>
              </div>
              {/* Visual placeholder */}
              <div className="order-1 md:order-2 aspect-[4/3] bg-[#0a0a14] border border-white/5 rounded-2xl flex items-center justify-center relative overflow-hidden group-hover:border-violet-500/30 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-indigo-600/10" />
                <img 
                  src={getCover(insights[0].id)} 
                  alt={insights[0].title}
                  className="w-full h-full object-cover opacity-80 mix-blend-screen group-hover:opacity-100 transition-opacity duration-500 relative z-10"
                />
              </div>
            </div>
          </div>
        </Link>

        {/* Rest of articles */}
        <div className="grid md:grid-cols-2 gap-8">
          {insights.slice(1).map((ins) => (
            <Link href={`/insights/${ins.id}`} key={ins.id} className="group cursor-pointer rounded-2xl bg-[#0f0f1a] border border-white/10 overflow-hidden shadow-xl hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-500 relative">
              <div className="aspect-video bg-[#0a0a14] flex items-center justify-center border-b border-white/5 relative overflow-hidden group-hover:bg-white/5 transition-colors duration-500">
                 <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 to-indigo-600/30 mix-blend-overlay z-20" />
                 <img 
                   src={getCover(ins.id)} 
                   alt={ins.title} 
                   className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 relative z-10 mix-blend-luminosity hover:mix-blend-normal"
                 />
              </div>
              <div className="p-8 md:p-10 relative z-10">
                <span className="inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 mb-6">
                  {ins.category}
                </span>
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-violet-400 transition-colors leading-[1.2]">
                  {ins.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">{ins.excerpt}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{ins.date}</span>
                  <span className="text-violet-400 font-bold tracking-wide text-sm">{t("read_more")}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
