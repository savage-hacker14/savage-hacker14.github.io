import type { SkillGroup } from "@/lib/types";

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["Python", "C / C++", "MATLAB", "R", "Java", "TypeScript", "HTML", "Bash", "VHDL", "Scheme (R5RS)"],
  },
  {
    label: "ML & Computer Vision",
    skills: [
      "PyTorch",
      "TensorFlow / Keras",
      "scikit-learn",
      "OpenCV",
      "GRIP",
      "Hugging Face",
      "CNNs",
      "Transformers"
    ],
  },
  {
    label: "Tools & Frameworks",
    skills: [
      "Simulink / Stateflow",
      "Embedded Coder",
      "ROS 1",
      "ROS 2",
      "Git",
      "Docker",
      "REST APIs",
      "Linux",
      "LaTeX"
    ],
  },
  {
    label: "Hardware",
    skills: [
      "Raspberry Pi",
      "Arduino",
      "Dynamixel Servos"
    ],
  },
];
