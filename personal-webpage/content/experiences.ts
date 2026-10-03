import type { Experience } from "@/lib/types";

export const experiences: Experience[] = [
  {
    company: "Raytheon Technologies Research Center (RTRC)",
    role: "Research Engineer II, Autonomous Collaborative Systems",
    location: "East Hartford, CT",
    start: "Aug 2026",
    end: "Present",
    logo: { src: "/images/rtx_logo.jpg", alt: "Raytheon Technologies RTRC logo" },
    bullets: [
      "Developing AI/ML computer vision and autonomy algorithms for multi-domain, multi-asset collaborative autonomy under tight safety and real-time constraints",
      "Supporting applications spanning engine inspection and drone path planning",
    ],
    url: "https://www.rtx.com/what-we-do/rtx-technology-research-center",
  },
  {
    company: "Travelers Indemnity Co.",
    role: "Engineering Development Program (EDP) Intern",
    location: "Hartford, CT",
    start: "Jun 2025",
    end: "Aug 2025",
    logo: { src: "/images/travelers_logo.png", alt: "Travelers logo" },
    bullets: [
      "Worked with the Business Insurance Location Intelligence team to automate manual workers' compensation and reinsurance adjustments and compute AI-based metrics.",
      "Won 1st place at the intern hackathon for a novel approach to automate filing auto collision claims.",
    ],
    url: "https://cdn-static.findly.com/wp-content/uploads/sites/2863/2025/05/06082129/SellSheet_EDP_2025-1.pdf",
  },
  {
    company: "Qualtech Systems Inc.",
    role: "Systems Modeling Consultant",
    location: "Rocky Hill, CT",
    start: "Jan 2024",
    end: "Apr 2025",
    logo: { src: "/images/qsi_logo.png", alt: "Qualtech Systems logo" },
    bullets: [
      "Built a Simulink plant model with custom Stateflow libraries for a NASA rocket propulsion system and tested fault injection.",
      "Fine-tuned a 3D generative AI model used to develop training materials for the U.S. Marine Corps.",
    ],
    url: "https://www.teamqsi.com/about-us/",
  },
  {
    company: "The MathWorks Inc.",
    role: "Engineering Development Group Intern",
    location: "Natick, MA",
    start: "Jun 2023",
    end: "Aug 2023",
    logo: { src: "/images/matlab_logo.jpg", alt: "MathWorks logo" },
    bullets: [
      "Designed and implemented a REST API feature with asynchronous support to facilitate integration with MATLAB and other language environments.",
    ],
    url: "https://se.mathworks.com/company/jobs/students/edg.html",
  },
  {
    company: "University of Connecticut",
    role: "Undergraduate Teaching Assistant — CSE 2301 Digital Logic Design",
    location: "Storrs, CT",
    start: "Aug 2022",
    end: "Dec 2022",
    logo: { src: "/images/uconn_soe_logo.png", alt: "UConn School of Engineering logo" },
    bullets: [
      "Assisted with weekly TTL/Boolean-algebra labs, exam and report grading, and held office hours for ~80 undergraduates.",
    ],
    url: "https://catalog.uconn.edu/course-search/?details&code=CSE%202301",
  },
  {
    company: "Medtronic",
    role: "AI/ML Summer Engineering Intern",
    location: "North Haven, CT",
    start: "Jun 2022",
    end: "Aug 2022",
    logo: { src: "/images/medtronic_logo.jpg", alt: "Medtronic logo" },
    bullets: [
      "Deployed an SVM model on the Signia surgical stapler for staple-quality assessment from sensor measurements.",
      "Trained a CNN model for visual staple-quality assessment from intraoperative imagery.",
    ],
    url: "https://news.medtronic.com/medtronic-summer-internship-program",
  },
  {
    company: "Lockheed Martin",
    role: "AI/ML Engineering Intern",
    location: "Shelton, CT",
    start: "May 2021",
    end: "Jul 2021",
    logo: { src: "/images/lockheed_martin_2_logo.png", alt: "Lockheed Martin logo" },
    bullets: [
      "Part of the (Neural) Network Training & Deployment IRAD team developing an ML-based object-detection model for the Stalker XE drone.",
    ],
    url: "https://www.lockheedmartin.com/en-us/careers/career-areas/ai.html",
  },
];
