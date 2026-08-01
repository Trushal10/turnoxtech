import type { ReactNode } from "react";

/**
 * A staggered child of <RevealGroup>. Intentionally a server component with no
 * hooks — the parent group owns the single observer, and the cascade comes
 * from :nth-child transition delays in globals.css.
 */
export default function RevealItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`reveal-item ${className}`}>{children}</div>;
}
