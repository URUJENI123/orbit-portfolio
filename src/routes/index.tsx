import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";

import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Cursor } from "@/components/Cursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Deborah Urujeni — Full-Stack & Mobile Developer" },
      {
        name: "description",
        content:
          "Portfolio of Deborah Urujeni — a Full-Stack Developer from Kigali, Rwanda specializing in React Native, MERN and beautifully crafted web & mobile experiences.",
      },
      { property: "og:title", content: "Deborah Urujeni — Full-Stack & Mobile Developer" },
      {
        property: "og:description",
        content:
          "Selected projects, experience and skills from a Kigali-based developer building modern web and mobile apps.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <main className="relative">
      <Cursor />
      <ScrollProgress />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
