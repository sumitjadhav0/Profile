import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Sumit Jadhav | AI & Full Stack Developer",

  description:
    "Portfolio of Sumit Jadhav — B.Tech Artificial Intelligence and Data Science student focused on AI, machine learning, Python and full-stack development.",

  keywords: [
    "Sumit Jadhav",
    "AI Developer",
    "Full Stack Developer",
    "Python Developer",
    "Machine Learning",
    "Artificial Intelligence",
    "Data Science",
  ],

  authors: [
    {
      name: "Sumit Jadhav",
    },
  ],

  openGraph: {
    title: "Sumit Jadhav | AI & Full Stack Developer",
    description:
      "AI, software and full-stack development portfolio.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}