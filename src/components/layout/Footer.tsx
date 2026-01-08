import { SocialLinks } from '@/components/profile/SocialLinks';
import { profile } from '@/lib/constants';
import { GamingBorder } from './GamingBorder';

export function Footer() {
  return (
    <div className="relative bg-transparent">
      <GamingBorder position="top" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        <div className="relative flex flex-col items-center gap-4 md:flex-row md:justify-end">
          <SocialLinks links={profile.socialLinks} />
          <p className="text-sm font-bold text-white md:absolute md:left-1/2 md:-translate-x-1/2">
            © {new Date().getFullYear()} {profile.name.en}
          </p>
        </div>
      </div>
    </div>
  );
}
