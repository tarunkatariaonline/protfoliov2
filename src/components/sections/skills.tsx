import {
  Code2Icon,
  PaletteIcon,
  PlugIcon,
  ServerIcon,
  SmartphoneIcon,
  SparklesIcon,
  WrenchIcon
} from "lucide-react";

import { SectionHeading } from "@/components/custom/section-heading";
import { Reveal } from "@/components/custom/reveal";
import { Tag } from "@/components/custom/tag";
import { skillGroups, type SkillGroup } from "@/lib/data";
import { cn } from "@/lib/utils";

const ICONS: Record<SkillGroup["icon"], React.ElementType> = {
  mobile: SmartphoneIcon,
  frontend: PaletteIcon,
  backend: ServerIcon,
  ai: SparklesIcon,
  integrations: PlugIcon,
  languages: Code2Icon,
  tools: WrenchIcon
};

export function Skills() {
  return (
    <section id="skills" className="relative border-t py-20 sm:py-28">
      <div className="mx-auto max-w-6xl space-y-14 px-5">
        <SectionHeading
          index="03"
          eyebrow="Toolkit"
          title="What I work with"
          description="The stack I reach for day to day, plus the integration and analytics tooling that comes with shipping commerce apps."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = ICONS[group.icon];

            return (
              <Reveal
                key={group.title}
                delay={i * 50}
                className={cn(
                  "group bg-card/50 hover:border-brand/40 flex flex-col gap-5 rounded-2xl border p-6 transition-colors",
                  group.span === 2 && "lg:col-span-2",
                  group.span === 3 && "sm:col-span-2 lg:col-span-3"
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <span className="bg-brand/10 text-brand grid size-9 shrink-0 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110">
                      <Icon className="size-4" />
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold tracking-tight">
                        {group.title}
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed text-pretty">
                        {group.blurb}
                      </p>
                    </div>
                  </div>
                  <span className="text-muted-foreground/70 shrink-0 font-mono text-[11px] tabular-nums">
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag
                      key={item}
                      className="hover:border-brand/40 hover:text-foreground transition-colors"
                    >
                      {item}
                    </Tag>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
