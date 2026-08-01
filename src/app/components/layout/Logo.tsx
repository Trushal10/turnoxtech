import Image from "next/image";
import Link from "next/link";

/**
 * Brand lockup.
 *
 * The supplied artwork shipped on a beige plate with heavy padding; the asset
 * in /public is a tightly-cropped, background-removed version so it sits flush
 * on the white canvas. Intrinsic size 707×201 (aspect 3.517) — width is
 * derived from height so the ratio can never drift.
 */
const RATIO = 707 / 201;

export default function Logo({
  height = 36,
  priority = false,
  className = "",
}: {
  height?: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="TrunoxTech — home"
      className={`inline-flex shrink-0 items-center transition-opacity duration-300 hover:opacity-80 ${className}`}
    >
      <Image
        src="/images/logo/trunoxtech-logo.png"
        alt="TrunoxTech"
        width={Math.round(height * RATIO)}
        height={height}
        priority={priority}
        sizes={`${Math.round(height * RATIO)}px`}
        className="h-auto w-auto"
        style={{ height, width: "auto" }}
      />
    </Link>
  );
}
