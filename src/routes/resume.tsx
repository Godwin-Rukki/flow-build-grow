import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/effects/FadeUp";
import { SectionDecor } from "@/components/effects/SectionDecor";
import { CERTIFICATIONS, EXPERIENCE, SITE, SKILLS } from "@/data/site";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume | Godwin Idiovo" },
      {
        name: "description",
        content:
          "From operations to automation. Godwin's journey through marketing, ops, and technical work.",
      },
      { property: "og:title", content: "My Journey | Godwin Idiovo" },
      {
        property: "og:description",
        content: "From operations to automation. Here's how I got here.",
      },
    ],
  }),
  component: ResumePage,
});

const dotColors = {
  marketing: "bg-primary",
  operations: "bg-peach",
  technical: "bg-gold",
} as const;

function ResumePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-background pt-20 pb-12 md:pt-28">
        <SectionDecor variant="constellation" />
        <div className="relative mx-auto max-w-5xl px-6">
          <FadeUp>
            <span className="label-eyebrow text-primary">My Journey</span>
            <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold tracking-tight">
              From operations to automation.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
              Here's how I got here.
            </p>
            <a
              href={SITE.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.03]"
            >
              <Download size={16} /> Download CV
            </a>
          </FadeUp>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative overflow-hidden bg-background py-16 md:py-20">
        <SectionDecor variant="grid-dots" />
        <div className="relative mx-auto max-w-4xl px-6">
          <FadeUp>
            <span className="label-eyebrow text-muted-foreground">Experience</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">Where I've worked.</h2>
          </FadeUp>
          <div className="relative mt-12 pl-8 md:pl-12">
            <div className="absolute left-2 md:left-3 top-2 bottom-2 w-px bg-card-border" />
            {EXPERIENCE.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative pb-10 last:pb-0"
              >
                <span
                  className={`absolute -left-7 md:-left-9 top-2 h-3.5 w-3.5 rounded-full ring-4 ring-background ${dotColors[e.type]}`}
                />
                <div className="rounded-2xl bg-card border border-card-border p-6 lift-card">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-xl font-bold">{e.role}</h3>
                    <span className="text-muted-foreground">· {e.company}</span>
                  </div>
                  <span className="label-eyebrow text-muted-foreground">{e.range}</span>
                  <ul className="mt-4 space-y-2 text-foreground/85">
                    {e.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-peach mt-2 h-1 w-1 rounded-full shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="relative overflow-hidden bg-primary-surface py-16 md:py-20">
        <SectionDecor variant="flow" />
        <div className="relative mx-auto max-w-4xl px-6">
          <FadeUp>
            <span className="label-eyebrow text-primary">Certifications</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">Verified work.</h2>
          </FadeUp>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {CERTIFICATIONS.map((c, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="rounded-xl bg-card border border-card-border p-5 lift-card">
                  <p className="font-medium">{c}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="relative overflow-hidden bg-background py-16 md:py-24">
        <SectionDecor variant="bubbles" />
        <div className="relative mx-auto max-w-5xl px-6 space-y-12">
          <FadeUp>
            <span className="label-eyebrow text-muted-foreground">Skills & Tools</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">The stack.</h2>
          </FadeUp>

          <PillGroup
            label="Automation & Systems"
            skills={SKILLS.automation}
            colorClasses="bg-primary-surface text-primary border-primary/40"
          />
          <PillGroup
            label="CRM & Operations"
            skills={SKILLS.operations}
            colorClasses="bg-peach-surface text-peach border-peach/40"
          />
          <PillGroup
            label="Marketing & Growth"
            skills={SKILLS.marketing}
            colorClasses="bg-gold-surface text-gold border-gold/40"
          />
          <PillGroup
            label="Technical"
            skills={SKILLS.technical}
            colorClasses="bg-primary-surface text-primary border-primary/40"
          />
        </div>
      </section>

      {/* Contact CTA */}
    </>
  );
}

function PillGroup({
  label,
  skills,
  colorClasses,
}: {
  label: string;
  skills: string[];
  colorClasses: string;
}) {
  return (
    <FadeUp>
      <div>
        <span className="label-eyebrow text-foreground/60">{label}</span>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {skills.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className={`inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium ${colorClasses}`}
            >
              {s}
            </motion.span>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}
