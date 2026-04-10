"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowRight, Check, Zap, TrendingUp, Users, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const AnimatedDots = () => {
  const dots = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 0.5,
    opacity: Math.random() * 0.5 + 0.2,
  }));
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {dots.map((dot) => (
        <circle key={dot.id} cx={`${dot.x}%`} cy={`${dot.y}%`} r={dot.size} fill="white" fillOpacity={dot.opacity} />
      ))}
    </svg>
  );
};

export default function Hero() {
  const t = useTranslations("Hero");
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const metrics = [
    { icon: <TrendingUp size={14} />, val: "10x", label: t("metric_1"), color: "text-emerald-400", bg: "bg-emerald-500/10" },
    { icon: <Zap size={14} />, val: "0", label: t("metric_2"), color: "text-violet-400", bg: "bg-violet-500/10" },
    { icon: <Clock size={14} />, val: "100%", label: t("metric_3"), color: "text-sky-400", bg: "bg-sky-500/10" },
  ];

  const bars = [35, 52, 44, 68, 61, 78, 72, 88, 82, 94, 87, 100];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#07070f]">
      {/* Animated starfield background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <AnimatedDots />
      </div>

      {/* Gradient mesh */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-800/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-20 lg:pt-44 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ── LEFT: Text ── */}
          <div className={`transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {/* Eyebrow pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-bold uppercase tracking-[0.15em] mb-10">
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              {t("eyebrow")}
            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl xl:text-[4.5rem] font-black text-white leading-[0.95] mb-8 tracking-tighter">
              <span className="block">{t("heading_1")}</span>
              <span className="block bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent pb-1">
                {t("heading_2")}
              </span>
              <span className="block text-white/85">{t("heading_3")}</span>
              <span className="block text-white/70">{t("heading_4")}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-gray-400 mb-10 max-w-md leading-relaxed">
              {t("subtitle")}
            </p>

            {/* Trust list */}
            <ul className="mb-10 space-y-3">
              {[
                t("trust_1"),
                t("trust_2"),
                t("trust_3"),
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-400 text-sm">
                  <span className="w-5 h-5 rounded-full bg-violet-500/20 border border-violet-500/40 flex items-center justify-center shrink-0">
                    <Check size={11} className="text-violet-400" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/contacto">
                <button className="group inline-flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/50 text-base">
                  {t("cta_primary")}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/servicios">
                <button className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-gray-300 hover:border-violet-400/40 hover:text-white hover:bg-white/5 font-semibold rounded-xl transition-all duration-300 text-base">
                  {t("cta_secondary")}
                </button>
              </Link>
            </div>

            {/* Key metrics strip */}
            <div className="mt-12 pt-8 border-t border-white/8 grid grid-cols-3 gap-4">
              {metrics.map((m) => (
                <div key={m.label} className={`flex items-center gap-2 p-3 rounded-xl ${m.bg} border border-white/5`}>
                  <span className={m.color}>{m.icon}</span>
                  <div>
                    <p className={`text-lg font-black ${m.color} leading-none`}>{m.val}</p>
                    <p className="text-[10px] text-gray-500 font-medium leading-tight mt-0.5">{m.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Animated Dashboard ── */}
          <div className={`transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {/* Outer glow */}
            <div className="absolute inset-0 bg-violet-600/25 rounded-3xl blur-3xl scale-95 pointer-events-none" />

            {/* Dashboard card */}
            <div className="relative bg-[#0f0f1a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
              {/* Browser chrome bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4 py-1 px-3 bg-white/5 rounded-md border border-white/8 text-[10px] text-gray-500 font-mono">
                  analytics.metryanalytics.com
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Dashboard content */}
              <div className="p-5 space-y-4">
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest">Revenue Overview</p>
                    <p className="text-2xl font-black text-white">$2.4M <span className="text-emerald-400 text-base font-bold">+18%</span></p>
                  </div>
                  <div className="flex gap-2">
                    {["1M", "6M", "1A"].map((p, i) => (
                      <button key={p} className={`text-[10px] py-1 px-2 rounded-md font-bold ${i === 2 ? "bg-violet-600 text-white" : "text-gray-500 hover:text-gray-300"}`}>{p}</button>
                    ))}
                  </div>
                </div>

                {/* Bar chart */}
                <div className="bg-white/3 rounded-xl p-4 border border-white/5">
                  <div className="flex items-end gap-1.5 h-24">
                    {bars.map((h, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-t-sm transition-all duration-500 ${i === bars.length - 1 ? "bg-violet-500" : "bg-violet-500/30"}`}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    {["Ene", "Mar", "May", "Jul", "Sep", "Nov", "Dic"].map((m) => (
                      <span key={m} className="text-[9px] text-gray-600 font-medium">{m}</span>
                    ))}
                  </div>
                </div>

                {/* 3 KPI mini-cards */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Clientes activos", val: "148", icon: <Users size={12} />, color: "text-violet-400" },
                    { label: "Procesos automz.", val: "94%", icon: <Zap size={12} />, color: "text-yellow-400" },
                    { label: "Forecast Q4", val: "+22%", icon: <TrendingUp size={12} />, color: "text-emerald-400" },
                  ].map((kpi) => (
                    <div key={kpi.label} className="bg-white/3 border border-white/5 rounded-xl p-3">
                      <div className={`mb-2 ${kpi.color}`}>{kpi.icon}</div>
                      <p className={`text-base font-black ${kpi.color}`}>{kpi.val}</p>
                      <p className="text-[9px] text-gray-500 font-medium leading-tight mt-0.5">{kpi.label}</p>
                    </div>
                  ))}
                </div>

                {/* Activity row */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-violet-600/10 border border-violet-500/20">
                  <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center shrink-0">
                    <Zap size={13} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-white truncate">Modelo de forecast actualizado</p>
                    <p className="text-[10px] text-gray-500">Precisión mejoró +4.2% · hace 3 min</p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse shrink-0" />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl px-4 py-2.5 flex items-center gap-2 border border-gray-100">
              <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center shrink-0">
                <Check size={14} className="text-white font-bold" />
              </div>
              <div>
                <p className="text-xs font-black text-gray-900">Data Quality</p>
                <p className="text-[10px] text-gray-500">Score: 98.4%</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
