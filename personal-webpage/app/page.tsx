import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { PublicationsSection } from "@/components/sections/PublicationsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { profile } from "@/content/profile";
import { experiences } from "@/content/experiences";
import { projects } from "@/content/projects";
import { publications } from "@/content/publications";
import { education } from "@/content/education";
import { skills } from "@/content/skills";

export default function Home() {
  return (
    <>
      <HeroSection profile={profile} />
      <AboutSection paragraphs={profile.about} />
      <PublicationsSection publications={publications} />
      <EducationSection education={education} />
      <ExperienceSection experiences={experiences} />
      <ProjectsSection projects={projects} />
      <SkillsSection skillGroups={skills} />
    </>
  );
}
