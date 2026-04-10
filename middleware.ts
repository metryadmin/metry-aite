import createMiddleware from 'next-intl/middleware';
import {NextRequest, NextResponse} from 'next/server';

const intlMiddleware = createMiddleware({
  // Las locales soportadas
  locales: ['es', 'en'],
  
  // Utilizado cuando no hay match
  defaultLocale: 'es',
  localePrefix: 'as-needed'
});

export default function middleware(request: NextRequest) {
  try {
    return intlMiddleware(request);
  } catch (error) {
    // Evita 500 por fallas inesperadas en Edge Middleware y deja trazas en logs (Vercel).
    console.error('[middleware] next-intl middleware failed', request.url, error);
    return NextResponse.next();
  }
}

export const config = {
  // Coincide con todas las peticiones (salvo api, _next y static files)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
