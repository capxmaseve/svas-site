"use client";

import React from "react";
import {
  ArrowRight,
  BarChart3,
  CircleDollarSign,
  FileText,
  Globe2,
  Handshake,
  Layers3,
  Lock,
  Mail,
  Menu,
  PackageCheck,
  Repeat2,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Brain,
  BriefcaseBusiness,
  Gem,
} from "lucide-react";

export default function Page() {
  const contactEmail = "roekty@gmail.com";
  const formLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSfbO6nuetMo9Hj-V39sEsQUXuuVLbBwi_-elaeJyHOmYSG5UQ/viewform";

  const navItems = [
    ["Market", "#market"],
    ["Technology", "#technology"],
    ["Business", "#business"],
    ["Materials", "#materials"],
    ["Roadmap", "#roadmap"],
    ["IR Access", "#contact"],
  ];

  const marketProblems = [
    {
      icon: Target,
      title: "Low social acceptance",
      text: "Existing refresh products often feel awkward, cheap, or unsuitable in professional and public environments.",
    },
    {
      icon: ShieldCheck,
      title: "Hygiene & trust gap",
      text: "Personal refresh products require confidence, discretion, and a cleaner usage image.",
    },
    {
      icon: Sparkles,
      title: "No premium object category",
      text: "Most products solve a function. Few are designed to be carried, kept, and shown as a premium personal object.",
    },
  ];

  const techItems = [
    {
      icon: Lock,
      title: "Leak-Control Refill Architecture",
      text: "A protected refill direction designed to reduce messy handling and support a cleaner ownership experience.",
    },
    {
      icon: Repeat2,
      title: "Separated Refresh Module Strategy",
      text: "A protected modular approach intended to support repeated use while limiting unwanted mixing and contamination.",
    },
    {
      icon: Layers3,
      title: "Premium Object Assembly",
      text: "A material and form strategy built around portability, discretion, and long-term ownership.",
    },
  ];

  const businessItems = [
    {
      icon: PackageCheck,
      label: "THE RAZOR",
      title: "Premium device",
      text: "A high-perception hardware object creates brand lock-in and positions KOMEL above low-cost disposable alternatives.",
    },
    {
      icon: Repeat2,
      label: "THE BLADE",
      title: "Refill ecosystem",
      text: "Dedicated consumables create a repeat-purchase path and allow future line extensions around user routines.",
    },
    {
      icon: CircleDollarSign,
      label: "THE MODEL",
      title: "Recurring revenue",
      text: "KOMEL is designed as a platform, not a one-time product. Hardware, refills, cores, and future collections can expand together.",
    },
  ];

  const roadmap = [
    {
      phase: "Phase 1",
      title: "Concept & Architecture",
      text: "Core product direction, premium form language, and protected mechanism strategy.",
      status: "Current",
    },
    {
      phase: "Phase 2",
      title: "Sourcing & IP Strategy",
      text: "Supplier review, sample planning, design protection, and patent strategy preparation.",
      status: "Preparing",
    },
    {
      phase: "Phase 3",
      title: "Prototype Validation",
      text: "MVP build, user testing, feedback analysis, and refinement of the product experience.",
      status: "Planned",
    },
    {
      phase: "Phase 4",
      title: "Premium Market Launch",
      text: "Selective launch through premium retail, B2B wellness channels, and strategic partners.",
      status: "Roadmap",
    },
  ];

  return (
    <main className="min-h-screen bg-[#040302] text-[#f4e6cf] antialiased">
      {/* HERO */}
      <section
        id="top"
        className="relative min-h-screen overflow-hidden border-b border-[#b88746]/25 bg-[#040302]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_34%,rgba(190,126,58,0.2),transparent_34%),radial-gradient(circle_at_28%_16%,rgba(255,214,156,0.08),transparent_28%),linear-gradient(120deg,#050403_0%,#0b0704_48%,#020100_100%)]" />

        {/* Hero image - desktop only */}
        <div className="absolute right-0 top-0 hidden h-full w-[56%] lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/45 to-transparent" />
          <img
            src="/komel-locked.png"
            alt="Protected KOMEL product detail"
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040302] via-[#040302]/50 to-black/30" />
          <div className="absolute inset-0 bg-black/22" />
        </div>

        {/* Header */}
        <header className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-6 py-8 lg:px-8">
          <a
            href="#top"
            className="text-4xl font-light tracking-[0.3em] text-[#d8aa68]"
          >
            SVAS
          </a>

          <nav className="hidden items-center gap-9 text-sm font-medium text-[#f3e6d0]/78 lg:flex">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="transition hover:text-[#d8aa68]"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href={formLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md border border-[#d8aa68]/70 px-5 py-3 text-sm font-semibold text-[#d8aa68] transition hover:bg-[#d8aa68] hover:text-black lg:inline-flex"
          >
            Request IR Access
          </a>

          <Menu className="h-7 w-7 text-[#f3e6d0]/80 lg:hidden" />
        </header>

        <div className="relative z-20 mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-20 lg:grid-cols-[0.55fr_0.45fr] lg:px-8 lg:pb-32 lg:pt-24">
          <div>
            <p className="text-lg font-medium tracking-[0.08em] text-[#d8aa68]">
              SVAS presents KOMEL
            </p>

            <h1 className="mt-10 max-w-4xl text-5xl font-medium leading-[1.04] tracking-[-0.075em] text-[#f4e6cf] md:text-7xl">
              A premium mental-tech
              <br />
              platform for cognitive refresh.
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-9 text-[#f3e6d0]/74">
              KOMEL is the first product by SVAS — designed to transform short
              daily reset moments into a scalable personal wellness platform.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-md bg-[#c89552] px-8 py-4 text-sm font-semibold text-black transition hover:bg-[#e0b574]"
              >
                Request NDA-Based IR Access <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#business"
                className="inline-flex items-center justify-center gap-3 rounded-md border border-[#d8aa68]/70 px-8 py-4 text-sm font-semibold text-[#d8aa68] transition hover:bg-[#d8aa68]/10"
              >
                View Business Model <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 max-w-xl border border-[#b88746]/38 bg-black/45 p-6">
              <div className="flex items-start gap-4">
                <Lock className="mt-1 h-6 w-6 shrink-0 text-[#d8aa68]" />
                <p className="text-sm leading-7 text-[#f3e6d0]/66">
                  This public page intentionally limits technical disclosure.
                  Detailed renderings, structure data, and financial planning
                  are shared only with verified partners under NDA.
                </p>
              </div>
            </div>
          </div>

          {/* Hero image - mobile only */}
          <div className="lg:hidden">
            <div className="mt-10 overflow-hidden border border-[#b88746]/50 bg-black/70 shadow-[0_0_50px_rgba(184,135,70,0.18)]">
              <div className="relative">
                <img
                  src="/komel-locked.png"
                  alt="Protected KOMEL product detail"
                  className="h-auto w-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
              </div>

              <div className="p-6 text-center">
                <Lock className="mx-auto h-9 w-9 text-[#d8aa68]" />
                <p className="mt-4 text-xl font-semibold text-[#d8aa68]">
                  Details Reserved
                </p>
                <p className="mt-3 text-sm leading-7 text-[#f3e6d0]/65">
                  Product structure and manufacturing details are shared only
                  with verified partners under NDA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET */}
      <section
        id="market"
        className="border-b border-[#b88746]/18 bg-[#090705] px-6 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr]">
            <div>
              <p className="text-sm font-semibold tracking-[0.28em] text-[#d8aa68]">
                PROBLEM & MARKET
              </p>
              <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.06em] text-[#f3e6d0]">
                The need is real.
                <br />
                The category is under-designed.
              </h2>
              <p className="mt-7 text-base leading-8 text-[#f3e6d0]/62">
                Global knowledge workers, students, drivers, and high-pressure
                professionals already seek small moments to reset. Yet existing
                options remain low-end, awkward, disposable, or socially
                uncomfortable.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {marketProblems.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="border border-[#b88746]/28 bg-black/30 p-7"
                >
                  <Icon className="h-9 w-9 text-[#d8aa68]" />
                  <h3 className="mt-8 text-xl font-semibold text-[#d8aa68]">
                    {title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#f3e6d0]/62">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <MarketStat
              icon={Brain}
              label="Target Direction"
              value="Cognitive Refresh"
              text="Positioned around focus, daily stress, and short mental reset routines."
            />
            <MarketStat
              icon={BriefcaseBusiness}
              label="Market Audience"
              value="Global Knowledge Workers"
              text="A scalable audience across work, study, driving, travel, and high-pressure daily routines."
            />
            <MarketStat
              icon={Gem}
              label="Category Gap"
              value="Premium Personal Object"
              text="Moving refresh from disposable utility to a refined object people want to keep."
            />
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section
        id="technology"
        className="border-b border-[#b88746]/18 bg-[#050403] px-6 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold tracking-[0.28em] text-[#d8aa68]">
                TECHNOLOGY TEASE
              </p>
              <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.06em]">
                Show the outcome.
                <br />
                Protect the mechanism.
              </h2>
            </div>

            <p className="max-w-3xl text-base leading-8 text-[#f3e6d0]/62">
              KOMEL communicates what matters to users and partners: a cleaner,
              more refined, repeatable reset experience. The internal
              engineering, exact structure, and manufacturing method remain
              proprietary and are not published on this website.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {techItems.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="border border-[#b88746]/28 bg-black/30 p-8"
              >
                <Icon className="h-10 w-10 text-[#d8aa68]" />
                <h3 className="mt-8 text-xl font-semibold text-[#d8aa68]">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#f3e6d0]/62">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 border border-[#b88746]/28 bg-black/24 p-7">
            <div className="grid gap-6 md:grid-cols-[0.28fr_0.72fr] md:items-center">
              <div className="flex items-center gap-4">
                <KeyLabel />
                <p className="text-xl font-semibold text-[#d8aa68]">
                  Proprietary Technology
                </p>
              </div>
              <p className="text-sm leading-7 text-[#f3e6d0]/62">
                KOMEL’s technical architecture is treated as a protected asset.
                Public messaging focuses on the market outcome, not the
                engineering method.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS MODEL */}
      <section
        id="business"
        className="border-b border-[#b88746]/18 bg-[#0b0805] px-6 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr]">
            <div>
              <p className="text-sm font-semibold tracking-[0.28em] text-[#d8aa68]">
                BUSINESS MODEL
              </p>
              <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.06em]">
                Built beyond
                <br />
                one-time hardware sales.
              </h2>
              <p className="mt-7 text-base leading-8 text-[#f3e6d0]/62">
                KOMEL is designed around a Razor & Blade strategy: premium
                hardware creates the relationship, while dedicated consumables
                and future collections can create recurring revenue.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {businessItems.map(({ icon: Icon, title, label, text }) => (
                <div
                  key={title}
                  className="border border-[#b88746]/30 bg-black/34 p-8"
                >
                  <p className="text-xs font-semibold tracking-[0.22em] text-[#d8aa68]/70">
                    {label}
                  </p>
                  <Icon className="mt-8 h-10 w-10 text-[#d8aa68]" />
                  <h3 className="mt-8 text-2xl font-semibold text-[#f3e6d0]">
                    {title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#f3e6d0]/62">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 border border-[#b88746]/28 bg-black/28 p-7">
            <div className="grid gap-6 md:grid-cols-[0.28fr_0.72fr] md:items-center">
              <div className="flex items-center gap-4">
                <TrendingUp className="h-9 w-9 text-[#d8aa68]" />
                <p className="text-xl font-semibold text-[#d8aa68]">
                  Platform Logic
                </p>
              </div>
              <p className="text-sm leading-7 text-[#f3e6d0]/62">
                The strategic goal is to turn a premium device into a long-term
                refresh ecosystem: hardware, refill, core, seasonal lineups,
                and partner channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section
        id="materials"
        className="border-b border-[#b88746]/18 bg-[#050403] px-6 py-20 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.28em] text-[#d8aa68]">
              MATERIAL DIRECTION
            </p>
            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.06em]">
              Premium should be felt
              <br />
              before it is explained.
            </h2>
            <p className="mt-7 text-base leading-8 text-[#f3e6d0]/62">
              The public page reveals the material mood, not the internal
              structure. KOMEL is positioned as a refined object with a premium
              physical presence.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <MaterialCard
              title="Anodized Aluminum"
              text="A calm, durable exterior language for premium daily carry."
              gradient="from-[#d6aa6a]/25 via-[#11100d] to-black"
            />
            <MaterialCard
              title="Natural Wood Base"
              text="A warmer object presence designed to feel less disposable."
              gradient="from-[#7b4c22]/35 via-[#11100d] to-black"
            />
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section
        id="roadmap"
        className="border-b border-[#b88746]/18 bg-[#050403] px-6 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold tracking-[0.28em] text-[#d8aa68]">
            ROADMAP
          </p>
          <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-[-0.06em]">
            From concept to protected execution.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {roadmap.map(({ phase, title, text, status }) => (
              <div
                key={phase}
                className="border border-[#b88746]/28 bg-black/28 p-7"
              >
                <p className="text-sm font-semibold text-[#d8aa68]">{phase}</p>
                <h3 className="mt-6 text-xl font-semibold text-[#f3e6d0]">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#f3e6d0]/60">
                  {text}
                </p>
                <div className="mt-8 inline-flex border border-[#b88746]/38 px-3 py-2 text-xs text-[#d8aa68]">
                  {status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#090705] px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.46fr_0.54fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.28em] text-[#d8aa68]">
              IR & PARTNERSHIP ACCESS
            </p>
            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.06em]">
              Request the opportunity,
              <br />
              not just the information.
            </h2>
            <p className="mt-7 text-base leading-8 text-[#f3e6d0]/62">
              This project is currently managing technical details privately for
              future IP and design protection. Verified institutions,
              manufacturers, and investors may request detailed renderings,
              roadmap materials, and financial planning under NDA.
            </p>
          </div>

          <div className="border border-[#b88746]/35 bg-black/34 p-8">
            <div className="grid gap-4">
              <a
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border border-[#b88746]/55 px-6 py-5 text-[#d8aa68] transition hover:bg-[#d8aa68]/10"
              >
                <span className="font-semibold">
                  Request NDA-Based IR Access
                </span>
                <ArrowRight className="h-5 w-5" />
              </a>

              <a
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border border-[#b88746]/55 px-6 py-5 text-[#d8aa68] transition hover:bg-[#d8aa68]/10"
              >
                <span className="font-semibold">
                  Manufacturing / Investment Inquiry
                </span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-8 flex items-start gap-4 border border-[#b88746]/25 bg-black/40 p-5">
              <Lock className="mt-1 h-5 w-5 shrink-0 text-[#d8aa68]" />
              <p className="text-sm leading-7 text-[#f3e6d0]/56">
                Product structure, material composition, manufacturing method,
                renderings, and financial plans are not published publicly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#b88746]/18 bg-[#030201] px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-[#f3e6d0]/45 md:flex-row md:items-center md:justify-between">
          <div className="text-3xl font-light tracking-[0.28em] text-[#d8aa68]">
            SVAS
          </div>

          <div className="flex flex-col gap-2 md:items-center">
            <p>© 2026 SVAS. All rights reserved.</p>
            <p>KOMEL is the first product by SVAS.</p>
          </div>

          <div className="flex flex-col gap-2 md:items-end">
            <p>Founder. Kim Taeyoung</p>
            <p className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" />
              {contactEmail}
            </p>
            <p>www.svas.kr</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function MarketStat({ icon: Icon, label, value, text }) {
  return (
    <div className="border border-[#b88746]/25 bg-black/24 p-6">
      <Icon className="h-8 w-8 text-[#d8aa68]" />
      <p className="mt-6 text-xs font-semibold tracking-[0.22em] text-[#d8aa68]/70">
        {label}
      </p>
      <p className="mt-5 text-2xl font-semibold text-[#f3e6d0]">{value}</p>
      <p className="mt-3 text-sm leading-7 text-[#f3e6d0]/55">{text}</p>
    </div>
  );
}

function MaterialCard({ title, text, gradient }) {
  return (
    <div
      className={`relative overflow-hidden border border-[#b88746]/30 bg-gradient-to-br ${gradient} p-8`}
    >
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#d8aa68]/10 blur-2xl" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#d8aa68]/70 to-transparent" />
      <p className="text-2xl font-semibold text-[#f3e6d0]">{title}</p>
      <p className="mt-5 text-sm leading-7 text-[#f3e6d0]/60">{text}</p>
    </div>
  );
}

function KeyLabel() {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b88746]/45 bg-black/40">
      <Lock className="h-5 w-5 text-[#d8aa68]" />
    </div>
  );
}
