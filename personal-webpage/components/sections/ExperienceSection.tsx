import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceItem } from "@/components/ui/ExperienceItem";
import type { Experience } from "@/lib/types";

export function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  return (
    <section id="experience" className="pt-20">
      <SectionHeading id="experience-heading" title="Work Experience" />
      <div>
        {experiences.map((exp, i) => (
          <ExperienceItem key={`${exp.company}-${i}`} experience={exp} />
        ))}
      </div>
    </section>
  );
}
