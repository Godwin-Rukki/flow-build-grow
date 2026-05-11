import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import { FadeUp } from "@/components/effects/FadeUp";
import { SERVICES, type Service, type ServiceSlug } from "@/data/site";

export const Route = createFileRoute("/services_/$slug")({
  loader: ({ params }): { service: Service } => {
    const service = SERVICES.find((s) => s.slug === (params.slug as ServiceSlug));
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} — Godwin Idiovo` },
          { name: "description", content: loaderData.service.short },
          { property: "og:title", content: `${loaderData.service.title} — Godwin Idiovo` },
          { property: "og:description", content: loaderData.service.short },
        ]
      : [],
  }),
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="font-display text-4xl font-bold">Service not found</h1>
      <Link to="/services" className="mt-6 inline-block text-primary underline">
        Back to services
      </Link>
    </div>
  ),
});

const accentMap = {
  primary: { color: "text-primary", bg: "bg-primary-surface", border: "border-primary" },
  peach: { color: "text-peach", bg: "bg-peach-surface", border: "border-peach" },
  gold: { color: "text-gold", bg: "bg-gold-surface", border: "border-gold" },
  "peach-gold": { color: "text-peach", bg: "bg-peach-surface", border: "border-peach" },
} as const;

function ServiceDetail() {
  const { service } = Route.useLoaderData() as { service: Service };
  const a = accentMap[service.accent];

  return (
    <>
      {/* Hero */}
      <section className={`${a.bg} pt-16 pb-20 md:pt-24 md:pb-28`}>
        <div className="mx-auto max-w-5xl px-6">
          <FadeUp>
            <Link
              to="/services"
              className="inline-flex items-center gap-1 text-sm text-foreground/70 hover:text-foreground"
            >
              <ArrowLeft size={14} /> All services
            </Link>
            <div className={`mt-6 inline-flex items-center justify-center h-12 w-12 rounded-2xl border-2 ${a.border} bg-background`}>
              <Sparkles size={20} className={a.color} />
            </div>
            <h1 className="mt-5 font-display text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
              {service.title}
            </h1>
            <p className={`mt-5 font-display text-2xl md:text-3xl ${a.color} font-semibold max-w-3xl`}>
              {service.tagline}
            </p>
            <p className="mt-5 text-lg text-foreground/80 max-w-2xl">
              {service.description}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6 grid gap-12 md:grid-cols-2">
          <FadeUp>
            <span className="label-eyebrow text-muted-foreground">What's included</span>
            <h2 className="mt-3 font-display text-3xl font-bold">Everything that goes in.</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <ul className="space-y-3">
              {service.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className={`mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${a.bg} ${a.color}`}>
                    <Check size={12} />
                  </span>
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* How I do it */}
      <section className="bg-primary-surface py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeUp>
            <span className="label-eyebrow text-primary">How I do it</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">The process.</h2>
          </FadeUp>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {service.steps.map((step, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <div className="lift-card rounded-2xl bg-card border border-card-border p-6 h-full">
                  <span className={`font-accent text-sm ${a.color}`}>0{i + 1}</span>
                  <h3 className="mt-2 font-display text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeUp>
            <span className="label-eyebrow text-muted-foreground">Tools I use</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">My stack for this.</h2>
          </FadeUp>
          <div className="mt-10 flex flex-wrap gap-3">
            {service.tools.map((t, i) => (
              <FadeUp key={t} delay={i * 0.04}>
                <span className={`inline-flex items-center gap-2 rounded-full border ${a.border} ${a.bg} px-5 py-2.5 text-sm font-medium`}>
                  {t}
                </span>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="bg-background pb-20 md:pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <FadeUp>
            <div className={`rounded-3xl ${a.bg} border-l-4 ${a.border} p-8 md:p-10`}>
              <span className="label-eyebrow text-foreground/60">A little of what I've done</span>
              <p className="mt-3 font-display text-2xl md:text-3xl font-semibold leading-snug">
                {service.proof}
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-deep text-primary-foreground py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeUp>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Want this for your business?
            </h2>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-peach px-7 py-3.5 text-base font-semibold text-peach-foreground transition-all hover:scale-[1.03]"
            >
              Let's talk <ArrowRight size={18} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
