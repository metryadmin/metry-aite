import { useTranslations } from "next-intl";
import { DatabaseZap, ShieldCheck, CheckCircle2, AlertTriangle, TrendingUp, Cpu } from "lucide-react";

export default function Results() {
  const t = useTranslations("Results");
  
  const points = t.raw("points") as Array<{ title: string; desc: string }>;

  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <DatabaseZap className="text-violet-400" />;
      case 1: return <ShieldCheck className="text-emerald-400" />;
      case 2: return <CheckCircle2 className="text-sky-400" />;
      case 3: return <AlertTriangle className="text-amber-400" />;
      case 4: return <TrendingUp className="text-rose-400" />;
      case 5: return <Cpu className="text-indigo-400" />;
      default: return <DatabaseZap className="text-violet-400" />;
    }
  };

  return (
    <section className="relative py-28 lg:py-40 bg-[#07070f] overflow-hidden border-y border-white/5">
      {/* Glow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(139,92,246,0.05),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Hook */}
            <div className="lg:col-span-5 relative">
              <div className="lg:sticky lg:top-32">
                <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-violet-400 mb-5 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20">
                  {t("subtitle")}
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-8 tracking-tight">
                  {t("title")}
                </h2>
                <div className="bg-[#0f0f1a] border border-white/10 p-8 rounded-3xl relative overflow-hidden shadow-2xl">
                   <div className="absolute right-0 top-0 w-32 h-32 bg-violet-600/10 rounded-bl-full blur-3xl pointer-events-none" />
                   <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light relative z-10">
                     {t("hook")}
                   </p>
                </div>
              </div>
            </div>

            {/* Right Column: 6 Solutions Grid */}
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-6">
                 {points.map((pt, i) => (
                    <div key={i} className="group bg-[#0a0a14] border border-white/5 p-8 rounded-3xl hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-500 shadow-xl relative overflow-hidden flex flex-col items-start text-left">
                       {/* Background highlight on hover */}
                       <div className="absolute inset-0 bg-gradient-to-br from-violet-600/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                       
                       <div className="mb-6 w-14 h-14 rounded-2xl bg-[#0f0f1a] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-violet-500/30 transition-all duration-500 shadow-lg relative z-10">
                          {getIcon(i)}
                       </div>
                       
                       <div className="relative z-10">
                         <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">{pt.title}</h3>
                         <p className="text-gray-400 text-sm leading-relaxed">{pt.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
