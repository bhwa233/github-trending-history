import dayjs from 'dayjs';

export const DEFAULT_BASE_URL = 'https://github-trending-history.vercel.app';
const DATE_FILE_PATTERN = /^(\d{4}-\d{2}-\d{2})\.json$/;
const GITHUB_CONTENTS_API = 'https://api.github.com/repos/lxw15337674/github-trending-history/contents/api/github?ref=master';
const RAW_DATA_BASE_URL = 'https://raw.githubusercontent.com/lxw15337674/github-trending-history/refs/heads/master/api/github';
const CACHE_REVALIDATE_SECONDS = 3600;
const FALLBACK_PROBE_LOOKBACK_DAYS = 180;
const FALLBACK_STOP_MISS_STREAK = 21;

let probedDatesCache: { expiresAt: number; dates: string[] } | null = null;

export interface GitHubRepo {
  fullName: string;
  description: string;
  language: string;
  stars: number;
  forks?: number;
  todayStars: number;
  url: string;
  aiSummary?: {
    summary: string;
    summary_en?: string;
    techStack?: string[];
    useCase?: string;
    useCase_en?: string;
  };
}

export interface GitHubTrendingData {
  repos: GitHubRepo[];
}

export function getBaseUrl() {
  return (process.env.NEXT_PUBLIC_BASE_URL || DEFAULT_BASE_URL).replace(/\/+$/, '');
}

function getRawDataUrl(date: string) {
  return `${RAW_DATA_BASE_URL}/${date}.json`;
}

async function doesDateFileExist(date: string) {
  try {
    const headRes = await fetch(getRawDataUrl(date), {
      method: 'HEAD',
      next: { revalidate: CACHE_REVALIDATE_SECONDS },
    });
    if (headRes.ok) {
      return true;
    }
    if (headRes.status !== 405) {
      return false;
    }

    const getRes = await fetch(getRawDataUrl(date), {
      next: { revalidate: CACHE_REVALIDATE_SECONDS },
    });
    return getRes.ok;
  } catch {
    return false;
  }
}

async function getFallbackDatesByProbe() {
  const now = Date.now();
  if (probedDatesCache && probedDatesCache.expiresAt > now) {
    return probedDatesCache.dates;
  }

  const dates: string[] = [];
  let missStreak = 0;

  for (let offset = 0; offset < FALLBACK_PROBE_LOOKBACK_DAYS; offset += 1) {
    const date = dayjs().subtract(offset, 'day').format('YYYY-MM-DD');
    const exists = await doesDateFileExist(date);
    if (exists) {
      dates.push(date);
      missStreak = 0;
      continue;
    }

    if (dates.length > 0) {
      missStreak += 1;
      if (missStreak >= FALLBACK_STOP_MISS_STREAK) {
        break;
      }
    }
  }

  const normalizedDates = dates.sort((a, b) => a.localeCompare(b));
  probedDatesCache = {
    dates: normalizedDates,
    expiresAt: now + CACHE_REVALIDATE_SECONDS * 1000,
  };
  return normalizedDates;
}

export async function getAvailableDates() {
  try {
    const res = await fetch(GITHUB_CONTENTS_API, {
      next: { revalidate: CACHE_REVALIDATE_SECONDS },
      headers: { Accept: 'application/vnd.github+json' },
    });

    if (!res.ok) {
      return getFallbackDatesByProbe();
    }

    const files = (await res.json()) as Array<{ name?: string; type?: string }>;
    const dates = files
      .filter((item) => item.type === 'file' && typeof item.name === 'string')
      .map((item) => {
        const match = item.name?.match(DATE_FILE_PATTERN);
        return match ? match[1] : null;
      })
      .filter((date): date is string => Boolean(date))
      .sort((a, b) => a.localeCompare(b));

    return dates.length > 0 ? dates : getFallbackDatesByProbe();
  } catch {
    return getFallbackDatesByProbe();
  }
}

export async function fetchTrendingByDate(date: string): Promise<GitHubTrendingData | null> {
  try {
    const res = await fetch(getRawDataUrl(date), { next: { revalidate: CACHE_REVALIDATE_SECONDS } });

    if (!res.ok) {
      return null;
    }

    return res.json();
  } catch {
    return null;
  }
}

export async function getLatestAvailableData(maxLookbackDays = 7) {
  const dates = await getAvailableDates();
  const candidateDates = [...dates].reverse().slice(0, maxLookbackDays);

  for (const dateText of candidateDates) {
    const data = await fetchTrendingByDate(dateText);
    if (data && data.repos.length > 0) {
      return { date: dateText, data };
    }
  }

  return null;
}

export async function getRecentAvailableData(days = 7, maxLookbackDays = 30) {
  const dates = await getAvailableDates();
  const results: Array<{ date: string; data: GitHubTrendingData }> = [];

  for (const dateText of [...dates].reverse().slice(0, maxLookbackDays)) {
    if (results.length >= days) {
      break;
    }

    const data = await fetchTrendingByDate(dateText);
    if (data && data.repos.length > 0) {
      results.push({ date: dateText, data });
    }
  }

  return results;
}

export function normalizeLanguage(language: string | null | undefined, fallback = 'Unknown') {
  const value = (language || '').trim();
  return value || fallback;
}

export function getTopLanguages(repos: GitHubRepo[], limit = 8, fallback = 'Unknown') {
  const counts = new Map<string, number>();

  for (const repo of repos) {
    const language = normalizeLanguage(repo.language, fallback);
    counts.set(language, (counts.get(language) || 0) + 1);
  }

  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([language, count]) => ({ language, count }));
}

export function getLanguageSlug(language: string) {
  return encodeURIComponent(normalizeLanguage(language).toLowerCase());
}

export function languageEquals(value: string | null | undefined, target: string, fallback = 'Unknown') {
  return normalizeLanguage(value, fallback).toLowerCase() === normalizeLanguage(target, fallback).toLowerCase();
}
