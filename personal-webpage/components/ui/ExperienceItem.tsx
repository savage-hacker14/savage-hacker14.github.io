import Image from "next/image";
import type { Experience } from "@/lib/types";

export function ExperienceItem({ experience }: { experience: Experience }) {
  const RoleEl = experience.url ? "a" : "span";
  return (
    <article className="flex gap-5 border-b border-border py-6 last:border-b-0 sm:gap-6">
      <div className="shrink-0">
        <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg border border-border bg-surface sm:h-16 sm:w-16">
          <Image
            src={experience.logo.src}
            alt={experience.logo.alt}
            width={64}
            height={64}
            className="h-full w-full object-contain p-1.5"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-1.5">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-base font-semibold tracking-tight text-text">
            <RoleEl
              {...(experience.url
                ? { href: experience.url, target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={experience.url ? "transition-colors hover:text-accent" : ""}
            >
              {experience.role}
            </RoleEl>
            <span className="text-muted"> · </span>
            <span>{experience.company}</span>
          </h3>
          <p className="text-xs font-medium tabular-nums text-muted">
            {experience.start} – {experience.end}
          </p>
        </div>
        {experience.location && (
          <p className="text-xs text-muted">{experience.location}</p>
        )}
        <ul className="mt-1 list-disc space-y-1 pl-4 text-sm leading-relaxed text-muted marker:text-border">
          {experience.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
