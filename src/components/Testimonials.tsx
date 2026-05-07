import { motion } from "framer-motion";
import { Section } from "./Section";
import { Quote } from "lucide-react";

const items = [
  {
    quote:
      "Nova ships at the intersection of taste and rigor. One of the strongest engineers I've ever worked with.",
    name: "Maya Chen",
    role: "VP Engineering, Northwind",
  },
  {
    quote: "An obsessive eye for detail. The product feels alive after Nova touches it.",
    name: "Daniel Park",
    role: "Design Director, Helix",
  },
  {
    quote: "Rare blend of systems thinking and product sense. Would hire again instantly.",
    name: "Aisha Rahman",
    role: "CTO, Lumen Labs",
  },
  {
    quote: "Performance and polish that genuinely move metrics. A force multiplier.",
    name: "Tomás Rivera",
    role: "Founder, Origami",
  },
];

export function Testimonials() {
  const loop = [...items, ...items];
  return (
    <Section
      id="testimonials"
      eyebrow="Testimonials"
      title={
        <>
          Words from <span className="text-gradient">collaborators.</span>
        </>
      }
    >
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <motion.div
          className="flex gap-5 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {loop.map((t, i) => (
            <figure key={i} className="glass rounded-2xl p-6 w-[340px] shrink-0">
              <Quote className="w-5 h-5 text-[var(--neon)]" />
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-4">
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
