import Image from 'next/image';
import zennLogo from '@/assets/zenn-logo.svg';

interface IconProps {
  className?: string;
}

export function ZennIcon({ className }: IconProps) {
  return (
    <Image
      src={zennLogo}
      alt=""
      className={className}
      aria-hidden="true"
      width={24}
      height={24}
    />
  );
}
