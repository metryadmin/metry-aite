"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function MetodologiaPage() {
  const t = useTranslations("Methodology");

  const steps = t.raw("steps") as Array<{
    num: string; title: string; desc: string;
  }>;

  return (
    <div className="bg-[#07070f] min-h-screen relative overflow-hidden">
      {/* Background blueprint & radial */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_70%)]" />
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
            Marco Metodológico
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            {t("title")}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </div>

      {/* Foundation Section: Data as Strategic Asset */}
      <div className="max-w-6xl mx-auto px-6 pb-20 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-black uppercase tracking-widest text-gray-400 mb-4 px-3 py-1 rounded-full border border-white/10 bg-white/5">
            {t("foundation_kicker")}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            {t("foundation_title")}
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            {t("foundation_subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch relative">
          
          {/* Base Estrategica (Left) */}
          <div className="bg-[#0f0f1a] border border-white/5 p-10 rounded-3xl relative overflow-hidden group hover:border-violet-500/30 transition-all shadow-xl">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-600/50 to-transparent" />
            <h3 className="text-2xl font-bold text-white mb-3">{t("foundation_left_title")}</h3>
            <p className="text-gray-400 font-light mb-8 text-sm leading-relaxed">{t("foundation_left_desc")}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {(t.raw("foundation_left_tags") as string[]).map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Casos de Uso (Center Highlight) */}
          <div className="bg-gradient-to-br from-red-600/20 to-rose-900/10 border border-red-500/40 p-12 rounded-3xl relative overflow-hidden transform lg:scale-105 z-10 shadow-[0_0_50px_rgba(220,38,38,0.15)] group hover:border-red-500/60 hover:shadow-[0_0_80px_rgba(220,38,38,0.2)] transition-all flex flex-col justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.1),transparent)]" />
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 mx-auto bg-red-600/20 border border-red-500/30 rounded-2xl flex items-center justify-center mb-6 text-red-400 shadow-inner">
                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 className="text-3xl font-black text-white mb-4">{t("foundation_center_title")}</h3>
              <p className="text-red-100/80 font-light text-sm leading-relaxed">{t("foundation_center_desc")}</p>
            </div>
          </div>

          {/* Modelo Operativo (Right) */}
          <div className="bg-[#0f0f1a] border border-white/5 p-10 rounded-3xl relative overflow-hidden group hover:border-violet-500/30 transition-all shadow-xl">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-violet-600/50 to-transparent" />
            <h3 className="text-2xl font-bold text-white mb-3">{t("foundation_right_title")}</h3>
            <p className="text-gray-400 font-light mb-8 text-sm leading-relaxed">{t("foundation_right_desc")}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {(t.raw("foundation_right_tags") as string[]).map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
        
        {/* Connector to execution */}
        <div className="w-px h-24 bg-gradient-to-b from-violet-500/50 to-transparent mx-auto mt-16" />
      </div>

      {/* Steps */}
      <div className="max-w-3xl mx-auto px-6 pb-32 relative z-10">
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-violet-600 via-indigo-600/50 to-transparent hidden md:block" />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={step.num} className="relative flex gap-10 group">
                {/* Number bubble */}
                <div className="relative z-10 flex-shrink-0 hidden md:flex">
                  <div className="w-16 h-16 rounded-2xl bg-[#0f0f1a] border border-violet-500/30 flex items-center justify-center text-violet-400 font-extrabold text-lg shadow-[0_0_20px_rgba(139,92,246,0.2)] group-hover:scale-110 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                    {step.num}
                  </div>
                </div>

                {/* Content */}
                <div className="pb-16 flex-grow">
                  <span className="md:hidden inline-block text-xs font-black text-violet-400 mb-2">{step.num}</span>
                  <div className="bg-[#0f0f1a] border border-white/10 rounded-2xl p-8 shadow-2xl hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                    {/* Hover glow */}
                    <div className="absolute -inset-10 bg-gradient-to-r from-violet-600/0 via-violet-600/0 to-violet-600/0 group-hover:from-violet-600/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
                    
                    <h2 className="text-2xl font-bold text-white mb-4 relative z-10">
                      {step.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-base relative z-10">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden">
          <h3 className="text-3xl font-black text-white mb-4">¿Preparado para escalar?</h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">Nuestro proceso inicia con un diagnóstico técnico y de negocio basado en sus necesidades.</p>
          <Link href="/contacto">
            <button className="px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl transition-all hover:-translate-y-1 shadow-lg shadow-violet-500/25">
              Contáctanos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
