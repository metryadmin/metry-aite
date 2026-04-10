import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['es', 'en'],
  defaultLocale: 'es',
  // Keep URLs like `/es/...` even for the default locale
  localePrefix: 'always'
});

export const config = {
  // Run on all routes except Next.js internals and static files
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};

