import Link from "next/link";
import { ArrowLeft, Target, ShieldCheck, Database, Users, BarChart4 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estrategia de Datos | Metry Analytics",
};

export default function EstrategiaDatosArticle() {
  const pillars = [
    {
      num: "01",
      title: "Control & Governance Institucional",
      icon: <ShieldCheck size={28} />,
      desc: "Más allá de implementar herramientas, el primer escalón es orquestar reglas universales de calidad, taxonomía organizacional y trazabilidad (MDM), asegurando que haya 'una sola versión de la verdad'.",
      color: "border-indigo-500/30 bg-indigo-500/10 text-indigo-400"
    },
    {
      num: "02",
      title: "Infraestructura Unificada (Cloud Managed)",
      icon: <Database size={28} />,
      desc: "Desplegar almacenes unificados delegando la complejidad técnica a servicios en la nube (Managed Services). Esto transfiere el esfuerzo de mantenimiento hacia la agilidad de los ingenieros.",
      color: "border-violet-500/30 bg-violet-500/10 text-violet-400"
    },
    {
      num: "03",
      title: "Data Literacy & Cambio Cultural",
      icon: <Users size={28} />,
      desc: "Evangelizar a las líneas de negocio mediante 'Data Champions'. La tecnología fracasa sin adopción; por ello impulsamos programas de capacitación para empoderar a los usuarios funcionales.",
      color: "border-sky-500/30 bg-sky-500/10 text-sky-400"
    },
    {
      num: "04",
      title: "Inteligencia Distribuida (Managed BI)",
      icon: <BarChart4 size={28} />,
      desc: "Para acelerar la salida a producción, se fomenta la subcontratación táctica o soporte externo en la capa visual, logrando despliegues rentables sin abrumar a las capacidades internas.",
      color: "border-blue-500/30 bg-blue-500/10 text-blue-400"
    },
    {
      num: "05",
      title: "Agilidad Orientada a Valor Inmediato",
      icon: <Target size={28} />,
      desc: "Sustituimos los proyectos masivos por portafolios de casos de uso priorizados. Trabajamos en ciclos cortos (sprints) donde cada entrega responde directamente y de manera medible a un problema de negocio y al ROI.",
      color: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
    }
  ];

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
        <div className="absolute inset-0 bg-gradient-to-b from-[#07070f]/10 via-[#07070f]/95 to-[#07070f]" />
      </div>

      <div className="relative pt-40 pb-24 z-10">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/insights" className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-bold text-sm mb-12 transition-colors">
            <ArrowLeft size={16} /> Volver a Insights
          </Link>

          {/* Header */}
          <div className="mb-16 text-center">
            <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-violet-400 mb-6 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20">
              Estrategia · Insight
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              La Pirámide Analítica
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              El éxito en la gestión de datos requiere combinar estrategia, calidad, gobernanza, tecnología, personas y procesos en una pirámide de construcción escalonada.
            </p>
          </div>

          {/* Piramide Visual - Layout */}
          <div className="relative mb-24 max-w-3xl mx-auto space-y-4 perspective-1000">
            {pillars.map((pillar, i) => {
              // Create a stepped width effect pointing upwards like a pyramid
              // We'll simulate it by adjusting padding horizontally based on the index
              const horizontalPadding = `${(4 - i) * 6}%`;
              
              return (
                <div 
                  key={pillar.num} 
                  className={`bg-[#0f0f1a] border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden group hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-300`}
                  style={{ marginLeft: horizontalPadding, marginRight: horizontalPadding }}
                >
                  <div className="p-6 md:p-8 flex items-center md:items-start gap-6 relative z-10 flex-col md:flex-row">
                    <div className="shrink-0 flex items-center gap-4 md:flex-col md:gap-0">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-black text-lg border ${pillar.color} mb-3 group-hover:scale-110 transition-transform`}>
                        {pillar.num}
                      </div>
                      <div className="hidden md:flex justify-center text-gray-600 group-hover:text-violet-400 transition-colors">
                        {pillar.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white mb-3 group-hover:text-violet-400 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                  
                  {/* Subtle glowing edges inside the pyramid block */}
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              );
            })}
          </div>

          <div className="mt-16 pt-10 border-t border-white/10 text-center">
            <Link href="/contacto">
              <button className="px-8 py-4 bg-white text-gray-900 hover:bg-gray-200 font-black rounded-xl transition-all shadow-lg text-sm">
                Diseñemos tu estrategia corporativa
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
