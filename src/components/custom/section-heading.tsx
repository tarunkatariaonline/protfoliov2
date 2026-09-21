import * as React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-2xl space-y-4", className)}>
      <div className="text-muted-foreground flex items-center gap-3 font-mono text-xs tracking-widest uppercase">
        <span className="text-brand">{index}</span>
        <span className="bg-border h-px w-8" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-base leading-relaxed text-pretty">
          {description}
        </p>
      )}
    </Reveal>
  );
}
