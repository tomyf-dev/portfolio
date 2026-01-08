import type { Platform } from '@/types/article';

const platformConfig: Record<Platform, { label: string; bgClass: string }> = {
  qiita: {
    label: 'Qiita',
    bgClass: 'bg-qiita',
  },
  zenn: {
    label: 'Zenn',
    bgClass: 'bg-zenn',
  },
  note: {
    label: 'note',
    bgClass: 'bg-note',
  },
};

interface PlatformBadgeProps {
  platform: Platform;
}

export function PlatformBadge({ platform }: PlatformBadgeProps) {
  const config = platformConfig[platform];

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-xs font-semibold text-white rounded ${config.bgClass}`}
    >
      {config.label}
    </span>
  );
}
