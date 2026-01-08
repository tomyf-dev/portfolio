import Image from 'next/image';
import githubIcon from '@/assets/github-icon.svg';

interface IconProps {
  className?: string;
}

export function GitHubIcon({ className }: IconProps) {
  return (
    <Image
      src={githubIcon}
      alt=""
      className={className}
      aria-hidden="true"
      width={24}
      height={24}
    />
  );
}
