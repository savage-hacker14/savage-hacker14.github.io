"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/lib/icons";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme(getInitialTheme());
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-muted transition-colors hover:border-accent/40 hover:text-text"
    >
      {mounted ? (
        <Icon name={theme === "dark" ? "sun" : "moon"} width={16} height={16} />
      ) : (
        <span className="block h-4 w-4" />
      )}
    </button>
  );
}
