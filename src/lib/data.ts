import type { StaticImageData } from "next/image";

import AppbrewLogo from "@/assets/images/projects/appbrew-logo.png";
import BosscoderLogo from "@/assets/images/projects/bosscoder-logo.png";
import AtomicHouseLogo from "@/assets/images/projects/atomichouse_logo.jpg";
import SyntexSquad from "@/assets/images/projects/syntexsquad.png";
import SyntexSquadLogo from "@/assets/images/projects/sslogo.png";
import NetflixPoster from "@/assets/images/projects/netflix.jpg";
import NetflixLogo from "@/assets/images/projects/netflixlogo.png";
import EcommercePoster from "@/assets/images/projects/ecommerceposter.png";
import EcommerceLogo from "@/assets/images/projects/ecommerce.png";
import ISROPoster from "@/assets/images/projects/isroproject.png";
import ISROLogo from "@/assets/images/projects/isrologo.png";

export const profile = {
  name: "Tarun Kataria",
  role: "Software Engineer",
  tagline: "I ship React Native apps for 75+ Shopify D2C brands.",
  location: "India · Remote",
  available: "Open to opportunities",
  phone: "+91 6367295009",
  email: "tarunsoftsol@gmail.com",
  resume:
    "https://drive.google.com/file/d/1p__aC1QJv8KN9bmL2JV6PDER4WuKnBm3/view",
  github: "https://github.com/tarunkatariaonline",
  linkedin: "https://www.linkedin.com/in/tarunkatariaonline/",
  summary:
    "Software Engineer with 1.5+ years of experience building and shipping React Native iOS and Android apps for 75+ Shopify D2C brands, plus full-stack work across React.js, Next.js, Node.js and GraphQL. I build custom React Native blocks that brands drop straight into their apps, and spend the rest of my time deep in third-party SDK integrations, analytics and attribution pipelines, conversion funnel optimisation, and putting out production fires under tight SLAs.",
  roles: [
    "React Native Engineer",
    "Full Stack Developer",
    "Shopify App Engineer",
    "Problem Solver"
  ]
};

export const stats = [
  {
    value: 75,
    suffix: "+",
    label: "Shopify D2C brands shipped to",
    sub: "Minimalist · Libas · mCaffeine"
  },
  {
    value: 260,
    suffix: "+",
    label: "Production tickets resolved",
    sub: "~90% completion rate"
  },
  {
    value: 130,
    suffix: "+",
    label: "Third-party SDKs integrated",
    sub: "CRM, checkout, reviews"
  },
  {
    value: 14,
    suffix: "+",
    label: "P1 release blockers cleared",
    sub: "and 75+ P2 issues"
  }
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  logo?: StaticImageData;
  initials: string;
  logoInset?: boolean;
  link?: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: "Appbrew",
    role: "Software Engineer",
    period: "Aug 2025 — Present",
    location: "Remote, India",
    logo: AppbrewLogo,
    logoInset: true,
    initials: "AB",
    link: "https://appbrew.tech",
    current: true,
    summary:
      "Building the React Native mobile layer that 75+ Shopify D2C brands sell through — from custom native blocks and SDK plumbing to conversion funnels and peak-sale firefighting. Named Employee of the Month in January 2026.",
    highlights: [
      "Engineered, deployed and maintained React Native iOS and Android app features for 75+ Shopify D2C brands, including Minimalist, Libas, Superbottoms, The Bear House, mCaffeine and The Face Shop.",
      "Resolved and shipped 260+ production tickets across mobile integrations, custom UI/UX design blocks, store builds and checkout optimisations at roughly a 90% completion rate.",
      "Delivered 130+ third-party app integrations and SDKs over REST APIs: CRM and push automation (CleverTap, MoEngage, BiteSpeed), express checkouts (GoKwik, Shopflo, Fastrr) and review platforms (Judge.me, Loox).",
      "Architected end-to-end analytics and attribution pipelines (GA4, Facebook Pixel, AppsFlyer, Branch.io, Microsoft Clarity) for high-scale apps, debugging event drop-offs to keep ad attribution accurate.",
      "Optimised Cart, PDP and PLP conversion funnels with dynamic cart progress goals, native upsell blocks, custom variant pickers and React Native deep-link routing for Libas, Powerlook and Zavya.",
      "Held engineering SLAs through peak sale events by debugging and resolving 14+ P1 release blockers and 75+ P2 production issues for high-traffic merchants in an Agile team."
    ],
    stack: [
      "React Native",
      "TypeScript",
      "Shopify",
      "Deep Linking",
      "AppsFlyer",
      "CleverTap",
      "GA4"
    ]
  },
  {
    company: "Bosscoder Academy",
    role: "Software Engineer Intern",
    period: "Nov 2024 — May 2025",
    location: "Noida, Uttar Pradesh, India",
    logo: BosscoderLogo,
    initials: "BA",
    link: "https://www.bosscoderacademy.com",
    summary:
      "Owned the admin and mentor ecosystem of a scaling ed-tech platform. Named Employee of the Month in March 2025 out of a 20-member tech team.",
    highlights: [
      "Implemented WebEngage for user behaviour tracking and personalised engagement campaigns across the Bosscoder platform.",
      "Built a Super Admin role with granular admin management and activity-log auditing, and secured admin login with Google Auth so access is revoked automatically when an employee exits.",
      "Revamped the mentor module end-to-end: redesigned UI, experience-based mentor matching, two-way feedback and admin-driven rescheduling when mentor slots are unavailable.",
      "Shipped an Instructor Availability feature with real-time updates visible to admins, plus a cron job that notifies instructors over WhatsApp and email on class days.",
      "Added WhatsApp and email notifications for missed classes, slot updates, cancellations and rescheduling, and fixed a mentor-mismatch bug with an in-app prompt and self-service reassignment."
    ],
    stack: [
      "React.js",
      "Node.js",
      "MongoDB",
      "WebEngage",
      "Google Auth",
      "Cron Jobs"
    ]
  },
  {
    company: "Atomic House",
    role: "Full Stack Developer Intern",
    period: "May 2024 — Nov 2024",
    location: "Mumbai, Maharashtra, India",
    logo: AtomicHouseLogo,
    initials: "AH",
    link: "https://newboard.io/",
    summary:
      "Full-stack work on Newboard, a productivity product — GraphQL APIs on one side, Next.js interfaces and a Chrome extension on the other.",
    highlights: [
      "Built GraphQL and REST APIs with Node.js, Express.js, Prisma ORM and PostgreSQL to streamline backend operations.",
      "Designed responsive interfaces with React.js, Next.js 14, Tailwind CSS and NextUI.",
      "Developed and enhanced the Atomic House Bookmark Tool Chrome Extension, shipping features via Vercel and GitHub Actions CI/CD."
    ],
    stack: [
      "Next.js 14",
      "GraphQL",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "GitHub Actions"
    ]
  }
];

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  date: string;
  logo: StaticImageData;
  poster: StaticImageData;
  stack: string[];
  repo?: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Syntax Squad",
    subtitle: "Real-time collaborative code editor",
    description:
      "A multi-user code editor built for remote pair programming and interviews. Socket.io keeps every keystroke in sync, rooms are isolated behind unique URLs, and ZegoCloud adds live video calling on top of the session.",
    date: "May 2024",
    logo: SyntexSquadLogo,
    poster: SyntexSquad,
    stack: ["React.js", "Node.js", "Socket.io", "ZegoCloud", "Tailwind CSS"],
    repo: "https://github.com/tarunkatariaonline/Syntax-Squad-A-Socket.io-Code-Editor",
    live: "https://syntaxsquad.vercel.app/",
    featured: true
  },
  {
    title: "Netflix GPT",
    subtitle: "Streaming UI with GPT-powered search",
    description:
      "A Netflix-inspired streaming interface where you search for titles in plain English. GPT interprets the query, TMDB supplies the catalogue, Firebase handles auth, and Redux Toolkit holds the state together — with in-app trailer playback and detailed title pages.",
    date: "Oct 2023",
    logo: NetflixLogo,
    poster: NetflixPoster,
    stack: ["React.js", "OpenAI API", "TMDB API", "Firebase", "Redux Toolkit"],
    repo: "https://github.com/tarunkatariaonline/NetflixGPT",
    live: "https://tarun-flixnet.vercel.app/browse",
    featured: true
  },
  {
    title: "E-Commerce Platform",
    subtitle: "Full-stack store with payments",
    description:
      "An end-to-end storefront: product listings, a Redux Toolkit shopping cart, Razorpay payments and order tracking, served by a Node.js and Express REST backend on MongoDB with Nodemailer handling transactional email over SMTP.",
    date: "Jul 2023",
    logo: EcommerceLogo,
    poster: EcommercePoster,
    stack: ["React.js", "Redux Toolkit", "Node.js", "MongoDB", "Razorpay"],
    repo: "https://github.com/tarunkatariaonline/ecommerce_tarun_kataria",
    live: "https://ecommerceindia.vercel.app/"
  },
  {
    title: "ISRO Redesign",
    subtitle: "UI/UX revamp of the ISRO website",
    description:
      "An unofficial redesign of the official ISRO site that keeps the content and rebuilds everything around it — readability, accessibility and mobile navigation in a clean, responsive layout.",
    date: "Feb 2024",
    logo: ISROLogo,
    poster: ISROPoster,
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    repo: "https://github.com/tarunkatariaonline/ISRO_REDESIGN_NEXTJS",
    live: "https://isroindia.vercel.app/"
  }
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "C / C++", "SQL", "HTML / CSS"]
  },
  {
    title: "Mobile",
    items: [
      "React Native",
      "iOS & Android",
      "Shopify app integrations",
      "Deep linking"
    ]
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Chakra UI",
      "Material UI"
    ]
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "GraphQL",
      "Prisma ORM",
      "PostgreSQL",
      "MongoDB",
      "Firebase"
    ]
  },
  {
    title: "Integrations & Analytics",
    items: [
      "CleverTap",
      "MoEngage",
      "BiteSpeed",
      "GoKwik",
      "Shopflo",
      "Fastrr",
      "Judge.me",
      "Loox",
      "GA4",
      "Facebook Pixel",
      "AppsFlyer",
      "Branch.io",
      "Microsoft Clarity",
      "Razorpay",
      "WebEngage"
    ]
  },
  {
    title: "Tools & Practices",
    items: [
      "Git & GitHub",
      "GitHub Actions",
      "Vercel",
      "REST APIs",
      "Agile / Scrum",
      "Debugging",
      "Code Review"
    ]
  }
];

export const marqueeSkills = [
  "React Native",
  "TypeScript",
  "Next.js",
  "Node.js",
  "GraphQL",
  "Shopify",
  "PostgreSQL",
  "Prisma",
  "MongoDB",
  "Firebase",
  "Tailwind CSS",
  "AppsFlyer",
  "CleverTap",
  "GA4",
  "Redux Toolkit",
  "Express.js"
];

export const education = [
  {
    school: "Modern Institute of Technology and Research Centre",
    degree: "B.Tech, Computer Science and Engineering",
    period: "2021 — 2025",
    location: "Rajasthan, India",
    score: "CGPA 9.02 / 10"
  },
  {
    school: "Achiever's Public Sr. Sec. School",
    degree: "Senior Secondary (XII)",
    period: "2021",
    location: "Rajasthan, India",
    score: "90.00%"
  }
];

export const achievements = [
  {
    id: "eotm-appbrew",
    title: "Employee of the Month",
    detail:
      "January 2026 at Appbrew — recognised by the tech team for outstanding performance.",
    tag: "Award"
  },
  {
    id: "eotm-bosscoder",
    title: "Employee of the Month",
    detail:
      "March 2025 at Bosscoder Academy — selected from a 20-member tech team for outstanding performance.",
    tag: "Award"
  },
  {
    id: "sih-2023",
    title: "Smart India Hackathon 2023 Finalist",
    detail: "National-level recognition for technical problem solving.",
    tag: "Hackathon"
  },
  {
    id: "cert-advanced-react",
    title: "Advanced React",
    detail: "Meta, via Coursera.",
    tag: "Certification"
  },
  {
    id: "cert-nodejs-express",
    title: "Developing Back-End Apps with Node.js and Express",
    detail: "IBM, via Coursera.",
    tag: "Certification"
  }
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" }
];
