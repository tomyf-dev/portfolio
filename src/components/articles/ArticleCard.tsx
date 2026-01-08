import Image from 'next/image';
import type { Article } from '@/types/article';
import { PlatformBadge } from './PlatformBadge';
import { formatDate } from '@/lib/articles';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 bg-background-card shadow-card hover:shadow-card-hover"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[40/21] overflow-hidden bg-primary/5">
        {article.thumbnail ? (
          <Image
            src={article.thumbnail}
            alt=""
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 p-3">
            <div className="w-full h-full rounded-lg flex items-center justify-center p-4 bg-background-card/90">
              <p className="font-bold text-foreground leading-snug line-clamp-4 text-sm text-center">
                {article.title}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <PlatformBadge platform={article.platform} />
          <time dateTime={article.publishedAt} className="text-xs text-foreground-muted">
            {formatDate(article.publishedAt)}
          </time>
        </div>

        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 text-base leading-snug">
          {article.title}
        </h3>

        {article.description && (
          <p className="mt-2 text-sm text-foreground-muted line-clamp-2">
            {article.description}
          </p>
        )}

        {article.tags && article.tags.length > 0 && (
          <div className="mt-3 flex gap-1.5 flex-wrap">
            {article.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs font-bold rounded-full bg-primary/10 text-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
