import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { LOCALES, resolveLocaleFromHeader } from '@/i18n/config';

const PUBLIC_FILE = /\.(.*)$/;

function hasLocalePrefix(pathname: string) {
  return LOCALES.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`));
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/robots') ||
    pathname.startsWith('/sitemap') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (hasLocalePrefix(pathname)) {
    return NextResponse.next();
  }

  const locale = resolveLocaleFromHeader(request.headers.get('accept-language'));
  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|.*\\..*).*)'],
};
