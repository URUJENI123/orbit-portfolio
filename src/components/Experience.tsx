import { motion } from "framer-motion";
import { Section } from "./Section";

const items = [
  {
    year: "Sep 2025 — Oct 2025",
    role: "Full Stack Developer (Intern)",
    company: "Mulinga Labs · Remote",
    desc: "Full-stack internship with a focus on mobile development, app security and user-friendly UX.",
  },
  {
    year: "Apr 2025 — Aug 2025",
    role: "Mobile Developer Trainee",
    company: "kLab · DSE TekHer Program",
    desc: "Intensive training on mobile app development with React Native and the MERN stack.",
  },
  {
    year: "Jan 2024 — Sep 2025",
    role: "Full Stack Developer",
    company: "kLab · TechHer Program",
    desc: "Hands-on full-stack projects, code collaboration, debugging and real-time feedback cycles.",
  },
  {
    year: "Apr 2020 — Oct 2021",
    role: "Youth Volunteer",
    company: "Rwamagana District, Kigabiro Sector",
    desc: "Mobilized 500+ youth in COVID-19 awareness — contributed to a 25% increase in community health compliance.",
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={
        <>
          My journey so <span className="text-gradient">far.</span>
        </>
      }
    >
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--neon)]/40 to-transparent" />
        <ul className="space-y-10">
          {items.map((it, i) => (
            <motion.li
              key={it.year}
              initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div
                className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full glow"
                style={{ background: "var(--gradient-primary)" }}
              />
              <div
                className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}
              >
                <div className="font-mono text-xs uppercase tracking-widest text-[var(--neon)]">
                  {it.year}
                </div>
                <h3 className="mt-1 font-display text-xl font-semibold">{it.role}</h3>
                <div className="text-muted-foreground text-sm">{it.company}</div>
              </div>
              <div
                className={`pl-12 md:pl-0 mt-2 md:mt-0 ${i % 2 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
              >
                <p className="text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
