import { SectionHeading } from "@/components/ui/SectionHeading";
import { EducationItem } from "@/components/ui/EducationItem";
import type { Education } from "@/lib/types";

export function EducationSection({ education }: { education: Education[] }) {
  return (
    <section id="education" className="pt-20">
      <SectionHeading id="education-heading" title="Education" />
      <div>
        {education.map((ed, i) => (
          <EducationItem key={`${ed.school}-${i}`} education={ed} />
        ))}
      </div>
    </section>
  );
}
