"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { ThemeToggler } from "./theme-toggler";
import Logo from "@/assets/images/logo.png";
import LogoBlack from "@/assets/images/logoblack.png";
import { GithubIcon, LinkedInIcon } from "@/assets/icons/brands";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Navbar() {
  const pathname = usePathname();
  const { theme } = useTheme();
  console.log(theme);

  return (
    <nav className="bg-background sticky top-0 z-1">
      <div className="w-full border-b px-2">
        <div className="mx-auto flex h-12.5 w-full items-center gap-x-4 px-4 py-2">
          <Link href={"/"}>
            <Image
              src={theme === "dark" ? Logo : LogoBlack}
              className="h-[50px] w-[50px]"
              alt="logo"
            />
          </Link>

          <div className="hidden space-x-4 font-mono text-sm sm:inline"></div>
          <div className="ml-auto flex items-center gap-x-4">
            <Link href={"#intro"} className="text-sm font-light max-md:hidden">
              HOME
            </Link>

            <Link
              href={"#experience"}
              className="text-sm font-light max-md:hidden"
            >
              EXPERIENCE
            </Link>
            <Link
              href={"#projects"}
              className="text-sm font-light max-md:hidden"
            >
              PROJECTS
            </Link>
            <Link
              href={"#connect"}
              className="text-sm font-light max-md:hidden"
            >
              CONTACT ME
            </Link>

            <ThemeToggler />
            <NavMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}

export function NavMenu() {
  const { theme } = useTheme();
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button className="sm:hidden" variant={"ghost"} size={"icon"}>
          <MenuIcon className="size-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="grid grid-cols-1 place-items-center gap-4 p-4 font-mono">
          <Link href={"/"} className="py-10">
            <Image
              src={theme === "dark" ? Logo : LogoBlack}
              className="h-[50px] w-[50px]"
              alt="logo"
            />
          </Link>
          <Link href={"#intro"}>HOME</Link>
          <Link href={"#experience"}>EXPERIENCE</Link>
          <Link href={"#projects"}>PROJECTS</Link>
          <Link href={"#connect"}>CONTECT ME</Link>
          <div className="mt-10 grid grid-cols-2 gap-4">
            <Button size={"icon-lg"} asChild title="Github">
              <Link
                href="https://github.com/tarunkatariaonline"
                target="_blank"
              >
                <GithubIcon />
              </Link>
            </Button>
            <Button size={"icon-lg"} asChild title="LinkedIn">
              <Link
                href="https://www.linkedin.com/in/tarunkatariaonline/"
                target="_blank"
              >
                <LinkedInIcon />
              </Link>
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
