# Manifiesto de Diseño Base: Metry Analytics (B2B SaaS Premium)

Este documento contiene las reglas estrictas de UI/UX cargadas desde la perspectiva de un **Diseñador Web Experto (Top 1% Awwwards / Stripe / Apple Design)**. Estas reglas se aplicarán a todas las vistas para elevar la página de "funcional" a "exquisita".

## 1. Espaciado y Respiración (White Space)
- **Regla del Doble Margen**: Los márgenes entre secciones deben sentirse inmensos. Nunca usar menos de `py-24` o `py-32` para separar secciones. El contenido necesita espacio para respirar.
- **Densidad de Lectura**: El texto principal (párrafos) nunca debe exceder de `max-w-2xl`. Los line-height deben ser holgados (`leading-relaxed` o `leading-loose`).

## 2. Tipografía Jerárquica
- **Titulares Brutalistas pero Limpios**: Los `h1` y `h2` deben usar `tracking-tight` (letras más juntas) y pesos extremos (`font-extrabold` o `font-black`) para generar impacto visual.
- **Contraste de Color**: Nunca usar negro puro (`#000`). Usar `text-neutral-900` para títulos y `text-neutral-500` para párrafos.
- **Micro-Copy**: Usar `text-[10px]` o `text-xs` en MAYÚSCULAS con `tracking-widest` para las famosas "eyebrow tags" (etiquetas arriba de los títulos).

## 3. Sombras, Bordes y Glassmorphism Real
- **Sombras Difusas (Soft Shadows)**: Evitar sombras duras. Usar sombras amplias y teñidas del color primario (ej. `shadow-2xl shadow-primary/10`).
- **Bordes Delicados**: En lugar de fondos grises pesados, usar fondos blancos (`bg-surface`) con bordes ultra finos `border border-neutral-100` o `border-primary/10`.
- **Glassmorphism Inteligente**: Solo usar backdrop-blur encima de gradientes sutiles o fondos complejos, no sobre fondos blancos sólidos.

## 4. Animaciones y Micro-Interacciones
- **Hover States Suaves**: Todas las tarjetas deben elevarse levemente (`-translate-y-1`) y cambiar su sombra en `hover`, usando transiciones lentas (`duration-300` o `duration-500`).
- **Entradas Elegantes**: Los elementos deben entrar haciendo "fade in up" (aparecer desde abajo suavemente) en lugar de simplemente estar ahí.
- **Botones Dinámicos**: Los botones de CTA no son bloques muertos. Deben crecer un 2% en hover (`scale-105`) y el texto/ícono interior moverse ligeramente.

## 5. Uso del Color (Púrpura y Violeta)
- **Regla del 60-30-10**:
  - 60% Espacio en blanco o neutro (`bg-background`).
  - 30% Gris suave y bordes.
  - 10% Color de la marca (`primary: #8B5CF6`). El púrpura solo se usa para guiar el ojo (botones, íconos, palabras clave marcadas). NO inundar pantallas enteras de púrpura intenso.
- **Acentos de Gradiente**: Usar transparencias radiales desenfocadas de fondo para dar profundidad (`bg-primary/5 blur-3xl`).

*Este manifiesto es ley y se implementará inmediatamente en las fases de pulido.*
