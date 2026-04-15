import { MetadataRoute } from 'next';
import dayjs from 'dayjs';
import { getAvailableDates, getBaseUrl, getLanguageSlug, getLatestAvailableData, getTopLanguages } from '@/lib/trending-data';
import { LOCALES } from '@/i18n/config';
import { getTopicStats } from '@/lib/topic-taxonomy';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getBaseUrl();
  const dates = await getAvailableDates();
  const latestDate = dates.length > 0 ? dates[dates.length - 1] : null;
  const latestDateAsDate = latestDate ? dayjs(latestDate).toDate() : new Date();
  const latest = await getLatestAvailableData();

  const routes: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    routes.push(
      {
        url: `${baseUrl}/${locale}`,
        lastModified: latestDateAsDate,
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: `${baseUrl}/${locale}/languages`,
        lastModified: latestDateAsDate,
        changeFrequency: 'daily',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/${locale}/topics`,
        lastModified: latestDateAsDate,
        changeFrequency: 'daily',
        priority: 0.8,
      }
    );

    for (const date of dates) {
      routes.push({
        url: `${baseUrl}/${locale}/history/${date}`,
        lastModified: latestDate && date === latestDate ? new Date() : dayjs(date).toDate(),
        changeFrequency: 'daily',
        priority: latestDate && date === latestDate ? 0.9 : 0.7,
      });
    }

    const languageRoutes: MetadataRoute.Sitemap = getTopLanguages(latest?.data.repos || [], 30, 'Unknown').map((item) => ({
      url: `${baseUrl}/${locale}/languages/${getLanguageSlug(item.language)}`,
      lastModified: latestDateAsDate,
      changeFrequency: 'daily' as const,
      priority: 0.6,
    }));

    const topicRoutes: MetadataRoute.Sitemap = getTopicStats(latest?.data.repos || []).map((item) => ({
      url: `${baseUrl}/${locale}/topics/${item.topic.slug}`,
      lastModified: latestDateAsDate,
      changeFrequency: 'daily' as const,
      priority: 0.6,
    }));

    routes.push(...languageRoutes, ...topicRoutes);
  }

  return routes;
}
