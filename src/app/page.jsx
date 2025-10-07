"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const HERO_IMAGE = "";
const PHONE_IMAGE = "/images/ya-apteka-phone.png";

const navLinks = [
  { label: "What I do", href: "#what-i-do" },
  { label: "Why me", href: "#why-me" },
  { label: "How I work", href: "#how-i-work" },
  { label: "Projects", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
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
      aria-hidden
      className={`pointer-events-none absolute blur-[160px] ${className}`}
      style={{ background: gradient }}
    />
  );
}

function HeaderNav() {
  return (
    <nav className="flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#9ea6ba] md:text-xs">
      <span>{"<"}</span>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="transition hover:text-[#ff5151]">
            {link.label}
          </a>
        ))}
      </div>
      <span>{"/>"}</span>
    </nav>
  );
}

function HeroSection() {
  return (
    <header className="relative z-10 mx-auto max-w-6xl px-6 pt-10">
      <HeaderNav />

      <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-end lg:gap-20">
        <div className="order-2 space-y-6 text-center lg:order-1 lg:text-left">
          <div className="space-y-4">
            <h1 className="font-heading text-5xl leading-tight text-[#1e2a56] md:text-[58px] md:leading-[1.05]">
              Hello, I am Javid
            </h1>
            <p className="text-base text-[#586487] md:text-lg">
              I build websites, apps, bots, and automation fast and to the point so your product launches and grows without friction.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-sm font-semibold">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#ff5151] px-8 py-3 text-white shadow-lg shadow-[#ffb8b8]/50 transition hover:bg-[#ff3434]"
            >
              Discuss on Telegram
            </a>
            <a
              href="mailto:javid.jafarov@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-[#6c7ba0] shadow-lg ring-1 ring-[#d7def2] transition hover:text-[#1e2a56]"
            >
              Write via email
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-[#6c7ba0] lg:justify-start">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-semibold text-emerald-600">
              OK
            </span>
            I reply within 1-2 hours
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto h-[470px] w-[340px] max-w-full rounded-[3.5rem] bg-gradient-to-br from-[#ecf1ff] via-[#f8f3ff] to-[#ffe7f2] shadow-[0_55px_120px_-60px_rgba(64,92,255,0.55)]">
            <div className="absolute inset-6 rounded-[3rem] bg-gradient-to-br from-white to-[#ffeef5] blur-2xl" />
            <div className="absolute inset-0 rounded-[3.5rem] border border-white/70" />
            <div className="absolute bottom-0 left-1/2 w-[320px] -translate-x-1/2 translate-y-[9%] max-w-full">
              <Image
                src={HERO_IMAGE}
                alt="Portrait of Javid"
                width={320}
                height={380}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function IntroCard() {
  return (
    <section className="relative z-10 mt-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-[2.5rem] border border-white/80 bg-white/96 p-9 text-center shadow-xl shadow-[#dfe3ff]/60 backdrop-blur">
          <p className="font-heading text-base text-[#1e2a56]">
            Once I get the task, I jump in and get it done.
          </p>
          <p className="mt-3 text-sm text-[#566387]">
            Experience, speed, and results. Expect transparent communication, regular demos, and confident delivery from the first hours.
          </p>
          <p className="mt-5 font-heading text-xs uppercase tracking-[0.3em] text-[#ff6f91]">
            Rate - 30 USD/hour or a fixed price by agreement
          </p>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="what-i-do" className="relative z-10 mt-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle label="< WHAT I DO />" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[1.75rem] border border-white/70 bg-white/96 p-6 shadow-lg shadow-[#d9def4]/55 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef2ff] text-xs font-semibold text-[#1e2a56]">
                {service.icon}
              </div>
              <h3 className="mt-6 font-heading text-lg text-[#1e2a56]">{service.title}</h3>
              <p className="mt-2 text-sm text-[#586487]">{service.description}</p>
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
