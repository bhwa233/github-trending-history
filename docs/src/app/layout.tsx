import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from '@/components/SiteHeader';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] });
const defaultBaseUrl = 'https://github-trending-history.vercel.app';
const siteBaseUrl = (process.env.NEXT_PUBLIC_BASE_URL || defaultBaseUrl).replace(/\/+$/, '');

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(siteBaseUrl),
    title: {
      default: 'GitHub Trending 归档',
      template: '%s | GitHub Trending 归档'
    },
    description: '每日 GitHub Trending 开源项目归档，追踪最热门的开源项目和技术趋势。支持按日期查看历史数据，AI 总结项目要点。',
    keywords: ['GitHub Trending', 'GitHub 趋势', '开源项目', '项目归档', '技术趋势', 'GitHub 数据', '开源归档', '每日趋势'],
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
    openGraph: {
      type: 'website',
      locale: 'zh_CN',
      url: siteBaseUrl,
      title: 'GitHub Trending 归档 - 每日热门开源项目记录',
      description: '每日 GitHub Trending 开源项目归档，追踪最热门的开源项目和技术趋势。',
      siteName: 'GitHub Trending 归档',
      images: [
        {
          url: `${siteBaseUrl}/logo.svg`,
          width: 1200,
          height: 630,
          alt: 'GitHub Trending 归档',
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'GitHub Trending 归档 - 每日热门开源项目记录',
      description: '每日 GitHub Trending 开源项目归档，追踪最热门的开源项目和技术趋势。',
      images: [`${siteBaseUrl}/logo.svg`],
      creator: '@github_trending',
    },
    category: 'technology',
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="GitHub Trending" />
        <meta name="format-detection" content="telephone=no" />

        {/* 结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "GitHub Trending 归档",
              "description": "每日 GitHub Trending 开源项目归档，追踪最热门的开源项目和技术趋势。",
              "url": siteBaseUrl,
              "publisher": {
                "@type": "Organization",
                "name": "GitHub Trending 归档"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader/>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
