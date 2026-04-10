import createMiddleware from 'next-intl/middleware';
import {defineRouting} from 'next-intl/routing';

const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'es',
  localePrefix: 'as-needed'
});

export default createMiddleware(routing);

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
