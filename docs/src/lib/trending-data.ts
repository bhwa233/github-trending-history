import dayjs from 'dayjs';

export const DEFAULT_BASE_URL = 'https://github-trending-history.vercel.app';
export const FIRST_AVAILABLE_DATE = dayjs('2024-05-20');
const DATE_FILE_PATTERN = /^(\d{4}-\d{2}-\d{2})\.json$/;
const GITHUB_CONTENTS_API = 'https://api.github.com/repos/lxw15337674/github-trending-history/contents/api/github?ref=master';

export interface GitHubRepo {
  fullName: string;
  description: string;
  language: string;
  stars: number;
  todayStars: number;
  url: string;
  aiSummary?: {
    summary: string;
  };
}

export interface GitHubTrendingData {
  repos: GitHubRepo[];
}

export function getBaseUrl() {
  return (process.env.NEXT_PUBLIC_BASE_URL || DEFAULT_BASE_URL).replace(/\/+$/, '');
}

function getFallbackDateRange() {
  const endDate = dayjs().subtract(1, 'day');
  const dates: string[] = [];

  let currentDate = FIRST_AVAILABLE_DATE;
  while (currentDate.isBefore(endDate) || currentDate.isSame(endDate, 'day')) {
    dates.push(currentDate.format('YYYY-MM-DD'));
    currentDate = currentDate.add(1, 'day');
  }

  return dates;
}

export async function getAvailableDates() {
  try {
    const res = await fetch(GITHUB_CONTENTS_API, {
      next: { revalidate: 3600 },
      headers: { Accept: 'application/vnd.github+json' },
    });

    if (!res.ok) {
      return getFallbackDateRange();
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

    return dates.length > 0 ? dates : getFallbackDateRange();
  } catch {
    return getFallbackDateRange();
  }
}

export async function fetchTrendingByDate(date: string): Promise<GitHubTrendingData | null> {
  try {
    const res = await fetch(
      `https://raw.githubusercontent.com/lxw15337674/github-trending-history/refs/heads/master/api/github/${date}.json`,
      { next: { revalidate: 3600 } }
    );

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

export function normalizeLanguage(language: string | null | undefined) {
  const value = (language || '').trim();
  return value || 'Unknown';
}

export function getTopLanguages(repos: GitHubRepo[], limit = 8) {
  const counts = new Map<string, number>();

  for (const repo of repos) {
    const language = normalizeLanguage(repo.language);
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

export function languageEquals(value: string | null | undefined, target: string) {
  return normalizeLanguage(value).toLowerCase() === normalizeLanguage(target).toLowerCase();
}
