import {NextRequest, NextResponse} from 'next/server';

type MiddlewareFn = (request: NextRequest) => NextResponse | Response | Promise<NextResponse | Response>;

let cachedIntlMiddleware: MiddlewareFn | null = null;
let initPromise: Promise<void> | null = null;

async function ensureIntlMiddleware() {
  if (cachedIntlMiddleware) return;
  if (initPromise) return initPromise;

  initPromise = (async () => {
    // Dynamic import to avoid hard-failing the Edge runtime if a dependency
    // throws during module initialization (e.g. "__dirname is not defined").
    const mod = await import('next-intl/middleware');
    const createMiddleware = mod.default;

    cachedIntlMiddleware = createMiddleware({
      locales: ['es', 'en'],
      defaultLocale: 'es',
      localePrefix: 'as-needed'
    }) as unknown as MiddlewareFn;
  })().finally(() => {
    initPromise = null;
  });

  return initPromise;
}

export default async function middleware(request: NextRequest) {
  try {
    await ensureIntlMiddleware();
    if (!cachedIntlMiddleware) return NextResponse.next();
    return await cachedIntlMiddleware(request);
  } catch (error) {
    // Evita 500 por fallas inesperadas en Edge Middleware y deja trazas en logs (Vercel).
    console.error('[middleware] middleware failed', request.url, error);
    return NextResponse.next();
  }
}

export const config = {
  // Coincide con todas las peticiones (salvo api, _next y static files)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
