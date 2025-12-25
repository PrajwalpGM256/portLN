import { ReactNode } from "react";
import { cn } from "@/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "outline";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        variant === "default" && "bg-green-400/10 text-green-400",
        variant === "outline" && "border border-zinc-700 text-zinc-400",
        className
      )}
    >
      {children}
    </span>
  );
}
