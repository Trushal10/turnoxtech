import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import Icon, { type IconName } from "./Icon";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 font-display font-semibold whitespace-nowrap rounded-pill transition-all duration-300 ease-[cubic-bezier(.16,1,.3,1)] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "btn-glow bg-linear-to-r from-brand to-accent text-white shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-white text-ink border border-hairline shadow-xs hover:border-brand/40 hover:text-brand hover:shadow-soft hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-ink-soft hover:text-brand hover:bg-brand-tint",
  light:
    "bg-white/12 text-white border border-white/25 backdrop-blur-sm hover:bg-white/20 hover:-translate-y-0.5 active:translate-y-0",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-8 text-base",
};

type SharedProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  className?: string;
};

function content(children: ReactNode, icon?: IconName) {
  return (
    <>
      <span className="relative z-10">{children}</span>
      {icon ? (
        <Icon
          name={icon}
          size={18}
          className="relative z-10 transition-transform duration-300 ease-[cubic-bezier(.16,1,.3,1)] group-hover/btn:translate-x-1"
        />
      ) : null}
    </>
  );
}

type ButtonLinkProps = SharedProps &
  Omit<ComponentProps<typeof Link>, "className" | "children">;

export function ButtonLink({
  children,
  variant = "primary",
  size = "md",
  icon,
  className = "",
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {content(children, icon)}
    </Link>
  );
}

type ButtonProps = SharedProps &
  Omit<ComponentProps<"button">, "className" | "children">;

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  className = "",
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {content(children, icon)}
    </button>
  );
}

export default Button;
