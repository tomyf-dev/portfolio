import { GitHubIcon, XIcon, QiitaIcon, ZennIcon, NoteIcon } from '@/components/icons';
import type { SocialLink } from '@/types/article';

const iconMap = {
  github: GitHubIcon,
  x: XIcon,
  qiita: QiitaIcon,
  zenn: ZennIcon,
  note: NoteIcon,
} as const;

interface SocialLinksProps {
  links: SocialLink[];
}

export function SocialLinks({ links }: SocialLinksProps) {
  // SNS系（X, note）と技術系（GitHub, Zenn, Qiita）を分けるセパレーターの位置
  const separatorAfterIndex = 1;

  return (
    <div className="flex items-center gap-2">
      {links.map((link, index) => {
        const Icon = iconMap[link.platform];
        return (
          <div key={link.platform} className="flex items-center gap-2">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-10 h-10 rounded-full bg-white border border-primary/30 transition-all hover:bg-primary-hover hover:border-primary"
              aria-label={link.label}
              title={link.label}
            >
              <Icon className="w-5 h-5 text-foreground-muted transition-colors group-hover:text-primary" />
            </a>
            {index === separatorAfterIndex && (
              <div className="w-px h-6 bg-primary/30 mx-1" />
            )}
          </div>
        );
      })}
    </div>
  );
}
