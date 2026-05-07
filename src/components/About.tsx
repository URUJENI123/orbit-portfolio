import { motion } from "framer-motion";
import { Code2, Download, ShieldCheck, Smartphone } from "lucide-react";
import { Section } from "./Section";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Web",
    text: "MERN stack, Next.js, TypeScript & Tailwind — responsive UIs to robust APIs.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    text: "React Native + Expo apps with Firebase / Supabase, biometric auth and real-time data.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    text: "Strong focus on app security, clean architecture and user-friendly experiences.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          Developer with a passion for <span className="text-gradient">building.</span>
        </>
      }
      subtitle="I'm a Full-Stack Developer based in Kigali, Rwanda, growing a specialization in mobile development. I thrive in fast-paced, collaborative teams and love turning ideas into polished, real-world products."
    >
      <div className="grid md:grid-cols-3 gap-5">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="glass rounded-2xl p-6 hover:-translate-y-1 transition-transform"
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
              style={{ background: "var(--gradient-primary)" }}
            >
              <h.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold">{h.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{h.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10">
        <a
          href="/Deborah-Urujeni-CV.pdf"
          download
          className="inline-flex items-center gap-2 glass rounded-full px-5 py-3 text-sm font-semibold hover:scale-[1.02] transition-transform"
        >
          <Download className="w-4 h-4" />
          Download CV
        </a>
      </div>
    </Section>
  );
}
