import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote, Sparkles } from "lucide-react";
import { FadeUp } from "@/components/effects/FadeUp";
import { FloatingBlob } from "@/components/effects/FloatingBlob";
import { SectionDecor } from "@/components/effects/SectionDecor";
import { Counter } from "@/components/effects/Counter";
import { motion } from "framer-motion";
import { METRICS, PAINS, SERVICES, TESTIMONIALS } from "@/data/site";
import godwinPortrait from "@/assets/godwin-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Godwin Idiovo | Traffic, Funnels & Automation Engine" },
      {
        name: "description",
        content:
          "I get you traffic, build the path, and make sure no lead is ever lost. Full-stack growth execution for businesses ready to scale without chaos.",
      },
      { property: "og:title", content: "Godwin Idiovo | Growth Systems Built to Scale" },
      {
        property: "og:description",
        content:
          "Media buying, conversion funnels, and backend automation, connected into one engine.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <Pains />
      <Aha />
      <ServicesPreview />
      <About />
      <Results />
      <Testimonials />
      <ClosingCTA />
    </>
  );
}

/* ---------- Section 1: Hero ---------- */
function Hero() {
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      <FloatingBlob className="-top-20 -right-20" color="primary" size={420} />
      <FloatingBlob className="-bottom-32 -left-20" color="peach" size={380} delay={1.5} />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-28 md:pt-28 md:pb-36">
        <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-4xl">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card/80 backdrop-blur px-4 py-1.5 label-eyebrow text-foreground/80">
              <Sparkles size={12} className="text-primary" />
              Media Buyer · Funnel Builder · Automation Specialist
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-[44px] leading-[1.05] sm:text-6xl md:text-[64px] font-bold tracking-tight"
          >
            I get you traffic.{" "}
            <span className="text-primary">I build the path.</span>{" "}
            I make sure <span className="italic text-peach">no lead</span> is ever lost.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            Full-stack growth execution for businesses ready to scale without chaos.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.03]"
            >
              See My Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-peach bg-transparent px-6 py-3 text-sm font-semibold text-peach hover:bg-peach hover:text-peach-foreground transition-all hover:scale-[1.03]"
            >
              Let's Talk
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Section 2: What I Do ---------- */
function WhatIDo() {
  const lines = [
    "I get high-quality traffic to the front door.",
    "I build the digital path that turns a stranger into a lead.",
    "I build the brain that follows up instantly, so no revenue is ever lost.",
  ];
  return (
    <section className="relative bg-primary-deep text-primary-foreground py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 space-y-12">
        {lines.map((l, i) => (
          <FadeUp key={i} delay={i * 0.05}>
            <div
              className={`flex items-start gap-6 ${
                i === 1 ? "md:pl-16" : i === 2 ? "md:pl-32" : ""
              }`}
            >
              <span
                className={`font-accent text-2xl shrink-0 ${
                  i === 0 ? "text-peach" : i === 1 ? "text-primary-foreground/70" : "text-gold"
                }`}
              >
                0{i + 1}
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                {l}
              </h2>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

/* ---------- Section 3: Pains ---------- */
function Pains() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <SectionDecor variant="squares" />
      <div className="relative mx-auto max-w-6xl px-6">
        <FadeUp>
          <span className="label-eyebrow text-peach">The Problem</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold max-w-3xl">
            You're doing everything right. But something is still leaking.
          </h2>
        </FadeUp>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {PAINS.map((p, i) => (
            <FadeUp key={i} delay={i * 0.06}>
              <div className="lift-card lift-card-peach rounded-2xl bg-peach-surface border-l-4 border-peach px-6 py-7">
                <p className="text-lg font-medium text-foreground">{p}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 4: Aha ---------- */
function Aha() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <SectionDecor variant="constellation" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <FadeUp>
          <div className="h-px w-24 mx-auto bg-gold mb-10" />
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            It's not about getting more traffic.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            It's about building a system that captures, converts, and closes
            <span className="text-foreground font-semibold"> automatically.</span>
          </p>
          <div className="h-px w-24 mx-auto bg-gold mt-10" />
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------- Section 5: Services preview ---------- */
function ServicesPreview() {
  const previews = SERVICES.slice(0, 3);
  const accentMap = {
    "media-buying": { color: "text-peach", border: "border-peach", lift: "lift-card-peach" },
    "conversion-funnels": { color: "text-primary", border: "border-primary", lift: "" },
    "backend-automation": { color: "text-gold", border: "border-gold", lift: "lift-card-gold" },
    "email-marketing": { color: "text-peach", border: "border-peach", lift: "lift-card-peach" },
  } as const;

  return (
    <section className="relative overflow-hidden bg-primary-surface py-24 md:py-32">
      <SectionDecor variant="flow" />
      <div className="relative mx-auto max-w-6xl px-6">
        <FadeUp>
          <span className="label-eyebrow text-primary">What I Do</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold max-w-3xl">
            Three systems. One engine.
          </h2>
        </FadeUp>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {previews.map((s, i) => {
            const a = accentMap[s.slug];
            return (
              <FadeUp key={s.slug} delay={i * 0.08}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className={`block lift-card ${a.lift} rounded-3xl bg-card border border-card-border p-7 h-full`}
                >
                  <div className={`inline-flex items-center justify-center h-11 w-11 rounded-2xl border-2 ${a.border}`}>
                    <Sparkles size={18} className={a.color} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground">{s.tagline}</p>
                  <span className={`mt-6 inline-flex items-center gap-1 text-sm font-medium ${a.color}`}>
                    View service details <ArrowRight size={14} />
                  </span>
                </Link>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 6: About ---------- */
function About() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <SectionDecor variant="grid-dots" />
      <div className="relative mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-[260px,1fr] items-start">
        <FadeUp>
          <div className="relative w-56 h-56 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-card-border bg-primary-surface">
            <img
              src={godwinPortrait}
              alt="Godwin Idiovo portrait"
              className="h-full w-full object-cover"
            />
            <div className="absolute -bottom-2 -right-2 h-10 w-10 rounded-full bg-peach flex items-center justify-center">
              <Sparkles size={16} className="text-peach-foreground" />
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <span className="label-eyebrow text-primary">About</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold leading-tight">
            I don't just run campaigns. I build engines.
          </h2>
          <div className="mt-5 space-y-4 text-muted-foreground text-lg">
            <p>
              My journey didn't start with algorithms or ad spend; it started in the trenches.
              As a former Executive Assistant, I lived the reality of manual chaos: the missed
              leads, the messy spreadsheets, and the burnout that comes from trying to scale a
              business with manual labor. I didn't just see the "pain" of inefficient operations;
              I felt it.
            </p>
            <p>
              That experience changed how I look at growth. I realized that a business doesn't
              need more "to-do" lists; it needs a system.
            </p>
            <p>
              Today, I combine that operational empathy with my background in Data Analytics to
              build high-performance Growth Engines. I don't believe in silos. A great ad
              campaign is useless without a funnel that converts, and a funnel is a waste of
              time without the backend automation to catch the lead.
            </p>
            <p className="font-display text-foreground text-xl">I bridge those gaps.</p>
            <p>
              By connecting your traffic, your funnel, and your automation into one unified
              machine, I ensure that your technology finally works as hard as you do. I'm not
              here to just "manage" your business. I'm here to help you engineer its growth.
            </p>
          </div>
          <Link
            to="/resume"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.03]"
          >
            About Me <ArrowRight size={14} />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------- Section 7: Results ---------- */
function Results() {
  return (
    <section className="relative overflow-hidden bg-primary-surface py-24 md:py-32">
      <SectionDecor variant="constellation" />
      <div className="relative mx-auto max-w-6xl px-6">
        <FadeUp>
          <span className="label-eyebrow text-primary">Results</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold max-w-3xl">
            Numbers that matter.
          </h2>
        </FadeUp>

        <div className="mt-12 grid gap-5 grid-cols-2 md:grid-cols-4">
          {METRICS.map((m, i) => (
            <FadeUp key={i} delay={i * 0.06}>
              <div className="rounded-2xl bg-card border border-card-border p-6 text-center lift-card">
                <div className="font-display text-5xl md:text-6xl font-bold text-primary">
                  <Counter value={m.value} suffix={m.suffix} />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{m.label}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 8: Testimonials ---------- */
function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <SectionDecor variant="bubbles" />
      <div className="relative mx-auto max-w-6xl px-6">
        <FadeUp>
          <span className="label-eyebrow text-peach">Trust</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold max-w-3xl">
            What people say.
          </h2>
        </FadeUp>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="lift-card lift-card-peach rounded-2xl bg-card border-l-4 border-peach p-7 h-full">
                <Quote className="text-gold" size={28} />
                <p className="mt-4 text-foreground/90 leading-relaxed">"{t.quote}"</p>
                <div className="mt-6">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.title}</div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 9: Closing CTA ---------- */
function ClosingCTA() {
  return (
    <section className="bg-primary-deep text-primary-foreground py-24 md:py-32 relative overflow-hidden">
      <FloatingBlob className="top-10 right-10" color="peach" size={300} />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <FadeUp>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Ready to stop leaking revenue?
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Let's build your traffic, funnel, and automation system, together.
          </p>
          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-peach px-7 py-3.5 text-base font-semibold text-peach-foreground transition-all hover:scale-[1.03]"
          >
            Book a Free Call <ArrowRight size={18} />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
