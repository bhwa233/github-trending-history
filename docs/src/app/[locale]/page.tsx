import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBaseUrl } from '@/lib/trending-data';
import { getMessages } from '@/i18n/messages';
import { DEFAULT_LOCALE, isLocale, type SiteLocale } from '@/i18n/config';
import { HomeLatest } from '@/components/HomeLatest';

export const dynamicParams = false;

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata(props: HomePageProps): Promise<Metadata> {
  const { locale: localeParam } = await props.params;
  if (!isLocale(localeParam)) {
    return {};
  }

  const locale = localeParam;
  const messages = getMessages(locale);
  const baseUrl = getBaseUrl();
  const localizedBaseUrl = `${baseUrl}/${locale}`;
  const description = messages.seo.defaultDescription;

  return {
    title: messages.siteName,
    description,
    keywords:
      locale === 'en'
        ? ['GitHub Trending History', 'GitHub Trending Today', 'Open Source Projects', 'Daily Open Source Trends']
        : ['GitHub Trending 历史', 'GitHub Trending 今日', 'GitHub 热门开源项目', '每日开源项目趋势', 'GitHub 趋势榜归档'],
    alternates: {
      canonical: localizedBaseUrl,
      languages: {
        'zh-CN': `${baseUrl}/zh-CN`,
        en: `${baseUrl}/en`,
        'x-default': `${baseUrl}/${DEFAULT_LOCALE}`,
      },
    },
    openGraph: {
      title: messages.siteName,
      description,
      url: localizedBaseUrl,
      images: [`${baseUrl}/logo.svg`],
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.siteName,
      description,
      images: [`${baseUrl}/logo.svg`],
    },
  };
}

export default async function HomePage(props: HomePageProps) {
  const { locale: localeParam } = await props.params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as SiteLocale;
  const messages = getMessages(locale);

  return (
    <main className="p-5 lg:p-0 lg:pt-8">
      <div className="mx-auto flex max-w-[980px] flex-col gap-6 pb-10">
        <section className="rounded-lg border bg-card p-6">
          <h1 className="text-2xl font-semibold tracking-tight">{messages.home.title}</h1>
          <p className="mt-3 text-muted-foreground">{messages.home.subtitle}</p>
        </section>

        <HomeLatest locale={locale} />

        <section className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold">{messages.home.whyTitle}</h2>
          <p className="mt-3 text-sm text-muted-foreground">{messages.home.whyBody1}</p>
          <p className="mt-2 text-sm text-muted-foreground">{messages.home.whyBody2}</p>
        </section>
      </div>
    </main>
  );
}
