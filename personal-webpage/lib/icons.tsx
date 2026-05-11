import type { SVGProps } from "react";
import type { IconKey } from "./types";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps: IconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

function Email(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function Github(props: IconProps) {
  return (
    <svg {...baseProps} {...props} fill="currentColor" stroke="none">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.93 10.93 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.07.78 2.15v3.18c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function Linkedin(props: IconProps) {
  return (
    <svg {...baseProps} {...props} fill="currentColor" stroke="none">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.22 8h4.56v14H.22V8Zm7.49 0h4.37v1.92h.06c.61-1.16 2.1-2.39 4.32-2.39 4.62 0 5.47 3.04 5.47 7v8.47h-4.55v-7.51c0-1.79-.03-4.09-2.5-4.09-2.5 0-2.88 1.95-2.88 3.96V22H7.71V8Z" />
    </svg>
  );
}

function Scholar(props: IconProps) {
  return (
    <svg {...baseProps} {...props} fill="currentColor" stroke="none">
      <path d="M12 2 1 8.6l11 6.6 9-5.4v6.6h2V8.6L12 2Zm-7 12.4v3.4l7 4.2 7-4.2v-3.4l-7 4.2-7-4.2Z" />
    </svg>
  );
}

function Huggingface(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 13.5c1 1.5 2 2 3.5 2s2.5-.5 3.5-2" />
      <circle cx="9" cy="10.5" r="0.6" fill="currentColor" />
      <circle cx="15" cy="10.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

function Resume(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h6" />
    </svg>
  );
}

function Photography(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M4 7h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function Stackoverflow(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M5 16v4h14v-4" />
      <path d="M7 14l10 1.5M7.5 11l9.5 2.5M9 8l8.5 4M11 5l7.5 5.5M14 3l6 7" />
    </svg>
  );
}

function External(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M14 4h6v6" />
      <path d="M20 4 10 14" />
      <path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

function Paper(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5" />
    </svg>
  );
}

function Code(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m8 6-6 6 6 6M16 6l6 6-6 6M14 4l-4 16" />
    </svg>
  );
}

function Demo(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m10 9 5 3-5 3V9Z" fill="currentColor" />
    </svg>
  );
}

function Video(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="m16 10 5-3v10l-5-3" />
    </svg>
  );
}

function Slides(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="4" width="18" height="13" rx="1" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

function Website(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}

function Sun(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function Moon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  );
}

const ICONS: Record<IconKey, (p: IconProps) => React.ReactElement> = {
  email: Email,
  github: Github,
  linkedin: Linkedin,
  scholar: Scholar,
  huggingface: Huggingface,
  resume: Resume,
  photography: Photography,
  stackoverflow: Stackoverflow,
  external: External,
  paper: Paper,
  code: Code,
  demo: Demo,
  video: Video,
  slides: Slides,
  website: Website,
  sun: Sun,
  moon: Moon,
};

export function Icon({ name, ...props }: { name: IconKey } & IconProps) {
  const Component = ICONS[name];
  return <Component {...props} />;
}

export function chipIcon(kind: string): IconKey {
  switch (kind) {
    case "paper":
    case "arxiv":
      return "paper";
    case "code":
      return "code";
    case "demo":
      return "demo";
    case "video":
      return "video";
    case "slides":
    case "presentation":
      return "slides";
    case "website":
      return "website";
    case "report":
    case "poster":
      return "paper";
    default:
      return "external";
  }
}
