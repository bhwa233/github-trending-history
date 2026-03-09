import type { Metadata } from 'next';
import Link from 'next/link';
import dayjs from 'dayjs';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DatePicker } from '@/components/DayPicker';
import { getAvailableDates, getBaseUrl } from '@/lib/trending-data';

export const revalidate = 3600;

interface HotsProps {
  params: Promise<{ date: string }>;
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
    techStack: string[];
    useCase: string;
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

export async function generateStaticParams() {
  const dates = await getAvailableDates();
  return dates.map((date) => ({ date }));
}

export async function generateMetadata(props: HotsProps): Promise<Metadata> {
  const params = await props.params;
  const date = params.date;
  const parsedDate = parseDateParam(date);

  if (!parsedDate) {
    return {
      title: '页面未找到',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const availableDates = await getAvailableDates();
  if (!availableDates.includes(date)) {
    return {
      title: '页面未找到',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const baseUrl = getBaseUrl();

  const pageUrl = `${baseUrl}/history/${date}`;
  const formattedDate = parsedDate.format('YYYY年MM月DD日');
  const normalizedDate = parsedDate.format('YYYY-MM-DD');
  const data = await getData(normalizedDate);

  if (!data || data.repos.length === 0) {
    return {
      title: `${formattedDate} GitHub Trending 榜单`,
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${formattedDate} GitHub Trending 榜单`,
    description: `查看${formattedDate}的 GitHub Trending 榜单，发现当日最热门的开源项目和技术趋势。`,
    keywords: [`GitHub Trending ${date}`, `${formattedDate}开源项目`, 'GitHub 热门', '开源项目', '技术趋势'],
    openGraph: {
      title: `${formattedDate} GitHub Trending 榜单`,
      description: `查看${formattedDate}的 GitHub Trending 榜单，发现当日最热门的开源项目。`,
      url: pageUrl,
      type: 'article',
      publishedTime: parsedDate.toISOString(),
      modifiedTime: new Date().toISOString(),
      section: 'GitHub Trending',
      authors: ['GitHub Trending 归档'],
      images: [
        {
          url: `${baseUrl}/logo.svg`,
          width: 1200,
          height: 630,
          alt: `${formattedDate} GitHub Trending 榜单`,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${formattedDate} GitHub Trending 榜单`,
      description: `发现${formattedDate}最热门的开源项目`,
      images: [`${baseUrl}/logo.svg`],
    },
    alternates: {
      canonical: pageUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Hots(props: HotsProps) {
  const params = await props.params;

  const {
    date
  } = params;

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
  const formattedDate = parsedDate.format('YYYY年MM月DD日');
  const baseUrl = getBaseUrl();
  const prevDate = currentDateIndex > 0 ? dayjs(availableDates[currentDateIndex - 1]) : null;
  const nextDate = currentDateIndex < availableDates.length - 1 ? dayjs(availableDates[currentDateIndex + 1]) : null;
  const firstAvailableDate = availableDates[0];
  const latestAvailableDate = availableDates[availableDates.length - 1];

  // 生成结构化数据
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${formattedDate} GitHub Trending 榜单`,
    "description": `${formattedDate}的 GitHub Trending 排行榜，包含当日最热门的开源项目`,
    "url": `${baseUrl}/history/${normalizedDate}`,
    "datePublished": parsedDate.toISOString(),
    "dateModified": new Date().toISOString(),
    "itemListElement": repos.slice(0, 10).map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareSourceCode",
        "name": item.fullName,
        "description": item.aiSummary?.summary || item.description,
        "url": item.url,
        "datePublished": parsedDate.toISOString(),
        "programmingLanguage": item.language || "Unknown",
        "author": {
          "@type": "Organization",
          "name": item.fullName.split('/')[0]
        },
      }
    })),
    "publisher": {
      "@type": "Organization",
      "name": "GitHub Trending 归档"
    }
  };
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "首页",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "历史榜单",
        "item": `${baseUrl}/history/${normalizedDate}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData)
        }}
      />
      <main className="p-5 lg:p-0 lg:pt-5">
        <div className="mx-auto max-w-[980px]">
          <h1 className="mb-3 text-2xl font-semibold tracking-tight">{formattedDate} GitHub Trending 榜单</h1>
          <Menubar className="flex justify-between">
            <MenubarMenu>
              {prevDate ? (
                <Link href={`/history/${prevDate.format('YYYY-MM-DD')}`}>
                  <MenubarTrigger className="cursor-pointer">前一天</MenubarTrigger>
                </Link>
              ) : (
                <MenubarTrigger className="opacity-50 cursor-not-allowed" aria-disabled>
                  前一天
                </MenubarTrigger>
              )}
            </MenubarMenu>
            <MenubarMenu>
              <DatePicker value={normalizedDate} minDate={firstAvailableDate} maxDate={latestAvailableDate} />
            </MenubarMenu>
            <MenubarMenu>
              {nextDate ? (
                <Link href={`/history/${nextDate.format('YYYY-MM-DD')}`}>
                  <MenubarTrigger className="cursor-pointer">后一天</MenubarTrigger>
                </Link>
              ) : (
                <MenubarTrigger className="opacity-50 cursor-not-allowed" aria-disabled>
                  后一天
                </MenubarTrigger>
              )}
            </MenubarMenu>
          </Menubar>
        </div>

        <div className="mx-auto max-w-[980px] mt-4 mb-4">
          {data && (
            <div className="flex justify-between items-center text-sm text-muted-foreground px-2">
              <span>成功: {data.successCount} | 失败: {data.failedCount}</span>
              <span>耗时: {data.metadata.duration}</span>
            </div>
          )}
        </div>

        <div className="mx-auto flex max-w-[980px] flex-col gap-3 pb-8">
          {repos.map((repo: GitHubRepo) => {
            return (
              <Card key={repo.fullName} className="hover:bg-muted/30 transition-colors">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4 mb-2">
                    <CardTitle className="text-xl">
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {repo.fullName}
                      </a>
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 md:flex-shrink-0 items-start">
                      <Badge variant="secondary" className="text-xs">
                        ⭐ {repo.stars.toLocaleString()}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        🍴 {repo.forks.toLocaleString()}
                      </Badge>
                      <Badge variant="outline" className="text-xs font-medium text-orange-600 dark:text-orange-400 border-orange-300 dark:border-orange-700">
                        📈 +{repo.todayStars.toLocaleString()}
                      </Badge>
                      {repo.language && (
                        <Badge variant="default" className="text-xs">
                          {repo.language}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {repo.description || "无描述"}
                  </CardDescription>
                </CardHeader>

                {repo.aiSummary && !repo.errorMessage && (
                  <CardContent className="pt-0">
                    <div className="border-t pt-4 space-y-2">
                      <div>
                        <span className="text-sm font-semibold">💡 AI 总结：</span>
                        <p className="text-sm text-muted-foreground mt-1">{repo.aiSummary.summary}</p>
                      </div>
                      <div className="flex gap-4 text-sm">
                        <div>
                          <span className="font-semibold">🔧 技术栈：</span>
                          <span className="text-muted-foreground">{repo.aiSummary.techStack.join(', ')}</span>
                        </div>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold">💼 适用场景：</span>
                        <span className="text-muted-foreground">{repo.aiSummary.useCase}</span>
                      </div>
                    </div>
                  </CardContent>
                )}

                {repo.errorMessage && (
                  <CardContent className="pt-0">
                    <div className="border-t pt-4">
                      <Badge variant="destructive">AI 总结失败</Badge>
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

