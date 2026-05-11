import type { Education } from "@/lib/types";

export const education: Education[] = [
  {
    school: "Northeastern University",
    location: "Boston, MA",
    degree: "M.S. in Artificial Intelligence — Vision concentration (Thesis Track)",
    start: "Sep 2024",
    end: "Apr 2026",
    logo: { src: "/images/northeastern_logo.png", alt: "Northeastern University logo" },
    gpa: "4.00 / 4.00",
  },
  {
    school: "University of Connecticut",
    location: "Storrs, CT",
    degree:
      "B.S. in Computer Science & Engineering, Minor in Mathematics — Computational Data Analytics concentration",
    start: "Sep 2020",
    end: "May 2024",
    logo: { src: "/images/uconn_logo.png", alt: "University of Connecticut logo" },
    gpa: "3.87 / 4.00",
  },
  {
    school: "Lund Institute of Technology (LTH)",
    location: "Lund, Sweden",
    degree: "Study abroad semester — computer vision, databases, process simulation",
    start: "Jan 2023",
    end: "Jun 2023",
    logo: { src: "/images/lund_logo_2.png", alt: "Lund Institute of Technology logo" },
  },
];
