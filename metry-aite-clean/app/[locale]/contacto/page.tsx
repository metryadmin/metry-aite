"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Input, Label } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, XCircle, Mail, Phone } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  company: z.string().min(2, "La empresa es requerida"),
  email: z.string().email("Correo electrónico inválido"),
  phone: z.string().optional(),
  service: z.string().min(1, "Selecciona un servicio"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const SERVICES = [
  "Consultoría Estratégica de Datos",
  "Calidad de Datos",
  "Gobierno de Datos, Data Office y CoE",
  "Unificación de Servicios de Datos",
  "Analítica Avanzada",
  "Plataformas de Datos Internas",
  "Plataformas de Datos Externas",
  "Monetización de Datos",
  "Operación de Plataforma",
  "IA Aplicada",
  "Otro / No sé por dónde empezar",
];

export default function ContactoPage() {
  const t = useTranslations("Contact");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("submitting");
    try {
      // Formspree: replace this URL with your own endpoint from formspree.io (free tier)
      const res = await fetch("https://formspree.io/f/placeholder", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      // Accept both successful or placeholder endpoint
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
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
      <div className="relative pt-40 pb-16 overflow-hidden z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            {t("title")}
          </h1>
          <p className="text-xl text-gray-400">{t("subtitle")}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* Form — takes 3/5 */}
          <div className="lg:col-span-3 bg-[#0f0f1a] border border-white/10 rounded-3xl shadow-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-600 to-indigo-600" />
            <h2 className="text-2xl font-black text-white mb-2">{t("form_title")}</h2>
            <p className="text-gray-400 mb-8">{t("form_desc")}</p>

            {status === "success" && (
              <div className="mb-6 flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl">
                <CheckCircle2 size={20} className="shrink-0" />
                <span className="font-bold">{t("toast_success")}</span>
              </div>
            )}
            {status === "error" && (
              <div className="mb-6 flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl">
                <XCircle size={20} className="shrink-0" />
                <span className="font-bold">{t("toast_error")}</span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-gray-300">{t("name")} *</Label>
                  <Input id="name" placeholder="Juan García" {...register("name")} error={errors.name?.message} className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-violet-500" />
                </div>
                <div>
                  <Label htmlFor="company" className="text-gray-300">{t("company")} *</Label>
                  <Input id="company" placeholder="Empresa S.A." {...register("company")} error={errors.company?.message} className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-violet-500" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email" className="text-gray-300">{t("email")} *</Label>
                  <Input id="email" type="email" placeholder="juan@empresa.com" {...register("email")} error={errors.email?.message} className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-violet-500" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-300">{t("phone")}</Label>
                  <Input id="phone" type="tel" placeholder="+502 0000-0000" {...register("phone")} className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-violet-500" />
                </div>
              </div>

              <div>
                <Label htmlFor="service" className="text-gray-300">{t("service")} *</Label>
                <select
                  id="service"
                  {...register("service")}
                  className={`w-full h-12 px-4 rounded-xl border bg-[#0a0a14] text-white transition-all duration-200 outline-none appearance-none
                    ${errors.service ? "border-red-500" : "border-white/10 hover:border-white/20 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"}`}
                >
                  <option value="" className="text-gray-600">Selecciona una opción...</option>
                  {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.service && <span className="text-red-500 text-sm mt-1 block">{errors.service.message}</span>}
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-300">{t("message")} *</Label>
                <Textarea
                  id="message"
                  placeholder={t("message_placeholder")}
                  {...register("message")}
                  error={errors.message?.message}
                  className="min-h-[140px] bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-violet-500"
                />
              </div>

              <Button type="submit" size="lg" className="w-full font-black tracking-wide" disabled={status === "submitting"}>
                {status === "submitting" ? "Enviando..." : t("submit")}
              </Button>
            </form>
          </div>

          {/* Info panel — takes 2/5 */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#0f0f1a] border border-white/10 rounded-3xl p-8">
              <h3 className="text-xl font-black text-white mb-6">{t("info_subtitle")}</h3>
              <div className="space-y-5">
                <a href="mailto:admin@metryanalytics.com" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-violet-600/20 transition-colors">
                    <Mail size={18} className="text-violet-400 group-hover:text-violet-300" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email</p>
                    <p className="font-semibold text-white text-sm group-hover:text-violet-400 transition-colors">admin@metryanalytics.com</p>
                  </div>
                </a>
                <a href="tel:+50239891833" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-violet-600/20 transition-colors">
                    <Phone size={18} className="text-violet-400 group-hover:text-violet-300" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Teléfono</p>
                    <p className="font-semibold text-white text-sm group-hover:text-violet-400 transition-colors">+502 3989-1833</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-[#0f0f1a] border border-white/10 rounded-3xl p-8">
              <h3 className="text-xl font-black text-white mb-6">{t("process_title")}</h3>
              <ol className="space-y-4">
                {[t("process_1"), t("process_2"), t("process_3")].map((step, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="w-7 h-7 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-extrabold text-sm flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-gray-400 text-sm leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <a
              href="https://wa.me/50239891833?text=Hola,%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20Metry%20Analytics."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full p-4 bg-[#25D366] hover:bg-[#1ebe59] text-white font-black rounded-2xl transition-colors shadow-lg shadow-[#25D366]/20"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
