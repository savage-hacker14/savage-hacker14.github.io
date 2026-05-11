import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/ui/SkillBadge";
import type { SkillGroup } from "@/lib/types";

export function SkillsSection({ skillGroups }: { skillGroups: SkillGroup[] }) {
  return (
    <section id="skills" className="pt-20">
      <SectionHeading id="skills-heading" title="Tools/Skills" />
      <div className="space-y-6">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="mb-3 text-sm font-medium tracking-tight text-muted">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <SkillBadge key={skill} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
