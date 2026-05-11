import Image from "next/image";
import type { Publication } from "@/lib/types";
import { ActionChip } from "./ActionChip";

export function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <article className="flex flex-col gap-5 border-b border-border pb-8 last:border-b-0 last:pb-0 sm:flex-row sm:gap-6">
      <div className="shrink-0">
        <div className="relative h-32 w-full overflow-hidden rounded-lg border border-border bg-surface-2 sm:h-32 sm:w-44">
          <Image
            src={publication.thumbnail.src}
            alt={publication.thumbnail.alt}
            fill
            sizes="(min-width: 640px) 176px, 100vw"
            className="object-cover"
            unoptimized={publication.thumbnail.src.endsWith(".gif")}
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-base font-semibold leading-snug tracking-tight text-text">
            {publication.title}
          </h3>
          {publication.highlight && (
            <span className="rounded-full bg-highlight/15 px-2 py-0.5 text-xs font-medium text-highlight">
              Master&apos;s Thesis
            </span>
          )}
        </div>
        <p className="text-sm text-text">{publication.authors}</p>
        <p className="text-sm italic text-muted">
          {publication.venue} · {publication.year}
        </p>
        <p className="text-sm leading-relaxed text-muted">{publication.abstract}</p>
        {publication.chips.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-2">
            {publication.chips.map((chip) => (
              <ActionChip key={`${chip.kind}-${chip.href}`} chip={chip} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
