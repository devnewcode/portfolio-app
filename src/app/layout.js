import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://devrathteotia.vercel.app"),
  title: {
    default: "Devrath Teotia | Full Stack Developer",
    template: "%s | Devrath Teotia",
  },
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, Express, MongoDB, and AI integrations. BCA & MCA graduate with experience building scalable web applications.",
  keywords: [
    "Devrath Teotia",
    "Full Stack Developer",
    "Software Engineer",
    "React.js",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Portfolio",
    "Web Developer Ghaziabad",
  ],
  authors: [{ name: "Devrath Teotia", url: "https://devrathteotia.vercel.app" }],
  creator: "Devrath Teotia",
  alternates: {
    canonical: "https://devrathteotia.vercel.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Devrath Teotia",
  jobTitle: "Full Stack Developer",
  url: "https://devrathteotia.vercel.app",
  sameAs: [
    "https://github.com/devnewcode",
    "https://linkedin.com/in/devrath-teotia-2b7464268",
  ],
  knowsAbout: [
    "JavaScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Redux",
    "Tailwind CSS",
    "Google Gemini API",
    "REST APIs",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav className="navbar">
          <Link href="/" className="logo">
            {"<devrath />"}
          </Link>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
        <main className="main-content">{children}</main>
        <footer className="footer">© 2026 Devrath Teotia. All rights reserved.</footer>
      </body>
    </html>
  );
}
