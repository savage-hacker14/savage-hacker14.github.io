import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "stem-separation",
    title: "Music Stem Separation with Text-Conditioning",
    year: 2024,
    authors: "Jacob Krucinski, Maximilian H., Surya M., Noah S.",
    context: "Northeastern · CS 7150 Final Project",
    summary:
      "Added text-based stem conditioning to HTDemucs via cross-attention with CLAP text embeddings, allowing extraction of arbitrary stems beyond the model's fixed set. Achieved 5.04 dB SDR across 4 stems on MUSDB18.",
    thumbnail: {
      src: "/images/Stem_Separation_Project.png",
      alt: "Diagram of text-conditioned stem separation architecture",
      width: 600,
      height: 360,
    },
    categories: ["ml", "audio"],
    chips: [
      { kind: "code", href: "https://github.com/savage-hacker14/audio-to-sheet-music" },
      { kind: "demo", href: "https://huggingface.co/spaces/jacob1576/AudioTextHTDemucs" },
      {
        kind: "presentation",
        href: "https://docs.google.com/presentation/d/1d2muNP3LKTBLZzxt4L7sKxx_nO0klc5U9eKkQvFma6A/edit?usp=sharing",
      },
    ],
    featured: true,
  },
  {
    slug: "hand-gesture-recognition",
    title: "Dynamic Hand Gesture Recognition",
    year: 2024,
    authors: "Jacob Krucinski, Maalolan B., Yiting W., Hau H., Andrew P.",
    context: "Northeastern · CS 5100 Final Project",
    summary:
      "Built a webcam-based gesture recognition system enabling intuitive, keyboard-and-mouse-free computer control: scroll up/down, zoom in/out, and switch applications. Covered the full ML workflow from data collection through deployment.",
    thumbnail: {
      src: "/images/example_zoom_in.gif",
      alt: "Demo of dynamic hand gesture zoom-in control",
      width: 600,
      height: 360,
    },
    categories: ["ml", "cv"],
    chips: [
      { kind: "code", href: "https://github.com/savage-hacker14/gesture-computer-control" },
      {
        kind: "presentation",
        href: "https://docs.google.com/presentation/d/1uRziCbcJQd6zKqW0X7h91gXNPQYzkSj_/edit?usp=sharing&ouid=100363518490014094553&rtpof=true&sd=true",
      },
      {
        kind: "report",
        href: "https://drive.google.com/file/d/1NrG6VjSg3LKgrS6uQa0goweEtylO8uTd/view?usp=sharing",
      },
    ],
  },
  {
    slug: "automatic-cvt-bicycle",
    title: "Automatic CVT for a Bicycle",
    year: 2024,
    authors: "Jacob Krucinski + UConn CSE Team 11 & ME Team 50",
    context: "UConn · Senior Design Project (Advisor: Swapna Gokhale)",
    summary:
      "In collaboration with Transcend Bicycle, designed the hardware and software for an automatic CVT controller that performs gear shifts hands-free. Modeled the human-bike-CVT system in Simulink and auto-generated embedded C with the Embedded Coder Toolbox.",
    thumbnail: {
      src: "/images/Full_Alpha_Prototype2.JPG",
      alt: "Photo of CVT bicycle alpha prototype",
      width: 600,
      height: 400,
    },
    categories: ["robotics", "hardware"],
    chips: [
      {
        kind: "video",
        href: "https://kaltura.uconn.edu/media/t/1_7gdpzm3o",
      },
      {
        kind: "poster",
        href: "https://drive.google.com/file/d/1Imr0a8tUqPDUt_-gyOLgeUQuG3cxsual/view?usp=sharing",
      },
    ],
  },
  {
    slug: "cup-pong-robot",
    title: "Cup Pong Robot",
    year: 2023,
    authors: "Jacob Krucinski, Deven V., Matt C., Andres R.",
    context: "UConn · ECE 3161 Intro to Robotics",
    summary:
      "Built a fixed-base 2-DOF articulated manipulator that plays cup pong, using Dynamixel MX64-AR motors, a Lego NXT turret motor, a Raspberry Pi 4, and ArUco-tag-based cup detection via OpenCV.",
    thumbnail: {
      src: "/images/Cup_Pong_Robot.JPG",
      alt: "Cup Pong robot demo placeholder",
      width: 600,
      height: 400,
    },
    categories: ["robotics", "cv", "hardware"],
    chips: [
      {
        kind: "video",
        href: "https://drive.google.com/drive/folders/1-6r2LnrP2v7ZYxyqbUrrHMPz2KY6PNbc?usp=sharing",
      },
      {
        kind: "presentation",
        href: "https://drive.google.com/file/d/1oCWxxRtDVnTDjOW6t6yOOWu4PWqpO6sK/view?usp=sharing",
      },
    ],
  },
];
