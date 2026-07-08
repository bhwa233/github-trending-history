import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getBaseUrl,
  getLanguageSlug,
  getLatestAvailableData,
  getTopLanguages,
} from '@/lib/trending-data';
import { DEFAULT_LOCALE, isLocale, type SiteLocale } from '@/i18n/config';
import { getMessages } from '@/i18n/messages';


interface LanguagesPageProps {
  params: Promise<{ locale: string }>;
}

function localizedPath(locale: SiteLocale, path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${normalized}`;
}

export async function generateMetadata(props: LanguagesPageProps): Promise<Metadata> {
  const { locale: localeParam } = await props.params;
  if (!isLocale(localeParam)) {
    return {};
  }

  const locale = localeParam;
  const messages = getMessages(locale);
  const baseUrl = getBaseUrl();
  const latest = await getLatestAvailableData();
  const latestDate = latest?.date;
  const topLanguages = getTopLanguages(latest?.data.repos || [], 30, messages.labels.unknown);
  const description = latestDate
    ? locale === 'en'
      ? `Browse GitHub Trending projects by language on ${latestDate}, covering ${topLanguages.length} language categories.`
      : `按编程语言浏览 ${latestDate} 的 GitHub Trending 热门项目，共覆盖 ${topLanguages.length} 个语言分类。`
    : locale === 'en'
      ? 'Browse latest GitHub Trending projects by language and quickly inspect trends per stack.'
      : '按编程语言浏览最新 GitHub Trending 热门项目，快速查看各技术栈的当日趋势。';

  return {
    title: messages.languages.listTitle,
    description,
    keywords:
      locale === 'en'
        ? ['GitHub Trending languages', 'Popular GitHub languages', 'Open-source language trends']
        : ['GitHub Trending 语言榜单', 'GitHub 热门语言', '开源项目语言趋势', '编程语言热度'],
    alternates: {
      canonical: `${baseUrl}/${locale}/languages`,
      languages: {
        'zh-CN': `${baseUrl}/zh-CN/languages`,
        en: `${baseUrl}/en/languages`,
        'x-default': `${baseUrl}/${DEFAULT_LOCALE}/languages`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: messages.languages.listTitle,
      description,
      url: `${baseUrl}/${locale}/languages`,
      images: [`${baseUrl}/logo.svg`],
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.languages.listTitle,
      description,
      images: [`${baseUrl}/logo.svg`],
    },
  };
}

export default async function LanguagesPage(props: LanguagesPageProps) {
  const { locale: localeParam } = await props.params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as SiteLocale;
  const messages = getMessages(locale);
  const baseUrl = getBaseUrl();
  const latest = await getLatestAvailableData();
  const latestDate = latest?.date;
  const topLanguages = getTopLanguages(latest?.data.repos || [], 30, messages.labels.unknown);

  const collectionStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: messages.languages.listTitle,
    description: messages.languages.listDescription(latestDate || null),
    url: `${baseUrl}/${locale}/languages`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: topLanguages.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Thing',
          name: item.language,
          url: `${baseUrl}/${locale}/languages/${getLanguageSlug(item.language)}`,
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
          <h1 className="text-2xl font-semibold tracking-tight">{messages.languages.listTitle}</h1>
          <p className="mt-3 text-muted-foreground">{messages.languages.listDescription(latestDate || null)}</p>
          <div className="mt-5">
            <Link href={localizedPath(locale, '/')} className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              {messages.actions.backHome}
            </Link>
          </div>
        </section>

        <section className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold">{messages.labels.languageEntries}</h2>
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
      </div>
    </main>
  );
}
