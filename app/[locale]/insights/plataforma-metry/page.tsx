import Link from "next/link";
import { ArrowLeft, MonitorPlay, BarChart3, Database, Filter, Layers, LayoutDashboard, Share2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo Metry Platform | Metry Analytics",
};

export default function PlataformaMetryArticle() {
  return (
    <div className="bg-[#07070f] min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(167,139,250,0.1),transparent_70%)]" />
        <img 
          src="/images/strategy-blueprint.png" 
          alt="Strategy Blueprint" 
          className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-color-dodge"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07070f]/20 via-[#07070f]/95 to-[#07070f]" />
      </div>

      <div className="relative pt-40 pb-24 z-10">
        <div className="max-w-5xl mx-auto px-6">
          <Link href="/insights" className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-bold text-sm mb-12 transition-colors">
            <ArrowLeft size={16} /> Volver a Insights
          </Link>

          {/* Header */}
          <div className="mb-16">
            <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-violet-400 mb-6 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20">
              Showcase · Demo
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              Metry Data Platform
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
              Bases estratégicas y modelo operativo para Data Officers. Una mirada estructurada a cómo concebimos, armamos y operamos ecosistemas analíticos end-to-end.
            </p>
          </div>

          {/* Section 1: Arquitectura */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-8 flex items-center gap-3">
              <Database className="text-violet-400" /> Optimización de Arquitectura de Datos
            </h2>
            
            <div className="bg-[#0f0f1a] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-violet-600" />
              
              {/* Architecture Diagram Layout */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-center w-full">
                {/* 1. Sources */}
                <div className="flex-1 space-y-3 w-full">
                  <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 text-center mb-4 border-b border-white/5 pb-2">Data Sources</h4>
                  {['TEXT FILE', 'INFOS', 'BASE DE DATOS', 'CRM', 'ERP'].map((item) => (
                    <div key={item} className="bg-white/5 border border-white/10 p-3 rounded-lg text-center text-xs font-bold text-gray-300">
                      {item}
                    </div>
                  ))}
                </div>

                {/* Arrow */}
                <div className="hidden md:flex text-white/20"><ArrowLeft className="rotate-180" /></div>

                {/* 2. Transformation */}
                <div className="flex-1 w-full flex flex-col justify-center">
                  <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 text-center mb-4 border-b border-white/5 pb-2">Transformation & Storage</h4>
                  <div className="bg-indigo-900/40 border border-indigo-500/30 rounded-xl overflow-hidden shadow-lg shadow-indigo-500/10">
                    <div className="p-6 text-center text-sm font-bold text-indigo-200 bg-white/5">DATA LIMPIA</div>
                    <div className="p-6 text-center text-sm font-bold text-white bg-indigo-600">DATA SUCIA</div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex text-white/20"><ArrowLeft className="rotate-180" /></div>

                {/* 3. Data Marts */}
                <div className="flex-1 space-y-3 w-full">
                  <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 text-center mb-4 border-b border-white/5 pb-2">Data Marts</h4>
                  {['VENTA', 'INVENTARIO', 'COMPRAS', 'CLIENTES'].map((item) => (
                    <div key={item} className="bg-sky-600 p-3 rounded-lg text-center text-xs font-black text-white shadow-lg">
                      {item}
                    </div>
                  ))}
                </div>

                {/* 4. Use Cases & Users */}
                <div className="flex-1 space-y-8 w-full">
                   <div className="text-center">
                      <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-4 border-b border-white/5 pb-2">Use Cases</h4>
                      <p className="text-xs font-bold text-emerald-400 mb-2">RAW DATA</p>
                      <p className="text-xs font-bold text-violet-400 mb-2">REPORTES</p>
                      <p className="text-xs font-bold text-indigo-400">INSIGHTS</p>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Plataforma & Uso */}
          <div className="space-y-12">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2 flex items-center gap-3 border-t border-white/10 pt-16">
              <MonitorPlay className="text-violet-400" /> Experiencia de Consumo
            </h2>
            <p className="text-gray-400 text-lg mb-8">Utilizamos nuestro acceso corporativo a motores de visualización como Metabase para analizar la información transformada y curada.</p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="bg-[#0f0f1a] rounded-3xl p-8 border border-white/10 hover:border-violet-500/30 transition-all group">
                <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center mb-6">
                  <LayoutDashboard size={24} />
                </div>
                <h3 className="text-xl font-black text-white mb-3">Módulos de Autorización</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  El usuario ingresa a la plataforma mediante credenciales seguras. Visualiza únicamente la sección de módulos de inteligencia donde tiene permisos asignados.
                </p>
                <div className="bg-black/50 p-4 rounded-xl border border-white/5 flex gap-2 overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity">
                   {['Ventas', 'Tendencias', 'Scorecard', 'Producto'].map(m => (
                      <span key={m} className="px-2 py-1 bg-white/10 rounded text-[10px] text-gray-300 shrink-0">{m}</span>
                   ))}
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-[#0f0f1a] rounded-3xl p-8 border border-white/10 hover:border-violet-500/30 transition-all group">
                <div className="w-12 h-12 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 size={24} />
                </div>
                <h3 className="text-xl font-black text-white mb-3">KPIs & Métricas Clave</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Visualización detallada de métricas de interés estratégico, comparaciones inmediatas de crecimiento interanual (MoM, YoY) y resúmenes ejecutivos.
                </p>
                <div className="bg-black/50 p-4 rounded-xl border border-white/5 flex gap-4 overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity">
                   <div>
                     <p className="text-[10px] text-gray-500">VENTA NETA</p>
                     <p className="text-lg font-black text-white">5.73M</p>
                     <p className="text-[10px] text-emerald-400">+38.73%</p>
                   </div>
                   <div>
                     <p className="text-[10px] text-gray-500">UTILIDAD</p>
                     <p className="text-lg font-black text-white">$3.68M</p>
                     <p className="text-[10px] text-emerald-400">+35.22%</p>
                   </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-[#0f0f1a] rounded-3xl p-8 border border-white/10 hover:border-violet-500/30 transition-all">
                <div className="w-12 h-12 bg-violet-500/10 border border-violet-500/20 text-violet-400 rounded-xl flex items-center justify-center mb-6">
                  <Layers size={24} />
                </div>
                <h3 className="text-xl font-black text-white mb-3">Gráficos y Tendencias</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Despliegue de gráficos de tendencia (evolución histórica), gráficos de distribución transversal por dimensiones y análisis de crecimiento predeterminado para encontrar anomalías rápidamente.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-[#0f0f1a] rounded-3xl p-8 border border-white/10 hover:border-violet-500/30 transition-all">
                <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center mb-6">
                  <Filter size={24} />
                </div>
                <h3 className="text-xl font-black text-white mb-3">Filtros Dinámicos de Profundidad</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Barra de filtros global. El usuario tiene la capacidad de modificar condiciones operativas específicas (Región, Segmento, Marca, Tipo Producto) y afectar fluidamente todos los paneles subyacentes.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-white/10 text-center">
            <Link href="/contacto">
              <button className="px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-black rounded-xl transition-all shadow-lg text-sm">
                Solicitar Demo Privada
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
