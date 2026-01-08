import type { Profile } from '@/types/article';

export const profile: Profile = {
  name: {
    ja: 'トミー',
    en: 'ToMY F.',
  },
  bio: 'TypeScriptが好きなWebエンジニアです。最近はAWS Amplifyをメインに扱っています。配信環境のオーディオ構築を考えるのが趣味です。',
  socialLinks: [
    {
      platform: 'x',
      url: 'https://x.com/tomyf_dev',
      label: 'X',
    },
    {
      platform: 'note',
      url: 'https://note.com/tomyf_lvnsk',
      label: 'note',
    },
    {
      platform: 'github',
      url: 'https://github.com/tomyf-dev',
      label: 'GitHub',
    },
    {
      platform: 'zenn',
      url: 'https://zenn.dev/tomyf',
      label: 'Zenn',
    },
    {
      platform: 'qiita',
      url: 'https://qiita.com/tomyf',
      label: 'Qiita',
    },
  ],
};

