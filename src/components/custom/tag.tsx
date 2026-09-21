import * as React from "react";
import { cn } from "@/lib/utils";

export function Tag({
  children,
  className,
  tone = "default"
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "brand";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] tracking-tight whitespace-nowrap",
        tone === "brand"
          ? "border-brand/30 bg-brand/10 text-brand"
          : "border-border bg-secondary/60 text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
