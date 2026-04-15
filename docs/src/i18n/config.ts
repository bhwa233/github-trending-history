export const LOCALES = ['zh-CN', 'en'] as const;

export type SiteLocale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: SiteLocale = 'zh-CN';

export function isLocale(value: string): value is SiteLocale {
  return LOCALES.includes(value as SiteLocale);
}

export function normalizeLocale(value: string | null | undefined): SiteLocale {
  if (!value) {
    return DEFAULT_LOCALE;
  }

  const trimmed = value.trim();
  if (isLocale(trimmed)) {
    return trimmed;
  }

  const lower = trimmed.toLowerCase();
  if (lower.startsWith('zh')) {
    return 'zh-CN';
  }
  if (lower.startsWith('en')) {
    return 'en';
  }

  return DEFAULT_LOCALE;
}

function parseCandidateLocale(value: string): SiteLocale | null {
  const lower = value.trim().toLowerCase();
  if (lower.startsWith('zh')) {
    return 'zh-CN';
  }
  if (lower.startsWith('en')) {
    return 'en';
  }
  return null;
}

export function resolveLocaleFromHeader(acceptLanguage: string | null): SiteLocale {
  if (!acceptLanguage) {
    return DEFAULT_LOCALE;
  }

  const candidates = acceptLanguage
    .split(',')
    .map((part) => part.trim().split(';')[0])
    .filter(Boolean);

  for (const candidate of candidates) {
    const parsed = parseCandidateLocale(candidate);
    if (parsed) {
      return parsed;
    }
  }

  return DEFAULT_LOCALE;
}

export function withLocalePath(locale: SiteLocale, pathname: string) {
  if (!pathname || pathname === '/') {
    return `/${locale}`;
  }

  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `/${locale}${normalized}`.replace(/\/+/g, '/');
}

export function removeLocalePrefix(pathname: string) {
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;

  for (const locale of LOCALES) {
    if (normalized === `/${locale}`) {
      return '/';
    }
    if (normalized.startsWith(`/${locale}/`)) {
      return normalized.slice(locale.length + 1) || '/';
    }
  }

  return normalized;
}
