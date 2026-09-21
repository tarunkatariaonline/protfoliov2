import { SectionHeading } from "@/components/custom/section-heading";
import { Reveal } from "@/components/custom/reveal";
import { Tag } from "@/components/custom/tag";
import { skillGroups } from "@/lib/data";

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
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.title}
              delay={i * 50}
              className="bg-card/50 hover:border-brand/40 space-y-4 rounded-2xl border p-6 transition-colors"
            >
              <h3 className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase">
                <span className="bg-brand size-1.5 rounded-full" />
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
