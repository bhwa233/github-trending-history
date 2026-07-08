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
import { DEFAULT_LOCALE, isLocale, LOCALES, type SiteLocale } from '@/i18n/config';
import { getMessages } from '@/i18n/messages';

export const dynamicParams = false;

interface LanguagePageProps {
  params: Promise<{ locale: string; language: string }>;
}

function getLanguageFromParam(languageParam: string) {
  try {
    return decodeURIComponent(languageParam);
  } catch {
    return languageParam;
  }
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

  const languages = getTopLanguages(latest.data.repos, 30, 'Unknown').map((item) => ({
    language: getLanguageSlug(item.language),
  }));

  return LOCALES.flatMap((locale) => languages.map((item) => ({ locale, language: item.language })));
}

export async function generateMetadata(props: LanguagePageProps): Promise<Metadata> {
  const { locale: localeParam, language: languageParam } = await props.params;
  if (!isLocale(localeParam)) {
    return {};
  }

  const locale = localeParam;
  const messages = getMessages(locale);
  const languageInput = normalizeLanguage(getLanguageFromParam(languageParam), messages.labels.unknown);
  const baseUrl = getBaseUrl();
  const latest = await getLatestAvailableData();
  const matchedRepos = latest?.data.repos.filter((repo) => languageEquals(repo.language, languageInput, messages.labels.unknown)) || [];
  const displayLanguage = matchedRepos[0]
    ? normalizeLanguage(matchedRepos[0].language, messages.labels.unknown)
    : languageInput;

  if (!latest || matchedRepos.length === 0) {
    return {
      title: locale === 'en' ? `${displayLanguage} Trending Projects` : `${displayLanguage} Trending 项目`,
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalPath = `/languages/${getLanguageSlug(displayLanguage)}`;
  const description = locale === 'en'
    ? `${displayLanguage} GitHub Trending projects on ${latest.date}, with ${matchedRepos.length} popular repositories.`
    : `${latest.date} 的 ${displayLanguage} GitHub Trending 项目，共 ${matchedRepos.length} 个热门仓库。`;

  return {
    title: messages.languages.detailTitle(displayLanguage),
    description,
    keywords:
      locale === 'en'
        ? [`${displayLanguage} GitHub Trending`, `${displayLanguage} popular open source projects`, `${displayLanguage} project recommendations`]
        : [`${displayLanguage} GitHub Trending`, `${displayLanguage} 热门开源项目`, `${displayLanguage} 项目推荐`],
    alternates: {
      canonical: `${baseUrl}/${locale}${canonicalPath}`,
      languages: {
        'zh-CN': `${baseUrl}/zh-CN${canonicalPath}`,
        en: `${baseUrl}/en${canonicalPath}`,
        'x-default': `${baseUrl}/${DEFAULT_LOCALE}${canonicalPath}`,
      },
    },
    openGraph: {
      title: messages.languages.detailTitle(displayLanguage),
      description,
      url: `${baseUrl}/${locale}${canonicalPath}`,
      type: 'website',
      images: [`${baseUrl}/logo.svg`],
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.languages.detailTitle(displayLanguage),
      description,
      images: [`${baseUrl}/logo.svg`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LanguageDetailPage(props: LanguagePageProps) {
  const { locale: localeParam, language: languageParam } = await props.params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as SiteLocale;
  const messages = getMessages(locale);
  const languageInput = normalizeLanguage(getLanguageFromParam(languageParam), messages.labels.unknown);
  const latest = await getLatestAvailableData();

  if (!latest) {
    notFound();
  }

  const matchedRepos = latest.data.repos.filter((repo) => languageEquals(repo.language, languageInput, messages.labels.unknown));
  if (matchedRepos.length === 0) {
    notFound();
  }

  const displayLanguage = normalizeLanguage(matchedRepos[0].language, messages.labels.unknown);
  const baseUrl = getBaseUrl();
  const languageUrl = `${baseUrl}/${locale}/languages/${getLanguageSlug(displayLanguage)}`;

  const recentData = await getRecentAvailableData(7, 30);
  const languageTrend = recentData
    .map((item) => ({
      date: item.date,
      count: item.data.repos.filter((repo) => languageEquals(repo.language, displayLanguage, messages.labels.unknown)).length,
    }))
    .reverse();

  const collectionStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: messages.languages.detailTitle(displayLanguage),
    description: messages.languages.detailDescription(latest.date, matchedRepos.length, displayLanguage),
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
          programmingLanguage: normalizeLanguage(repo.language, messages.labels.unknown),
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
        name: messages.breadcrumbs.languages,
        item: `${baseUrl}/${locale}/languages`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: displayLanguage,
        item: languageUrl,
      },
    ],
  };

  const peerLanguages = getTopLanguages(latest.data.repos, 12, messages.labels.unknown)
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
          <h1 className="text-2xl font-semibold tracking-tight">{messages.languages.detailTitle(displayLanguage)}</h1>
          <p className="mt-3 text-muted-foreground">
            {messages.languages.detailDescription(latest.date, matchedRepos.length, displayLanguage)}
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <Link href={localizedPath(locale, '/languages')} className="underline-offset-4 hover:underline">
              {messages.actions.backLanguages}
            </Link>
            <Link href={localizedPath(locale, `/history/${latest.date}`)} className="underline-offset-4 hover:underline">
              {messages.actions.viewFullDateBoard}
            </Link>
          </div>
        </section>

        <section className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold">{messages.languages.reposTitle(displayLanguage)}</h2>
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
                  {messages.labels.totalStars}：{repo.stars.toLocaleString(locale === 'en' ? 'en-US' : 'zh-CN')} · {messages.labels.todayStars}：+
                  {repo.todayStars.toLocaleString(locale === 'en' ? 'en-US' : 'zh-CN')}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold">{messages.labels.recentValidDaysTrend}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {languageTrend.map((point) => (
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
          <h2 className="text-lg font-semibold">{messages.labels.exploreOtherLanguages}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {peerLanguages.map((item) => (
              <Link
                key={item.language}
                href={localizedPath(locale, `/languages/${getLanguageSlug(item.language)}`)}
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
