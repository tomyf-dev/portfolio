import { ProfileHero } from '@/components/profile';
import { ArticleGrid } from '@/components/articles';
import { getAllArticles } from '@/lib/articles';

export default function Home() {
  const articles = getAllArticles();

  return (
    <>
      <ProfileHero />

      <section id="articles" className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-2">
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                Articles
              </h2>
              <div
                className="flex-1 h-px bg-primary/30"
              />
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary text-white">
                {articles.length} posts
              </span>
            </div>
            <p className="text-sm md:text-base text-white">
              Qiita、Zenn、noteで公開している技術記事やコラムの一覧です。
            </p>
          </div>
          <ArticleGrid articles={articles} />
        </div>
      </section>
    </>
  );
}
