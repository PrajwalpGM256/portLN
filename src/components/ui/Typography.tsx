import { ReactNode } from "react";
import { cn } from "@/utils";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function DisplayHeading({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        "text-6xl md:text-8xl font-bold tracking-tighter",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function Heading({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn(
        "text-3xl md:text-4xl font-bold tracking-tight",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function Label({ children, className }: TypographyProps) {
  return (
    <span
      className={cn(
        "text-xs uppercase tracking-[0.2em] text-zinc-400",
        className
      )}
    >
      {children}
    </span>
  );
}
