import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Metry Analytics",
};

export default function TerminosPage() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-text mb-4">Términos y Condiciones</h1>
        <p className="text-text-muted mb-12">Última actualización: Abril 2025</p>

        <div className="space-y-8 text-text-muted">
          <section>
            <h2 className="text-xl font-bold text-text mb-3">1. Aceptación de los términos</h2>
            <p>Al acceder y utilizar el sitio web de Metry Analytics, usted acepta estos términos y condiciones en su totalidad. Si no está de acuerdo, por favor no utilice este sitio.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text mb-3">2. Servicios</h2>
            <p>Metry Analytics ofrece servicios de consultoría estratégica de datos, arquitectura, analítica e inteligencia artificial. Los términos específicos de cada proyecto se establecen en el contrato de servicios correspondiente.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text mb-3">3. Propiedad intelectual</h2>
            <p>Todo el contenido publicado en este sitio (textos, diseños, logotipos) es propiedad de Metry Analytics y está protegido por las leyes de propiedad intelectual aplicables.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text mb-3">4. Limitación de responsabilidad</h2>
            <p>Metry Analytics no garantiza que el sitio web esté libre de errores o interrupciones. La información publicada es de carácter general y no constituye asesoramiento legal o financiero.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text mb-3">5. Contacto</h2>
            <p>Para consultas sobre estos términos, puede escribirnos a admin@metryanalytics.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
