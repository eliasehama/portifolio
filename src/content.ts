export interface SocialLink {
  label: string
  href: string
}

export interface Project {
  name: string
  tagline: string
  problem: string
  role: string
  stack: string[]
  decision: string
  links?: { live?: string; code?: string }
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  outcome: string
}

export interface WritingItem {
  title: string
  venue: string
  date: string
  href: string
}

export interface Profile {
  name: string
  positioning: string
  availability: string
  location: string
  socials: SocialLink[]
  email: string
  phone: string
}

export interface Content {
  profile: Profile
  projects: Project[]
  experience: ExperienceItem[]
  writing: WritingItem[]
  about: string[]
  nonWork: string
}

export const content: Content = {
  profile: {
    name: 'ELIA mugisha',
    positioning: 'I build fast, accessible React apps and the Node services behind them.',
    availability: 'Open to senior full-stack roles — available immediately',
    location: 'kigali, Rwanda · remote-friendly',
    email: 'eliasehama@gmail.com',
    phone: '0789606740',
    socials: [
      { label: 'GitHub', href: 'https://github.com/luckyelia' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/elia-mugisha' },
      { label: 'Instagram', href: 'https://instagram.com/lucky___elia' },
    ],
  },

  projects: [
    {
      name: 'Ledgerline',
      tagline: 'Real-time spend analytics for finance teams.',
      problem:
        'Finance teams were exporting CSVs from six tools into spreadsheets every Monday, and the numbers never reconciled. Month-end close took four days.',
      role: 'Tech lead — designed the data model and owned the ingestion pipeline end to end.',
      stack: ['React', 'TypeScript', 'Node', 'Postgres', 'Redis'],
      decision:
        'Chose an append-only event log over mutable rows so every balance could be reconstructed and audited. The tradeoff was more complex reads, which we solved with nightly materialized views instead of premature caching.',
    },
    {
      name: 'Pulseboard',
      tagline: 'On-call incident timeline and postmortem tool.',
      problem:
        'Incidents were reconstructed from three chat tools after the fact, so postmortems missed context and ran long.',
      role: 'Creator and primary maintainer. Designed the React architecture and the Slack ingestion bot.',
      stack: ['React', 'TypeScript', 'Node', 'Postgres'],
      decision:
        'Kept the timeline client-rendered and fully keyboard-navigable rather than pulling in a heavy chart library. We streamed updates over server-sent events instead of WebSockets to keep the ops footprint small.',
    },
    {
      name: 'Formcraft',
      tagline: 'Accessible form builder that outputs typed schemas.',
      problem:
        'Non-engineers built forms that failed WCAG audits and produced inconsistent backend payloads.',
      role: 'Solo build — product spec, front end, and schema compiler.',
      stack: ['React', 'TypeScript', 'Zod', 'Vite'],
      decision:
        'Compiled every form into a Zod schema so the same definition validated both client and server. This removed a whole class of "works in the UI, fails on submit" bugs.',
    },
    {
      name: 'Transitlens',
      tagline: 'Accessible live transit map for a mid-size city.',
      problem:
        'The city\'s official map was unusable with a screen reader and janky on low-end phones during rush hour.',
      role: 'Front-end lead on a team of three.',
      stack: ['React', 'TypeScript', 'MapLibre', 'Node'],
      decision:
        'Rendered stops as semantic HTML lists alongside the canvas map, so assistive tech got a navigable alternative. This doubled the DOM but made the app pass audit and actually usable.',
    },
  ],

  experience: [
    {
      company: 'Northwind Labs',
      role: 'Senior Full-stack Engineer',
      period: '2022 — Present',
      outcome: 'Cut p95 dashboard load from 3.1s to 800ms by replacing waterfall fetches with a batched GraphQL layer.',
    },
    {
      company: 'Cobalt Health',
      role: 'Full-stack Engineer',
      period: '2019 — 2022',
      outcome: 'Shipped a patient intake flow that reduced form abandonment 34% through inline validation and saved progress.',
    },
    {
      company: 'Freelance',
      role: 'Frontend Developer',
      period: '2018 — 2019',
      outcome: 'Delivered 12 client apps, all scoring ≥ 95 on Lighthouse accessibility and performance budgets.',
    },
  ],

  writing: [],

  about: [
    'I care most about the boring parts that make software trustworthy: typed boundaries, predictable data flow, and interfaces that work for everyone. I would rather ship a smaller thing that holds up under real traffic than a clever thing that only works on my machine.',
    'I write about performance and accessibility because they are where engineering quality is easiest to measure and easiest to lose. I review code for readability first, cleverness second.',
  ],

  nonWork:
    'Outside work I restore mechanical keyboards and run long-distance — both are exercises in patience and small, compounding improvements.',
}