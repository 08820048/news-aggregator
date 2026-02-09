export const locales = ['zh', 'en'] as const
export type Locale = (typeof locales)[number]

const dict = {
  zh: {
    title: '资讯整合平台',
    latest: '最新资讯',
    categories: '分类',
    tech: '科技',
    ai: 'AI',
    finance: '金融',
    gaming: '游戏',
    back: '返回',
    source: '来源',
    read: '阅读原文',
  },
  en: {
    title: 'News Aggregation Hub',
    latest: 'Latest',
    categories: 'Categories',
    tech: 'Tech',
    ai: 'AI',
    finance: 'Finance',
    gaming: 'Gaming',
    back: 'Back',
    source: 'Source',
    read: 'Read original',
  },
}

export const getDict = (locale: Locale) => dict[locale] || dict.zh
