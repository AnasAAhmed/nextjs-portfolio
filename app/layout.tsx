import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/design-components/Header";
import Footer from "@/components/design-components/Footer";
import ButtonGradient from "@/assets/svg/ButtonGradient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anas Ahmed | Full-Stack Web Developer Portfolio",
  description:
    "A full-stack web developer skilled in AI-Agents, Next.js, React, Node.js, MongoDB, PostgreSQL, and API integrations. Building scalable, high-performance web applications with modern technologies.",
  keywords: [
    "Anas Ahmed",
    "Web Developer Portfolio",
    "Full Stack Developer",
    "Next.js Developer",
    "React.js",
    "FastApi",
    "Python",
    "Node.js",
    "Ai Agents",
    "Agentic AI",
    "Frontend Developer",
    "3d",
    "UI/IX",
    "MongoDB",
    "PostgreSQL",
    "API Integration",
    "Vercel",
    "Cdn & Backend Caching",
    "RTK Query",
    "Freelance Developer"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Anas Ahmed | Full-Stack Web Developer Portfolio",
    description:
      "Discover Anas Ahmed’s portfolio showcasing projects in Next.js, React, Node.js, Python, MongoDB/PostgresSql/MySql, and scalable web development solutions.",
    url: `https://anasahmed-portfolio.vercel.app`,
    images: [
      {
        url: "/hero-preview.avif",
        width: 1200,
        height: 630,
        alt: "Portfolio homepage preview",
      },
      {
        url: "/projects.avif",
        width: 1200,
        height: 630,
        alt: "Project showcase preview",
      }
    ],
    siteName: "Anas Ahmed",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const theme = localStorage.getItem('theme')
              if (theme === 'light') {
                document.documentElement.classList.add('light')
              }
            })()
          `
        }} />
      </head>
      <body
        className={`${geistSans.variable} font-sans ${geistMono.variable} antialiased`}
      >
        <div className="overflow-hidden max-sm:px-4">
          <Header />
          {children}
          <Footer />
        </div>

        <ButtonGradient />
      </body>
    </html>
  );
}
