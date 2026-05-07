export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10 px-6 mt-10">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Deborah Urujeni · Kigali, Rwanda. Crafted with care.</div>
        <div className="font-mono text-xs">
          Built with TanStack Start · TypeScript · Framer Motion
        </div>
      </div>
    </footer>
  );
}
