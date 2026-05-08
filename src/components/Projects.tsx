import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, GitFork, Search } from "lucide-react";
import { Section } from "./Section";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  category: "web" | "mobile" | "game";
  gradient: string;
};

const projects: Project[] = [
  {
    title: "Medica App",
    desc: "Online doctor appointment app with Supabase backend and biometric authentication.",
    tags: ["React Native", "Supabase", "Biometrics"],
    category: "mobile",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "ACR — Accounting Services",
    desc: "Responsive company website with an intuitive admin dashboard for content & performance.",
    tags: ["React", "Tailwind", "Dashboard"],
    category: "web",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Instagram Clone",
    desc: "Social media clone with full auth, media upload and real-time interaction via Firebase.",
    tags: ["React Native", "Firebase", "Realtime"],
    category: "mobile",
    gradient: "from-fuchsia-500 to-purple-600",
  },
  {
    title: "Eventify",
    desc: "Event management & RSVP platform — create events and track attendees efficiently.",
    tags: ["MERN", "MongoDB", "Express"],
    category: "web",
    gradient: "from-violet-500 to-indigo-600",
  },
  {
    title: "Parking Booking App",
    desc: "Mobile-first app to reserve parking spots with an intuitive booking interface.",
    tags: ["React Native", "Expo", "UX"],
    category: "mobile",
    gradient: "from-amber-500 to-pink-600",
  },
  {
    title: "Banking App",
    desc: "Personal finance app to control income flow across bank accounts and MoMo.",
    tags: ["React Native", "Fintech", "MoMo"],
    category: "mobile",
    gradient: "from-orange-500 to-rose-600",
  },
  {
    title: "Connect Four Game",
    desc: "Logic-based board game implementation with clean state management.",
    tags: ["JavaScript", "React", "Logic"],
    category: "game",
    gradient: "from-sky-500 to-indigo-600",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio showcasing resume, projects and achievements — built with React.",
    tags: ["React", "Vercel", "Tailwind"],
    category: "web",
    gradient: "from-pink-500 to-purple-600",
  },
];

const filters = ["all", "web", "mobile", "game"] as const;

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("all");
  const [query, setQuery] = useState("");

  const filtered = projects.filter((p) => {
    const matchCat = active === "all" || p.category === active;
    const matchQ =
      !query || (p.title + p.desc + p.tags.join(" ")).toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title={
        <>
          Projects I'm <span className="text-gradient">proud of.</span>
        </>
      }
      subtitle="A snapshot of recent work across web, mobile and games."
    >
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <div className="glass rounded-full flex items-center gap-2 px-4 py-2 flex-1 min-w-[220px]">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, tech…"
            className="bg-transparent outline-none text-sm w-full placeholder:text-muted-foreground"
            aria-label="Search projects"
          />
        </div>
        <div className="glass rounded-full p-1 flex">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-1.5 text-xs uppercase tracking-wider rounded-full transition-all ${
                active === f
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              style={active === f ? { background: "var(--gradient-primary)" } : undefined}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
              style={{ transformStyle: "preserve-3d" }}
              className="group glass rounded-2xl overflow-hidden"
            >
              <div className={`relative h-44 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-3 left-4 font-mono text-xs uppercase tracking-widest text-white/90">
                  {p.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-lg">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-secondary text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3 text-sm">
                  <a
                    href="https://github.com/URUJENI123"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[var(--neon)] transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Live
                  </a>
                  <a
                    href="https://github.com/URUJENI123"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[var(--neon)] transition-colors"
                  >
                    <GitFork className="w-3.5 h-3.5" /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground mt-8">No projects match your search.</p>
      )}
    </Section>
  );
}
