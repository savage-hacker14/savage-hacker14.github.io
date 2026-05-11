interface SectionHeadingProps {
  id: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ id, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <h2
        id={id}
        className="text-3xl font-semibold tracking-tight text-text sm:text-4xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-base text-muted">{subtitle}</p>
      )}
    </div>
  );
}
