import { Avatar } from "@/components/ui/Avatar";
import { IconLink } from "@/components/ui/IconLink";
import type { ProfileData } from "@/lib/types";

export function HeroSection({ profile }: { profile: ProfileData }) {
  return (
    <section id="top" className="pt-12 sm:pt-20">
      <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:gap-10">
        <Avatar src={profile.photo.src} alt={profile.photo.alt} size={176} priority />
        <div className="flex flex-1 flex-col gap-4">
          <h1 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            {profile.name}
          </h1>
          <div className="space-y-1">
            <p className="text-base text-text sm:text-lg">{profile.affiliation}</p>
            <p className="text-sm text-muted sm:text-base">{profile.specialization}</p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
            {profile.links.map((link) => (
              <IconLink key={link.label} link={link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
