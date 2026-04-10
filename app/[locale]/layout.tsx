import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import {getMessages, unstable_setRequestLocale as setRequestLocale} from "next-intl/server";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Metry Analytics | Consultoría Estratégica de Datos",
  description: "Ayudamos a empresas a construir estrategia, plataformas, analítica e IA con impacto real.",
};

export default async function RootLayout({
      children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <div className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </NextIntlClientProvider>
    </div>
  );
}
