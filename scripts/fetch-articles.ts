import * as fs from 'fs';
import * as path from 'path';

// 型定義
interface Article {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string | null;
  publishedAt: string;
  tags: string[];
}

interface FeedData {
  lastUpdated: string;
  articles: Article[];
}

// 定数
const DATA_DIR = path.join(process.cwd(), 'src', 'data');
const USER_AGENT = 'Mozilla/5.0 (compatible; PortfolioBot/1.0)';
const MAX_RETRIES = 3;

// ユーティリティ
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchWithRetry(url: string): Promise<Response> {
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
      if (response.ok || response.status < 500) return response;
      console.log(`  ↻ Retry ${attempt + 1}/${MAX_RETRIES} (HTTP ${response.status})`);
    } catch (error) {
      if (attempt === MAX_RETRIES) throw error;
      console.log(`  ↻ Retry ${attempt + 1}/${MAX_RETRIES} (${(error as Error).message})`);
    }
    await delay(1000 * Math.pow(2, attempt));
  }
  throw new Error('Max retries exceeded');
}

async function fetchOgImage(url: string): Promise<string | null> {
  try {
    const response = await fetchWithRetry(url);
    if (!response.ok) return null;

    const html = await response.text();
    const match =
      html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) ||
      html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);

    return match?.[1]?.replace(/&amp;/g, '&') || null;
  } catch {
    return null;
  }
}

// Qiita
async function fetchQiita(): Promise<Article[]> {
  console.log('Fetching Qiita...');
  const response = await fetchWithRetry('https://qiita.com/api/v2/users/tomyf/items?per_page=100');
  if (!response.ok) throw new Error(`HTTP ${response.status}`);

  const items: { id: string; title: string; body: string; url: string; created_at: string; tags: { name: string }[] }[] =
    await response.json();

  const articles: Article[] = [];
  for (const item of items) {
    console.log(`  OGP: ${item.title.substring(0, 40)}...`);
    articles.push({
      id: item.id,
      title: item.title,
      description: item.body.substring(0, 200).replace(/[#\n]/g, ' ').trim(),
      url: item.url,
      thumbnail: await fetchOgImage(item.url),
      publishedAt: item.created_at,
      tags: item.tags.map((t) => t.name),
    });
    await delay(500);
  }
  return articles;
}

// Zenn
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

async function fetchZennArticleDetail(slug: string): Promise<{ thumbnail: string | null; tags: string[]; description: string }> {
  const response = await fetchWithRetry(`https://zenn.dev/api/articles/${slug}`);
  if (!response.ok) return { thumbnail: null, tags: [], description: '' };

  const { article } = await response.json();
  const description = article?.body_html ? stripHtml(article.body_html).substring(0, 200) : '';
  return {
    thumbnail: article?.og_image_url || null,
    tags: article?.topics?.map((t: { display_name: string }) => t.display_name) || [],
    description,
  };
}

async function fetchZenn(): Promise<Article[]> {
  console.log('Fetching Zenn...');
  const response = await fetchWithRetry('https://zenn.dev/api/articles?username=tomyf&order=latest');
  if (!response.ok) throw new Error(`HTTP ${response.status}`);

  const { articles: items = [] }: { articles: { slug: string; title: string; path: string; published_at: string }[] } =
    await response.json();

  const articles: Article[] = [];
  for (const item of items) {
    console.log(`  Detail: ${item.title.substring(0, 40)}...`);
    const { thumbnail, tags, description } = await fetchZennArticleDetail(item.slug);
    articles.push({
      id: item.slug,
      title: item.title,
      description,
      url: `https://zenn.dev${item.path}`,
      thumbnail,
      publishedAt: item.published_at,
      tags,
    });
    await delay(500);
  }
  return articles;
}

// note
async function fetchNote(): Promise<Article[]> {
  console.log('Fetching note...');
  const articles: Article[] = [];
  let page = 1;

  while (true) {
    const response = await fetchWithRetry(
      `https://note.com/api/v2/creators/tomyf_lvnsk/contents?kind=note&page=${page}`
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const { data } = await response.json();
    const items: { id: number; name: string; body: string; noteUrl: string; publishAt: string; eyecatch: string | null; hashtags: { hashtag: { name: string } }[] }[] =
      data?.contents || [];

    for (const item of items) {
      articles.push({
        id: String(item.id),
        title: item.name,
        description: item.body?.substring(0, 200) || '',
        url: item.noteUrl,
        thumbnail: item.eyecatch,
        publishedAt: item.publishAt,
        tags: item.hashtags?.map((h) => h.hashtag.name.replace(/^#/, '')) || [],
      });
    }

    console.log(`  Page ${page}: ${items.length} articles`);
    if (data?.isLastPage) break;
    page++;
    await delay(300);
  }
  return articles;
}

// メイン
async function main() {
  fs.mkdirSync(DATA_DIR, { recursive: true });

  const fetchers = [
    { name: 'qiita', fn: fetchQiita },
    { name: 'zenn', fn: fetchZenn },
    { name: 'note', fn: fetchNote },
  ];

  for (const { name, fn } of fetchers) {
    try {
      const articles = await fn();
      if (articles.length > 0) {
        const data: FeedData = { lastUpdated: new Date().toISOString(), articles };
        fs.writeFileSync(path.join(DATA_DIR, `${name}.json`), JSON.stringify(data, null, 2));
        console.log(`✅ ${name}: ${articles.length} articles\n`);
      }
    } catch (error) {
      console.error(`❌ ${name}: ${(error as Error).message}\n`);
    }
  }
}

main();
