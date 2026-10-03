export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-between gap-2 px-6 py-8 text-xs text-muted sm:flex-row">
        <p>© {year} Jacob Krucinski</p>
        <p>Built with Next.js · Updated October 2nd, 2026</p>
      </div>
    </footer>
  );
}
