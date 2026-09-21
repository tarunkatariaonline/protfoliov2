import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRightIcon,
  FileTextIcon,
  MailIcon,
  MapPinIcon
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedInIcon } from "@/assets/icons/brands";
import TarunPhoto from "@/assets/images/Tarun.jpg";
import TypeAnimation from "@/components/custom/type-animation";
import { Reveal } from "@/components/custom/reveal";
import { marqueeSkills, profile } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden pt-28 sm:pt-36"
    >
      {/* ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-bg absolute inset-0" />
        <div
          className="glow-blob absolute -top-24 -left-24 size-[28rem] rounded-full"
          style={{ background: "var(--glow-a)" }}
        />
        <div
          className="glow-blob absolute -top-10 right-0 size-[24rem] rounded-full"
          style={{ background: "var(--glow-b)" }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="space-y-8">
            <Reveal>
              <span className="border-brand/30 bg-brand/10 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-xs tracking-tight">
                <span className="relative flex size-2">
                  <span className="bg-brand animate-pulse-ring absolute inline-flex size-full rounded-full" />
                  <span className="bg-brand relative inline-flex size-2 rounded-full" />
                </span>
                <span className="text-brand">{profile.available}</span>
              </span>
            </Reveal>

            <Reveal delay={80} className="space-y-4">
              <p className="text-muted-foreground font-mono text-sm tracking-tight">
                Hi, I&apos;m
              </p>
              <h1 className="text-5xl font-semibold tracking-tighter text-balance sm:text-6xl lg:text-7xl">
                <span className="text-gradient">{profile.name}</span>
              </h1>
              <p className="text-xl font-medium tracking-tight sm:text-2xl">
                <TypeAnimation />
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p className="text-muted-foreground max-w-xl text-base leading-relaxed text-pretty">
                {profile.summary}
              </p>
            </Reveal>

            <Reveal delay={240} className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href={profile.resume} target="_blank" rel="noreferrer">
                  VIEW RESUME <FileTextIcon />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#contact">
                  GET IN TOUCH <ArrowDownRightIcon />
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon-lg" asChild title="GitHub">
                  <Link
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="size-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon-lg" asChild title="LinkedIn">
                  <Link
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon className="size-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon-lg" asChild title="Email">
                  <Link
                    href={`mailto:${profile.email}`}
                    aria-label="Email"
                    className="text-current"
                  >
                    <MailIcon className="size-5" />
                  </Link>
                </Button>
              </div>
            </Reveal>

            <Reveal
              delay={320}
              className="text-muted-foreground flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPinIcon className="size-3.5" /> {profile.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MailIcon className="size-3.5" /> {profile.email}
              </span>
            </Reveal>
          </div>

          <Reveal delay={200} className="flex justify-center lg:justify-end">
            <div className="relative">
              <div
                aria-hidden
                className="animate-gradient-shift absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-emerald-400/50 via-sky-400/40 to-violet-500/50 opacity-70 blur-xl"
                style={{ backgroundSize: "300% 300%" }}
              />
              <div className="bg-card relative overflow-hidden rounded-[2rem] border p-2 shadow-xl">
                <Image
                  src={TarunPhoto}
                  alt="Portrait of Tarun Kataria"
                  width={340}
                  height={340}
                  priority
                  placeholder="blur"
                  className="aspect-square w-[300px] rounded-[1.5rem] object-cover sm:w-[340px]"
                />
              </div>

              <div className="bg-card/90 animate-float-y absolute -bottom-5 -left-5 rounded-2xl border px-4 py-3 shadow-lg backdrop-blur">
                <p className="text-brand font-mono text-2xl font-semibold">
                  1.5+
                </p>
                <p className="text-muted-foreground font-mono text-[11px] tracking-tight">
                  years shipping
                </p>
              </div>

              <div
                className="bg-card/90 animate-float-y absolute -top-4 -right-4 rounded-2xl border px-4 py-3 shadow-lg backdrop-blur"
                style={{ animationDelay: "1.5s" }}
              >
                <p className="font-mono text-sm font-semibold">React Native</p>
                <p className="text-muted-foreground font-mono text-[11px] tracking-tight">
                  iOS · Android
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mask-fade-x relative mt-20 flex overflow-hidden border-y py-4 sm:mt-28">
        <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
          {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="text-muted-foreground flex items-center gap-8 font-mono text-sm whitespace-nowrap"
            >
              {skill}
              <span className="bg-brand/60 size-1 rounded-full" />
            </span>
          ))}
        </div>
        <div
          aria-hidden
          className="animate-marquee flex shrink-0 items-center gap-8 pr-8"
        >
          {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
            <span
              key={`dup-${skill}-${i}`}
              className="text-muted-foreground flex items-center gap-8 font-mono text-sm whitespace-nowrap"
            >
              {skill}
              <span className="bg-brand/60 size-1 rounded-full" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
