export const SITE = {
  name: "Godwin Idiovo",
  email: "godwin@godwinidiovo.com",
  domain: "godwinidiovo.com",
  linkedin: "https://www.linkedin.com/in/oghenerukevwegodwinidiovo/",
  calendly: "https://calendly.com/REPLACE_ME/30min",
  formspreeId: "REPLACE_ME",
  cvUrl: "/cv-placeholder.pdf",
};

export type ServiceSlug =
  | "media-buying"
  | "conversion-funnels"
  | "backend-automation"
  | "email-marketing";

export type Service = {
  slug: ServiceSlug;
  title: string;
  tagline: string;
  description: string;
  accent: "primary" | "peach" | "gold" | "peach-gold";
  short: string;
  includes: string[];
  steps: { title: string; body: string }[];
  tools: string[];
  proof: string;
};

export const SERVICES: Service[] = [
  {
    slug: "media-buying",
    title: "Media Buying",
    tagline: "I get high-quality traffic to the front door.",
    accent: "peach",
    short:
      "Paid traffic that actually converts — research, creative strategy, and relentless optimization.",
    description:
      "I run paid acquisition campaigns built around your real economics — not vanity clicks. From audience research to creative angles to daily optimization, I treat every dollar like it's mine.",
    includes: [
      "Audience and competitor research",
      "Campaign architecture and setup",
      "Ad creative strategy and testing",
      "Daily performance tracking",
      "Optimization for ROAS, not just CPL",
    ],
    steps: [
      { title: "Audit & research", body: "Map your offer, audience, and current funnel economics." },
      { title: "Build & launch", body: "Stand up campaigns with clean structure and tracking from day one." },
      { title: "Test & iterate", body: "Rotate angles and creatives weekly; cut losers fast." },
      { title: "Scale what wins", body: "Compound the winners and protect your CAC as you grow." },
    ],
    tools: ["Meta Ads", "Google Ads", "Apollo.io"],
    proof: "Managed campaigns that delivered 3x ROAS in under 90 days.",
  },
  {
    slug: "conversion-funnels",
    title: "Conversion Funnels",
    tagline: "I build the path that turns strangers into leads.",
    accent: "primary",
    short:
      "End-to-end funnel design — from the click to the booked call — engineered to convert.",
    description:
      "A great ad means nothing if the page after it leaks. I design and build the entire path: landing pages, lead magnets, qualifiers, and thank-you flows that move people forward.",
    includes: [
      "Funnel mapping and offer architecture",
      "Landing page strategy and copy direction",
      "Lead magnet setup and delivery",
      "A/B testing guidance",
      "Conversion tracking end-to-end",
    ],
    steps: [
      { title: "Map the journey", body: "Define every step from cold click to closed deal." },
      { title: "Design the path", body: "Build pages and offers that match buyer intent at each stage." },
      { title: "Wire the tracking", body: "Pixels, events, and attribution so you actually know what works." },
      { title: "Optimize the gaps", body: "Find the leaks with data and patch them with intent." },
    ],
    tools: ["Go High Level", "Thrivecart", "Shopify"],
    proof: "Rebuilt funnels that lifted lead-to-call rates by 2x without changing ad spend.",
  },
  {
    slug: "backend-automation",
    title: "Backend Automation",
    tagline: "I build the brain that follows up — so no revenue is lost.",
    accent: "gold",
    short:
      "CRM, workflows, and integrations that turn your business into a system that runs itself.",
    description:
      "Most leads die in the gap between getting captured and getting called. I build the automations — CRM, workflows, integrations — that make sure every lead gets the right touch at the right moment.",
    includes: [
      "CRM setup and pipeline design",
      "Lead follow-up sequences",
      "Email and SMS automation",
      "Workflow building across tools",
      "System integration end-to-end",
    ],
    steps: [
      { title: "Map your ops", body: "Document where leads enter and where they fall off." },
      { title: "Design the system", body: "Choose the right stack and pipelines for how you actually work." },
      { title: "Build the flows", body: "Automate the repeatable; keep the human in the right places." },
      { title: "Maintain & evolve", body: "Refine as your offer and team grow." },
    ],
    tools: ["Make.com", "Go High Level", "Clay", "Asana", "n8n", "Zapier"],
    proof: "Built 10+ automation systems that recovered leads competitors were dropping.",
  },
  {
    slug: "email-marketing",
    title: "Email Marketing & Lead Nurture",
    tagline: "Getting the lead is just the beginning.",
    accent: "peach-gold",
    short:
      "Email sequences that warm leads up, build trust, and turn interest into action — automatically.",
    description:
      "Getting the lead is just the beginning. I build the email sequences that warm them up, build trust, and turn interest into action — automatically.",
    includes: [
      "Email sequence strategy and copywriting",
      "Lead nurture flows based on subscriber behavior",
      "Segmentation and tagging setup",
      "Broadcast campaigns and automations",
      "Integration with your funnel and CRM",
    ],
    steps: [
      { title: "Segment your list", body: "Tag and group subscribers by behavior and intent." },
      { title: "Write the sequences", body: "Welcome, nurture, sales, win-back — built for your voice." },
      { title: "Automate by behavior", body: "Trigger the right message based on what they actually do." },
      { title: "Measure & refine", body: "Watch open, click, and reply rates; iterate on the weak links." },
    ],
    tools: ["Go High Level", "Kit (ConvertKit)", "Klaviyo", "Mailchimp", "ActiveCampaign"],
    proof: "Nurture flows that doubled reply rates inside 30 days.",
  },
];

export const PAINS = [
  "You're running ads but the leads aren't converting.",
  "You're spending money on traffic that goes nowhere.",
  "You follow up manually and leads fall through the cracks.",
  "You don't have a system — you have a to-do list.",
];

export const METRICS = [
  { value: 3, suffix: "x", label: "Average ROAS delivered" },
  { value: 10, suffix: "+", label: "Automation systems built" },
  { value: 5, suffix: "+", label: "Industries served" },
  { value: 100, suffix: "%", label: "Clients get a custom system" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Working with Godwin has been an absolute game-changer. He stepped in seamlessly, took ownership of the backend, organized our systems, and simplified our digital processes. He's proactive, professional, and brings a calm confidence to everything he does.",
    name: "Bonita Grobbelaar",
    title: "CEO, Scale To Impact",
  },
  {
    quote:
      "Godwin was a great support during a very busy season — leading lead generation, email outreach, and key VA tasks that kept me focused on high-priority work. What stood out was his reliability, attention to detail, and ability to take initiative without constant direction. He communicated clearly and got things done efficiently.",
    name: "Matt Moran",
    title: "Founder & CEO, Matt Moran Coaching",
  },
  {
    quote:
      "Godwin has been an invaluable part of our team. He built structure into our programs, streamlined volunteer recruitment, and improved how we track and manage ongoing projects. From automating applications to supporting grant writing, he consistently brings clarity, dedication, and strategic thinking to the table.",
    name: "Dr. Ivie Enebeli",
    title: "Founder, Little Cell Of Mine Foundation",
  },
];

export const EXPERIENCE = [
  {
    role: "Freelance Media Buyer & Automation Specialist",
    company: "Independent",
    range: "2023 — Present",
    type: "marketing" as const,
    bullets: [
      "Designed and ran paid acquisition campaigns across Meta and Google for B2B and DTC clients.",
      "Built CRM and automation systems in Go High Level, Make, and n8n.",
      "Connected ads, funnels, and follow-up into a single revenue engine.",
    ],
  },
  {
    role: "Operations & Workflow Lead",
    company: "[Placeholder Company]",
    range: "2021 — 2023",
    type: "operations" as const,
    bullets: [
      "Standardized internal workflows across sales and ops using Asana and Monday.",
      "Cut manual follow-up time by integrating CRM with email automation.",
    ],
  },
  {
    role: "Executive Assistant",
    company: "[Placeholder Company]",
    range: "2019 — 2021",
    type: "operations" as const,
    bullets: [
      "Supported leadership with calendar, communications, and process design.",
      "Identified bottlenecks and introduced first automations into daily ops.",
    ],
  },
  {
    role: "Data Analytics — Self-directed certification",
    company: "Python / SQL track",
    range: "2022",
    type: "technical" as const,
    bullets: [
      "Completed a structured data analytics curriculum in Python and SQL.",
      "Started using data to drive marketing and ops decisions.",
    ],
  },
];

export const CERTIFICATIONS = [
  "Asana Automation and Workflow Certification",
  "Data Analytics with Python Certification",
  "[Placeholder] — additional certification",
];

export const SKILLS = {
  automation: [
    "Make.com", "Go High Level", "Clay", "Hunter.io", "n8n", "Microsoft Clarity", "Zapier",
  ],
  marketing: [
    "Meta Ads", "Google Ads", "Apollo.io", "Kit", "Klaviyo", "Thrivecart",
  ],
  data: [
    "Python", "SQL", "Excel", "VS Code", "Shopify", "Asana", "Monday.com", "Google Workspace",
  ],
};
