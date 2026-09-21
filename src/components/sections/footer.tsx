import Link from "next/link";
import { ArrowUpIcon } from "lucide-react";

import { GithubIcon, LinkedInIcon } from "@/assets/icons/brands";
import { navLinks, profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="font-mono text-sm font-medium tracking-tight">
            {profile.name}
            <span className="text-brand">.</span>
          </p>
          <p className="text-muted-foreground font-mono text-xs">
            © {new Date().getFullYear()} — Built with Next.js & Tailwind CSS.
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-brand font-mono text-xs transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-brand transition-colors"
          >
            <GithubIcon className="size-4" />
          </Link>
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-brand transition-colors"
          >
            <LinkedInIcon className="size-4" />
          </Link>
          <Link
            href="#about"
            aria-label="Back to top"
            className="text-muted-foreground hover:text-brand hover:border-brand/40 ml-1 grid size-8 place-items-center rounded-full border transition-colors"
          >
            <ArrowUpIcon className="size-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
