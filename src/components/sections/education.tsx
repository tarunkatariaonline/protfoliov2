import { GraduationCapIcon, TrophyIcon } from "lucide-react";

import { SectionHeading } from "@/components/custom/section-heading";
import { Reveal } from "@/components/custom/reveal";
import { Tag } from "@/components/custom/tag";
import { achievements, education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="relative border-t py-20 sm:py-28">
      <div className="mx-auto max-w-6xl space-y-14 px-5">
        <SectionHeading
          index="04"
          eyebrow="Background"
          title="Education & recognition"
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-5">
            <h3 className="text-muted-foreground flex items-center gap-2 font-mono text-xs tracking-widest uppercase">
              <GraduationCapIcon className="text-brand size-4" /> Education
            </h3>
            <div className="space-y-4">
              {education.map((item, i) => (
                <Reveal
                  key={item.school}
                  delay={i * 60}
                  className="bg-card/50 hover:border-brand/40 space-y-2 rounded-2xl border p-6 transition-colors"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h4 className="font-semibold tracking-tight text-pretty">
                      {item.school}
                    </h4>
                    <span className="text-muted-foreground font-mono text-xs whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.degree}</p>
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <Tag tone="brand">{item.score}</Tag>
                    <Tag>{item.location}</Tag>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-muted-foreground flex items-center gap-2 font-mono text-xs tracking-widest uppercase">
              <TrophyIcon className="text-brand size-4" /> Achievements &
              certifications
            </h3>
            <div className="space-y-3">
              {achievements.map((item, i) => (
                <Reveal
                  key={item.id}
                  delay={i * 50}
                  className="bg-card/50 hover:border-brand/40 flex gap-4 rounded-2xl border p-5 transition-colors"
                >
                  <div className="bg-brand/10 text-brand grid size-9 shrink-0 place-items-center rounded-xl font-mono text-xs">
                    0{i + 1}
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-sm font-semibold tracking-tight">
                        {item.title}
                      </h4>
                      <Tag>{item.tag}</Tag>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                      {item.detail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
