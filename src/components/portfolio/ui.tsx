import { useEffect, useRef, type ReactNode } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeader({ index, label, title, subtitle }: { index: string; label: string; title: string; subtitle?: string }) {
  return (
    <Reveal className="mb-14 md:mb-20">
      <p className="label-caps text-muted-foreground">
        {index} — {label}
      </p>
      <h2 className="font-display mt-5 text-5xl leading-[1.05] md:text-7xl">{title}</h2>
      {subtitle && <p className="font-label mt-4 text-lg text-muted-foreground">{subtitle}</p>}
    </Reveal>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="font-label rounded-md border border-border px-2.5 py-1 text-xs tracking-wide text-muted-foreground">
      {children}
    </span>
  );
}

export const socialIcon = { github: Github, linkedin: Linkedin, mail: Mail };
