import {NextRequest, NextResponse} from 'next/server';

const locales = ['es', 'en'] as const;
const defaultLocale = 'es';

function hasFileExtension(pathname: string) {
  return /\.[^/]+$/.test(pathname);
}

function getLocaleFromPathname(pathname: string) {
  const segment = pathname.split('/')[1];
  return locales.includes(segment as (typeof locales)[number])
    ? (segment as (typeof locales)[number])
    : null;
}

export default function middleware(request: NextRequest) {
  try {
    const {pathname} = request.nextUrl;

    if (
      pathname.startsWith('/api') ||
      pathname.startsWith('/_next') ||
      pathname.startsWith('/_vercel') ||
      hasFileExtension(pathname)
    ) {
      return NextResponse.next();
    }

    const locale = getLocaleFromPathname(pathname);
    if (locale) return NextResponse.next();

    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
    return NextResponse.redirect(url);
  } catch (error) {
    console.error('[middleware] locale redirect failed', request.url, error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
