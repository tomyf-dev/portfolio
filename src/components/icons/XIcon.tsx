import Image from 'next/image';
import xIcon from '@/assets/x-icon.svg';

interface IconProps {
  className?: string;
}

export function XIcon({ className }: IconProps) {
  return (
    <Image
      src={xIcon}
      alt=""
      className={className}
      aria-hidden="true"
      width={24}
      height={24}
    />
  );
}
