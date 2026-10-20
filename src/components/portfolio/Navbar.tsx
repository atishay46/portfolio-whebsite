import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navItems, personalInfo } from "@/data/portfolio";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
  const toggle = () => {
    const root = document.documentElement;
    root.classList.add("theme-transition");
    const next = !root.classList.contains("dark");
    root.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
    window.setTimeout(() => root.classList.remove("theme-transition"), 300);
  };
  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={dark}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary-hover"
    >
      {dark ? <Sun size={15} strokeWidth={1.5} /> : <Moon size={15} strokeWidth={1.5} />}
    </button>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const link = (id: string) =>
    `font-label text-md tracking-wide transition-colors hover:text-foreground ${active === id ? "text-foreground" : "text-muted-foreground"}`;

  return (
    <header className="sticky top-0 z-50 border-b border-nav-border bg-background/90 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#top" className="flex items-center gap-2.5 group" aria-label="Atishay Jain - home">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-display text-base font-semibold tracking-tight transition-transform group-hover:scale-105">
            AJ
          </span>

        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={link(n.id)} aria-current={active === n.id ? "true" : undefined}>
              {n.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border"
          >
            {open ? <X size={17} strokeWidth={1.5} /> : <Menu size={17} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>
      <div
        id="mobile-menu"
        className={`grid overflow - hidden border - nav - border transition - all duration - 300 md:hidden ${open ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr]"} `}
      >
        <div className="min-h-0">
          <div className="container-page flex flex-col gap-1 py-4">
            {navItems.map((n) => (
              <a key={n.id} href={`#${n.id} `} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className={`${link(n.id)} py - 2`}>
                {n.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
