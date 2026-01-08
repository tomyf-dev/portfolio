import Image from 'next/image';
import qiitaIcon from '@/assets/qiita-icon.png';

interface IconProps {
  className?: string;
}

export function QiitaIcon({ className }: IconProps) {
  return (
    <Image
      src={qiitaIcon}
      alt=""
      className={className}
      aria-hidden="true"
      width={24}
      height={24}
    />
  );
}
