import { Icon, chipIcon } from "@/lib/icons";
import type { ProjectChip } from "@/lib/types";

const KIND_LABELS: Record<string, string> = {
  paper: "Paper",
  arxiv: "arXiv",
  code: "Code",
  demo: "Demo",
  video: "Video",
  website: "Website",
  slides: "Slides",
  presentation: "Slides",
  report: "Report",
  poster: "Poster",
};

export function ActionChip({ chip }: { chip: ProjectChip }) {
  const isExternal = chip.href.startsWith("http");
  const label = chip.label ?? KIND_LABELS[chip.kind] ?? chip.kind;
  return (
    <a
      href={chip.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text transition-colors hover:border-accent hover:text-accent"
    >
      <Icon name={chipIcon(chip.kind)} width={13} height={13} />
      <span>{label}</span>
    </a>
  );
}
