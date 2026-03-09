import type { Metadata } from 'next';
import Link from 'next/link';
import { getBaseUrl, getLatestAvailableData } from '@/lib/trending-data';
import { getTopicStats } from '@/lib/topic-taxonomy';

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = getBaseUrl();
  const latest = await getLatestAvailableData();
  const latestDate = latest?.date;
  const topicStats = getTopicStats(latest?.data.repos || []);
  const description = latestDate
    ? `按主题浏览 ${latestDate} 的 GitHub Trending 热门项目，当前覆盖 ${topicStats.length} 个热门技术方向。`
    : '按主题浏览最新 GitHub Trending 热门项目，快速定位 AI、CLI、前端、后端等方向。';

  return {
    title: 'GitHub Trending 主题榜单',
    description,
    keywords: ['GitHub Trending 主题榜单', 'GitHub 热门主题', '开源项目趋势', 'AI 开源项目'],
    alternates: {
      canonical: `${baseUrl}/topics`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: 'GitHub Trending 主题榜单',
      description,
      url: `${baseUrl}/topics`,
      images: [`${baseUrl}/logo.svg`],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'GitHub Trending 主题榜单',
      description,
      images: [`${baseUrl}/logo.svg`],
    },
  };
}

export default async function TopicsPage() {
  const baseUrl = getBaseUrl();
  const latest = await getLatestAvailableData();
  const latestDate = latest?.date;
  const topicStats = getTopicStats(latest?.data.repos || []);
  const collectionStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'GitHub Trending 主题榜单',
    description: '按主题浏览最新 GitHub Trending 热门项目。',
    url: `${baseUrl}/topics`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: topicStats.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Thing',
          name: item.topic.name,
          url: `${baseUrl}/topics/${item.topic.slug}`,
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
        name: '首页',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '主题榜单',
        item: `${baseUrl}/topics`,
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
          <h1 className="text-2xl font-semibold tracking-tight">GitHub Trending 主题榜单</h1>
          <p className="mt-3 text-muted-foreground">
            {latestDate
              ? `基于 ${latestDate} 的最新榜单，按热门主题聚合开源项目。`
              : '暂时无法获取最新榜单数据。'}
          </p>
          <div className="mt-5">
            <Link href="/" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              返回首页
            </Link>
          </div>
        </section>

        <section className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold">主题入口</h2>
          {topicStats.length > 0 ? (
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {topicStats.map((item) => (
                <Link
                  key={item.topic.slug}
                  href={`/topics/${item.topic.slug}`}
                  className="rounded-md border p-4 hover:bg-muted"
                >
                  <h3 className="font-medium">{item.topic.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.topic.description}</p>
                  <p className="mt-2 text-xs text-muted-foreground">相关仓库：{item.count}</p>
                </Link>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-sm text-muted-foreground">暂无主题聚合数据。</p>
          )}
        </section>
      </div>
    </main>
  );
}
