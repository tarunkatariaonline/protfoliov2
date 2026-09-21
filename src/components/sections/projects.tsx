import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/assets/icons/brands";
import { SectionHeading } from "@/components/custom/section-heading";
import { Reveal } from "@/components/custom/reveal";
import { Tag } from "@/components/custom/tag";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="relative border-t py-20 sm:py-28">
      <div
        aria-hidden
        className="dot-bg pointer-events-none absolute inset-0 -z-10 opacity-40"
      />

      <div className="mx-auto max-w-6xl space-y-14 px-5">
        <SectionHeading
          index="02"
          eyebrow="Projects"
          title="Things I've built on my own time"
          description="Side projects where I got to pick the stack — real-time collaboration, AI-assisted search, payments and a full design revamp."
        />

        <div className="space-y-6">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 60}>
              <article
                className={cn(
                  "group bg-card/50 hover:border-brand/40 grid items-center gap-8 overflow-hidden rounded-3xl border p-6 transition-colors sm:p-8 lg:grid-cols-2 lg:gap-12",
                  index % 2 === 1 && "lg:[&>*:first-child]:order-2"
                )}
              >
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="bg-background relative size-10 shrink-0 overflow-hidden rounded-xl border">
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        fill
                        sizes="40px"
                        className="object-cover"
                        placeholder="blur"
                      />
                    </div>
                    <div className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
                      {project.featured ? "Featured" : "Project"} ·{" "}
                      {project.date}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-brand font-mono text-sm">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-1">
                    {project.live && (
                      <Button asChild size="sm">
                        <Link
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                        >
                          LIVE DEMO <ArrowUpRightIcon />
                        </Link>
                      </Button>
                    )}
                    {project.repo && (
                      <Button asChild size="sm" variant="outline">
                        <Link
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          SOURCE <GithubIcon />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>

                <div className="relative">
                  <div
                    aria-hidden
                    className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-emerald-400/20 via-transparent to-violet-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="bg-secondary/40 relative overflow-hidden rounded-2xl border shadow-sm">
                    <div className="flex items-center gap-1.5 border-b px-4 py-2.5">
                      <span className="size-2.5 rounded-full bg-red-400/70" />
                      <span className="size-2.5 rounded-full bg-amber-400/70" />
                      <span className="size-2.5 rounded-full bg-emerald-400/70" />
                    </div>
                    <Image
                      src={project.poster}
                      alt={`${project.title} preview`}
                      className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      placeholder="blur"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
