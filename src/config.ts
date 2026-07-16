export const siteConfig = {
  name: 'Marronnier Park',
  baseUrl: 'https://marronnierparkkorea.com',
  slug: 'marronnier-park',
  locales: ['zh', 'en', 'ja', 'ko'] as const,
};

export const ogLocale: Record<string, string> = {
  zh: 'zh_CN',
  en: 'en_US',
  ja: 'ja_JP',
  ko: 'ko_KR',
};
