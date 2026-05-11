import Image from "next/image";
import type { Project } from "@/lib/types";
import { ActionChip } from "./ActionChip";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-accent/40">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-2">
        <Image
          src={project.thumbnail.src}
          alt={project.thumbnail.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02]"
          unoptimized={project.thumbnail.src.endsWith(".gif")}
        />
        {project.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-highlight/95 px-2.5 py-0.5 text-xs font-medium text-zinc-900">
            Featured
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="text-lg font-semibold leading-snug tracking-tight text-text">
            {project.title}
          </h3>
          <p className="mt-1 text-xs text-muted">
            {project.context} · {project.year}
          </p>
        </div>
        <p className="text-sm leading-relaxed text-muted">{project.summary}</p>
        {project.chips.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            {project.chips.map((chip) => (
              <ActionChip key={`${chip.kind}-${chip.href}`} chip={chip} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
