export type Platform = 'qiita' | 'zenn' | 'note';

export interface ArticleBase {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string | null;
  publishedAt: string;
  tags: string[];
}

export interface Article extends ArticleBase {
  platform: Platform;
}

export interface ArticleFeed {
  lastUpdated: string;
  articles: ArticleBase[];
}

export interface SocialLink {
  platform: 'github' | 'x' | 'qiita' | 'zenn' | 'note';
  url: string;
  label: string;
}

export interface Profile {
  name: {
    ja: string;
    en: string;
  };
  bio: string;
  socialLinks: SocialLink[];
}
