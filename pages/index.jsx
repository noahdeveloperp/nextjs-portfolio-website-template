// pages/index.js
import Head from "next/head";
// Import components (static first, heavy ones dynamically)
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects3D from "@/components/Projects3D";
import Timeline from "@/components/Timeline";
import Stats3D from "@/components/Stats3D";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import Background3D from "@/components/Background3D";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <title>
          Noe – Backend Engineer & Systems Architect
        </title>
        <meta name="description"
          content="Backend Engineer specializing in scalable systems, APIs, and distributed architectures. Building robust solutions for modern applications." />
        <link rel="canonical" href="https://noe.dev" />

        <meta name="author" content="Noe" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Noe" />
        <meta property="og:title"
          content="Noe – Backend Engineer & Systems Architect" />
        <meta property="og:description"
          content="Backend Engineer specializing in scalable systems, APIs, and distributed architectures. Building robust solutions for modern applications." />
        <meta property="og:url" content="https://noe.dev" />
        <meta property="og:image" content="https://noe.dev/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title"
          content="Noe – Backend Engineer & Systems Architect" />
        <meta name="twitter:description"
          content="Backend Engineer specializing in scalable systems, APIs, and distributed architectures. Building robust solutions for modern applications." />
        <meta name="twitter:url" content="https://noe.dev" />
        <meta name="twitter:image" content="https://noe.dev/og-image.jpg" />

      </Head>
      <Background3D />
      <ScrollProgress />
      <CommandPalette />
      <Hero />
      <About />
      <Stats3D />
      <Projects3D />
      <Timeline />
      <Newsletter />
      <Footer />
    </>
  );
}
