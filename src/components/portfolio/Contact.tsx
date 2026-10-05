import { useState, type FormEvent } from "react";
import { Check, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { Reveal, SectionHeader } from "./ui";

type Fields = { name: string; email: string; message: string };

// Swap this for EmailJS later (read keys from import.meta.env.VITE_* — never hardcode).
async function sendMessage(_data: Fields) {
  await new Promise((r) => setTimeout(r, 600));
}

export function Contact() {
  const [values, setValues] = useState<Fields>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const validate = (v: Fields) => {
    const e: Partial<Fields> = {};
    if (!v.name.trim()) e.name = "Please enter your name.";
    if (!v.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Please enter a valid email.";
    if (!v.message.trim()) e.message = "Please write a message.";
    return e;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus("sending");
    await sendMessage(values);
    setStatus("sent");
    setValues({ name: "", email: "", message: "" });
  };

  const details = [
    { label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}`, Icon: Mail },
    { label: "LinkedIn", value: "linkedin.com/in/atishayjain06", href: personalInfo.linkedin, Icon: Linkedin },
    { label: "GitHub", value: "github.com/atishay46", href: personalInfo.github, Icon: Github },
    { label: "Location", value: personalInfo.location, Icon: MapPin },
  ];

  const input = "w-full rounded-lg border border-input bg-card px-4 py-3 text-foreground placeholder:text-subtle transition-colors focus:border-border-strong focus:outline-none";

  return (
    <section id="contact" className="container-page py-24 md:py-32">
      <SectionHeader index="05" label="Contact" title="Let's connect." subtitle="Have an opportunity, idea, or just want to say hello?" />
      <div className="grid gap-14 md:grid-cols-2 md:gap-20">
        <Reveal>
          <ul className="divide-y divide-border border-y border-border">
            {details.map(({ label, value, href, Icon }) => (
              <li key={label} className="flex items-center gap-4 py-5">
                <Icon size={17} strokeWidth={1.4} className="text-muted-foreground" />
                <div>
                  <p className="label-caps text-muted-foreground">{label}</p>
                  {href ? (
                    <a href={href} target={label === "Email" ? undefined : "_blank"} rel="noreferrer" className="mt-1 block break-all hover:underline underline-offset-4">{value}</a>
                  ) : (
                    <p className="mt-1">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <form onSubmit={onSubmit} noValidate className="space-y-5">
            {(["name", "email"] as const).map((f) => (
              <div key={f}>
                <label htmlFor={f} className="label-caps text-muted-foreground">{f}</label>
                <input
                  id={f}
                  type={f === "email" ? "email" : "text"}
                  value={values[f]}
                  onChange={(e) => setValues({ ...values, [f]: e.target.value })}
                  aria-invalid={!!errors[f]}
                  aria-describedby={errors[f] ? `${f}-err` : undefined}
                  className={`${input} mt-2`}
                />
                {errors[f] && <p id={`${f}-err`} className="mt-1.5 text-sm text-muted-foreground">{errors[f]}</p>}
              </div>
            ))}
            <div>
              <label htmlFor="message" className="label-caps text-muted-foreground">Message</label>
              <textarea
                id="message"
                rows={5}
                value={values.message}
                onChange={(e) => setValues({ ...values, message: e.target.value })}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-err" : undefined}
                className={`${input} mt-2 resize-none`}
              />
              {errors.message && <p id="message-err" className="mt-1.5 text-sm text-muted-foreground">{errors.message}</p>}
            </div>
            <button type="submit" disabled={status === "sending"} className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover disabled:opacity-60">
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
            <p role="status" className="min-h-6 text-sm text-muted-foreground">
              {status === "sent" && <span className="inline-flex items-center gap-2"><Check size={14} /> Thanks — your message has been received.</span>}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-nav-border">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>© 2026 {personalInfo.name}</p>
        <ul className="flex gap-6">
          {socialLinks.map((s) => (
            <li key={s.name}>
              <a href={s.href} target={s.icon === "mail" ? undefined : "_blank"} rel="noreferrer" className="transition-colors hover:text-foreground">{s.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
