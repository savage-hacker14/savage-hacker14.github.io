export type IconKey =
  | "email"
  | "github"
  | "linkedin"
  | "scholar"
  | "huggingface"
  | "resume"
  | "photography"
  | "stackoverflow"
  | "external"
  | "paper"
  | "code"
  | "demo"
  | "video"
  | "slides"
  | "website"
  | "sun"
  | "moon";

export interface IconLink {
  label: string;
  href: string;
  icon: IconKey;
}

export interface ProfileData {
  name: string;
  affiliation: string;
  specialization: string;
  about: string[];
  photo: { src: string; alt: string };
  links: IconLink[];
}

export type ProjectCategory = "ml" | "cv" | "robotics" | "audio" | "hardware" | "nlp";
export type ChipKind =
  | "paper"
  | "arxiv"
  | "code"
  | "demo"
  | "video"
  | "website"
  | "slides"
  | "report"
  | "presentation"
  | "poster";

export interface ProjectChip {
  kind: ChipKind;
  href: string;
  label?: string;
}

export interface Project {
  slug: string;
  title: string;
  year: number;
  authors?: string;
  context: string;
  summary: string;
  thumbnail: { src: string; alt: string; width: number; height: number };
  categories: ProjectCategory[];
  chips: ProjectChip[];
  featured?: boolean;
}

export interface Publication {
  slug: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  thumbnail: { src: string; alt: string; width: number; height: number };
  chips: ProjectChip[];
  abstract: string;
  highlight?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  logo: { src: string; alt: string };
  bullets: string[];
  url?: string;
}

export interface Education {
  school: string;
  location: string;
  degree: string;
  start: string;
  end: string;
  logo: { src: string; alt: string };
  notes?: string[];
  gpa?: string;
}

export interface SkillGroup {
  label: string;
  skills: string[];
}
