import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
  priority?: boolean;
}

export function Avatar({ src, alt, size = 192, priority = false }: AvatarProps) {
  return (
    <div
      className="relative overflow-hidden rounded-full border border-border bg-surface-2"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${size}px`}
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}
