import type { SiteLocale } from '@/i18n/config';

export interface LocaleMessages {
  siteName: string;
  nav: {
    mainAriaLabel: string;
    home: string;
    languages: string;
    topics: string;
    loading: string;
  };
  actions: {
    backHome: string;
    backLanguages: string;
    backTopics: string;
    viewAllTopics: string;
    viewLatestBoard: (date: string) => string;
    viewFullDateBoard: string;
    pickDate: string;
    prevDay: string;
    nextDay: string;
  };
  labels: {
    unknown: string;
    noDescription: string;
    success: string;
    failed: string;
    duration: string;
    language: string;
    totalStars: string;
    todayStars: string;
    relatedRepos: string;
    recentValidDaysTrend: string;
    exploreOtherLanguages: string;
    exploreOtherTopics: string;
    languageEntries: string;
    topicEntries: string;
  };
  states: {
    noAvailableDateData: string;
    latestDataUnavailable: string;
    noLanguageStats: string;
    noTopicStats: string;
    notFoundPageTitle: string;
    topicNotFoundTitle: string;
  };
  home: {
    title: string;
    subtitle: string;
    latestSectionTitle: (dateText: string | null) => string;
    languageSectionTitle: string;
    topicSectionTitle: string;
    historySectionTitle: (count: number) => string;
    whyTitle: string;
    whyBody1: string;
    whyBody2: string;
    latestUnavailable: string;
  };
  history: {
    pageTitle: (formattedDate: string) => string;
    pageDescription: (formattedDate: string) => string;
    listDescription: (formattedDate: string) => string;
    aiSummary: string;
    techStack: string;
    useCase: string;
    aiSummaryFailed: string;
  };
  languages: {
    listTitle: string;
    listDescription: (date: string | null) => string;
    detailTitle: (language: string) => string;
    detailDescription: (date: string, count: number, language: string) => string;
    reposTitle: (language: string) => string;
  };
  topics: {
    listTitle: string;
    listDescription: (date: string | null) => string;
    detailTitle: (topicName: string) => string;
    detailDescription: (date: string, count: number, topicName: string) => string;
    reposTitle: (topicName: string) => string;
  };
  seo: {
    defaultDescription: string;
    homeDescription: (latestDate: string, count: number) => string;
  };
  breadcrumbs: {
    home: string;
    languages: string;
    topics: string;
    history: string;
  };
}

const zhCN: LocaleMessages = {
  siteName: 'GitHub Trending 归档',
  nav: {
    mainAriaLabel: '主导航',
    home: '首页',
    languages: '语言',
    topics: '主题',
    loading: '加载中...',
  },
  actions: {
    backHome: '返回首页',
    backLanguages: '返回语言榜单',
    backTopics: '返回主题榜单',
    viewAllTopics: '查看全部主题',
    viewLatestBoard: (date) => `查看最新榜单 (${date})`,
    viewFullDateBoard: '查看完整当日榜单',
    pickDate: '选择日期',
    prevDay: '前一天',
    nextDay: '后一天',
  },
  labels: {
    unknown: '未知',
    noDescription: '暂无描述',
    success: '成功',
    failed: '失败',
    duration: '耗时',
    language: '语言',
    totalStars: '总 Stars',
    todayStars: '今日新增',
    relatedRepos: '相关仓库',
    recentValidDaysTrend: '最近 7 个有效日期趋势',
    exploreOtherLanguages: '探索其他语言',
    exploreOtherTopics: '探索其他主题',
    languageEntries: '语言入口',
    topicEntries: '主题入口',
  },
  states: {
    noAvailableDateData: '暂无可用日期数据，榜单入口稍后恢复。',
    latestDataUnavailable: '最新数据暂不可用，请稍后重试。',
    noLanguageStats: '暂无语言统计数据。',
    noTopicStats: '暂无主题聚合数据。',
    notFoundPageTitle: '页面未找到',
    topicNotFoundTitle: '主题未找到',
  },
  home: {
    title: 'GitHub Trending 历史归档',
    subtitle: '每日收录 GitHub Trending 热门项目，覆盖 Star 增长、语言分布和 AI 摘要，适合追踪开源技术趋势。',
    latestSectionTitle: (dateText) => `GitHub Trending 今日热门开源项目${dateText ? ` (${dateText})` : ''}`,
    languageSectionTitle: '热门技术栈分布',
    topicSectionTitle: '热门主题聚合',
    historySectionTitle: (count) => `GitHub Trending 历史数据归档（最近 ${count} 个有效日期）`,
    whyTitle: 'GitHub Trending 有什么用？',
    whyBody1: '如果你在找值得学习的新项目、关注不同语言的生态变化，或评估某类技术的热度，按日期浏览 Trending 归档比只看当天榜单更有参考价值。',
    whyBody2: '本站会持续更新每日榜单，帮助你回溯趋势变化，而不只是看到一次性的热点。',
    latestUnavailable: '暂时无法获取最新榜单数据。',
  },
  history: {
    pageTitle: (formattedDate) => `${formattedDate} GitHub Trending 榜单`,
    pageDescription: (formattedDate) => `查看${formattedDate}的 GitHub Trending 榜单，发现当日最热门的开源项目和技术趋势。`,
    listDescription: (formattedDate) => `${formattedDate}的 GitHub Trending 排行榜，包含当日最热门的开源项目`,
    aiSummary: '💡 AI 总结：',
    techStack: '🔧 技术栈：',
    useCase: '💼 适用场景：',
    aiSummaryFailed: 'AI 总结失败',
  },
  languages: {
    listTitle: 'GitHub Trending 语言榜单',
    listDescription: (date) => (date ? `基于 ${date} 的最新榜单，按编程语言聚合热门开源项目。` : '暂时无法获取最新榜单数据。'),
    detailTitle: (language) => `${language} GitHub Trending 热门项目`,
    detailDescription: (date, count, language) => `基于 ${date} 榜单，共收录 ${count} 个 ${language} 热门仓库。`,
    reposTitle: (language) => `${language} 热门仓库`,
  },
  topics: {
    listTitle: 'GitHub Trending 主题榜单',
    listDescription: (date) => (date ? `基于 ${date} 的最新榜单，按热门主题聚合开源项目。` : '暂时无法获取最新榜单数据。'),
    detailTitle: (topicName) => `${topicName} GitHub Trending 热门项目`,
    detailDescription: (date, count, topicName) => `基于 ${date} 榜单，共收录 ${count} 个与 ${topicName} 相关的热门仓库。`,
    reposTitle: (topicName) => `${topicName} 相关仓库`,
  },
  seo: {
    defaultDescription: '每日 GitHub Trending 开源项目归档，追踪最热门的开源项目和技术趋势。支持按日期查看历史数据，AI 总结项目要点。',
    homeDescription: (latestDate, count) => `每日 GitHub Trending 开源项目归档。当前最新日期为 ${latestDate}，收录 ${count} 个热门项目，支持按日期、语言、主题追踪技术趋势。`,
  },
  breadcrumbs: {
    home: '首页',
    languages: '语言榜单',
    topics: '主题榜单',
    history: '历史榜单',
  },
};

const en: LocaleMessages = {
  siteName: 'GitHub Trending Archive',
  nav: {
    mainAriaLabel: 'Main navigation',
    home: 'Home',
    languages: 'Languages',
    topics: 'Topics',
    loading: 'Loading...',
  },
  actions: {
    backHome: 'Back to home',
    backLanguages: 'Back to languages',
    backTopics: 'Back to topics',
    viewAllTopics: 'View all topics',
    viewLatestBoard: (date) => `View latest board (${date})`,
    viewFullDateBoard: 'View full board for this date',
    pickDate: 'Pick date',
    prevDay: 'Previous day',
    nextDay: 'Next day',
  },
  labels: {
    unknown: 'Unknown',
    noDescription: 'No description',
    success: 'Success',
    failed: 'Failed',
    duration: 'Duration',
    language: 'Language',
    totalStars: 'Total Stars',
    todayStars: 'Today',
    relatedRepos: 'Related repos',
    recentValidDaysTrend: 'Trend in recent 7 valid days',
    exploreOtherLanguages: 'Explore other languages',
    exploreOtherTopics: 'Explore other topics',
    languageEntries: 'Language entries',
    topicEntries: 'Topic entries',
  },
  states: {
    noAvailableDateData: 'No available dates yet. Please check back later.',
    latestDataUnavailable: 'Latest data is temporarily unavailable. Please retry later.',
    noLanguageStats: 'No language statistics available.',
    noTopicStats: 'No topic aggregation data available.',
    notFoundPageTitle: 'Page not found',
    topicNotFoundTitle: 'Topic not found',
  },
  home: {
    title: 'GitHub Trending Historical Archive',
    subtitle: 'Daily GitHub Trending projects with star growth, language distribution, and AI summaries to help you track open-source trends.',
    latestSectionTitle: (dateText) => `Trending open-source projects today${dateText ? ` (${dateText})` : ''}`,
    languageSectionTitle: 'Top language distribution',
    topicSectionTitle: 'Top topic aggregation',
    historySectionTitle: (count) => `GitHub Trending history (latest ${count} valid dates)`,
    whyTitle: 'Why use GitHub Trending history?',
    whyBody1: 'If you are looking for projects to learn from, observing ecosystem shifts across languages, or evaluating technology momentum, browsing historical snapshots is more informative than only checking today.',
    whyBody2: 'This site keeps daily records so you can trace trend changes over time instead of seeing one-off highlights.',
    latestUnavailable: 'Latest board data is currently unavailable.',
  },
  history: {
    pageTitle: (formattedDate) => `${formattedDate} GitHub Trending Board`,
    pageDescription: (formattedDate) => `Explore the GitHub Trending board for ${formattedDate} and discover the hottest open-source projects of the day.`,
    listDescription: (formattedDate) => `GitHub Trending ranking for ${formattedDate}, including the most popular open-source projects of the day.`,
    aiSummary: '💡 AI Summary:',
    techStack: '🔧 Tech stack:',
    useCase: '💼 Use case:',
    aiSummaryFailed: 'AI summary failed',
  },
  languages: {
    listTitle: 'GitHub Trending by Language',
    listDescription: (date) => (date ? `Aggregated by programming language from the latest board on ${date}.` : 'Latest board data is currently unavailable.'),
    detailTitle: (language) => `${language} GitHub Trending Projects`,
    detailDescription: (date, count, language) => `Based on the ${date} board, ${count} popular ${language} repositories are included.`,
    reposTitle: (language) => `${language} popular repositories`,
  },
  topics: {
    listTitle: 'GitHub Trending by Topic',
    listDescription: (date) => (date ? `Aggregated by popular topics from the latest board on ${date}.` : 'Latest board data is currently unavailable.'),
    detailTitle: (topicName) => `${topicName} GitHub Trending Projects`,
    detailDescription: (date, count, topicName) => `Based on the ${date} board, ${count} popular repositories related to ${topicName} are included.`,
    reposTitle: (topicName) => `${topicName} related repositories`,
  },
  seo: {
    defaultDescription: 'Daily GitHub Trending open-source archive to track the hottest projects and technology trends by date, language, and topic.',
    homeDescription: (latestDate, count) => `Daily GitHub Trending archive. Latest date: ${latestDate}, with ${count} popular projects indexed across date, language, and topic dimensions.`,
  },
  breadcrumbs: {
    home: 'Home',
    languages: 'Languages',
    topics: 'Topics',
    history: 'History',
  },
};

const MESSAGES: Record<SiteLocale, LocaleMessages> = {
  'zh-CN': zhCN,
  en,
};

export function getMessages(locale: SiteLocale): LocaleMessages {
  return MESSAGES[locale];
}
