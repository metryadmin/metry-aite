import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Las locales soportadas
  locales: ['es', 'en'],
  
  // Utilizado cuando no hay match
  defaultLocale: 'es',
  localePrefix: 'as-needed'
});

export const config = {
  // Coincide con todas las peticiones (salvo api, _next y static files)
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
