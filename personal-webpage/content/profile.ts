import type { ProfileData } from "@/lib/types";

export const profile: ProfileData = {
  name: "Jacob Krucinski",
  affiliation: "Research Engineer II @ RTX Research Center",
  specialization: "ML & Computer Vision for Physical Systems",
  about: [
    "I graduated with a Master's in Artificial Intelligence in April 2026 from Northeastern University, after earning a B.S. in Computer Science and Engineering at the University of Connecticut. I'm passionate about machine learning and computer vision applied to physical systems, from autonomous vehicles to surgical robotics.",
    "Through internships, coursework, research, and personal projects, I've built cross-disciplinary skills spanning computer science, electrical engineering, and mechanical engineering. My goal is to pursue a career as a machine learning engineer working on hard problems at the intersection of perception and the physical world.",
  ],
  photo: {
    src: "/images/Jacob_Krucinski_v3.png",
    alt: "Jacob Krucinski",
  },
  links: [
    { label: "Email", href: "mailto:jacob1576@gmail.com", icon: "email" },
    { label: "GitHub", href: "https://github.com/savage-hacker14", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jkrucinski/", icon: "linkedin" },
    {
      label: "Scholar",
      href: "https://scholar.google.com/citations?user=nKbVdsgAAAAJ&hl=en",
      icon: "scholar",
    },
    {
      label: "Resume",
      href: "https://drive.google.com/file/d/1vpgr4D-J3DnSjF0YxBQgCmBU4CW-Ul23/view?usp=sharing",
      icon: "resume",
    },
    {
      label: "CV",
      href: "https://drive.google.com/file/d/1gRPoKxLM8drH4x9W5eXL37nQiyyT8PHa/view?usp=sharing",
      icon: "resume",
    },
    {
      label: "Hugging Face",
      href: "https://huggingface.co/jacob1576",
      icon: "huggingface",
    },
    {
      label: "Photography",
      href: "https://shotbyjok.com",
      icon: "photography",
    },
  ],
};
