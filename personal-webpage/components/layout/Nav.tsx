import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-bg/80 backdrop-blur supports-[backdrop-filter]:bg-bg/60">
      <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-6">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-text transition-colors hover:text-accent"
        >
          Jacob Krucinski
        </a>
        <nav className="hidden items-center gap-5 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
