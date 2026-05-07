import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Check, Code, Briefcase, Phone } from "lucide-react";
import { Section } from "./Section";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();
    const errs: Record<string, string> = {};
    if (name.length < 2) errs.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(email)) errs.email = "Valid email required";
    if (message.length < 10) errs.message = "Tell me a bit more (10+ chars)";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:urujenideborah80@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    e.currentTarget.reset();
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <>
          Let's build <span className="text-gradient">something great.</span>
        </>
      }
      subtitle="I'm currently open to full-time roles, internships and freelance work. Drop a message — I'll reply within 24 hours."
    >
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-6">
        <div className="space-y-4">
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2">
              <span className="relative flex w-2.5 h-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-emerald-400" />
              </span>
              <span className="text-sm font-medium">Available for new work</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Open to remote roles worldwide and on-site opportunities in Kigali.
            </p>
          </div>
          <a
            href="mailto:urujenideborah80@gmail.com"
            className="glass rounded-2xl p-5 flex items-center gap-3 hover:translate-y-[-2px] transition-transform"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Mail className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Email</div>
              <div className="font-medium text-sm">urujenideborah80@gmail.com</div>
            </div>
          </a>
          <a
            href="tel:+250798642250"
            className="glass rounded-2xl p-5 flex items-center gap-3 hover:translate-y-[-2px] transition-transform"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-secondary">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Phone</div>
              <div className="font-medium text-sm">+250 798 642 250</div>
            </div>
          </a>
          <div className="glass rounded-2xl p-5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-secondary">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Based in</div>
              <div className="font-medium text-sm">Kigali, Rwanda · Open to remote</div>
            </div>
          </div>
          <div className="flex gap-2">
            <a
              href="https://github.com/Urujeni-Deborah"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="glass p-3 rounded-xl hover:text-[var(--neon)] transition-colors"
            >
              <Code className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/deborah-urujeni"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="glass p-3 rounded-xl hover:text-[var(--neon)] transition-colors"
            >
              <Briefcase className="w-4 h-4" />
            </a>
          </div>
        </div>

        <form onSubmit={submit} className="glass rounded-2xl p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" error={errors.name} />
            <Field label="Email" name="email" type="email" error={errors.email} />
          </div>
          <Field label="Message" name="message" textarea error={errors.message} />
          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-primary-foreground glow"
            style={{ background: "var(--gradient-primary)" }}
          >
            {sent ? (
              <>
                <Check className="w-4 h-4" /> Message sent
              </>
            ) : (
              <>
                <Send className="w-4 h-4" /> Send message
              </>
            )}
          </motion.button>
        </form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  error?: string;
}) {
  const cls =
    "w-full bg-secondary/60 rounded-xl px-4 py-3 text-sm outline-none border border-transparent focus:border-[var(--neon)]/60 transition-colors";
  return (
    <label className="block">
      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <div className="mt-1.5">
        {textarea ? (
          <textarea name={name} rows={5} maxLength={1000} className={cls} />
        ) : (
          <input name={name} type={type} maxLength={255} className={cls} />
        )}
      </div>
      {error && <span className="text-xs text-destructive mt-1 block">{error}</span>}
    </label>
  );
}
