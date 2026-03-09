import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBaseUrl, getLatestAvailableData, getRecentAvailableData } from '@/lib/trending-data';
import { getReposByTopic, getTopicBySlug, getTopicStats } from '@/lib/topic-taxonomy';

export const revalidate = 3600;

interface TopicPageProps {
  params: Promise<{ topic: string }>;
}

export async function generateStaticParams() {
  const latest = await getLatestAvailableData();
  if (!latest) {
    return [];
  }

  return getTopicStats(latest.data.repos).map((item) => ({ topic: item.topic.slug }));
}

export async function generateMetadata(props: TopicPageProps): Promise<Metadata> {
  const { topic: topicSlug } = await props.params;
  const topic = getTopicBySlug(topicSlug);

  if (!topic) {
    return {
      title: '主题未找到',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const baseUrl = getBaseUrl();
  const latest = await getLatestAvailableData();
  const matchedRepos = latest ? getReposByTopic(latest.data.repos, topic) : [];

  if (!latest || matchedRepos.length === 0) {
    return {
      title: `${topic.name} Trending 项目`,
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalPath = `/topics/${topic.slug}`;
  return {
    title: `${topic.name} GitHub Trending 热门项目`,
    description: `${latest.date} 的 ${topic.name} GitHub Trending 项目，共 ${matchedRepos.length} 个热门仓库。`,
    keywords: [`${topic.name} GitHub Trending`, `${topic.name} 热门项目`, `${topic.name} 开源项目`],
    alternates: {
      canonical: `${baseUrl}${canonicalPath}`,
    },
    openGraph: {
      title: `${topic.name} GitHub Trending 热门项目`,
      description: `查看 ${latest.date} 最新 ${topic.name} 热门开源项目。`,
      url: `${baseUrl}${canonicalPath}`,
      type: 'website',
      images: [`${baseUrl}/logo.svg`],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${topic.name} GitHub Trending 热门项目`,
      description: `查看 ${latest.date} 最新 ${topic.name} 热门开源项目。`,
      images: [`${baseUrl}/logo.svg`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function TopicDetailPage(props: TopicPageProps) {
  const { topic: topicSlug } = await props.params;
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
  const topicUrl = `${baseUrl}/topics/${topic.slug}`;

  const collectionStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${topic.name} GitHub Trending 热门项目`,
    description: topic.description,
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
          programmingLanguage: repo.language || 'Unknown',
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
        name: '首页',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '主题榜单',
        item: `${baseUrl}/topics`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: topic.name,
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
          <h1 className="text-2xl font-semibold tracking-tight">{topic.name} GitHub Trending 热门项目</h1>
          <p className="mt-3 text-muted-foreground">
            基于 {latest.date} 榜单，共收录 {matchedRepos.length} 个与 {topic.name} 相关的热门仓库。
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{topic.description}</p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <Link href="/topics" className="underline-offset-4 hover:underline">
              返回主题榜单
            </Link>
            <Link href={`/history/${latest.date}`} className="underline-offset-4 hover:underline">
              查看完整当日榜单
            </Link>
          </div>
        </section>

        <section className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold">{topic.name} 相关仓库</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {matchedRepos.map((repo) => (
              <article key={repo.fullName} className="rounded-md border p-4">
                <h3 className="font-medium">
                  <a href={repo.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {repo.fullName}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {repo.aiSummary?.summary || repo.description || '暂无描述'}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  语言：{repo.language || 'Unknown'} · 总 Stars：{repo.stars.toLocaleString()} · 今日新增：+
                  {repo.todayStars.toLocaleString()}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold">最近 7 个有效日期趋势</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {topicTrend.map((point) => (
              <Link
                key={point.date}
                href={`/history/${point.date}`}
                className="rounded-md border px-3 py-1.5 text-sm hover:bg-muted"
              >
                {point.date}: {point.count}
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold">探索其他主题</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {peerTopics.map((item) => (
              <Link
                key={item.topic.slug}
                href={`/topics/${item.topic.slug}`}
                className="rounded-md border px-3 py-1.5 text-sm hover:bg-muted"
              >
                {item.topic.name} ({item.count})
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
