import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection({ paragraphs }: { paragraphs: string[] }) {
  return (
    <section id="about" className="pt-20">
      <SectionHeading id="about-heading" title="About Me" />
      <div className="space-y-4 text-base leading-relaxed text-muted">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
