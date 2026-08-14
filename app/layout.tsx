import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { AIBackground } from "@/components/ui/ai-background";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Sumit Jadhav | AI & Full-Stack Developer",
    template: "%s | Sumit Jadhav",
  },

  description:
    "Portfolio of Sumit Jadhav — AI, Machine Learning, Data Science and Full-Stack Developer.",

  keywords: [
    "Sumit Jadhav",
    "AI Developer",
    "Machine Learning",
    "Full Stack Developer",
    "Data Science",
    "Python",
    "Next.js",
    "React",
    "FastAPI",
  ],

  authors: [
    {
      name: "Sumit Jadhav",
    },
  ],

  creator: "Sumit Jadhav",

  openGraph: {
    title: "Sumit Jadhav | AI & Full-Stack Developer",
    description:
      "Building intelligent software that solves real-world problems.",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} min-h-screen bg-[#050816] text-zinc-100 antialiased`}
      >
        <AIBackground />

        <div className="relative z-10">
          {children}
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}