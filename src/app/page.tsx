import ContactForm from "@/components/custom/contact-form";
import Navbar from "@/components/custom/navbar";
import { Button } from "@/components/ui/button";

import {
  FileIcon,
  CogIcon,
  SquareArrowOutUpRightIcon,
  CopyrightIcon,
  BriefcaseBusiness,
  Contact2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "@/assets/icons/brands";
import TarunPhoto from "@/assets/images/Tarun.jpg";

import SyntexSquad from "@/assets/images/projects/syntexsquad.png";
import EcommercePoster from "@/assets/images/projects/ecommerceposter.png";
import ISROPoster from "@/assets/images/projects/isroproject.png";
import ISROLogo from "@/assets/images/projects/isrologo.png";
import NetflixPoster from "@/assets/images/projects/netflix.jpg";
import NetflixLogo from "@/assets/images/projects/netflixlogo.png";
import Ecommerce from "@/assets/images/projects/ecommerce.png";
import BosscoderLogo from "@/assets/images/projects/bosscoder-logo.png";
import AtomicHouseLogo from "@/assets/images/projects/atomichouse_logo.jpg";
import SyntexSquadLogo from "@/assets/images/projects/sslogo.png";
import { GradientImage } from "@/components/custom/gradient-image";
import TypeAnimation from "@/components/custom/TypeAnimation";

const works = [
  {
    title: "Bosscoder Academy",
    subtitle:
      "SDE - Engineering the Backbone of a Scalable Education Platform at BCA",
    description:
      "I worked as a Software Engineer Intern where I played a pivotal role in building and scaling internal tools and the admin ecosystem. I integrated WebEngage for user tracking, created a Super Admin panel, and implemented real-time instructor availability. I also enabled automated notifications for various use cases and revamped the mentor management system, improving both UI/UX and operational reliability across the platform.",
    logo: BosscoderLogo,
    live: "https://www.bosscoderacademy.com"
  },
  {
    title: "Atomic House",
    subtitle: "Full Stack Developer Intern - Web + Chrome Extension",
    description:
      "Atomic House is a startup focused on improving digital productivity through browser-based tools and smart utilities they have product newboard. During my internship, I contributed as a full stack developer in newboard product, creating scalable APIs using GraphQL, Prisma, and PostgreSQL, and designed user-facing features with React.js, Next.js 14, and Tailwind CSS. I was instrumental in building the Atomic House Bookmark Tool, a productivity-focused Chrome extension. Collaborated in agile teams and deployed features seamlessly via GitHub Actions and Vercel.",
    logo: AtomicHouseLogo,
    live: "https://newboard.io/"
  }
];

const projects = [
  {
    title: "Syntax-Squad - Real-time Code Editor",
    subtitle: "Collaborative Coding App with Video Calling",
    description:
      "Syntax-Squad is a real-time collaborative code editor with live multi-user editing and video calls, ideal for remote pair programming and interviews. Built with React.js, Node.js, Socket.io, and Zegocloud, it features syntax highlighting, room-based sessions, and secure real-time syncing.",
    logo: SyntexSquadLogo,

    repo: "https://github.com/tarunkatariaonline/Syntax-Squad-A-Socket.io-Code-Editor",
    poster: SyntexSquad
  },
  {
    title: "Netflix GPT",
    subtitle: "Netflix Clone with ChatGPT Integration",
    description:
      "Netflix GPT is a smart streaming web application that merges the sleek design of Netflix with AI-enhanced content discovery. Built using React.js and powered by the ChatGPT API, it allows users to search for movies and shows using natural language. TMDB provides movie metadata, while Firebase enables authentication and user data management. I also integrated Redux Toolkit for state control and Chakra UI for component styling. Users can play trailers and explore content with AI suggestions.",
    logo: NetflixLogo,
    repo: "https://github.com/tarunkatariaonline/NetflixGPT",
    live: "https://tarun-flixnet.vercel.app/browse",
    poster: NetflixPoster
  },
  {
    title: "E-Commerce Platform",
    subtitle: "Full-featured MERN Stack Online Store",
    description:
      "This is a robust and modern e-commerce platform built using the MERN stack (MongoDB, Express.js, React, Node.js). It supports full user flows including product listings, shopping cart, secure payments via Razorpay, and order tracking. Redux Toolkit is used for efficient state management, and Chakra UI was used to build an attractive, responsive design. Nodemailer was implemented to send transactional emails via SMTP. The platform was built to simulate a real-world e-commerce system with best practices in code structure and security.",
    logo: Ecommerce,
    repo: "https://github.com/tarunkatariaonline/ecommerce_tarun_kataria",
    live: "https://ecommerceindia.vercel.app/",
    poster: EcommercePoster
  },
  {
    title: "ISRO Website Redesigned UI/UX (Unofficial Clone)",
    subtitle: "Modern UI/UX Revamp of the ISRO Official Site",
    description:
      "A modern redesign of the official ISRO website, focused on enhancing UI/UX while retaining core content. Built with React.js, Tailwind CSS, and TypeScript, it improves readability, accessibility, and mobile navigation with a clean, responsive layout.",
    logo: ISROLogo, // Replace with ISROLogo if available
    live: "https://isroindia.vercel.app/",
    repo: "https://github.com/tarunkatariaonline/ISRO_REDESIGN_NEXTJS",
    poster: ISROPoster
  }
];
export default function Home() {
  return (
    <main>
      <Navbar />

      <div id="intro" className="relative isolate w-full border-b px-2">
        <div className="w-full">
          <div className="my-4 flex w-full px-[2px]">
            {/* <div className="flex w-full flex-1 flex-col-reverse items-center justify-center gap-8 rounded-md sm:flex-row">
              <div className="shrink-0 py-4 sm:py-0">
                <GradientImage
                  src={TarunPhoto}
                  alt="profile picture"
                  size={200}
                />
              </div>
            </div> */}

            <div className="flex w-full max-md:flex-col-reverse">
              <div className="flex h-[80vh] w-full items-center justify-center px-5 max-md:min-h-[60vh]">
                <div className="flex w-full flex-col space-y-6 sm:space-y-10">
                  <div className="space-y-4">
                    <Link
                      href="#intro"
                      className="text-muted-foreground inline-flex font-mono tracking-tighter"
                    >
                      Hi, I am
                    </Link>
                    <h2 className="text-3xl font-semibold tracking-tight">
                      Tarun Kataria
                    </h2>
                  </div>
                  <div className="space-y-8">
                    <p className="text-muted-foreground text-justify hyphens-auto">
                      <span className="animate-shine from-muted-foreground to-muted-foreground via-foreground bg-gradient-to-r bg-[length:200%_100%] bg-clip-text font-medium text-transparent">
                        <TypeAnimation />
                      </span>{" "}
                      with internship experience as an SDE Intern at Bosscoder
                      Academy, where I was awarded Employee of the Month in
                      March 2025, and at Atomic House. Skilled in building
                      scalable and user-friendly web applications using
                      React.js, Next.js, Node.js, Prisma, PostgreSQL, Firebase,
                      MongoDB, GraphQL, Tailwind CSS, and Chakra UI. Experienced
                      in developing real-time collaboration tools, Chrome
                      extensions, admin dashboards, and complete e-commerce
                      platforms. Committed to writing clean, efficient code and
                      constantly improving through hands-on learning and
                      problem-solving.
                    </p>
                    <div className="inline-flex gap-4">
                      <Button asChild>
                        <Link
                          href="http://drive.google.com/file/d/1EJWanHb6t2LA0p2vO8Y1p9lS2vWT6int/view"
                          target="_blank"
                        >
                          RESUME <FileIcon />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-[80vh] w-full items-center justify-end px-5 max-md:h-[40vh] max-md:justify-center">
                <GradientImage
                  src={TarunPhoto}
                  alt="profile picture"
                  size={200}
                />
              </div>
            </div>
          </div>
          {/* <HomeMetrics /> */}
        </div>
      </div>

      <div id="experience" className="relative isolate w-full border-b px-2">
        <div className="g:w-[calc(100%-64px)] w-full">
          <div className="w-full px-4 py-16 sm:py-24">
            <div className="space-y-10">
              <div className="space-y-4">
                <Link
                  href="#projects"
                  className="text-muted-foreground inline-flex items-center gap-2 font-mono tracking-tighter"
                >
                  <BriefcaseBusiness className="size-5" />
                  Experience
                </Link>
                <h2 className="text-3xl font-semibold tracking-tight">
                  Companies I&apos;ve Worked For!
                </h2>
              </div>
              <div className="space-y-20 sm:space-y-16">
                {works &&
                  works.map((works, i) => (
                    <div key={i} className="space-y-6">
                      <div className="w-fit rounded-[20px] border p-1">
                        <div className="relative h-16 w-16">
                          <Image
                            src={works.logo}
                            alt="profile"
                            className="overflow-hidden rounded-2xl object-cover shadow"
                            fill
                            placeholder="blur"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="inline-flex flex-wrap items-center gap-4 text-2xl font-semibold tracking-tight">
                          {works.title}
                        </h3>
                        <h4 className="text-muted-foreground font-medium">
                          {works.subtitle}
                        </h4>
                      </div>
                      <p className="text-muted-foreground text-justify hyphens-auto">
                        {works.description}
                      </p>
                      <div className="inline-flex gap-4">
                        {works.live && (
                          <Button asChild>
                            <Link href={works.live} target="_blank">
                              LIVE <SquareArrowOutUpRightIcon />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="projects"
        className="relative isolate w-full border-b px-4 py-16"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-10">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 font-mono text-sm tracking-tight text-gray-400"
            >
              <CogIcon className="size-4" />
              Projects
            </Link>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Things I&apos;ve Shipped!
            </h2>
          </div>

          {/* Featured Project Block */}

          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className={`mx-4 my-16 flex items-center justify-between gap-8 max-md:flex-col ${index % 2 == 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Text Content */}
                <div className="max-w-md space-y-4">
                  <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                    Project Spotlight #{index + 1}
                  </p>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="relative h-10 w-10">
                    <Image
                      src={project.logo}
                      alt="profile"
                      className="overflow-hidden rounded-2xl object-cover shadow"
                      fill
                      placeholder={"blur"}
                    />
                  </div>
                  <p className="rounded-xl text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {project?.live && (
                    <Button asChild className="mr-2">
                      <Link href={project?.live} target="_blank">
                        LIVE <SquareArrowOutUpRightIcon />
                      </Link>
                    </Button>
                  )}

                  <Button asChild variant={"secondary"} className="mr-2">
                    <Link href={project.repo} target="_blank">
                      REPOSITORY <GithubIcon />
                    </Link>
                  </Button>
                </div>

                {/* Image / Preview */}
                <div className="relative mr-4 w-full max-w-md overflow-hidden">
                  {/* Glass background box */}
                  <div className="h-auto w-full rounded-xl border border-white/10 bg-gray-500/30 backdrop-blur-md">
                    {/* Empty div just to show glass box */}
                    <div className="aspect-video" />
                  </div>

                  {/* Image positioned over it */}
                  <Image
                    src={project.poster}
                    alt="Project Preview"
                    className="absolute top-4 left-4 h-auto w-full overflow-hidden rounded-xl"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div id="connect" className="relative isolate w-full border-b px-2">
        <div className="w-full px-4 py-16">
          <div className="bgre space-y-10">
            <div className="space-y-4">
              <p className="text-muted-foreground inline-flex items-center gap-1"></p>
              <Link
                href="#connect"
                className="text-muted-foreground inline-flex items-center gap-2 font-mono tracking-tighter"
              >
                <Contact2 className="size-4" /> Contact Me!
              </Link>
              <h2 className="text-3xl font-semibold tracking-tight">
                Take A Coffee And Chat With Me !
              </h2>
            </div>
            <div className="flex w-full justify-center max-md:block">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <div className="relative isolate px-2">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-center gap-2 px-4 py-4 font-mono text-sm text-zinc-400 dark:text-zinc-700">
          <CopyrightIcon className="size-4" />
          {new Date().getFullYear()} Tarun Kataria
        </div>
      </div>
    </main>
  );
}
