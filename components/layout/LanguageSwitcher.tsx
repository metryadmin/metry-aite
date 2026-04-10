"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { useTransition } from "react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const nextLocale = locale === "es" ? "en" : "es";
    
    startTransition(() => {
      // Basic approach: replace prefix
      // If pathname is /es/services, we want /en/services
      const currentPathWithoutLocale = pathname.replace(`/${locale}`, "");
      const newPath = `/${nextLocale}${currentPathWithoutLocale.startsWith('/') ? currentPathWithoutLocale : `/${currentPathWithoutLocale}`}`;
      router.replace(newPath);
    });
  };

  return (
    <button
      onClick={toggleLocale}
      disabled={isPending}
      className="flex items-center gap-2 p-2 rounded-lg text-text-muted hover:bg-surface-hover hover:text-text transition-colors font-semibold text-sm"
    >
      <Globe size={18} />
      <span>{locale.toUpperCase()}</span>
    </button>
  );
}
