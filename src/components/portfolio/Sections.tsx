import { ArrowDown, ArrowUpRight, Github } from "lucide-react";
import { about, experience, highlights, personalInfo, projects, skillsPrimary, skillsSecondary, socialLinks } from "@/data/portfolio";
import { Reveal, SectionHeader, Tag, socialIcon } from "./ui";

const btnPrimary =
  "inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover";
const btnSecondary =
  "inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:border-border-strong hover:bg-accent";

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-5 ${className}`}>
      {socialLinks.map((s) => {
        const Icon = socialIcon[s.icon];
        return (
          <li key={s.name}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              className="inline-block text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-foreground"
            >
              <Icon size={19} strokeWidth={1.4} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function Hero() {
  return (
    <section id="top" className="container-page flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-20 text-center">
      <Reveal className="flex flex-col items-center">
        <p className="label-caps text-foreground">Hello, I'm</p>
        <h1 className="font-display mt-6 text-[clamp(3.2rem,11vw,9.5rem)] uppercase leading-[0.92] tracking-tight">
          {personalInfo.name}
        </h1>
        <p className="mt-8 text-lg font-medium tracking-wide text-muted-foreground md:text-base">{personalInfo.role}</p>
        <p className="mt-3 max-w-md text-lg text-foreground/85">{personalInfo.tagline}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={personalInfo.resume} target="_blank" rel="noreferrer" className={btnPrimary}>
            View Resume <ArrowUpRight size={15} strokeWidth={1.6} />
          </a>
          <a href={personalInfo.resume} download className={btnSecondary}>
            Download Resume
          </a>
          <a href="#contact" className={btnSecondary}>
            Contact Me
          </a>
        </div>
        <SocialLinks className="mt-10" />
      </Reveal>
      <a href="#about" className="label-caps mt-16 inline-flex items-center gap-2 text-subtle transition-colors hover:text-foreground">
        Scroll to explore <ArrowDown size={13} strokeWidth={1.5} />
      </a>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="container-page py-24 md:py-32">
      <SectionHeader index="01" label="About" title="About Me" />
      <div className="grid gap-12 md:grid-cols-2 md:gap-20">
        <Reveal>
          <p className="font-display text-3xl leading-tight md:text-5xl">{about.statement}</p>
          <dl className="mt-10 space-y-4 border-t border-border pt-6 text-sm">
            <div className="flex justify-between gap-4"><dt className="label-caps text-muted-foreground">Education</dt><dd className="text-right">{personalInfo.education.degree}</dd></div>
            <div className="flex justify-between gap-4"><dt className="label-caps text-muted-foreground">CGPA</dt><dd>{personalInfo.education.cgpa}</dd></div>
            <div className="flex justify-between gap-4"><dt className="label-caps text-muted-foreground">Based in</dt><dd>{personalInfo.location}</dd></div>
          </dl>
        </Reveal>
        <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
        </Reveal>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="container-page py-24 md:py-32">
      <SectionHeader index="02" label="Experience" title="Experience" subtitle="Where I've worked" />
      {experience.map((e) => (
        <Reveal key={e.company}>
          <article className="rounded-xl border border-border bg-card p-7 md:p-12">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="label-caps text-muted-foreground">{e.duration}</p>
                <h3 className="font-display mt-3 text-3xl md:text-4xl">{e.company}</h3>
                <p className="font-label mt-1 text-lg text-muted-foreground">{e.role}</p>
              </div>
              <a href={e.orgLink} target="_blank" rel="noreferrer" aria-label={`${e.company} on GitHub`} className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:text-foreground">
                <Github size={17} strokeWidth={1.4} />
              </a>
            </div>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed">{e.summary}</p>
            <ul className="mt-6 grid gap-3 text-muted-foreground md:grid-cols-2">
              {e.points.map((p) => (
                <li key={p} className="border-l border-border pl-4 text-sm leading-relaxed">{p}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-2">{e.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
          </article>
        </Reveal>
      ))}
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="container-page py-24 md:py-32">
      <SectionHeader index="03" label="Projects" title="Selected Projects" subtitle="A selection of things I've built." />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name}>
            <article className="group flex h-full flex-col rounded-2xl border border-border p-7 transition-colors duration-300 hover:border-border-strong hover:bg-accent md:p-10">
              <div className="flex items-start justify-between">
                <span className="font-label text-5xl text-subtle transition-transform duration-300 group-hover:-translate-y-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight size={20} strokeWidth={1.3} className="text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <h3 className="font-display mt-10 text-4xl leading-tight">{p.name}</h3>
              <p className="label-caps mt-2 text-muted-foreground">{p.subtitle}</p>
              <p className="mt-5 flex-1 leading-relaxed text-muted-foreground">{p.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">{p.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
              <div className="mt-8 flex gap-6 border-t border-border pt-5 text-sm font-medium">
                <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:underline underline-offset-4">
                  <Github size={14} strokeWidth={1.5} /> GitHub
                </a>
                <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:underline underline-offset-4">
                  Live Demo <ArrowUpRight size={14} strokeWidth={1.5} />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function SkillGroup({ category, items }: { category: string; items: string[] }) {
  return (
    <div>
      <h3 className="label-caps border-b border-border pb-3 text-foreground">{category}</h3>
      <ul className="mt-5 flex flex-wrap gap-2">
        {items.map((s) => (
          <li key={s} className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm">{s}</li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="container-page py-24 md:py-32">
      <SectionHeader index="04" label="Skills" title="Technical Skills" subtitle="Tools and technologies I work with." />
      <Reveal className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {skillsPrimary.map((g) => <SkillGroup key={g.category} {...g} />)}
      </Reveal>
      <Reveal className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {skillsSecondary.map((g) => <SkillGroup key={g.category} {...g} />)}
      </Reveal>
      <Reveal className="mt-24">
        <p className="label-caps text-muted-foreground">Highlights</p>
        <ul className="mt-6 grid border-t border-border md:grid-cols-3">
          {highlights.map((h) => (
            <li key={h.title} className="border-b border-border py-6 md:border-b-0 md:pr-8">
              <p className="font-label text-sm text-subtle">{h.label}</p>
              <p className="mt-2 font-medium">{h.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{h.detail}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
