import { MetadataRoute } from 'next'
import dayjs from 'dayjs'
import { getAvailableDates, getBaseUrl, getLanguageSlug, getLatestAvailableData, getTopLanguages } from '@/lib/trending-data'
import { getTopicStats } from '@/lib/topic-taxonomy'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = getBaseUrl()
    const dates = await getAvailableDates()
    const latestDate = dates.length > 0 ? dates[dates.length - 1] : null

    const routes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/languages`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/topics`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        ...dates.map(date => ({
            url: `${baseUrl}/history/${date}`,
            lastModified: latestDate && date === latestDate ? new Date() : dayjs(date).toDate(),
            changeFrequency: 'daily' as const,
            priority: latestDate && date === latestDate ? 0.9 : 0.7,
        }))
    ]

    const latest = await getLatestAvailableData()
    const languageRoutes: MetadataRoute.Sitemap = getTopLanguages(latest?.data.repos || [], 30).map((item) => ({
        url: `${baseUrl}/languages/${getLanguageSlug(item.language)}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.6,
    }))
    const topicRoutes: MetadataRoute.Sitemap = getTopicStats(latest?.data.repos || []).map((item) => ({
        url: `${baseUrl}/topics/${item.topic.slug}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.6,
    }))

    return [...routes, ...languageRoutes, ...topicRoutes]
}
