import type { Metadata } from 'next';
import Link from 'next/link';
import {
  getBaseUrl,
  getLanguageSlug,
  getLatestAvailableData,
  getTopLanguages,
} from '@/lib/trending-data';

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = getBaseUrl();
  const latest = await getLatestAvailableData();
  const latestDate = latest?.date;
  const topLanguages = getTopLanguages(latest?.data.repos || [], 30);
  const description = latestDate
    ? `按编程语言浏览 ${latestDate} 的 GitHub Trending 热门项目，共覆盖 ${topLanguages.length} 个语言分类。`
    : '按编程语言浏览最新 GitHub Trending 热门项目，快速查看各技术栈的当日趋势。';

  return {
    title: 'GitHub Trending 语言榜单',
    description,
    keywords: ['GitHub Trending 语言榜单', 'GitHub 热门语言', '开源项目语言趋势', '编程语言热度'],
    alternates: {
      canonical: `${baseUrl}/languages`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: 'GitHub Trending 语言榜单',
      description,
      url: `${baseUrl}/languages`,
      images: [`${baseUrl}/logo.svg`],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'GitHub Trending 语言榜单',
      description,
      images: [`${baseUrl}/logo.svg`],
    },
  };
}

export default async function LanguagesPage() {
  const baseUrl = getBaseUrl();
  const latest = await getLatestAvailableData();
  const latestDate = latest?.date;
  const topLanguages = getTopLanguages(latest?.data.repos || [], 30);
  const collectionStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'GitHub Trending 语言榜单',
    description: '按编程语言浏览最新 GitHub Trending 热门项目。',
    url: `${baseUrl}/languages`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: topLanguages.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Thing',
          name: item.language,
          url: `${baseUrl}/languages/${getLanguageSlug(item.language)}`,
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
        name: '语言榜单',
        item: `${baseUrl}/languages`,
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
          <h1 className="text-2xl font-semibold tracking-tight">GitHub Trending 语言榜单</h1>
          <p className="mt-3 text-muted-foreground">
            {latestDate
              ? `基于 ${latestDate} 的最新榜单，按编程语言聚合热门开源项目。`
              : '暂时无法获取最新榜单数据。'}
          </p>
          <div className="mt-5">
            <Link href="/" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              返回首页
            </Link>
          </div>
        </section>

        <section className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold">语言入口</h2>
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
      </div>
    </main>
  );
}
