import dayjs from 'dayjs';
import type { SiteLocale } from '@/i18n/config';

export function formatDisplayDate(date: string, locale: SiteLocale) {
  const parsed = dayjs(date);
  if (!parsed.isValid()) {
    return date;
  }

  if (locale === 'en') {
    return parsed.format('MMM DD, YYYY');
  }

  return parsed.format('YYYY年MM月DD日');
}

export function formatNumber(value: number, locale: SiteLocale) {
  return value.toLocaleString(locale === 'en' ? 'en-US' : 'zh-CN');
}

export function formatCompact(value: number, locale: SiteLocale) {
  if (locale === 'en') {
    if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(1)}B`;
    if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
    if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
    return String(value);
  }

  if (value >= 100_000_000) return `${(value / 100_000_000).toFixed(2)}亿`;
  if (value >= 10_000) return `${(value / 10_000).toFixed(2)}万`;
  return String(value);
}
