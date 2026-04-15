import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getAvailableDates,
  getBaseUrl,
  getLanguageSlug,
  getLatestAvailableData,
  getTopLanguages,
} from '@/lib/trending-data';
import { getMessages } from '@/i18n/messages';
import { DEFAULT_LOCALE, isLocale, type SiteLocale } from '@/i18n/config';
import { getTopicLocalizedName, getTopicStats } from '@/lib/topic-taxonomy';

export const revalidate = 3600;

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

function localizedPath(locale: SiteLocale, path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${normalized}`;
}

export async function generateMetadata(props: HomePageProps): Promise<Metadata> {
  const { locale: localeParam } = await props.params;
  if (!isLocale(localeParam)) {
    return {};
  }

  const locale = localeParam;
  const messages = getMessages(locale);
  const baseUrl = getBaseUrl();
  const localizedBaseUrl = `${baseUrl}/${locale}`;
  const latest = await getLatestAvailableData();
  const latestDate = latest?.date;
  const latestCount = latest?.data.repos.length || 0;
  const description = latestDate
    ? messages.seo.homeDescription(latestDate, latestCount)
    : messages.seo.defaultDescription;

  return {
    title: messages.siteName,
    description,
    keywords:
      locale === 'en'
        ? ['GitHub Trending History', 'GitHub Trending Today', 'Open Source Projects', 'Daily Open Source Trends']
        : ['GitHub Trending 历史', 'GitHub Trending 今日', 'GitHub 热门开源项目', '每日开源项目趋势', 'GitHub 趋势榜归档'],
    alternates: {
      canonical: localizedBaseUrl,
      languages: {
        'zh-CN': `${baseUrl}/zh-CN`,
        en: `${baseUrl}/en`,
        'x-default': `${baseUrl}/${DEFAULT_LOCALE}`,
      },
    },
    openGraph: {
      title: messages.siteName,
      description,
      url: localizedBaseUrl,
      images: [`${baseUrl}/logo.svg`],
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.siteName,
      description,
      images: [`${baseUrl}/logo.svg`],
    },
  };
}

export default async function HomePage(props: HomePageProps) {
  const { locale: localeParam } = await props.params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as SiteLocale;
  const messages = getMessages(locale);
  const [latest, availableDates] = await Promise.all([getLatestAvailableData(), getAvailableDates()]);
  const latestDateText = latest?.date || (availableDates.length > 0 ? availableDates[availableDates.length - 1] : null);
  const latestRepos = latest?.data.repos.slice(0, 8) || [];
  const topLanguages = getTopLanguages(latest?.data.repos || [], 8, messages.labels.unknown);
  const topTopics = getTopicStats(latest?.data.repos || []).slice(0, 8);
  const recentDates = availableDates.slice(-30).reverse();
  const baseUrl = getBaseUrl();

  const homeStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: messages.home.title,
    description: messages.seo.defaultDescription,
    url: `${baseUrl}/${locale}`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: latestRepos.map((repo, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'SoftwareSourceCode',
          name: repo.fullName,
          url: repo.url,
          programmingLanguage: repo.language || messages.labels.unknown,
        },
      })),
    },
  };

  return (
    <main className="p-5 lg:p-0 lg:pt-8">
      <div className="mx-auto flex max-w-[980px] flex-col gap-6 pb-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(homeStructuredData),
          }}
        />

        <section className="rounded-lg border bg-card p-6">
          <h1 className="text-2xl font-semibold tracking-tight">{messages.home.title}</h1>
          <p className="mt-3 text-muted-foreground">{messages.home.subtitle}</p>
          {latestDateText ? (
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                href={localizedPath(locale, `/history/${latestDateText}`)}
              >
                {messages.actions.viewLatestBoard(latestDateText)}
              </Link>
            </div>
          ) : (
            <p className="mt-4 text-sm text-muted-foreground">{messages.states.noAvailableDateData}</p>
          )}
        </section>

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
                    {repo.stars.toLocaleString(locale === 'en' ? 'en-US' : 'zh-CN')} · {messages.labels.todayStars}:+
                    {repo.todayStars.toLocaleString(locale === 'en' ? 'en-US' : 'zh-CN')}
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

        <section className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold">{messages.home.whyTitle}</h2>
          <p className="mt-3 text-sm text-muted-foreground">{messages.home.whyBody1}</p>
          <p className="mt-2 text-sm text-muted-foreground">{messages.home.whyBody2}</p>
        </section>
      </div>
    </main>
  );
}
