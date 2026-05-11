import Image from "next/image";
import type { Education } from "@/lib/types";

export function EducationItem({ education }: { education: Education }) {
  return (
    <article className="flex gap-5 border-b border-border py-6 last:border-b-0 sm:gap-6">
      <div className="shrink-0">
        <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg border border-border bg-surface sm:h-16 sm:w-16">
          <Image
            src={education.logo.src}
            alt={education.logo.alt}
            width={64}
            height={64}
            className="h-full w-full object-contain p-1.5"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-base font-semibold tracking-tight text-text">
            {education.school}
            <span className="text-muted"> · </span>
            <span className="font-normal text-muted">{education.location}</span>
          </h3>
          <p className="text-xs font-medium tabular-nums text-muted">
            {education.start} – {education.end}
          </p>
        </div>
        <p className="text-sm text-muted">{education.degree}</p>
        {education.gpa && (
          <p className="text-xs text-muted">GPA: {education.gpa}</p>
        )}
      </div>
    </article>
  );
}
