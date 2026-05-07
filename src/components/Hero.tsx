import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Code, Mail, Sparkles } from "lucide-react";

const roles = [
  "Full-Stack Developer",
  "Mobile Developer",
  "React Native Engineer",
  "MERN Stack Builder",
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = roles[i % roles.length];
    const delay = del ? 40 : 80;

    const t = setTimeout(() => {
      if (!del && text === word) {
        setTimeout(() => setDel(true), 1200);
        return;
      }

      if (del && text === "") {
        setDel(false);
        setI(i + 1);
        return;
      }

      setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);

    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="text-gradient">
      {text}
      <span className="inline-block w-[2px] h-[1em] align-middle ml-1 bg-current animate-pulse" />
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />

      {[
        { top: "15%", left: "8%", size: 220, color: "var(--neon)" },
        { top: "60%", left: "75%", size: 280, color: "var(--neon-2)" },
        { top: "70%", left: "10%", size: 160, color: "var(--neon)" },
      ].map((o, idx) => (
        <motion.div
          key={idx}
          className="absolute rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{
            top: o.top,
            left: o.left,
            width: o.size,
            height: o.size,
            background: o.color,
          }}
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 12 + idx * 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs text-muted-foreground"
          >
            <Sparkles className="w-3.5 h-3.5 text-[var(--neon)]" />
            Available for opportunities · Kigali / Remote
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05]"
          >
            Crafting
            <br />
            <span className="text-gradient">web & mobile</span>
            <br />
            experiences that matter.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl"
          >
            Hi, I'm <span className="text-foreground font-semibold">Deborah Urujeni</span> — a{" "}
            <Typewriter /> from Kigali, Rwanda. I build responsive, user-focused apps with React
            Native and the MERN stack.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-primary-foreground glow"
              style={{ background: "var(--gradient-primary)" }}
            >
              Hire Me
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="glass rounded-full px-5 py-3 text-sm font-semibold hover:scale-[1.02] transition-transform"
            >
              View Projects
            </a>

            <div className="flex items-center gap-2 ml-2">
              <a
                href="https://github.com/Urujeni-Deborah"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="glass p-2.5 rounded-full hover:text-[var(--neon)] transition-colors"
              >
                <Code className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/deborah-urujeni"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="glass p-2.5 rounded-full hover:text-[var(--neon)] transition-colors"
              >
                <Briefcase className="w-4 h-4" />
              </a>
              <a
                href="mailto:urujenideborah80@gmail.com"
                aria-label="Email"
                className="glass p-2.5 rounded-full hover:text-[var(--neon)] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 grid grid-cols-3 gap-4 max-w-md"
          >
            {[
              { k: "2+", v: "Years building" },
              { k: "10+", v: "Projects shipped" },
              { k: "MERN", v: "+ React Native" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl p-4">
                <div className="text-2xl font-display font-bold text-gradient">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative mx-auto"
        >
          <div
            className="absolute -inset-6 rounded-full blur-3xl opacity-60"
            style={{ background: "var(--gradient-primary)" }}
          />

          <div className="relative floaty">
            <div className="rounded-[2rem] glass p-2 glow">
              <img
                src="/WhatsApp Image 2026-04-02 at 22.27.25 (1).jpeg"
                alt="Portrait"
                width={520}
                height={520}
                className="rounded-[1.6rem] w-[300px] md:w-[420px] aspect-square object-cover"
              />
            </div>

            {[
              { label: "React Native", top: "5%", left: "-18%" },
              { label: "TypeScript", top: "55%", left: "-22%" },
              { label: "Next.js", top: "20%", left: "92%" },
              { label: "Supabase", top: "75%", left: "85%" },
            ].map((c, i) => (
              <motion.div
                key={c.label}
                className="absolute glass rounded-full px-3 py-1.5 text-xs font-mono"
                style={{ top: c.top, left: c.left }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
              >
                {c.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
