export const SITE = {
  name: "Godwin Idiovo",
  email: "hello@godwinidiovo.com",
  domain: "godwinidiovo.com",
  linkedin: "https://www.linkedin.com/in/oghenerukevwegodwinidiovo/",
  calendly: "https://calendly.com/idiovorukky/theguyva",
  formspreeId: "meenwera",
  cvUrl: "https://drive.google.com/file/d/1FkgL5kunM_gl8guEn5AJu1HcEbWe0mim/view?usp=sharing",
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
      "Paid traffic that actually converts. Research, creative strategy, and relentless optimization.",
    description:
      "I run paid acquisition campaigns built around your real economics, not vanity clicks. From audience research to creative angles to daily optimization, I treat every dollar like it's mine.",
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
      "End-to-end funnel design, from the click to the booked call, engineered to convert.",
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
    tagline: "I build the brain that follows up, so no revenue is lost.",
    accent: "gold",
    short:
      "CRM, workflows, and integrations that turn your business into a system that runs itself.",
    description:
      "Most leads die in the gap between getting captured and getting called. I build the automations (CRM, workflows, integrations) that make sure every lead gets the right touch at the right moment.",
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
      "Email sequences that warm leads up, build trust, and turn interest into action, automatically.",
    description:
      "Getting the lead is just the beginning. I build the email sequences that warm them up, build trust, and turn interest into action, automatically.",
    includes: [
      "Email sequence strategy and copywriting",
      "Lead nurture flows based on subscriber behavior",
      "Segmentation and tagging setup",
      "Broadcast campaigns and automations",
      "Integration with your funnel and CRM",
    ],
    steps: [
      { title: "Segment your list", body: "Tag and group subscribers by behavior and intent." },
      { title: "Write the sequences", body: "Welcome, nurture, sales, win-back, all built for your voice." },
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
  "You don't have a system. You have a to-do list.",
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
      "Godwin was a great support during a very busy season, leading lead generation, email outreach, and key VA tasks that kept me focused on high-priority work. What stood out was his reliability, attention to detail, and ability to take initiative without constant direction. He communicated clearly and got things done efficiently.",
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
    role: "Automation Specialist",
    company: "Artemis Recruitment",
    range: "Dec 2025 – Present · Remote",
    type: "technical" as const,
    bullets: [
      "Build and maintain recruitment and go-to-market automation systems",
      "Automate workflows using Make.com, GoHighLevel, and CRM integrations",
      "Support operational efficiency through workflow optimization and backend automation",
    ],
  },
  {
    role: "Tech Virtual Assistant",
    company: "Thrive Collective",
    range: "Apr 2025 – Present · Remote",
    type: "operations" as const,
    bullets: [
      "Support backend operations, CRM organization, SEO setup, and workflow management",
      "Assist with landing pages, website updates, scheduling systems, and automation support",
      "Contribute to marketing operations, client systems, and process organization",
    ],
  },
  {
    role: "Technical Virtual Assistant",
    company: "Scale to Impact",
    range: "Dec 2024 – Present · Remote",
    type: "technical" as const,
    bullets: [
      "Supported automation, email sequencing, CRM workflows, and digital operations",
      "Assisted with website management, landing pages, and backend marketing systems",
      "Helped streamline client operations using GoHighLevel, ClickUp, Zapier, and WordPress",
    ],
  },
  {
    role: "Executive Assistant",
    company: "My IVO Health",
    range: "Jun 2023 – Apr 2025 · Remote",
    type: "operations" as const,
    bullets: [
      "Managed executive support operations including scheduling, communication, and reporting",
      "Coordinated projects, documentation, and internal workflow organization",
      "Assisted with marketing support, data tracking, and operational systems",
    ],
  },
  {
    role: "Volunteer Coordinator",
    company: "Little Cell of Mine Foundation",
    range: "Jan 2022 – Present · Volunteer / Remote",
    type: "operations" as const,
    bullets: [
      "Coordinated volunteer operations, onboarding, and outreach initiatives",
      "Supported awareness campaigns, community programs, and backend organization",
      "Helped improve operational structure and communication workflows for ongoing initiatives",
    ],
  },
];

export const CERTIFICATIONS = [
  "Google Project Management Certificate — Coursera (2021)",
  "Programming with Python for Data Science — Udacity (2023)",
  "Digital Marketing — Hootsuite Academy (2024)",
  "Asana Workflow Specialist Certification (2025)",
];

export const SKILLS = {
  automation: ["Make.com", "Zapier", "n8n", "GoHighLevel", "Clay", "HubSpot"],
  operations: ["ClickUp", "Asana", "Airtable", "Notion", "Google Workspace", "Monday.com"],
  marketing: ["Meta Ads", "Google Ads", "Klaviyo", "Apollo.io", "Ahrefs", "ThriveCart"],
  technical: ["Python", "SQL", "VS Code", "WordPress", "Shopify"],
};
