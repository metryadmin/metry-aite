import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Metry Analytics",
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-text mb-4">Política de Privacidad</h1>
        <p className="text-text-muted mb-12">Última actualización: Abril 2025</p>

        <div className="prose prose-neutral max-w-none space-y-8 text-text-muted">
          <section>
            <h2 className="text-xl font-bold text-text mb-3">1. Información que recopilamos</h2>
            <p>Recopilamos únicamente la información que usted nos proporciona voluntariamente a través de nuestro formulario de contacto: nombre, empresa, correo electrónico, teléfono y mensaje. No recopilamos datos de navegación ni utilizamos cookies de seguimiento.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text mb-3">2. Uso de la información</h2>
            <p>La información recopilada se utiliza exclusivamente para responder a sus consultas y coordinar reuniones de negocios. No vendemos, compartimos ni cedemos sus datos a terceros.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text mb-3">3. Almacenamiento y seguridad</h2>
            <p>Los mensajes enviados a través de nuestro formulario son procesados mediante Formspree, un proveedor seguro de formularios que cumple con estándares internacionales de seguridad de datos.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text mb-3">4. Sus derechos</h2>
            <p>Tiene derecho a acceder, rectificar o eliminar sus datos personales en cualquier momento. Para ejercer estos derechos, contáctenos en admin@metryanalytics.com.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text mb-3">5. Contacto</h2>
            <p>Si tiene preguntas sobre esta política, puede escribirnos a admin@metryanalytics.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
