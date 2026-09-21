import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { SectionHeading } from "@/components/custom/section-heading";
import { CompanyMark } from "@/components/custom/company-mark";
import { Reveal } from "@/components/custom/reveal";
import { Tag } from "@/components/custom/tag";
import Metrics from "@/components/custom/metrics";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative border-t py-20 sm:py-28">
      <div className="mx-auto max-w-6xl space-y-14 px-5">
        <SectionHeading
          index="01"
          eyebrow="Experience"
          title="Where I've shipped"
          description="Three roles, one throughline: taking features from a ticket to something real users touch — and keeping them alive in production."
        />

        <Reveal delay={80}>
          <Metrics />
        </Reveal>

        <div className="relative">
          <div
            aria-hidden
            className="absolute top-2 bottom-2 left-[27px] hidden w-px sm:block"
          >
            {/* soft glow — sits outside the clip so it can bleed */}
            <div className="timeline-beam absolute -inset-x-1 inset-y-0 opacity-70 blur-[3px]" />
            {/* crisp line */}
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="bg-border absolute inset-0" />
              <div className="timeline-beam absolute inset-0" />
            </div>
          </div>

          <div className="space-y-12">
            {experiences.map((job, i) => (
              <Reveal
                key={job.company}
                delay={i * 60}
                className="relative sm:pl-20"
              >
                <div className="bg-background absolute top-0 left-0 hidden sm:block">
                  <CompanyMark
                    logo={job.logo}
                    initials={job.initials}
                    name={job.company}
                    inset={job.logoInset}
                  />
                </div>

                <article className="bg-card/50 hover:border-brand/40 space-y-5 rounded-2xl border p-6 transition-colors sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <CompanyMark
                        logo={job.logo}
                        initials={job.initials}
                        name={job.company}
                        inset={job.logoInset}
                        className="sm:hidden"
                      />
                      <div className="space-y-1">
                        <h3 className="flex flex-wrap items-center gap-2 text-xl font-semibold tracking-tight">
                          {job.role}
                          {job.current && (
                            <Tag tone="brand">
                              <span className="bg-brand mr-1.5 size-1.5 rounded-full" />
                              Current
                            </Tag>
                          )}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {job.link ? (
                            <Link
                              href={job.link}
                              target="_blank"
                              rel="noreferrer"
                              className="hover:text-brand inline-flex items-center gap-1 font-medium text-current transition-colors"
                            >
                              {job.company}
                              <ArrowUpRightIcon className="size-3.5" />
                            </Link>
                          ) : (
                            <span className="font-medium">{job.company}</span>
                          )}
                          <span className="mx-2">·</span>
                          {job.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground font-mono text-xs whitespace-nowrap">
                      {job.period}
                    </p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                    {job.summary}
                  </p>

                  <ul className="space-y-2.5">
                    {job.highlights.map((point) => (
                      <li
                        key={point}
                        className="text-muted-foreground flex gap-3 text-sm leading-relaxed"
                      >
                        <span
                          aria-hidden
                          className="bg-brand/70 mt-2 size-1.5 shrink-0 rotate-45 rounded-[2px]"
                        />
                        <span className="text-pretty">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {job.stack.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
