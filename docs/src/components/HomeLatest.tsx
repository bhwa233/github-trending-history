'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  getAvailableDates,
  getLanguageSlug,
  getLatestAvailableData,
  getTopLanguages,
  type GitHubTrendingData,
} from '@/lib/trending-data';
import { getTopicLocalizedName, getTopicStats } from '@/lib/topic-taxonomy';
import { getMessages } from '@/i18n/messages';
import type { SiteLocale } from '@/i18n/config';

interface HomeLatestProps {
  locale: SiteLocale;
}

function localizedPath(locale: SiteLocale, path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${normalized}`;
}

export function HomeLatest({ locale }: HomeLatestProps) {
  const messages = getMessages(locale);
  const numLocale = locale === 'en' ? 'en-US' : 'zh-CN';

  const [loading, setLoading] = useState(true);
  const [latest, setLatest] = useState<{ date: string; data: GitHubTrendingData } | null>(null);
  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {
    let active = true;
    (async () => {
      const [l, d] = await Promise.all([getLatestAvailableData(), getAvailableDates()]);
      if (!active) return;
      setLatest(l);
      setDates(d);
      setLoading(false);
    })();
    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return (
      <section className="rounded-lg border bg-card p-6">
        <p className="text-sm text-muted-foreground">{messages.nav.loading}</p>
      </section>
    );
  }

  const latestDateText = latest?.date || (dates.length > 0 ? dates[dates.length - 1] : null);
  const latestRepos = latest?.data.repos.slice(0, 8) || [];
  const topLanguages = getTopLanguages(latest?.data.repos || [], 8, messages.labels.unknown);
  const topTopics = getTopicStats(latest?.data.repos || []).slice(0, 8);
  const recentDates = dates.slice(-30).reverse();

  return (
    <>
      {latestDateText && (
        <section className="rounded-lg border bg-card p-6">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              href={localizedPath(locale, `/history/${latestDateText}`)}
            >
              {messages.actions.viewLatestBoard(latestDateText)}
            </Link>
          </div>
        </section>
      )}

      <section className="rounded-lg border bg-card p-6">
        <h2 className="text-lg font-semibold">{messages.home.latestSectionTitle(latestDateText)}</h2>
        {latestRepos.length > 0 ? (
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {latestRepos.map((repo) => (
              <article key={repo.fullName} className="rounded-md border p-4">
                <h3 className="font-medium">
                  <a href={repo.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {repo.fullName}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {repo.aiSummary?.summary_en || repo.aiSummary?.summary || repo.description || messages.labels.noDescription}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {messages.labels.language}: {repo.language || messages.labels.unknown} · {messages.labels.totalStars}:{' '}
                  {repo.stars.toLocaleString(numLocale)} · {messages.labels.todayStars}:+
                  {repo.todayStars.toLocaleString(numLocale)}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm text-muted-foreground">{messages.states.latestDataUnavailable}</p>
        )}
      </section>

      <section className="rounded-lg border bg-card p-6">
        <h2 className="text-lg font-semibold">{messages.home.languageSectionTitle}</h2>
        {topLanguages.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {topLanguages.map((item) => (
              <Link
                key={item.language}
                href={localizedPath(locale, `/languages/${getLanguageSlug(item.language)}`)}
                className="rounded-md border px-3 py-1.5 text-sm hover:bg-muted"
              >
                {item.language} ({item.count})
              </Link>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm text-muted-foreground">{messages.states.noLanguageStats}</p>
        )}
      </section>

      <section className="rounded-lg border bg-card p-6">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-lg font-semibold">{messages.home.topicSectionTitle}</h2>
          <Link href={localizedPath(locale, '/topics')} className="text-sm text-muted-foreground underline-offset-4 hover:underline">
            {messages.actions.viewAllTopics}
          </Link>
        </div>
        {topTopics.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {topTopics.map((item) => (
              <Link
                key={item.topic.slug}
                href={localizedPath(locale, `/topics/${item.topic.slug}`)}
                className="rounded-md border px-3 py-1.5 text-sm hover:bg-muted"
              >
                {getTopicLocalizedName(item.topic, locale)} ({item.count})
              </Link>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm text-muted-foreground">{messages.states.noTopicStats}</p>
        )}
      </section>

      <section className="rounded-lg border bg-card p-6">
        <h2 className="text-lg font-semibold">{messages.home.historySectionTitle(recentDates.length)}</h2>
        {recentDates.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {recentDates.map((date) => (
              <Link
                key={date}
                href={localizedPath(locale, `/history/${date}`)}
                className="rounded-md border px-3 py-1.5 text-sm hover:bg-muted"
              >
                {date}
              </Link>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm text-muted-foreground">{messages.states.noAvailableDateData}</p>
        )}
      </section>
    </>
  );
}
