import Image from 'next/image';
import noteIcon from '@/assets/note-icon.svg';

interface IconProps {
  className?: string;
}

export function NoteIcon({ className }: IconProps) {
  return (
    <Image
      src={noteIcon}
      alt=""
      className={className}
      aria-hidden="true"
      width={24}
      height={24}
    />
  );
}
