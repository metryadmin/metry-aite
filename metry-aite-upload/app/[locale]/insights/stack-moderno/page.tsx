import Link from "next/link";
import { ArrowLeft, Database, DownloadCloud, HardDrive, Layers, BarChart, Share2, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modern Data Stack | Metry Analytics",
  description: "Nuestra arquitectura de Modern Data Stack basada en herramientas open-source, cloud-native.",
};

export default function StackModernoArticle() {
  const steps = [
    { num: "1", id: "source", title: "Data Source", icon: <Database size={18} /> },
    { num: "2", id: "ingestion", title: "Data Ingestion", icon: <DownloadCloud size={18} /> },
    { num: "3", id: "storage", title: "Data Storage", icon: <HardDrive size={18} /> },
    { num: "4", id: "modelling", title: "Data Modelling", icon: <Layers size={18} /> },
    { num: "5", id: "analytics", title: "Data Analytics", icon: <BarChart size={18} /> },
    { num: "6", id: "activation", title: "Data Activation", icon: <Share2 size={18} /> },
  ];

  const components = [
    { num: "1", title: "Data Source", desc: "El primer componente es dónde se generan los datos; pueden ser bases de datos, aplicaciones SaaS, sistemas ERP, etc." },
    { num: "2", title: "Data Ingestion", desc: "Así es como los datos se mueven y normalizan desde su fuente de origen hasta su almacenamiento analítico central." },
    { num: "3", title: "Data Storage", desc: "Aquí es donde se agregan y almacenan todos los datos provenientes de las fuentes (generalmente un Data Warehouse o Data Lakehouse)." },
    { num: "4", title: "Data Transformation & Modelling", desc: "La transformación y el modelado ayudan a limpiar, estructurar y empaquetar diferentes fuentes de datos en modelos analíticos fáciles de usar." },
    { num: "5", title: "Data Analytics", desc: "A veces simplificado como 'Business Intelligence'. Ayuda a los usuarios a explorar, visualizar y encontrar información estratégica en sus datos." },
    { num: "6", title: "Data Activation", desc: "Conocido como 'Reverse ETL', es el proceso de operacionalizar datos moviéndolos desde almacenes analíticos hacia sistemas de terceros (CRMs, Marketing) para la acción." },
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
          <div className="mb-16">
            <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-violet-400 mb-6 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20">
              Arquitectura · Insight
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              Nuestro Stack Tecnológico (Modern Data Stack)
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Elegimos herramientas open-source primero, con comunidad activa, integración sinérgica y totalmente cloud-native.
            </p>
          </div>

          {/* Pipeline Diagram */}
          <div className="bg-[#0f0f1a] border border-white/10 rounded-3xl p-8 mb-16 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 to-transparent pointer-events-none" />
            <h3 className="text-sm font-black uppercase tracking-widest text-white mb-8">Flujo Analítico</h3>
            
            <div className="flex flex-wrap md:flex-nowrap gap-4 items-center justify-between">
              {steps.map((step, i) => (
                <div key={step.id} className="relative flex-1 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-violet-400 mb-3 group-hover:bg-violet-600 group-hover:text-white transition-all shadow-lg z-10 relative">
                      {step.icon}
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wide group-hover:text-white transition-colors">
                      {step.title}
                    </span>
                  </div>
                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-[60%] right-[-40%] h-px bg-white/10 before:absolute before:right-0 before:-top-1 before:w-2 before:h-2 before:border-r before:border-b before:border-white/20 before:-rotate-45" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: Components Details */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-black text-white mb-8 border-b border-white/10 pb-4">Componentes del Data Stack</h2>
                <div className="space-y-6">
                  {components.map((c) => (
                    <div key={c.num} className="flex gap-6 group">
                      <div className="shrink-0 pt-1">
                        <span className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/30 text-violet-400 font-black text-sm flex items-center justify-center">
                          {c.num}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-white mb-2 group-hover:text-violet-400 transition-colors">{c.title}</h4>
                        <p className="text-gray-400 leading-relaxed text-sm md:text-base">{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Beneficios & Proceso */}
            <div className="space-y-8">
              {/* Beneficios */}
              <div className="bg-[#0f0f1a] border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-black text-white mb-6">Beneficios Centrales</h3>
                <ul className="space-y-6">
                  {[
                    { title: "Modularidad", desc: "Construir un data stack hoy en día se ha vuelto mucho más simple organizando funciones independientes." },
                    { title: "Velocidad", desc: "Gracias a la naturaleza autónoma de sus componentes, es significativamente más rápido de configurar e iterar." },
                    { title: "Costo", desc: "Las tecnologías basadas en nube conllevan ahorros significativos y predecibles en comparación con las obsoletas instalaciones on-premise." },
                  ].map((b) => (
                    <li key={b.title}>
                      <span className="block text-white font-bold mb-1 flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400" /> {b.title}
                      </span>
                      <span className="block text-gray-500 text-sm leading-relaxed">{b.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Proceso */}
              <div className="bg-violet-600/10 border border-violet-500/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(139,92,246,0.1)]">
                <h3 className="text-xl font-black text-white mb-6">Proceso de Construcción</h3>
                <ol className="space-y-4">
                  {[
                    "Obtener un Data Lakehouse",
                    "Selección de herramienta de ingestión",
                    "Definición de proceso de modelamiento",
                    "Elaboración de analítica que aporte valor",
                    "Selección de solución Reverse ETL",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="text-violet-400 font-black text-sm">{i + 1}.</span>
                      <span className="text-gray-300 text-sm font-medium">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-white/10 text-center">
            <Link href="/contacto">
              <button className="px-8 py-4 bg-white text-gray-900 hover:bg-gray-200 font-black rounded-xl transition-all shadow-lg text-sm">
                Diseñemos tu Arquitectura Modern Data Stack
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
