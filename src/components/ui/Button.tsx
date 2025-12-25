import { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  children,
  className,
  variant = "default",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium transition-colors rounded-lg",
        variant === "default" && "bg-green-500 text-black hover:bg-green-400",
        variant === "outline" && "border border-zinc-700 text-white hover:bg-zinc-800",
        variant === "ghost" && "text-zinc-400 hover:text-white hover:bg-zinc-800",
        size === "sm" && "px-3 py-1.5 text-sm",
        size === "md" && "px-4 py-2 text-sm",
        size === "lg" && "px-6 py-3 text-base",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
