import type { Metadata } from 'next';
import Link from 'next/link';
import {
  getAvailableDates,
  getBaseUrl,
  getLanguageSlug,
  getLatestAvailableData,
  getTopLanguages,
} from '@/lib/trending-data';
import { getTopicStats } from '@/lib/topic-taxonomy';

export const revalidate = 3600;


export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = getBaseUrl();
  const latest = await getLatestAvailableData();
  const latestDate = latest?.date;
  const latestCount = latest?.data.repos.length || 0;
  const description = latestDate
    ? `每日 GitHub Trending 开源项目归档。当前最新日期为 ${latestDate}，收录 ${latestCount} 个热门项目，支持按日期、语言、主题追踪技术趋势。`
    : '每日 GitHub Trending 开源项目归档，支持按日期追踪热门开源项目与技术趋势。';

  return {
    title: 'GitHub Trending 归档',
    description,
    keywords: [
      'GitHub Trending 历史',
      'GitHub Trending 今日',
      'GitHub 热门开源项目',
      '每日开源项目趋势',
      'GitHub 趋势榜归档',
    ],
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      title: 'GitHub Trending 归档',
      description,
      url: baseUrl,
      images: [`${baseUrl}/logo.svg`],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'GitHub Trending 归档',
      description,
      images: [`${baseUrl}/logo.svg`],
    },
  };
}

export default async function Page() {
  const [latest, availableDates] = await Promise.all([getLatestAvailableData(), getAvailableDates()]);
  const latestDateText = latest?.date || (availableDates.length > 0 ? availableDates[availableDates.length - 1] : null);
  const latestRepos = latest?.data.repos.slice(0, 8) || [];
  const topLanguages = getTopLanguages(latest?.data.repos || []);
  const topTopics = getTopicStats(latest?.data.repos || []).slice(0, 8);
  const recentDates = availableDates.slice(-30).reverse();

  const homeStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'GitHub Trending 历史归档',
    description: '按日期浏览 GitHub Trending 历史榜单，查看每日热门开源项目。',
    url: getBaseUrl(),
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: latestRepos.map((repo, index) => ({
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
          <h1 className="text-2xl font-semibold tracking-tight">GitHub Trending 历史归档</h1>
          <p className="mt-3 text-muted-foreground">
            每日收录 GitHub Trending 热门项目，覆盖 Star 增长、语言分布和 AI 摘要，适合追踪开源技术趋势。
          </p>
          {latestDateText ? (
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                href={`/history/${latestDateText}`}
              >
                查看最新榜单 ({latestDateText})
              </Link>
            </div>
          ) : (
            <p className="mt-4 text-sm text-muted-foreground">暂无可用日期数据，榜单入口稍后恢复。</p>
          )}
        </section>

        <section className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold">
            GitHub Trending 今日热门开源项目{latestDateText ? ` (${latestDateText})` : ''}
          </h2>
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
                    {repo.aiSummary?.summary || repo.description || '暂无描述'}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    语言：{repo.language || 'Unknown'} · 总 Stars：{repo.stars.toLocaleString()} · 今日新增：+
                    {repo.todayStars.toLocaleString()}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-sm text-muted-foreground">最新数据暂不可用，请稍后重试。</p>
          )}
        </section>

        <section className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold">热门技术栈分布</h2>
          {topLanguages.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {topLanguages.map((item) => (
                <Link
                  key={item.language}
                  href={`/languages/${getLanguageSlug(item.language)}`}
                  className="rounded-md border px-3 py-1.5 text-sm hover:bg-muted"
                >
                  {item.language} ({item.count})
                </Link>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-sm text-muted-foreground">暂无语言统计数据。</p>
          )}
        </section>

        <section className="rounded-lg border bg-card p-6">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-lg font-semibold">热门主题聚合</h2>
            <Link href="/topics" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              查看全部主题
            </Link>
          </div>
          {topTopics.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {topTopics.map((item) => (
                <Link
                  key={item.topic.slug}
                  href={`/topics/${item.topic.slug}`}
                  className="rounded-md border px-3 py-1.5 text-sm hover:bg-muted"
                >
                  {item.topic.name} ({item.count})
                </Link>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-sm text-muted-foreground">暂无主题聚合数据。</p>
          )}
        </section>

        <section className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold">GitHub Trending 历史数据归档（最近 {recentDates.length} 个有效日期）</h2>
          {recentDates.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {recentDates.map((date) => (
                <Link
                  key={date}
                  href={`/history/${date}`}
                  className="rounded-md border px-3 py-1.5 text-sm hover:bg-muted"
                >
                  {date}
                </Link>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-sm text-muted-foreground">暂无历史日期数据。</p>
          )}
        </section>

        <section className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold">GitHub Trending 有什么用？</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            如果你在找值得学习的新项目、关注不同语言的生态变化，或评估某类技术的热度，按日期浏览 Trending 归档比只看当天榜单更有参考价值。
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            本站会持续更新每日榜单，帮助你回溯趋势变化，而不只是看到一次性的热点。
          </p>
        </section>
      </div>
    </main>
  );
}

