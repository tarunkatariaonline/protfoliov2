import type { Metadata, Viewport } from "next";
import { Fragment_Mono } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { profile } from "@/lib/data";

const Inter = localFont({
  src: [
    { path: "../assets/fonts/InterVariable.ttf", style: "normal" },
    { path: "../assets/fonts/InterVariable-Italic.ttf", style: "italic" }
  ],
  variable: "--font-sans",
  display: "swap"
});

const FragmentMono = Fragment_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: "400",
  display: "swap"
});

const description = `${profile.role} with 1.5+ years building React Native iOS and Android apps for 75+ Shopify D2C brands, plus full-stack work in React, Next.js, Node.js and GraphQL.`;

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`
  },
  description,
  keywords: [
    "Tarun Kataria",
    "Software Engineer",
    "React Native Developer",
    "Shopify",
    "Next.js",
    "Full Stack Developer",
    "India"
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description,
    type: "profile",
    locale: "en_US",
    siteName: profile.name
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#121317" }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(FragmentMono.variable, Inter.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
