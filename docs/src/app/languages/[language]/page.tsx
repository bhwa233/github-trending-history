import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getBaseUrl,
  getLanguageSlug,
  getLatestAvailableData,
  getRecentAvailableData,
  getTopLanguages,
  languageEquals,
  normalizeLanguage,
} from '@/lib/trending-data';

interface LanguagePageProps {
  params: Promise<{ language: string }>;
}

function getLanguageFromParam(languageParam: string) {
  try {
    return decodeURIComponent(languageParam);
  } catch {
    return languageParam;
  }
}

export async function generateMetadata(props: LanguagePageProps): Promise<Metadata> {
  const { language: languageParam } = await props.params;
  const languageInput = normalizeLanguage(getLanguageFromParam(languageParam));
  const baseUrl = getBaseUrl();
  const latest = await getLatestAvailableData();
  const matchedRepos = latest?.data.repos.filter((repo) => languageEquals(repo.language, languageInput)) || [];
  const displayLanguage = matchedRepos[0]
    ? normalizeLanguage(matchedRepos[0].language)
    : languageInput;

  if (!latest || matchedRepos.length === 0) {
    return {
      title: `${displayLanguage} Trending 项目`,
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalPath = `/languages/${getLanguageSlug(displayLanguage)}`;
  return {
    title: `${displayLanguage} GitHub Trending 热门项目`,
    description: `${latest.date} 的 ${displayLanguage} GitHub Trending 项目，共 ${matchedRepos.length} 个热门仓库。`,
    keywords: [`${displayLanguage} GitHub Trending`, `${displayLanguage} 热门开源项目`, `${displayLanguage} 项目推荐`],
    alternates: {
      canonical: `${baseUrl}${canonicalPath}`,
    },
    openGraph: {
      title: `${displayLanguage} GitHub Trending 热门项目`,
      description: `查看 ${latest.date} 最新 ${displayLanguage} 热门开源项目。`,
      url: `${baseUrl}${canonicalPath}`,
      images: [`${baseUrl}/logo.svg`],
    },
  };
}

export default async function LanguageDetailPage(props: LanguagePageProps) {
  const { language: languageParam } = await props.params;
  const languageInput = normalizeLanguage(getLanguageFromParam(languageParam));
  const latest = await getLatestAvailableData();

  if (!latest) {
    notFound();
  }

  const matchedRepos = latest.data.repos.filter((repo) => languageEquals(repo.language, languageInput));
  if (matchedRepos.length === 0) {
    notFound();
  }

  const displayLanguage = normalizeLanguage(matchedRepos[0].language);
  const baseUrl = getBaseUrl();
  const languageUrl = `${baseUrl}/languages/${getLanguageSlug(displayLanguage)}`;

  const recentData = await getRecentAvailableData(7, 30);
  const languageTrend = recentData
    .map((item) => ({
      date: item.date,
      count: item.data.repos.filter((repo) => languageEquals(repo.language, displayLanguage)).length,
    }))
    .reverse();

  const collectionStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${displayLanguage} GitHub Trending 热门项目`,
    description: `查看 ${latest.date} ${displayLanguage} 热门开源项目。`,
    url: languageUrl,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: matchedRepos.slice(0, 20).map((repo, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'SoftwareSourceCode',
          name: repo.fullName,
          url: repo.url,
          programmingLanguage: normalizeLanguage(repo.language),
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
      {
        '@type': 'ListItem',
        position: 3,
        name: displayLanguage,
        item: languageUrl,
      },
    ],
  };

  const peerLanguages = getTopLanguages(latest.data.repos, 12)
    .filter((item) => item.language.toLowerCase() !== displayLanguage.toLowerCase())
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
          <h1 className="text-2xl font-semibold tracking-tight">{displayLanguage} GitHub Trending 热门项目</h1>
          <p className="mt-3 text-muted-foreground">
            基于 {latest.date} 榜单，共收录 {matchedRepos.length} 个 {displayLanguage} 热门仓库。
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <Link href="/languages" className="underline-offset-4 hover:underline">
              返回语言榜单
            </Link>
            <Link href={`/history/${latest.date}`} className="underline-offset-4 hover:underline">
              查看完整当日榜单
            </Link>
          </div>
        </section>

        <section className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold">{displayLanguage} 热门仓库</h2>
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
                  总 Stars：{repo.stars.toLocaleString()} · 今日新增：+{repo.todayStars.toLocaleString()}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold">最近 7 个有效日期趋势</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {languageTrend.map((point) => (
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
          <h2 className="text-lg font-semibold">探索其他语言</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {peerLanguages.map((item) => (
              <Link
                key={item.language}
                href={`/languages/${getLanguageSlug(item.language)}`}
                className="rounded-md border px-3 py-1.5 text-sm hover:bg-muted"
              >
                {item.language} ({item.count})
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
