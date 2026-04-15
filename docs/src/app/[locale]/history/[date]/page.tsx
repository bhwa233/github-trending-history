import type { Metadata } from 'next';
import Link from 'next/link';
import dayjs from 'dayjs';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DatePicker } from '@/components/DayPicker';
import { getAvailableDates, getBaseUrl } from '@/lib/trending-data';
import { DEFAULT_LOCALE, isLocale, LOCALES, type SiteLocale } from '@/i18n/config';
import { getMessages } from '@/i18n/messages';
import { formatDisplayDate } from '@/i18n/format';

export const revalidate = 3600;

interface HotsProps {
  params: Promise<{ locale: string; date: string }>;
  searchParams: Promise<{}>;
}

const datePattern = /^\d{4}-\d{2}-\d{2}$/;

function parseDateParam(date: string) {
  if (!datePattern.test(date)) {
    return null;
  }

  const parsed = dayjs(date);
  if (!parsed.isValid() || parsed.format('YYYY-MM-DD') !== date) {
    return null;
  }

  return parsed;
}

interface GitHubRepo {
  index: number;
  fullName: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  todayStars: number;
  url: string;
  aiSummary?: {
    summary: string;
    summary_en?: string;
    techStack: string[];
    useCase: string;
    useCase_en?: string;
  };
  errorMessage?: string;
}

interface GitHubTrendingData {
  date: string;
  since: string;
  totalRepos: number;
  successCount: number;
  failedCount: number;
  repos: GitHubRepo[];
  metadata: {
    createdAt: string;
    duration: string;
    version: string;
  };
}

async function getData(date: string): Promise<GitHubTrendingData | null> {
  try {
    const res = await fetch(
      `https://raw.githubusercontent.com/lxw15337674/github-trending-history/refs/heads/master/api/github/${date}.json`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) {
      return null;
    }
    return res.json();
  } catch {
    return null;
  }
}

function localizedPath(locale: SiteLocale, path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${normalized}`;
}

export async function generateStaticParams() {
  const dates = await getAvailableDates();
  return LOCALES.flatMap((locale) => dates.map((date) => ({ locale, date })));
}

export async function generateMetadata(props: HotsProps): Promise<Metadata> {
  const params = await props.params;
  const { locale: localeParam, date } = params;

  if (!isLocale(localeParam)) {
    return {};
  }

  const locale = localeParam as SiteLocale;
  const messages = getMessages(locale);
  const parsedDate = parseDateParam(date);

  if (!parsedDate) {
    return {
      title: messages.states.notFoundPageTitle,
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const availableDates = await getAvailableDates();
  if (!availableDates.includes(date)) {
    return {
      title: messages.states.notFoundPageTitle,
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const baseUrl = getBaseUrl();
  const pageUrl = `${baseUrl}/${locale}/history/${date}`;
  const formattedDate = formatDisplayDate(parsedDate.format('YYYY-MM-DD'), locale);
  const normalizedDate = parsedDate.format('YYYY-MM-DD');
  const data = await getData(normalizedDate);

  if (!data || data.repos.length === 0) {
    return {
      title: messages.history.pageTitle(formattedDate),
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const description = messages.history.pageDescription(formattedDate);

  return {
    title: messages.history.pageTitle(formattedDate),
    description,
    keywords:
      locale === 'en'
        ? [`GitHub Trending ${date}`, `${formattedDate} open source projects`, 'GitHub hot projects', 'tech trends']
        : [`GitHub Trending ${date}`, `${formattedDate}开源项目`, 'GitHub 热门', '开源项目', '技术趋势'],
    openGraph: {
      title: messages.history.pageTitle(formattedDate),
      description,
      url: pageUrl,
      type: 'article',
      publishedTime: parsedDate.toISOString(),
      modifiedTime: new Date().toISOString(),
      section: 'GitHub Trending',
      authors: [messages.siteName],
      images: [
        {
          url: `${baseUrl}/logo.svg`,
          width: 1200,
          height: 630,
          alt: messages.history.pageTitle(formattedDate),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.history.pageTitle(formattedDate),
      description,
      images: [`${baseUrl}/logo.svg`],
    },
    alternates: {
      canonical: pageUrl,
      languages: {
        'zh-CN': `${baseUrl}/zh-CN/history/${date}`,
        en: `${baseUrl}/en/history/${date}`,
        'x-default': `${baseUrl}/${DEFAULT_LOCALE}/history/${date}`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Hots(props: HotsProps) {
  const params = await props.params;
  const { locale: localeParam, date } = params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as SiteLocale;
  const messages = getMessages(locale);
  const availableDates = await getAvailableDates();
  if (availableDates.length === 0) {
    notFound();
  }

  const parsedDate = parseDateParam(date);
  if (!parsedDate) {
    notFound();
  }

  const normalizedDate = parsedDate.format('YYYY-MM-DD');
  const currentDateIndex = availableDates.indexOf(normalizedDate);
  if (currentDateIndex < 0) {
    notFound();
  }

  const data = await getData(normalizedDate);
  if (!data || data.repos.length === 0) {
    notFound();
  }

  const repos = data.repos;
  const formattedDate = formatDisplayDate(parsedDate.format('YYYY-MM-DD'), locale);
  const baseUrl = getBaseUrl();
  const prevDate = currentDateIndex > 0 ? dayjs(availableDates[currentDateIndex - 1]) : null;
  const nextDate = currentDateIndex < availableDates.length - 1 ? dayjs(availableDates[currentDateIndex + 1]) : null;
  const firstAvailableDate = availableDates[0];
  const latestAvailableDate = availableDates[availableDates.length - 1];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: messages.history.pageTitle(formattedDate),
    description: messages.history.listDescription(formattedDate),
    url: `${baseUrl}/${locale}/history/${normalizedDate}`,
    datePublished: parsedDate.toISOString(),
    dateModified: new Date().toISOString(),
    itemListElement: repos.slice(0, 10).map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareSourceCode',
        name: item.fullName,
        description: (locale === 'en' ? item.aiSummary?.summary_en : undefined) || item.aiSummary?.summary || item.description,
        url: item.url,
        datePublished: parsedDate.toISOString(),
        programmingLanguage: item.language || messages.labels.unknown,
        author: {
          '@type': 'Organization',
          name: item.fullName.split('/')[0],
        },
      },
    })),
    publisher: {
      '@type': 'Organization',
      name: messages.siteName,
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
        name: messages.breadcrumbs.history,
        item: `${baseUrl}/${locale}/history/${normalizedDate}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <main className="p-5 lg:p-0 lg:pt-5">
        <div className="mx-auto max-w-[980px]">
          <h1 className="mb-3 text-2xl font-semibold tracking-tight">{messages.history.pageTitle(formattedDate)}</h1>
          <Menubar className="flex justify-between">
            <MenubarMenu>
              {prevDate ? (
                <Link href={localizedPath(locale, `/history/${prevDate.format('YYYY-MM-DD')}`)}>
                  <MenubarTrigger className="cursor-pointer">{messages.actions.prevDay}</MenubarTrigger>
                </Link>
              ) : (
                <MenubarTrigger className="opacity-50 cursor-not-allowed" aria-disabled>
                  {messages.actions.prevDay}
                </MenubarTrigger>
              )}
            </MenubarMenu>
            <MenubarMenu>
              <DatePicker
                value={normalizedDate}
                minDate={firstAvailableDate}
                maxDate={latestAvailableDate}
                locale={locale}
                placeholder={messages.actions.pickDate}
              />
            </MenubarMenu>
            <MenubarMenu>
              {nextDate ? (
                <Link href={localizedPath(locale, `/history/${nextDate.format('YYYY-MM-DD')}`)}>
                  <MenubarTrigger className="cursor-pointer">{messages.actions.nextDay}</MenubarTrigger>
                </Link>
              ) : (
                <MenubarTrigger className="opacity-50 cursor-not-allowed" aria-disabled>
                  {messages.actions.nextDay}
                </MenubarTrigger>
              )}
            </MenubarMenu>
          </Menubar>
        </div>

        <div className="mx-auto max-w-[980px] mt-4 mb-4">
          {data && (
            <div className="flex justify-between items-center text-sm text-muted-foreground px-2">
              <span>
                {messages.labels.success}: {data.successCount} | {messages.labels.failed}: {data.failedCount}
              </span>
              <span>
                {messages.labels.duration}: {data.metadata.duration}
              </span>
            </div>
          )}
        </div>

        <div className="mx-auto flex max-w-[980px] flex-col gap-3 pb-8">
          {repos.map((repo: GitHubRepo) => {
            const summary = (locale === 'en' ? repo.aiSummary?.summary_en : undefined) || repo.aiSummary?.summary;
            const useCase = (locale === 'en' ? repo.aiSummary?.useCase_en : undefined) || repo.aiSummary?.useCase;

            return (
              <Card key={repo.fullName} className="hover:bg-muted/30 transition-colors">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4 mb-2">
                    <CardTitle className="text-xl">
                      <a href={repo.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {repo.fullName}
                      </a>
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 md:flex-shrink-0 items-start">
                      <Badge variant="secondary" className="text-xs">⭐ {repo.stars.toLocaleString(locale === 'en' ? 'en-US' : 'zh-CN')}</Badge>
                      <Badge variant="secondary" className="text-xs">🍴 {repo.forks.toLocaleString(locale === 'en' ? 'en-US' : 'zh-CN')}</Badge>
                      <Badge variant="outline" className="text-xs font-medium text-orange-600 dark:text-orange-400 border-orange-300 dark:border-orange-700">
                        📈 +{repo.todayStars.toLocaleString(locale === 'en' ? 'en-US' : 'zh-CN')}
                      </Badge>
                      {repo.language && (
                        <Badge variant="default" className="text-xs">{repo.language}</Badge>
                      )}
                    </div>
                  </div>
                  <CardDescription className="text-base">{repo.description || messages.labels.noDescription}</CardDescription>
                </CardHeader>

                {repo.aiSummary && !repo.errorMessage && (
                  <CardContent className="pt-0">
                    <div className="border-t pt-4 space-y-2">
                      <div>
                        <span className="text-sm font-semibold">{messages.history.aiSummary}</span>
                        <p className="text-sm text-muted-foreground mt-1">{summary}</p>
                      </div>
                      <div className="flex gap-4 text-sm">
                        <div>
                          <span className="font-semibold">{messages.history.techStack}</span>
                          <span className="text-muted-foreground">{repo.aiSummary.techStack.join(', ')}</span>
                        </div>
                      </div>
                      {useCase && (
                        <div className="text-sm">
                          <span className="font-semibold">{messages.history.useCase}</span>
                          <span className="text-muted-foreground">{useCase}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                )}

                {repo.errorMessage && (
                  <CardContent className="pt-0">
                    <div className="border-t pt-4">
                      <Badge variant="destructive">{messages.history.aiSummaryFailed}</Badge>
                      <p className="text-xs text-muted-foreground mt-2">{repo.errorMessage.slice(0, 100)}...</p>
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>
      </main>
    </>
  );
}
