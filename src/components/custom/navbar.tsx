"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, FileTextIcon, ArrowUpRightIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "../ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger
} from "../ui/drawer";
import { ThemeToggler } from "./theme-toggler";
import { GithubIcon, LinkedInIcon } from "@/assets/icons/brands";
import Logo from "@/assets/images/logo.png";
import LogoBlack from "@/assets/images/logoblack.png";
import { navLinks, profile } from "@/lib/data";
import { cn } from "@/lib/utils";

function useActiveSection() {
  const [active, setActive] = React.useState<string>("");

  React.useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return active;
}

function BrandLogo({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <Image
      src={mounted && resolvedTheme === "dark" ? Logo : LogoBlack}
      alt="Tarun Kataria"
      className={cn("size-9 object-contain", className)}
    />
  );
}

export default function Navbar() {
  const active = useActiveSection();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:pt-4">
      <nav
        className={cn(
          "mx-auto flex h-14 max-w-6xl items-center gap-3 rounded-2xl px-3 transition-all duration-300 sm:px-4",
          scrolled
            ? "bg-background/70 border shadow-sm backdrop-blur-xl"
            : "border border-transparent"
        )}
      >
        <Link
          href="/"
          aria-label="Home"
          className="flex items-center gap-2.5 text-current"
        >
          <BrandLogo />
          <span className="hidden font-mono text-sm font-medium tracking-tight sm:inline">
            tarun<span className="text-brand">.</span>
          </span>
        </Link>

        <div className="mx-auto hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-3 py-1.5 font-mono text-xs tracking-tight transition-colors",
                active === link.href
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <Button
            variant="ghost"
            size="icon"
            asChild
            title="GitHub"
            className="max-sm:hidden"
          >
            <Link href={profile.github} target="_blank" rel="noreferrer">
              <GithubIcon />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            title="LinkedIn"
            className="max-sm:hidden"
          >
            <Link href={profile.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </Link>
          </Button>
          <ThemeToggler />
          <Button asChild size="sm" className="max-md:hidden">
            <Link href={profile.resume} target="_blank" rel="noreferrer">
              RESUME <FileTextIcon />
            </Link>
          </Button>
          <NavMenu active={active} />
        </div>
      </nav>
    </header>
  );
}

function NavMenu({ active }: { active: string }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Drawer direction="right" open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="md:hidden" variant="outline" size="icon">
          <MenuIcon className="size-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerTitle className="sr-only">Navigation</DrawerTitle>
        <div className="flex h-full flex-col p-6">
          <div className="flex items-center gap-2.5 pt-2">
            <BrandLogo />
            <span className="font-mono text-sm">
              tarun<span className="text-brand">.</span>
            </span>
          </div>

          <div className="mt-10 flex flex-col">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center justify-between border-b py-4 text-lg tracking-tight transition-colors",
                  active === link.href
                    ? "text-brand"
                    : "text-foreground hover:text-brand"
                )}
              >
                <span>{link.label}</span>
                <span className="text-muted-foreground font-mono text-xs">
                  0{i + 1}
                </span>
              </Link>
            ))}
          </div>

          <Button asChild className="mt-8">
            <Link href={profile.resume} target="_blank" rel="noreferrer">
              VIEW RESUME <ArrowUpRightIcon />
            </Link>
          </Button>

          <div className="mt-auto grid grid-cols-2 gap-3 pt-8">
            <Button variant="outline" asChild>
              <Link href={profile.github} target="_blank" rel="noreferrer">
                <GithubIcon /> GITHUB
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={profile.linkedin} target="_blank" rel="noreferrer">
                <LinkedInIcon /> LINKEDIN
              </Link>
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
