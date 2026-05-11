import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import type { Project } from "@/lib/types";

export function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="pt-20">
      <SectionHeading
        id="projects-heading"
        title="Featured Projects"
        subtitle="Coursework, senior design, and personal builds across ML, computer vision, and robotics."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
