import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBaseUrl, getLatestAvailableData, getRecentAvailableData } from '@/lib/trending-data';
import { DEFAULT_LOCALE, isLocale, LOCALES, type SiteLocale } from '@/i18n/config';
import { getMessages } from '@/i18n/messages';
import {
  getReposByTopic,
  getTopicBySlug,
  getTopicLocalizedDescription,
  getTopicLocalizedName,
  getTopicStats,
} from '@/lib/topic-taxonomy';

export const revalidate = 3600;

interface TopicPageProps {
  params: Promise<{ locale: string; topic: string }>;
}

function localizedPath(locale: SiteLocale, path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${normalized}`;
}

export async function generateStaticParams() {
  const latest = await getLatestAvailableData();
  if (!latest) {
    return [];
  }

  const topics = getTopicStats(latest.data.repos).map((item) => ({ topic: item.topic.slug }));
  return LOCALES.flatMap((locale) => topics.map((item) => ({ locale, topic: item.topic })));
}

export async function generateMetadata(props: TopicPageProps): Promise<Metadata> {
  const { locale: localeParam, topic: topicSlug } = await props.params;
  if (!isLocale(localeParam)) {
    return {};
  }

  const locale = localeParam;
  const messages = getMessages(locale);
  const topic = getTopicBySlug(topicSlug);

  if (!topic) {
    return {
      title: messages.states.topicNotFoundTitle,
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const topicName = getTopicLocalizedName(topic, locale);
  const baseUrl = getBaseUrl();
  const latest = await getLatestAvailableData();
  const matchedRepos = latest ? getReposByTopic(latest.data.repos, topic) : [];

  if (!latest || matchedRepos.length === 0) {
    return {
      title: locale === 'en' ? `${topicName} Trending Projects` : `${topicName} Trending 项目`,
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalPath = `/topics/${topic.slug}`;
  const description = locale === 'en'
    ? `${topicName} GitHub Trending projects on ${latest.date}, with ${matchedRepos.length} popular repositories.`
    : `${latest.date} 的 ${topicName} GitHub Trending 项目，共 ${matchedRepos.length} 个热门仓库。`;

  return {
    title: messages.topics.detailTitle(topicName),
    description,
    keywords:
      locale === 'en'
        ? [`${topicName} GitHub Trending`, `${topicName} popular projects`, `${topicName} open source projects`]
        : [`${topicName} GitHub Trending`, `${topicName} 热门项目`, `${topicName} 开源项目`],
    alternates: {
      canonical: `${baseUrl}/${locale}${canonicalPath}`,
      languages: {
        'zh-CN': `${baseUrl}/zh-CN${canonicalPath}`,
        en: `${baseUrl}/en${canonicalPath}`,
        'x-default': `${baseUrl}/${DEFAULT_LOCALE}${canonicalPath}`,
      },
    },
    openGraph: {
      title: messages.topics.detailTitle(topicName),
      description,
      url: `${baseUrl}/${locale}${canonicalPath}`,
      type: 'website',
      images: [`${baseUrl}/logo.svg`],
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.topics.detailTitle(topicName),
      description,
      images: [`${baseUrl}/logo.svg`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function TopicDetailPage(props: TopicPageProps) {
  const { locale: localeParam, topic: topicSlug } = await props.params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as SiteLocale;
  const messages = getMessages(locale);
  const topic = getTopicBySlug(topicSlug);
  if (!topic) {
    notFound();
  }

  const latest = await getLatestAvailableData();
  if (!latest) {
    notFound();
  }

  const matchedRepos = getReposByTopic(latest.data.repos, topic);
  if (matchedRepos.length === 0) {
    notFound();
  }

  const baseUrl = getBaseUrl();
  const topicName = getTopicLocalizedName(topic, locale);
  const topicDescription = getTopicLocalizedDescription(topic, locale);
  const topicUrl = `${baseUrl}/${locale}/topics/${topic.slug}`;

  const collectionStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: messages.topics.detailTitle(topicName),
    description: topicDescription,
    url: topicUrl,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: matchedRepos.slice(0, 20).map((repo, index) => ({
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

  const recentData = await getRecentAvailableData(7, 30);
  const topicTrend = recentData
    .map((item) => ({
      date: item.date,
      count: getReposByTopic(item.data.repos, topic).length,
    }))
    .reverse();

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: messages.breadcrumbs.home,
        item: `${baseUrl}/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: messages.breadcrumbs.topics,
        item: `${baseUrl}/${locale}/topics`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: topicName,
        item: topicUrl,
      },
    ],
  };

  const peerTopics = getTopicStats(latest.data.repos)
    .filter((item) => item.topic.slug !== topic.slug)
    .slice(0, 8);

  return (
    <main className="p-5 lg:p-0 lg:pt-8">
      <div className="mx-auto flex max-w-[980px] flex-col gap-6 pb-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
        />

        <section className="rounded-lg border bg-card p-6">
          <h1 className="text-2xl font-semibold tracking-tight">{messages.topics.detailTitle(topicName)}</h1>
          <p className="mt-3 text-muted-foreground">
            {messages.topics.detailDescription(latest.date, matchedRepos.length, topicName)}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{topicDescription}</p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <Link href={localizedPath(locale, '/topics')} className="underline-offset-4 hover:underline">
              {messages.actions.backTopics}
            </Link>
            <Link href={localizedPath(locale, `/history/${latest.date}`)} className="underline-offset-4 hover:underline">
              {messages.actions.viewFullDateBoard}
            </Link>
          </div>
        </section>

        <section className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold">{messages.topics.reposTitle(topicName)}</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {matchedRepos.map((repo) => (
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
                  {messages.labels.language}：{repo.language || messages.labels.unknown} · {messages.labels.totalStars}：
                  {repo.stars.toLocaleString(locale === 'en' ? 'en-US' : 'zh-CN')} · {messages.labels.todayStars}：+
                  {repo.todayStars.toLocaleString(locale === 'en' ? 'en-US' : 'zh-CN')}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold">{messages.labels.recentValidDaysTrend}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {topicTrend.map((point) => (
              <Link
                key={point.date}
                href={localizedPath(locale, `/history/${point.date}`)}
                className="rounded-md border px-3 py-1.5 text-sm hover:bg-muted"
              >
                {point.date}: {point.count}
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold">{messages.labels.exploreOtherTopics}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {peerTopics.map((item) => (
              <Link
                key={item.topic.slug}
                href={localizedPath(locale, `/topics/${item.topic.slug}`)}
                className="rounded-md border px-3 py-1.5 text-sm hover:bg-muted"
              >
                {getTopicLocalizedName(item.topic, locale)} ({item.count})
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
