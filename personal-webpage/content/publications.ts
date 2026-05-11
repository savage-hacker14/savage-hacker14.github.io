import type { Publication } from "@/lib/types";

export const publications: Publication[] = [
  {
    slug: "aerobat-stabilization",
    title:
      "Real-Time Video Stabilization and Motion Deblurring for Flapping-Wing Robots",
    authors: "Jacob Krucinski",
    venue:
      "Northeastern University — Master's Thesis (Advisors: Alireza Ramezani, Rajagopal Venkatesaramani)",
    year: 2026,
    thumbnail: {
      src: "/images/aerobat_square.gif",
      alt: "Aerobat flapping-wing robot in flight",
      width: 320,
      height: 320,
    },
    chips: [
      {
        kind: "paper",
        href: "https://www.researchgate.net/publication/404401071_Real-Time_Video_Stabilization_and_Motion_Deblurring_for_ORB-SLAM_3_Performance_Improvement",
      },
      {
        kind: "code",
        href: "https://github.com/SS-Lab-at-NU/Aerobat-Video-Stabilization",
      },
      {
        kind: "presentation",
        href: "https://fileadmin.cs.lth.se/cs/Education/edan70/AIProjects/2023/slides/Jacob.pdf",
      },
    ],
    abstract:
      "A real-time image preprocessing framework for visual odometry on the Aerobat flapping-wing MAV consisting of two modular ROS 1 components: a RobustL1-based electronic image stabilizer and an IMU/CNN-guided non-uniform Wiener deblurring pipeline. They both address camera jitter and motion blur from wing-stroke dynamics. The stabilizer runs at 100+ FPS and the deblurring pipeline at 21.4 FPS end-to-end at 480p, with a +1.02 dB PSNR improvement on Aerobat sequences and a 72.8% RMSE reduction in ORB-SLAM3 localization error on the V2_03_difficult EuRoC sequence.",
    highlight: true,
  },
  {
    slug: "biomedical-relation-extraction",
    title: "NLP Relation Extraction in Biomedical Literature",
    authors: "Jacob Krucinski",
    venue: "Lund University — EDAN70 Course Project (Advisor: Sonja Aits)",
    year: 2023,
    thumbnail: {
      src: "/images/nlp_relation_extraction.png",
      alt: "NLP relation extraction architecture diagram",
      width: 320,
      height: 240,
    },
    chips: [
      {
        kind: "paper",
        href: "https://drive.google.com/file/d/1pJeUU4tiMoLDh67E3tf4AzhAnLDdAwDG/view?usp=sharing",
      },
      { kind: "code", href: "https://github.com/Aitslab/BioNLP/tree/master/jacob" },
      {
        kind: "presentation",
        href: "https://fileadmin.cs.lth.se/cs/Education/edan70/AIProjects/2023/slides/Jacob.pdf",
      },
    ],
    abstract:
      "Explored BioGPT and SciBERT for relation extraction on annotated biomedical corpora (BC5CDR, ChemProt, DrugProt). Fine-tuned SciBERT on a combined ChemProt+DrugProt corpus, improving precision, recall, and F1 by 5%.",
  },
  {
    slug: "missile-streak-detection",
    title: "Machine Learning for Missile Streak Detection and Localization",
    authors: "Jacob Krucinski, Adam Bienkowski, Krishna Pattipati",
    venue: "IEEE Aerospace Conference",
    year: 2021,
    thumbnail: {
      src: "/images/ML_Missile_Detection_Paper.jpg",
      alt: "ML missile streak detection paper thumbnail",
      width: 320,
      height: 240,
    },
    chips: [{ kind: "paper", href: "https://ieeexplore.ieee.org/abstract/document/9438357" }],
    abstract:
      "Computationally efficient CNNs for detecting and localizing streaking targets from an optical sensor's focal plane array. The ML models were ~340× faster for detection and ~360× faster for localization on 256×256 images vs SOTA probabilistic methods. Detection ROC AUC: 0.94 (ML) vs 0.85 (SOTA); localization MSE: 0.035 (ML) vs 0.243 (SOTA).",
  },
];
