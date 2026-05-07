import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  {
    name: "Languages",
    items: [
      ["JavaScript", 92],
      ["TypeScript", 88],
      ["HTML5 / CSS", 95],
      ["SQL", 78],
    ],
  },
  {
    name: "Frontend",
    items: [
      ["React", 92],
      ["Next.js", 85],
      ["Tailwind CSS", 90],
      ["React Hooks", 90],
    ],
  },
  {
    name: "Mobile & Backend",
    items: [
      ["React Native", 88],
      ["Node / Express", 85],
      ["MongoDB", 82],
      ["PostgreSQL", 75],
    ],
  },
  {
    name: "Tools & Cloud",
    items: [
      ["Firebase", 85],
      ["Supabase", 85],
      ["Git / GitHub", 92],
      ["Docker", 65],
    ],
  },
] as const;

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={
        <>
          The <span className="text-gradient">stack</span> I build with.
        </>
      }
      subtitle="A toolkit refined through real projects, internships and the kLab TechHer program."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {groups.map((g, gi) => (
          <motion.div
            key={g.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.08 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display font-semibold text-lg">{g.name}</h3>
              <span className="text-xs font-mono text-muted-foreground">
                {g.items.length} tools
              </span>
            </div>
            <ul className="space-y-4">
              {g.items.map(([name, val]) => (
                <li key={name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span>{name}</span>
                    <span className="font-mono text-muted-foreground">{val}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${val}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: "var(--gradient-primary)" }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
