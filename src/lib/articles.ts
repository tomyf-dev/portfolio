import type { Article, Platform, ArticleFeed } from '@/types/article';
import qiitaData from '@/data/qiita.json';
import zennData from '@/data/zenn.json';
import noteData from '@/data/note.json';

export function getAllArticles(): Article[] {
  const qiitaArticles = (qiitaData as ArticleFeed).articles.map((a) => ({
    ...a,
    platform: 'qiita' as Platform,
  }));

  const zennArticles = (zennData as ArticleFeed).articles.map((a) => ({
    ...a,
    platform: 'zenn' as Platform,
  }));

  const noteArticles = (noteData as ArticleFeed).articles.map((a) => ({
    ...a,
    platform: 'note' as Platform,
  }));

  return [...qiitaArticles, ...zennArticles, ...noteArticles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
