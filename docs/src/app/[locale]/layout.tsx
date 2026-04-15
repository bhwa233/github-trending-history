import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { Analytics } from '@vercel/analytics/next';
import { ThemeProvider } from '@/components/theme-provider';
import { SiteHeader } from '@/components/SiteHeader';
import { DEFAULT_BASE_URL } from '@/lib/trending-data';
import { DEFAULT_LOCALE, isLocale, LOCALES, type SiteLocale } from '@/i18n/config';
import { getMessages } from '@/i18n/messages';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });
const siteBaseUrl = (process.env.NEXT_PUBLIC_BASE_URL || DEFAULT_BASE_URL).replace(/\/+$/, '');

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

function getOgLocale(locale: SiteLocale) {
  return locale === 'en' ? 'en_US' : 'zh_CN';
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata(props: LocaleLayoutProps): Promise<Metadata> {
  const { locale: localeParam } = await props.params;
  const locale = isLocale(localeParam) ? localeParam : DEFAULT_LOCALE;
  const messages = getMessages(locale);
  const localeBase = `${siteBaseUrl}/${locale}`;

  return {
    metadataBase: new URL(siteBaseUrl),
    title: {
      default: messages.siteName,
      template: `%s | ${messages.siteName}`,
    },
    description: messages.seo.defaultDescription,
    keywords:
      locale === 'en'
        ? ['GitHub Trending', 'Open source projects', 'Tech trends', 'Project archive', 'Daily trends']
        : ['GitHub Trending', 'GitHub 趋势', '开源项目', '项目归档', '技术趋势', 'GitHub 数据', '开源归档', '每日趋势'],
    authors: [{ name: 'GitHub Trending History' }],
    creator: 'GitHub Trending History',
    publisher: 'GitHub Trending History',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    manifest: '/manifest.json',
    alternates: {
      canonical: localeBase,
      languages: {
        'zh-CN': `${siteBaseUrl}/zh-CN`,
        en: `${siteBaseUrl}/en`,
        'x-default': `${siteBaseUrl}/${DEFAULT_LOCALE}`,
      },
    },
    openGraph: {
      type: 'website',
      locale: getOgLocale(locale),
      url: localeBase,
      title: locale === 'en' ? `${messages.siteName} - Daily Open Source Snapshot` : `${messages.siteName} - 每日热门开源项目记录`,
      description: messages.seo.defaultDescription,
      siteName: messages.siteName,
      images: [
        {
          url: `${siteBaseUrl}/logo.svg`,
          width: 1200,
          height: 630,
          alt: messages.siteName,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: locale === 'en' ? `${messages.siteName} - Daily Open Source Snapshot` : `${messages.siteName} - 每日热门开源项目记录`,
      description: messages.seo.defaultDescription,
      images: [`${siteBaseUrl}/logo.svg`],
      creator: '@github_trending',
    },
    category: 'technology',
  };
}

export default async function LocaleLayout(props: LocaleLayoutProps) {
  const { children, params } = props;
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as SiteLocale;
  const messages = getMessages(locale);

  return (
    <html lang={locale === 'en' ? 'en-US' : 'zh-CN'} suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="GitHub Trending" />
        <meta name="format-detection" content="telephone=no" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: messages.siteName,
              description: messages.seo.defaultDescription,
              url: `${siteBaseUrl}/${locale}`,
              publisher: {
                '@type': 'Organization',
                name: messages.siteName,
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SiteHeader locale={locale} />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
