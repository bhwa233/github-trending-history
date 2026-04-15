import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBaseUrl, getLatestAvailableData } from '@/lib/trending-data';
import { getMessages } from '@/i18n/messages';
import { DEFAULT_LOCALE, isLocale, type SiteLocale } from '@/i18n/config';
import { getTopicLocalizedDescription, getTopicLocalizedName, getTopicStats } from '@/lib/topic-taxonomy';

export const revalidate = 3600;

interface TopicsPageProps {
  params: Promise<{ locale: string }>;
}

function localizedPath(locale: SiteLocale, path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${normalized}`;
}

export async function generateMetadata(props: TopicsPageProps): Promise<Metadata> {
  const { locale: localeParam } = await props.params;
  if (!isLocale(localeParam)) {
    return {};
  }

  const locale = localeParam;
  const messages = getMessages(locale);
  const baseUrl = getBaseUrl();
  const latest = await getLatestAvailableData();
  const latestDate = latest?.date;
  const topicStats = getTopicStats(latest?.data.repos || []);
  const description = latestDate
    ? locale === 'en'
      ? `Browse GitHub Trending projects by topic on ${latestDate}, covering ${topicStats.length} active topic clusters.`
      : `按主题浏览 ${latestDate} 的 GitHub Trending 热门项目，当前覆盖 ${topicStats.length} 个热门技术方向。`
    : locale === 'en'
      ? 'Browse latest GitHub Trending projects by topic to quickly locate AI, CLI, frontend, and backend directions.'
      : '按主题浏览最新 GitHub Trending 热门项目，快速定位 AI、CLI、前端、后端等方向。';

  return {
    title: messages.topics.listTitle,
    description,
    keywords:
      locale === 'en'
        ? ['GitHub Trending topics', 'Popular GitHub topics', 'Open-source trends', 'AI open source projects']
        : ['GitHub Trending 主题榜单', 'GitHub 热门主题', '开源项目趋势', 'AI 开源项目'],
    alternates: {
      canonical: `${baseUrl}/${locale}/topics`,
      languages: {
        'zh-CN': `${baseUrl}/zh-CN/topics`,
        en: `${baseUrl}/en/topics`,
        'x-default': `${baseUrl}/${DEFAULT_LOCALE}/topics`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: messages.topics.listTitle,
      description,
      url: `${baseUrl}/${locale}/topics`,
      images: [`${baseUrl}/logo.svg`],
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.topics.listTitle,
      description,
      images: [`${baseUrl}/logo.svg`],
    },
  };
}

export default async function TopicsPage(props: TopicsPageProps) {
  const { locale: localeParam } = await props.params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as SiteLocale;
  const messages = getMessages(locale);
  const baseUrl = getBaseUrl();
  const latest = await getLatestAvailableData();
  const latestDate = latest?.date;
  const topicStats = getTopicStats(latest?.data.repos || []);

  const collectionStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: messages.topics.listTitle,
    description: messages.topics.listDescription(latestDate || null),
    url: `${baseUrl}/${locale}/topics`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: topicStats.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Thing',
          name: getTopicLocalizedName(item.topic, locale),
          url: `${baseUrl}/${locale}/topics/${item.topic.slug}`,
        },
      })),
    },
  };

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
    ],
  };

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
          <h1 className="text-2xl font-semibold tracking-tight">{messages.topics.listTitle}</h1>
          <p className="mt-3 text-muted-foreground">{messages.topics.listDescription(latestDate || null)}</p>
          <div className="mt-5">
            <Link href={localizedPath(locale, '/')} className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              {messages.actions.backHome}
            </Link>
          </div>
        </section>

        <section className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold">{messages.labels.topicEntries}</h2>
          {topicStats.length > 0 ? (
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {topicStats.map((item) => (
                <Link
                  key={item.topic.slug}
                  href={localizedPath(locale, `/topics/${item.topic.slug}`)}
                  className="rounded-md border p-4 hover:bg-muted"
                >
                  <h3 className="font-medium">{getTopicLocalizedName(item.topic, locale)}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{getTopicLocalizedDescription(item.topic, locale)}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{messages.labels.relatedRepos}：{item.count}</p>
                </Link>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-sm text-muted-foreground">{messages.states.noTopicStats}</p>
          )}
        </section>
      </div>
    </main>
  );
}
