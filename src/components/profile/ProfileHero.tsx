import { SocialLinks } from './SocialLinks';
import { profile } from '@/lib/constants';

export function ProfileHero() {
  return (
    <section id="profile" className="py-8 md:py-12 pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative rounded-2xl p-6 md:p-8 overflow-hidden bg-background-card shadow-profile">
          <div className="relative space-y-4">
            {/* Label */}
            <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-primary text-white">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Profile
            </span>

            {/* Name */}
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              <span className="text-primary">
                {profile.name.en}
              </span>
              <span className="block text-lg md:text-xl text-foreground-muted font-medium mt-1">
                {profile.name.ja}
              </span>
            </h1>

            {/* Bio */}
            <p className="text-sm md:text-base text-foreground leading-relaxed max-w-xl">
              {profile.bio}
            </p>

            {/* Social Links */}
            <SocialLinks links={profile.socialLinks} />
          </div>
        </div>
      </div>
    </section>
  );
}
