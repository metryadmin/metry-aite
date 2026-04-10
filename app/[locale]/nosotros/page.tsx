"use client";

import { useTranslations } from "next-intl";
import { CheckCircle2, Globe2, Lightbulb, Target } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations("About");
  const teamT = useTranslations("Team");

  const pillarsRaw = t.raw("pillars") as Array<{ title: string; desc: string }>;
  const members = teamT.raw("members") as Array<{ name: string; role: string; areas: string; desc: string }>;

  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0: return <Lightbulb size={32} className="text-violet-400" />;
      case 1: return <Globe2 size={32} className="text-sky-400" />;
      case 2: return <Target size={32} className="text-emerald-400" />;
      case 3: return <CheckCircle2 size={32} className="text-amber-400" />;
      default: return <Lightbulb size={32} className="text-violet-400" />;
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
          className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-color-dodge"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07070f]/10 via-transparent to-[#07070f]" />
      </div>

      {/* Hero */}
      <div className="relative pt-40 pb-20 overflow-hidden z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-violet-400 mb-6 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20">
            METRY ANALYTICS
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1]">
            {t("title")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto font-light">
            {t("subtitle")}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24 items-start">
          
          {/* MISION Y VISION */}
          <div className="space-y-12">
            
            {/* Vision section */}
            <div className="bg-[#0f0f1a] border border-white/10 p-10 rounded-3xl relative overflow-hidden group hover:border-violet-500/30 transition-all shadow-xl">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-50" />
              <h2 className="text-3xl font-black text-white mb-6 tracking-tight flex items-center gap-3">
                <Target className="text-violet-400" /> {t("vision_title")}
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-xs font-bold mt-1">1</span>
                  <p className="text-gray-400 text-lg leading-relaxed">{t("vision_1")}</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-xs font-bold mt-1">2</span>
                  <p className="text-gray-400 text-lg leading-relaxed">{t("vision_2")}</p>
                </li>
              </ul>
            </div>

            {/* Mission section */}
            <div className="bg-violet-600/5 border border-violet-500/20 p-10 rounded-3xl relative overflow-hidden group hover:border-violet-500/40 transition-all shadow-[0_0_30px_rgba(139,92,246,0.05)]">
              <h2 className="text-3xl font-black text-white mb-6 tracking-tight flex items-center gap-3">
                <Lightbulb className="text-violet-400" /> {t("mission_title")}
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-xs font-bold mt-1">1</span>
                  <p className="text-gray-400 text-lg leading-relaxed">{t("mission_1")}</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-xs font-bold mt-1">2</span>
                  <p className="text-gray-400 text-lg leading-relaxed">{t("mission_2")}</p>
                </li>
              </ul>
            </div>

          </div>

          {/* PILARES */}
          <div className="space-y-6">
            <h3 className="text-sm font-black uppercase tracking-widest text-gray-500 mb-8 border-b border-white/10 pb-4">{t("pillars_title")}</h3>
            {pillarsRaw.map((pillar, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl bg-[#0f0f1a] border border-white/5 hover:border-violet-500/20 hover:bg-white/5 transition-all group">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-violet-600/10 group-hover:border-violet-500/30 transition-all">
                    {getPillarIcon(i)}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-black text-white mb-2 group-hover:text-violet-400 transition-colors">{pillar.title}</h4>
                  <p className="text-gray-400 leading-relaxed text-sm">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* TEAM SECTION (NO INITIALS) */}
      <div className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            {teamT("title")}
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-3xl">
            {teamT("subtitle")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {members.map((member, i) => (
            <div key={i} className="group bg-[#0a0a14] border border-white/5 p-8 rounded-3xl hover:border-violet-500/30 transition-all hover:-translate-y-1 hover:shadow-2xl shadow-violet-500/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 group-hover:text-violet-400 transition-all">
                <Target size={80} strokeWidth={1} />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-violet-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-violet-500 font-semibold mb-6 uppercase tracking-wider text-xs">
                  {member.role}
                </p>
                <div className="mb-6 inline-block bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-xs font-bold text-gray-300">
                  {member.areas}
                </div>
                <p className="text-gray-400 leading-relaxed font-light">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
