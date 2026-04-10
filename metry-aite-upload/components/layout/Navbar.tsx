"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const t = useTranslations("Navigation");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: t("home"), href: "/" },
    { name: t("services"), href: "/servicios" },
    { name: t("methodology"), href: "/metodologia" },
    { name: t("industries"), href: "/industrias" },
    { name: t("insights"), href: "/insights" },
    { name: t("team"), href: "/nosotros" },
    { name: t("contact"), href: "/contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-surface/70 backdrop-blur-2xl border-b border-border/50 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${isScrolled ? "h-20" : "h-28"}`}>
        
        {/* LOGO */}
        <Link href="/" className="flex items-center relative z-50 group transition-transform hover:scale-105">
          <img src="/images/logo-metry.png" alt="Metry Analytics" className="h-20 w-20 sm:h-32 sm:w-32 object-contain scale-150 drop-shadow-[0_0_15px_rgba(139,92,246,0.25)]" />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex flex-1 justify-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-text-muted hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link href="/contacto" className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm">
            {t("contact")}
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex lg:hidden items-center gap-4 z-50">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="text-text" aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* MOBILE MENU PANEL */}
      {isOpen && (
        <div className="fixed inset-0 top-20 bg-surface z-40 lg:hidden flex flex-col p-6 animate-fade-in border-t border-border overflow-y-auto">
          <nav className="flex flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-text hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pt-8 flex items-center justify-between border-t border-border">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
