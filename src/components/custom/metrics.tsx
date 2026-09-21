"use client";

import * as React from "react";
import NumberFlow from "@number-flow/react";

import { stats } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Metrics() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [start, setStart] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setStart(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 divide-y rounded-2xl border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4"
    >
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={cn(
            "group hover:bg-secondary/40 space-y-2 p-6 transition-colors sm:p-7",
            i % 2 === 1 && "sm:border-l",
            i >= 2 && "sm:border-t lg:border-t-0",
            i === 2 && "lg:border-l"
          )}
        >
          <strong className="flex items-baseline font-mono text-4xl font-semibold tracking-tighter sm:text-[2.75rem]">
            <NumberFlow
              value={start ? stat.value : 0}
              transformTiming={{ duration: 1600, easing: "ease-out" }}
            />
            <span className="text-brand">{stat.suffix}</span>
          </strong>
          <p className="text-sm leading-snug font-medium">{stat.label}</p>
          <p className="text-muted-foreground font-mono text-xs tracking-tight">
            {stat.sub}
          </p>
        </div>
      ))}
    </div>
  );
}
