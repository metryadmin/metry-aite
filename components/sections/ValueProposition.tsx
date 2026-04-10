import { useTranslations } from "next-intl";
import { ShieldCheck, Zap, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ValueProposition() {
  const t = useTranslations("ValueProposition");

  const pillars = [
    {
      icon: <ShieldCheck size={24} />,
      title: t("pillar1_title"),
      desc: t("pillar1_desc"),
      gradient: "from-violet-500 to-purple-600",
      accent: "violet",
    },
    {
      icon: <Zap size={24} />,
      title: t("pillar2_title"),
      desc: t("pillar2_desc"),
      gradient: "from-indigo-500 to-violet-600",
      accent: "indigo",
    },
    {
      icon: <TrendingUp size={24} />,
      title: t("pillar3_title"),
      desc: t("pillar3_desc"),
      gradient: "from-purple-500 to-fuchsia-600",
      accent: "purple",
    },
  ];

  const clients = ["Retail", "Finanzas", "Manufactura", "Salud", "SaaS", "Logística"];

  return (
    <section className="py-28 lg:py-40 bg-[#07070f] relative overflow-hidden">
      {/* Subtle top radial */}
      <div className="absolute top-0 right-0 w-[700px] h-[400px] bg-[radial-gradient(ellipse,rgba(139,92,246,0.1),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <div className="mb-20 max-w-3xl">
          <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-violet-400 mb-5 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20">
            Por qué Metry Analytics
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
            Datos e IA que se convierten en{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              resultados reales
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Pillars */}
          <div className="space-y-5">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="group flex gap-5 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-violet-500/30 hover:bg-white/10 hover:-translate-y-1 transition-all duration-500 cursor-default"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1.5">{pillar.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{pillar.desc}</p>
                </div>
              </div>
            ))}

            <Link
              href="/servicios"
              className="group inline-flex items-center gap-2 text-violet-600 hover:text-violet-500 font-bold text-sm transition-colors mt-4"
            >
              Ver todos los servicios
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right: Visual stats block */}
          <div className="relative">
            {/* Main dark panel */}
            <div className="rounded-2xl bg-[#0d0d14] border border-white/8 overflow-hidden shadow-2xl">
              {/* Top bar */}
              <div className="px-8 pt-8 pb-0">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-gray-500 mb-6">
                  Impacto por industria
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { val: "-30%", label: "Tiempo de reporting", color: "text-emerald-400" },
                    { val: "+18%", label: "Precisión de forecast", color: "text-violet-400" },
                    { val: "6–8 sem", label: "Time to value", color: "text-sky-400" },
                    { val: "4+", label: "Industrias", color: "text-amber-400" },
                  ].map((s) => (
                    <div key={s.label} className="p-4 rounded-xl bg-white/3 border border-white/5">
                      <p className={`text-2xl font-black ${s.color} leading-none`}>{s.val}</p>
                      <p className="text-[11px] text-gray-500 mt-1 font-medium">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sector tags strip */}
              <div className="border-t border-white/5 px-8 py-5">
                <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-3">Sectores donde operamos</p>
                <div className="flex flex-wrap gap-2">
                  {clients.map((c) => (
                    <span key={c} className="text-[11px] font-bold text-gray-400 px-3 py-1 rounded-full border border-white/8 bg-white/3">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge top right */}
            <div className="absolute -top-4 -right-4 bg-violet-600 text-white text-xs font-black px-4 py-2 rounded-xl shadow-lg shadow-violet-500/30">
              B2B Enterprise
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
