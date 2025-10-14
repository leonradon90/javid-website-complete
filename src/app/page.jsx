"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const HERO_IMAGE = "/images/hero-javid.png";
const PHONE_IMAGE = "/images/ya-apteka-phone.png";

const navLinks = [
  { label: "What I do", href: "#what-i-do" },
  { label: "Why me", href: "#why-me" },
  { label: "How I work", href: "#how-i-work" },
  { label: "Projects", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
];

const heroHighlights = [
  {
    title: "Task estimate in 10 minutes",
    description: "Deadlines, milestones, and budget right after the first call.",
  },
  {
    title: "Full cycle product development",
    description: "Design, development, integrations, analytics, launch support.",
  },
  {
    title: "30 USD/hour or fixed price",
    description: "Pick the model that matches the task and share the risk fairly.",
  },
];

const services = [
  {
    icon: "WEB",
    title: "Sites and web services",
    description: "Laravel, PHP, Node, React, Next.js, portals, landing pages.",
  },
  {
    icon: "BOT",
    title: "Parsing, automation, integrations",
    description: "Payments, cards, analytics, custom CRMs and dashboards.",
  },
  {
    icon: "CHAT",
    title: "Telegram bots and chats",
    description: "Automation, anti spam, onboarding funnels, support flows.",
  },
  {
    icon: "MVP",
    title: "Desktop and mobile MVPs",
    description: "Swift, Java, Flutter prototypes that launch in weeks.",
  },
  {
    icon: "AI",
    title: "Smart contracts, Web3, AI",
    description: "Automation, data pipelines, on chain integrations, DeFi tools.",
  },
  {
    icon: "DEV",
    title: "Improve existing products",
    description: "Audits, refactoring, redesign, scaling and optimisation.",
  },
];

const whyItems = [
  { title: "I grasp the task right away", description: "Structure, clarifications, and plan during the first call." },
  { title: "Hourly rate or fixed price", description: "Pick the model that matches scope and risk." },
  { title: "I work without the fluff", description: "Iterations ship fast with visible progress and demos." },
  { title: "Turn key integrations", description: "Hosting, CI, analytics, Telegram, GitHub handover." },
  { title: "Support after delivery", description: "Launch monitoring, fixes, and improvements included." },
  { title: "20+ projects delivered", description: "Bots, apps, automation, multi page sites and more." },
];

const workflowSteps = [
  {
    title: "I estimate the task in 10 min",
    description: "You receive deadlines, milestones, and a realistic price range immediately.",
  },
  {
    title: "We agree on it",
    description: "Scope, payment stages, secure transaction, and contract are fixed in writing.",
  },
  {
    title: "I implement",
    description: "Every iteration is tested, demoed, and delivered on schedule.",
  },
  {
    title: "I support",
    description: "Need refinements? I stay until the launch is stable and successful.",
  },
];

const projects = [
  {
    name: "Ya+Apteka",
    type: "Mobile app for finding and ordering medications",
    tasks: [
      "Create a user friendly app for finding and ordering medications.",
      "Integrate with the pharmacy system for up to date data.",
      "Provide a simple interface for users.",
    ],
    results: [
      "50 000+ installs in the first month.",
      "4.8* rating in app stores.",
      "30% growth in online orders.",
    ],
    quote:
      "The app improved customer interaction. Stability and ease of use led to increased sales.",
    quoteAuthor: 'Representative of the "Ya+Apteka" network',
  },
  {
    name: "VieON",
    type: "Streaming platform modernisation",
    tasks: [
      "Implemented a unified design system across web and mobile.",
      "Automated content scheduling and publishing.",
      "Optimised video delivery for high traffic events.",
    ],
    results: [
      "35% boost in daily watch time.",
      "Reduced release overhead by 60%.",
      "Stable during 3M+ concurrent views.",
    ],
    quote:
      "Thanks to the new platform we expanded our audience and kept launches smooth, even during national events.",
    quoteAuthor: "Product owner at VieON",
  },
];

const testimonials = [
  {
    quote:
      "The OlaLearn platform became a revolutionary solution for our students. Interactive lessons and a friendly interface significantly improved learning effectiveness.",
    client: "OlaLearn",
    role: "Online platform for learning English",
    gradient: "linear-gradient(125deg, #405bff 0%, #2245ff 100%)",
  },
  {
    quote:
      "Thanks to the new app we expanded our audience and improved user interaction. High quality work and attention to detail brought impressive results.",
    client: "VieON",
    role: "Leading streaming platform of Vietnam",
    gradient: "linear-gradient(125deg, #4f64ff 0%, #6c7cff 100%)",
  },
  {
    quote:
      "Collaboration was simple and transparent. Quick delivery, clear reporting, and measurable growth made the launch effortless for our team.",
    client: "Ya+Apteka",
    role: "National pharmacy chain",
    gradient: "linear-gradient(125deg, #3b56ff 0%, #5a70ff 100%)",
  },
];

const partners = [
  { name: "OlaLearn", description: "Online platform for learning English" },
  { name: "VieON", description: "Leading streaming platform of Vietnam" },
  { name: "Ya+Apteka", description: "Largest pharmacy marketplace in CIS" },
];

function SectionTitle({ label, align = "center" }) {
  return (
    <p
      className={`font-heading text-xs uppercase tracking-[0.35em] text-[#7f8aa7] md:text-sm ${
        align === "center" ? "text-center" : ""
      }`}
    >
      {label}
    </p>
  );
}

function BlurField({ gradient, className }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute blur-[160px] ${className}`}
      style={{ background: gradient }}
    />
  );
}

function HeaderNav() {
  return (
    <nav className="mx-auto flex w-full max-w-3xl items-center justify-center gap-3 rounded-full border border-white/70 bg-white/75 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#8f98b4] shadow-[0_25px_60px_-40px_rgba(73,96,255,0.6)] backdrop-blur md:text-xs">
      <span className="text-[#ff6d85]">{"<"}</span>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="transition hover:text-[#ff5151]">
            {link.label}
          </a>
        ))}
      </div>
      <span className="text-[#ff6d85]">{"/>"}</span>
    </nav>
  );
}

function HeroSection() {
  return (
    <header className="relative z-10 overflow-hidden pt-10">
      <div className="absolute inset-x-0 top-[-10rem] h-[32rem] bg-gradient-to-br from-[#f6f1ff] via-[#eef6ff] to-[#ffe8f2]" aria-hidden="true" />
      <div className="absolute left-[15%] top-[-6rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(116,148,255,0.35),rgba(116,148,255,0))] blur-[80px]" aria-hidden="true" />
      <div className="absolute right-[-8rem] top-[4rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,157,186,0.38),rgba(255,157,186,0))] blur-[90px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6 pb-24">
        <HeaderNav />

        <div className="mt-16 grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#6c7ba0] shadow-[0_20px_40px_-30px_rgba(71,98,255,0.9)]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#ff6d85]" />
              Product developer
            </div>
            <div className="space-y-4">
              <h1 className="font-heading text-5xl leading-[1.08] text-[#1e2a56] md:text-[64px] md:leading-[1.05]">
                Hello, I’m <span className="bg-gradient-to-r from-[#3253ff] via-[#5f63ff] to-[#ff6aa0] bg-clip-text text-transparent">Javid</span>
              </h1>
              <p className="max-w-xl text-base text-[#586487] md:text-lg">
                I build websites, mobile apps, Telegram bots, and automation so your product launches quickly, scales reliably, and keeps growing without friction.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm font-semibold sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#ff5151] px-8 py-3 text-white shadow-[0_25px_55px_-30px_rgba(255,81,81,0.95)] transition hover:bg-[#ff3434]"
              >
                Discuss the task
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-full bg-white/90 px-8 py-3 text-[#5b68a1] shadow-[0_20px_40px_-32px_rgba(48,68,255,0.85)] ring-1 ring-[#d7def2] transition hover:text-[#1e2a56]"
              >
                See portfolio
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#5a678f]">
              <div className="flex items-center gap-3 rounded-full border border-white/70 bg-white/90 px-4 py-2 shadow-[0_20px_45px_-30px_rgba(89,117,255,0.55)]">
                <div className="h-10 w-10 rounded-full border-2 border-[#ffd8e6] bg-[#ffeef4] shadow-inner shadow-white/50" />
                <div>
                  <p className="font-heading text-sm text-[#1e2a56]">Javid Jafarov</p>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[#8995b8]">Replies in 1-2 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#7a86ac]">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-semibold text-emerald-600">OK</span>
                Support until launch
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative h-[520px] w-[360px] max-w-full rounded-[3.75rem] border border-white/70 bg-gradient-to-br from-[#ecf1ff] via-[#f8f2ff] to-[#ffe4f1] shadow-[0_65px_140px_-70px_rgba(56,86,255,0.75)]">
              <div className="absolute inset-4 rounded-[3.25rem] border border-white/60 bg-white/40 backdrop-blur" />
              <div className="absolute inset-0 rounded-[3.75rem]" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.45)" }} />
              <div className="absolute bottom-0 left-1/2 w-[330px] -translate-x-1/2 translate-y-[12%]">
                <Image
                  src={HERO_IMAGE}
                  alt="Portrait of Javid"
                  width={360}
                  height={460}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
              <div className="absolute left-[-3.5rem] top-[18%] hidden w-40 rounded-3xl border border-white/70 bg-white/90 p-4 text-left shadow-[0_25px_55px_-35px_rgba(64,93,255,0.75)] sm:block">
                <p className="font-heading text-sm text-[#1e2a56]">Launch-ready MVPs</p>
                <p className="mt-1 text-[11px] text-[#6c7aa0]">From prototype to production in weeks.</p>
              </div>
              <div className="absolute right-[-3rem] bottom-[18%] hidden w-36 rounded-3xl border border-white/70 bg-white/90 p-4 text-left shadow-[0_25px_55px_-35px_rgba(255,107,144,0.7)] sm:block">
                <p className="font-heading text-sm text-[#1e2a56]">100% transparent</p>
                <p className="mt-1 text-[11px] text-[#6c7aa0]">Daily demos, reports, and access.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {heroHighlights.map((highlight) => (
            <div
              key={highlight.title}
              className="rounded-[2rem] border border-white/70 bg-white/95 p-6 text-left shadow-[0_28px_60px_-42px_rgba(69,92,255,0.6)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_30px_70px_-36px_rgba(69,92,255,0.65)]"
            >
              <p className="font-heading text-base text-[#1e2a56]">{highlight.title}</p>
              <p className="mt-2 text-sm text-[#586487]">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

function IntroCard() {
  return (
    <section className="relative z-20 -mt-6 md:-mt-10">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative overflow-hidden rounded-[3rem] border border-white/70 bg-white/95 px-10 py-12 text-center shadow-[0_55px_130px_-70px_rgba(65,94,255,0.6)] backdrop-blur">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,236,0.7),rgba(255,215,236,0))]" aria-hidden="true" />
          <div className="absolute inset-x-6 bottom-0 h-1 rounded-full bg-gradient-to-r from-[#ff6f91] via-[#ff9bb5] to-[#ffd5e7] opacity-80" aria-hidden="true" />
          <div className="relative space-y-4">
            <p className="font-heading text-lg text-[#1e2a56] md:text-xl">
              Once I get the task, I dive in and deliver the result.
            </p>
            <p className="text-sm text-[#566387] md:text-base">
              Expect a clear structure, transparent communication, demos for every milestone, and a launch-ready product without micromanagement.
            </p>
            <p className="font-heading text-xs uppercase tracking-[0.32em] text-[#ff6f91]">
              Rate — 30 USD/hour or a fixed price by agreement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="what-i-do" className="relative z-10 mt-28">
      <div className="absolute inset-x-0 top-8 mx-auto h-[32rem] max-w-6xl rounded-[3.5rem] bg-gradient-to-br from-[#eff2ff] via-[#f6f0ff] to-[#ffeef6] opacity-80 blur-[2px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-5xl px-6">
        <SectionTitle label="< WHAT I DO />" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-[1.85rem] border border-white/70 bg-white/95 p-7 shadow-[0_30px_70px_-45px_rgba(69,92,255,0.55)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_35px_85px_-45px_rgba(69,92,255,0.65)]"
            >
              <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-[radial-gradient(circle_at_center,rgba(126,151,255,0.25),rgba(126,151,255,0))] opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
              <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#eef2ff] via-white to-[#ffe9f2] text-xs font-semibold text-[#1e2a56] shadow-inner shadow-white/60">
                {service.icon}
              </div>
              <h3 className="relative mt-6 font-heading text-lg text-[#1e2a56]">{service.title}</h3>
              <p className="relative mt-2 text-sm text-[#586487]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyMeSection() {
  return (
    <section id="why-me" className="relative z-10 mt-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-[3.25rem] bg-gradient-to-br from-[#2544ff] via-[#3459ff] to-[#5d77ff] p-12 text-white shadow-[0_60px_120px_-70px_rgba(48,75,255,0.85)]">
          <SectionTitle label="// WHY ME" align="left" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {whyItems.map((item) => (
              <div key={item.title} className="rounded-3xl bg-white/12 p-6 shadow-lg shadow-black/10">
                <h3 className="font-heading text-lg text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/75">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center gap-4 text-sm font-semibold md:flex-row md:justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-[#2544ff] shadow-lg transition hover:bg-[#f1f3ff]"
            >
              Contact
            </a>
            <a
              href="mailto:javid.jafarov@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-8 py-3 text-white transition hover:bg-white/10"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section id="how-i-work" className="relative z-10 mt-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle label="< HOW I WORK />" />
        <div className="relative mt-12">
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-[52px] hidden h-px bg-[#d8def0] md:block" />
          <div className="grid gap-8 md:grid-cols-4">
            {workflowSteps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col items-center rounded-full bg-white/96 p-6 text-center shadow-lg shadow-[#d9def5]/55 backdrop-blur"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-white to-[#e9f0ff] shadow-inner shadow-[#cfd8ff]">
                  <span className="font-heading text-lg text-[#2544ff]">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-base text-[#1e2a56]">{step.title}</h3>
                <p className="mt-2 text-sm text-[#586487]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 flex justify-center">
          <AvailabilityCard />
        </div>
      </div>
    </section>
  );
}

function AvailabilityCard() {
  return (
    <div className="w-full max-w-md rounded-[2.5rem] border border-white/80 bg-white/96 p-9 text-center shadow-xl shadow-[#dbe1ff]/60 backdrop-blur">
      <div className="mx-auto h-24 w-24 rounded-full border border-[#ffe0ef] bg-gradient-to-br from-[#ffe6f2] via-[#fff5fb] to-[#ffddec] shadow-inner shadow-[#ffd5e8]/55" />
      <h3 className="mt-6 font-heading text-xl text-[#1e2a56]">Javid Jafarov</h3>
      <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold text-emerald-700">
        <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
        Available slot
      </div>
      <p className="mt-2 text-sm text-[#667390]">I reply within 1-2 hours</p>
      <button className="mt-6 w-full rounded-full bg-[#ff5151] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ffb5b5]/55 transition hover:bg-[#ff3535]">
        Contact
      </button>
    </div>
  );
}

function PortfolioSection({ activeProject, setActiveProject }) {
  const project = projects[activeProject];

  return (
    <section id="portfolio" className="relative z-10 mt-32">
      <div className="mx-auto max-w-6xl px-6 space-y-12">
        <SectionTitle label="< PORTFOLIO />" align="left" />
        <div className="rounded-[3rem] bg-[#f3f4f9] p-12 shadow-[0_55px_110px_-70px_rgba(74,99,255,0.6)]">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_auto_1fr] lg:items-start">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="font-heading text-sm uppercase tracking-[0.28em] text-[#7d88a5]">
                  Project
                </p>
                <h3 className="font-heading text-3xl text-[#1e2a56]">Project: {project.name}</h3>
                <p className="text-sm text-[#5a6684]">{project.type}</p>
              </div>
              <div>
                <h4 className="font-heading text-base text-[#1e2a56]">Task</h4>
                <ul className="mt-4 space-y-3 text-sm text-[#4f5c7b]">
                  {project.tasks.map((task) => (
                    <li
                      key={task}
                      className="flex items-start gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-sm shadow-[#cfd6f2]/50"
                    >
                      <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#4fd1a1] text-[11px] font-semibold text-white">
                        OK
                      </span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-[2.75rem] bg-gradient-to-br from-white via-[#f5f7ff] to-[#ffeaf2] blur-2xl" />
                <div className="relative h-[430px] w-[210px] rounded-[2.75rem] border border-[#d7dcee] bg-white shadow-[0_50px_90px_-65px_rgba(0,0,0,0.45)]">
                  <div className="mx-auto mt-3 h-1.5 w-11 rounded-full bg-[#cbd0df]" />
                  <div className="relative mx-auto mt-4 h-[342px] w-[174px] overflow-hidden rounded-[2rem] bg-[#f0f4ff] shadow-inner shadow-[#d2d8f2]">
                    <Image
                      src={PHONE_IMAGE}
                      alt="Project mobile interface"
                      fill
                      sizes="174px"
                      className="object-contain"
                      priority
                    />
                  </div>
                  <div className="mx-auto mt-4 mb-3 h-1.5 w-16 rounded-full bg-[#cbd0df]" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-heading text-base text-[#1e2a56]">Achieved results</h4>
              <ul className="space-y-3 text-sm text-[#4f5c7b]">
                {project.results.map((result) => (
                  <li key={result} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-2 w-2 rounded-full bg-[#ff6d85]" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-3xl bg-slate-900/85 px-6 py-5 text-sm text-white shadow-lg">
                <p>"{project.quote}"</p>
                <p className="mt-3 text-xs text-white/70">{project.quoteAuthor}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={() =>
              setActiveProject((current) => (current - 1 + projects.length) % projects.length)
            }
            className="rounded-full border border-[#ffb4c4] px-6 py-2 text-sm font-semibold text-[#ff6f91] transition hover:bg-[#ff6f91] hover:text-white"
          >
            &lt; Prev
          </button>
          <button
            onClick={() => setActiveProject((current) => (current + 1) % projects.length)}
            className="rounded-full border border-[#ffb4c4] px-6 py-2 text-sm font-semibold text-[#ff6f91] transition hover:bg-[#ff6f91] hover:text-white"
          >
            Next &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const total = testimonials.length;

  const orderedTestimonials = useMemo(() => {
    const indices = [
      (activeIndex - 1 + total) % total,
      activeIndex,
      (activeIndex + 1) % total,
    ];
    return indices.map((index) => ({
      ...testimonials[index],
      index,
      isActive: index === activeIndex,
    }));
  }, [activeIndex, total]);

  return (
    <section id="testimonials" className="relative z-10 mt-32">
      <div className="mx-auto max-w-6xl px-6 space-y-10">
        <SectionTitle label="< WHAT CLIENTS SAY />" align="left" />
        <div className="rounded-[3rem] border border-white/80 bg-white/97 p-12 shadow-xl shadow-[#d9def5]/60">
          <div className="rounded-[2.5rem] bg-gradient-to-r from-[#3855ff] via-[#4864ff] to-[#7281ff] p-10 text-white shadow-[0_50px_110px_-80px_rgba(56,85,255,0.9)]">
            <div className="grid gap-6 md:grid-cols-3">
              {orderedTestimonials.map((item) => (
                <div
                  key={item.index}
                  className={`flex h-full flex-col justify-between rounded-3xl border border-white/20 p-6 shadow-lg shadow-black/20 transition ${
                    item.isActive ? "md:translate-y-0" : "md:-translate-y-4 md:opacity-80"
                  }`}
                  style={{ background: item.gradient }}
                >
                  <div>
                    <span className="font-heading text-4xl leading-none text-white/80">"</span>
                    <p className="mt-3 text-sm leading-6 text-white/90">{item.quote}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="h-11 w-11 rounded-full bg-white/20 backdrop-blur" />
                    <div>
                      <p className="font-heading text-sm text-white">{item.client}</p>
                      <p className="text-xs text-white/70">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={() => setActiveIndex((current) => (current - 1 + total) % total)}
                className="rounded-full border border-[#ffcad4] bg-white/10 px-6 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-[#3855ff]"
              >
                &lt; Prev
              </button>
              <button
                onClick={() => setActiveIndex((current) => (current + 1) % total)}
                className="rounded-full border border-[#ffcad4] bg-white/10 px-6 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-[#3855ff]"
              >
                Next &gt;
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10 text-left text-[#586487]">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-[#edf1ff]" />
              <div>
                <p className="font-heading text-sm text-[#1e2a56]">{partner.name}</p>
                <p className="text-xs text-[#6c7aa0]">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="relative z-10 mt-32" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-6xl px-6 space-y-12" id="contact">
        <SectionTitle label="< PRICING />" align="left" />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[2.5rem] border border-white/80 bg-white/97 p-8 shadow-xl shadow-[#d7dcf7]/60">
            <p className="font-heading text-sm uppercase tracking-[0.4em] text-[#7d88a7]" id="pricing-title">
              Pricing
            </p>
            <p className="mt-6 font-heading text-4xl text-[#2647ff]">30 USD/hour</p>
            <p className="mt-2 text-sm text-[#586487]">
              Up to 10 hours - <span className="font-semibold">40 USD/hour</span>
            </p>
            <div className="mt-6 space-y-4 text-sm text-[#586487]">
              <div className="flex gap-3">
                <span className="text-xs font-semibold text-[#2647ff]">OK</span>
                <p>A fixed price is possible for a specific task.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-xs font-semibold text-[#2647ff]">GO</span>
                <p>MVP from 300 USD depending on the scale.</p>
              </div>
            </div>
          </div>
          <form className="flex flex-col gap-4 rounded-[2.5rem] border border-white/80 bg-[#f2f3f7] p-8 shadow-xl shadow-[#d1d6f1]/60">
            <p className="font-heading text-base text-[#1e2a56]">Get an estimate in 10 minutes</p>
            <input
              type="text"
              placeholder="Your Telegram or Email"
              className="w-full rounded-xl border border-[#d7ddf0] bg-white px-4 py-3 text-sm text-[#1e2a56] outline-none transition focus:border-[#2647ff] focus:ring-2 focus:ring-[#2647ff]/20"
            />
            <textarea
              placeholder="Brief task description"
              maxLength={500}
              rows={5}
              className="w-full rounded-xl border border-[#d7ddf0] bg-white px-4 py-3 text-sm text-[#1e2a56] outline-none transition focus:border-[#2647ff] focus:ring-2 focus:ring-[#2647ff]/20"
            />
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#ff5151] px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#ff3434]"
            >
              Send the task
            </button>
            <div className="flex items-center gap-2 text-xs text-[#586487]">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-semibold text-emerald-600">
                OK
              </span>
              I reply within 1-2 hours
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 mt-32 bg-[#2647ff] py-20 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="flex flex-wrap items-center gap-5 text-[10px] font-semibold uppercase tracking-[0.4em] text-white/70 md:text-xs">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
        <hr className="border-white/20" />
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
            <div className="h-16 w-16 rounded-full bg-white/20" />
            <div>
              <p className="font-heading text-lg">Javid Jafarov</p>
              <div className="mt-2 flex flex-wrap gap-4 text-sm text-white/80">
                <a href="https://t.me/flutter_javid_dev" className="hover:text-white">
                  @flutter_javid_dev
                </a>
                <a href="mailto:javid.jafarov@gmail.com" className="hover:text-white">
                  javid.jafarov@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-sm font-semibold">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-[#2647ff] shadow-lg transition hover:bg-[#f1f3ff]"
            >
              Contact
            </a>
            <a
              href="mailto:javid.jafarov@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-8 py-3 text-white transition hover:bg-white/10"
            >
              Email
            </a>
          </div>
        </div>
        <p className="text-xs text-white/70">
          Payment by contract is possible, secure transaction, USDT.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <div className="relative overflow-hidden pb-20">
      <BlurField
        gradient="radial-gradient(circle at center, rgba(255,186,206,0.45), rgba(255,186,206,0))"
        className="-left-40 top-[-10rem] h-[32rem] w-[32rem]"
      />
      <BlurField
        gradient="radial-gradient(circle at center, rgba(158,202,255,0.42), rgba(158,202,255,0))"
        className="right-[-10rem] top-[-6rem] h-[30rem] w-[30rem]"
      />
      <BlurField
        gradient="radial-gradient(circle at center, rgba(255,214,153,0.38), rgba(255,214,153,0))"
        className="-left-32 top-[52rem] h-[26rem] w-[26rem]"
      />
      <BlurField
        gradient="radial-gradient(circle at center, rgba(196,170,255,0.32), rgba(196,170,255,0))"
        className="right-[-14rem] top-[112rem] h-[30rem] w-[30rem]"
      />
      <BlurField
        gradient="radial-gradient(circle at center, rgba(145,192,255,0.32), rgba(145,192,255,0))"
        className="left-1/2 top-[172rem] h-[30rem] w-[30rem] -translate-x-1/2"
      />

      <HeroSection />
      <IntroCard />
      <ServicesSection />
      <WhyMeSection />
      <WorkflowSection />
      <PortfolioSection activeProject={activeProject} setActiveProject={setActiveProject} />
      <TestimonialSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
