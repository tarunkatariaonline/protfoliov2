import Link from "next/link";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

import ContactForm from "@/components/custom/contact-form";
import { CopyEmail } from "@/components/custom/copy-email";
import { SectionHeading } from "@/components/custom/section-heading";
import { Reveal } from "@/components/custom/reveal";
import { GithubIcon, LinkedInIcon } from "@/assets/icons/brands";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t py-20 sm:py-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="glow-blob absolute bottom-0 left-1/2 size-[30rem] -translate-x-1/2 rounded-full"
          style={{ background: "var(--glow-a)" }}
        />
      </div>

      <div className="mx-auto max-w-6xl space-y-14 px-5">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title="Let's build something"
          description="Hiring, collaborating, or just want to compare notes on React Native and Shopify? My inbox is open."
        />

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Reveal className="space-y-6">
            <div className="bg-card/50 space-y-5 rounded-2xl border p-6">
              <div className="space-y-1.5">
                <p className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
                  Email
                </p>
                <div className="flex items-center justify-between gap-3">
                  <Link
                    href={`mailto:${profile.email}`}
                    className="hover:text-brand text-sm font-medium break-all text-current transition-colors"
                  >
                    {profile.email}
                  </Link>
                  <CopyEmail />
                </div>
              </div>

              <div className="space-y-1.5 border-t pt-5">
                <p className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
                  Phone
                </p>
                <Link
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="hover:text-brand inline-flex items-center gap-2 text-sm font-medium text-current transition-colors"
                >
                  <PhoneIcon className="text-brand size-3.5" />
                  {profile.phone}
                </Link>
              </div>

              <div className="space-y-1.5 border-t pt-5">
                <p className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
                  Based in
                </p>
                <p className="inline-flex items-center gap-2 text-sm font-medium">
                  <MapPinIcon className="text-brand size-3.5" />
                  {profile.location}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" size="lg" asChild>
                <Link href={profile.github} target="_blank" rel="noreferrer">
                  <GithubIcon /> GITHUB
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={profile.linkedin} target="_blank" rel="noreferrer">
                  <LinkedInIcon /> LINKEDIN
                </Link>
              </Button>
            </div>

            <p className="text-muted-foreground flex items-start gap-2 text-sm leading-relaxed">
              <MailIcon className="text-brand mt-0.5 size-4 shrink-0" />I try to
              reply to everything within a day or two.
            </p>
          </Reveal>

          <Reveal
            delay={80}
            className="bg-card/50 rounded-2xl border p-6 sm:p-8"
          >
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
