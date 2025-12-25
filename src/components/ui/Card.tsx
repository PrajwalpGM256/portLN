import { ReactNode } from "react";
import { cn } from "@/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "bg-zinc-900 border border-zinc-800 rounded-xl p-6",
        className
      )}
    >
      {children}
    </div>
  );
}
