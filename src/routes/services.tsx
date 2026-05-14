import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { FadeUp } from "@/components/effects/FadeUp";
import { SectionDecor } from "@/components/effects/SectionDecor";
import { SERVICES } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Godwin Idiovo" },
      {
        name: "description",
        content:
          "Three systems. One engine. Media buying, conversion funnels, backend automation, and email nurture, built for growth.",
      },
      { property: "og:title", content: "What I Do | Godwin Idiovo" },
      {
        property: "og:description",
        content:
          "Three systems. One engine. Built for growth.",
      },
    ],
  }),
  component: ServicesPage,
});

const accentMap = {
  primary: { color: "text-primary", border: "border-primary", bg: "bg-primary-surface", lift: "" },
  peach: { color: "text-peach", border: "border-peach", bg: "bg-peach-surface", lift: "lift-card-peach" },
  gold: { color: "text-gold", border: "border-gold", bg: "bg-gold-surface", lift: "lift-card-gold" },
  "peach-gold": {
    color: "text-peach",
    border: "border-peach",
    bg: "bg-peach-surface",
    lift: "lift-card-peach",
  },
} as const;

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-background pt-20 pb-12 md:pt-28 md:pb-16">
        <SectionDecor variant="flow" />
        <div className="relative mx-auto max-w-6xl px-6">
          <FadeUp>
            <span className="label-eyebrow text-primary">What I Do</span>
            <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold tracking-tight">
              Three systems. One engine.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
              Built for growth, without the chaos.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background pb-24">
        <SectionDecor variant="squares" />
        <div className="relative mx-auto max-w-6xl px-6 grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => {
            const a = accentMap[s.accent];
            return (
              <FadeUp key={s.slug} delay={i * 0.06}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className={`group block lift-card ${a.lift} rounded-3xl bg-card border border-card-border p-8 h-full`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`inline-flex items-center justify-center h-11 w-11 rounded-2xl border-2 ${a.border}`}>
                      <Sparkles size={18} className={a.color} />
                    </div>
                    <span className={`label-eyebrow ${a.color}`}>0{i + 1}</span>
                  </div>
                  <h2 className="mt-5 font-display text-2xl md:text-3xl font-bold">{s.title}</h2>
                  <p className="mt-3 text-muted-foreground">{s.short}</p>
                  <span className={`mt-6 inline-flex items-center gap-1 text-sm font-medium ${a.color}`}>
                    See the details
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </FadeUp>
            );
          })}
        </div>
      </section>

      <section className="bg-primary-deep text-primary-foreground py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeUp>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
              Not sure which service you need?
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              Let's figure it out together.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-peach px-6 py-3 text-sm font-semibold text-peach-foreground transition-all hover:scale-[1.03]"
            >
              Talk to Godwin <ArrowRight size={16} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
