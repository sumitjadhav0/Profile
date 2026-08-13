import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface GlowButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
}

export default function GlowButton({
  href,
  children,
  variant = "primary",
  external = false,
}: GlowButtonProps) {
  const classes =
    variant === "primary"
      ? `
        group
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        border
        border-orange-400/30
        bg-gradient-to-r
        from-orange-500
        to-orange-600
        px-6
        py-3
        font-semibold
        text-white
        shadow-[0_0_35px_rgba(249,115,22,0.25)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_0_50px_rgba(249,115,22,0.45)]
      `
      : `
        group
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        border
        border-white/10
        bg-white/[0.04]
        px-6
        py-3
        font-semibold
        text-white
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-400/40
        hover:bg-cyan-400/[0.06]
      `;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}

        <ArrowUpRight
          size={17}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}

      <ArrowUpRight
        size={17}
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </Link>
  );
}