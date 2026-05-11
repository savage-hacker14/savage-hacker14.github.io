import { SectionHeading } from "@/components/ui/SectionHeading";
import { PublicationCard } from "@/components/ui/PublicationCard";
import type { Publication } from "@/lib/types";

export function PublicationsSection({ publications }: { publications: Publication[] }) {
  return (
    <section id="publications" className="pt-20">
      <SectionHeading id="publications-heading" title="Research" />
      <div className="space-y-8">
        {publications.map((pub) => (
          <PublicationCard key={pub.slug} publication={pub} />
        ))}
      </div>
    </section>
  );
}
