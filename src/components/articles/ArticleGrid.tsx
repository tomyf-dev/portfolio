import type { Article } from '@/types/article';
import { ArticleCard } from './ArticleCard';

interface ArticleGridProps {
  articles: Article[];
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="relative mb-6">
        {/* 装飾的な背景円 */}
        <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl scale-150" />
        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-foreground-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
        </div>
      </div>
      <p className="text-foreground-muted text-lg font-medium mb-2">
        記事がありません
      </p>
      <p className="text-foreground-muted/60 text-sm">
        Coming soon...
      </p>
    </div>
  );
}

export function ArticleGrid({ articles }: ArticleGridProps) {
  if (articles.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
