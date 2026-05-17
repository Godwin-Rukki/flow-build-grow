import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import { FadeUp } from "@/components/effects/FadeUp";
import { SectionDecor } from "@/components/effects/SectionDecor";
import { SERVICES, type Service, type ServiceSlug } from "@/data/site";
import caseMediaBuying1 from "@/assets/case-media-buying-1.png";
import caseMediaBuying2 from "@/assets/case-media-buying-2.png";
import caseAutomationVolunteer from "@/assets/case-automation-volunteer.png";
import caseAutomationInquiry from "@/assets/case-automation-inquiry.png";

type CaseStudy = {
  title: string;
  overview: string;
  problem?: string;
  problemPoints?: string[];
  did: string[];
  didIntro?: string;
  results: string[];
  tools: string[];
  image: string;
  imageAlt: string;
};

const CASE_STUDIES: Partial<Record<ServiceSlug, CaseStudy[]>> = {
  "media-buying": [
    {
      title: "Outbound Call Campaign Performance Tracking",
      overview:
        "Supported the monitoring and optimization of an outbound campaign designed to improve customer outreach efficiency and reduce call costs through consistent performance tracking and reporting.",
      did: [
        "Monitored daily outbound call performance",
        "Tracked cost-per-call efficiency metrics",
        "Assisted with campaign pacing and reporting",
        "Reviewed activity trends and engagement performance",
        "Maintained organized campaign analytics for decision-making",
      ],
      results: [
        "Facilitated 1,309 outbound calls",
        "Achieved an average cost of $0.10 per call",
        "Managed campaign spend of $132.65",
        "Maintained steady campaign activity across the reporting period",
      ],
      tools: ["Meta Ads Manager", "Campaign Analytics", "Reporting Dashboards", "Performance Tracking"],
      image: caseMediaBuying1,
      imageAlt: "Outbound call campaign performance dashboard showing 1,309 calls placed",
    },
    {
      title: "Scaling Lead Generation Through Paid Ads",
      overview:
        "Managed and optimized a lead generation campaign focused on increasing website conversions while maintaining cost efficiency. The campaign achieved over 7,200 website leads within a 30-day period through ongoing ad optimization, audience refinement, and performance monitoring.",
      did: [
        "Monitored daily ad performance and spend allocation",
        "Optimized campaign delivery and lead acquisition costs",
        "Reviewed lead quality and conversion trends",
        "Tracked analytics and performance metrics",
        "Assisted with campaign reporting and optimization workflows",
      ],
      results: [
        "Generated 7,287 website leads",
        "Maintained an average Cost Per Lead of $1.52",
        "Managed over $11,000 in ad spend",
        "Increased lead volume by 231% compared to the previous period",
      ],
      tools: ["Meta Ads Manager", "Performance Analytics", "Campaign Reporting", "Audience Optimization"],
      image: caseMediaBuying2,
      imageAlt: "Lead generation campaign dashboard showing 7,287 website leads",
    },
  ],
  "backend-automation": [
    {
      title: "Volunteer Recruitment Automation System",
      overview:
        "Designed and implemented a multi-step recruitment automation system for a nonprofit organization to streamline volunteer onboarding, screening, and communication workflows. The system automated the recruitment journey from form submission to candidate assessment and email communication, reducing manual administrative workload and improving response consistency.",
      problem:
        "The organization handled multiple volunteer roles and applications manually, making it difficult to:",
      problemPoints: [
        "Respond to applicants quickly",
        "Sort candidates by role",
        "Track assessments and responses",
        "Maintain consistent communication throughout recruitment",
      ],
      didIntro: "Using workflow automation tools, I created a recruitment system that:",
      did: [
        "Captured applications through online forms",
        "Automatically sorted applicants by role and category",
        "Triggered personalized email responses",
        "Distributed assessments and tests based on position",
        "Reviewed and routed responses through conditional paths",
        "Sent follow-up communications automatically",
        "Reduced repetitive manual coordination tasks",
      ],
      results: [
        "Streamlined the entire volunteer recruitment workflow",
        "Improved applicant response time",
        "Reduced administrative workload",
        "Created a scalable onboarding process for multiple volunteer positions",
        "Enabled continuous recruitment without manual intervention",
      ],
      tools: ["Zapier", "Google Forms", "Gmail Automation", "Conditional Logic & Multi-Path Workflows"],
      image: caseAutomationVolunteer,
      imageAlt: "Zapier volunteer recruitment automation workflow with multi-path conditional logic",
    },
    {
      title: "Customer Inquiry & Lead Routing Automation for Fitness Business",
      overview:
        "Built an automated inquiry management and lead routing system for a fitness business using GoHighLevel to improve customer response times, streamline communication, and automate internal notifications.",
      problem:
        "The business handled multiple customer inquiry types manually, which slowed response times and created operational inefficiencies in lead management and follow-up coordination.",
      didIntro: "Developed a workflow automation system connected to the business website that:",
      did: [
        "Captured inquiries through website forms",
        "Sent instant acknowledgment responses to leads",
        "Routed inquiries based on customer selections",
        "Triggered internal team notifications",
        "Organized leads automatically inside the CRM",
        "Reduced repetitive administrative communication",
      ],
      results: [
        "Faster customer response times",
        "Improved lead organization and tracking",
        "Reduced manual inquiry handling",
        "Streamlined team communication workflows",
        "Increased operational efficiency",
      ],
      tools: [
        "GoHighLevel (CRM & Workflow Automation)",
        "Website Forms",
        "Automated Email Responses",
        "Lead Routing Logic",
        "Internal Notification Workflows",
      ],
      image: caseAutomationInquiry,
      imageAlt: "GoHighLevel enquiry filter workflow routing leads through conditional branches",
    },
  ],
};

export const Route = createFileRoute("/services_/$slug")({
  loader: ({ params }): { service: Service } => {
    const service = SERVICES.find((s) => s.slug === (params.slug as ServiceSlug));
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} | Godwin Idiovo` },
          { name: "description", content: loaderData.service.short },
          { property: "og:title", content: `${loaderData.service.title} | Godwin Idiovo` },
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
      <section className={`relative overflow-hidden ${a.bg} pt-16 pb-20 md:pt-24 md:pb-28`}>
        <SectionDecor variant="bubbles" />
        <div className="relative mx-auto max-w-5xl px-6">
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
      <section className="relative overflow-hidden bg-background py-20 md:py-24">
        <SectionDecor variant="grid-dots" />
        <div className="relative mx-auto max-w-5xl px-6 grid gap-12 md:grid-cols-2">
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
      <section className="relative overflow-hidden bg-primary-surface py-20 md:py-24">
        <SectionDecor variant="flow" />
        <div className="relative mx-auto max-w-5xl px-6">
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
      <section className="relative overflow-hidden bg-background py-20 md:py-24">
        <SectionDecor variant="constellation" />
        <div className="relative mx-auto max-w-5xl px-6">
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

      {/* Case studies */}
      {CASE_STUDIES[service.slug] && (
        <section className="relative overflow-hidden bg-background py-20 md:py-24 border-t border-card-border">
          <div className="relative mx-auto max-w-5xl px-6">
            <FadeUp>
              <span className={`label-eyebrow ${a.color}`}>Case studies</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">Proof of work.</h2>
              <p className="mt-3 text-muted-foreground max-w-2xl">
                Real examples of this system in action.
              </p>
            </FadeUp>

            <div className="mt-12 space-y-16">
              {CASE_STUDIES[service.slug]!.map((cs, idx) => (
                <FadeUp key={idx} delay={0.05}>
                  <article className="grid gap-8 md:grid-cols-2 md:items-start">
                    <div className={`rounded-2xl ${a.bg} border ${a.border} overflow-hidden`}>
                      <img
                        src={cs.image}
                        alt={cs.imageAlt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="rounded-2xl bg-card border border-card-border p-7 md:p-8">
                      <span className="label-eyebrow text-muted-foreground">Case 0{idx + 1}</span>
                      <h3 className="mt-2 font-display text-xl md:text-2xl font-semibold">
                        {cs.title}
                      </h3>
                      <p className="mt-4 text-foreground/80 leading-relaxed text-sm">
                        {cs.overview}
                      </p>

                      {cs.problem && (
                        <>
                          <h4 className={`mt-5 font-display text-sm font-bold ${a.color}`}>The problem</h4>
                          <p className="mt-2 text-sm text-foreground/80 leading-relaxed">{cs.problem}</p>
                          {cs.problemPoints && (
                            <ul className="mt-2 space-y-1.5">
                              {cs.problemPoints.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                                  <Check size={14} className={`mt-1 shrink-0 ${a.color}`} />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      )}

                      <h4 className={`mt-5 font-display text-sm font-bold ${a.color}`}>What I built</h4>
                      {cs.didIntro && (
                        <p className="mt-2 text-sm text-foreground/80 leading-relaxed">{cs.didIntro}</p>
                      )}
                      <ul className="mt-2 space-y-1.5">
                        {cs.did.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                            <Check size={14} className={`mt-1 shrink-0 ${a.color}`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className={`mt-5 font-display text-sm font-bold ${a.color}`}>Results</h4>
                      <ul className="mt-2 space-y-1.5">
                        {cs.results.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                            <Check size={14} className={`mt-1 shrink-0 ${a.color}`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className={`mt-5 font-display text-sm font-bold ${a.color}`}>Tools used</h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {cs.tools.map((t) => (
                          <span
                            key={t}
                            className={`inline-flex items-center rounded-full border ${a.border} ${a.bg} px-3 py-1 text-xs font-medium`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}
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
