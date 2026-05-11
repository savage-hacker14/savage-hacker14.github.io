import { Icon } from "@/lib/icons";
import type { IconLink as IconLinkType } from "@/lib/types";

export function IconLink({ link }: { link: IconLinkType }) {
  const isExternal = link.href.startsWith("http");
  return (
    <a
      href={link.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
    >
      <Icon name={link.icon} width={16} height={16} />
      <span>{link.label}</span>
    </a>
  );
}
