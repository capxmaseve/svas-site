"use client";

import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Lock,
  Mail,
  Menu,
  MessageCircle,
  RefreshCw,
  Sparkles,
  User,
  Wind,
  Leaf,
  Briefcase,
  BookOpen,
  CloudSun,
  Footprints,
  FlaskConical,
  Handshake,
  Lightbulb,
} from "lucide-react";

export default function Page() {
  const contactEmail = "roekty@gmail.com";
  const formLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSfbO6nuetMo9Hj-V39sEsQUXuuVLbBwi_-elaeJyHOmYSG5UQ/viewform";

  const navItems = [
    ["About", "#about"],
    ["Why Now", "#why-now"],
    ["Direction", "#direction"],
    ["Stage", "#stage"],
    ["Contact", "#contact"],
  ];

  const values = [
    {
      icon: User,
      title: "Personal",
      text: "Designed around individual moments.",
    },
    {
      icon: Leaf,
      title: "Dry",
      text: "Exploring a clean dry refresh experience.",
    },
    {
      icon: RefreshCw,
      title: "Refillable",
      text: "Built around repeated use.",
    },
    {
      icon: Wind,
      title: "Portable",
      text: "Made for daily movement.",
    },
  ];

  const moments = [
    {
      icon: Briefcase,
      title: "Before work",
      text: "A small reset before focus begins.",
    },
    {
      icon: BookOpen,
      title: "During study",
      text: "A quiet moment to return to attention.",
    },
    {
      icon: CloudSun,
      title: "After stress",
      text: "A personal pause between pressure and recovery.",
    },
    {
      icon: Footprints,
      title: "Between routines",
      text: "A refined refresh during everyday movement.",
    },
  ];

  const stages = [
    {
      number: "01",
      icon: Lightbulb,
      title: "Idea validation",
      text: "Defining the problem and project direction.",
    },
    {
      number: "02",
      icon: Globe2,
      title: "Landing page operation",
      text: "Collecting early interest and feedback.",
    },
    {
      number: "03",
      icon: MessageCircle,
      title: "Early feedback collection",
      text: "Listening to users, partners, and makers.",
    },
    {
      number: "04",
      icon: FlaskConical,
      title: "Material & manufacturing research",
      text: "Reviewing possible production directions.",
    },
    {
      number: "05",
      icon: Handshake,
      title: "Partnership discussion",
      text: "Opening conversations with partners.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f4efe5] text-[#092119] antialiased">
      {/* HERO */}
      <section
        id="top"
        className="relative overflow-hidden bg-[#071a14] text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(222,205,176,0.24),transparent_30%),radial-gradient(circle_at_85%_60%,rgba(71,102,82,0.35),transparent_34%),linear-gradient(135deg,#06130f_0%,#0b2119_48%,#050b09_100%)]" />
        <div className="absolute right-[-8%] top-0 hidden h-[620px] w-[620px] rounded-full bg-[#d9c7a3]/10 blur-3xl lg:block" />
        <div className="absolute right-[11%] top-[145px] hidden h-[380px] w-[170px] rounded-[5rem] bg-black/80 shadow-[0_0_90px_rgba(216,199,163,0.22)] lg:block" />
        <div className="absolute right-[13%] top-[165px] hidden h-[335px] w-[130px] rounded-[5rem] bg-gradient-to-b from-white/10 via-black/80 to-black/95 opacity-70 lg:block" />
        <div className="absolute right-[7%] top-[160px] hidden h-[300px] w-[420px] rounded-full bg-[#c9b487]/10 blur-3xl lg:block" />
        <div className="absolute right-[2%] top-[80px] hidden h-[420px] w-[420px] rounded-full border border-white/5 opacity-40 lg:block" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-8">
          <a href="#top" className="leading-none">
            <div className="text-3xl font-light tracking-[0.22em] text-white">
              SVAS
            </div>
            <div className="mt-1 text-xs font-semibold tracking-[0.35em] text-white/70">
              KOMEL
            </div>
          </a>

          <nav className="hidden items-center gap-9 text-sm font-medium text-white/76 lg:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-white">
                {label}
              </a>
            ))}
          </nav>

          <a
            href={formLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-[#eadcc4] px-6 py-3 text-sm font-semibold text-[#092119] transition hover:bg-white lg:inline-flex"
          >
            Feedback / Partnership
          </a>

          <Menu className="h-7 w-7 text-white/80 lg:hidden" />
        </header>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-14 lg:grid-cols-[0.58fr_0.42fr] lg:px-8 lg:pb-28 lg:pt-20">
          <div>
            <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-[#eadcc4]">
              EARLY-STAGE PROJECT
            </div>

            <h1 className="mt-8 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] md:text-7xl">
              A new personal
              <br />
              refresh experience.
            </h1>

            <p className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-[#cbbf9f] md:text-4xl">
              Dry. Refillable. Yours.
            </p>

            <p className="mt-8 max-w-xl text-lg leading-9 text-white/78">
              SVAS / KOMEL is an early-stage personal refresh project from
              Korea, exploring a new scent-based daily refresh experience.
            </p>

            <div className="mt-8 inline-flex max-w-md items-start gap-4 rounded-2xl border border-white/16 bg-black/20 p-5 text-white/80">
              <Lock className="mt-1 h-5 w-5 shrink-0 text-[#eadcc4]" />
              <p className="text-sm leading-7">
                Product structure, material composition, and manufacturing
                methods are protected at this stage.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#eadcc4] px-7 py-4 text-sm font-semibold text-[#092119] transition hover:bg-white"
              >
                Share Feedback <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Partnership Inquiry <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative hidden min-h-[480px] lg:block">
            <div className="absolute left-1/2 top-[44px] h-[390px] w-[175px] -translate-x-1/2 rounded-[5rem] bg-black/80 shadow-[0_0_90px_rgba(234,220,196,0.24)]" />
            <div className="absolute left-1/2 top-[64px] h-[340px] w-[130px] -translate-x-1/2 rounded-[5rem] bg-gradient-to-b from-white/10 via-black/85 to-black opacity-75" />
            <div className="absolute left-1/2 top-[278px] h-[70px] w-[120px] -translate-x-1/2 rounded-full border border-white/5 opacity-70" />
            <div className="absolute bottom-8 left-1/2 h-28 w-80 -translate-x-1/2 rounded-full bg-black/50 blur-3xl" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-[#f7f2ea] px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-[#55705f]">
              ABOUT
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              About SVAS / KOMEL
            </h2>
            <p className="mt-6 text-base leading-8 text-[#27352f]">
              SVAS / KOMEL is an early-stage personal refresh project built
              around small moments of daily reset.
            </p>
            <p className="mt-4 text-base leading-8 text-[#27352f]">
              We are exploring a new scent-based experience focused on personal
              use, portability, and repeated use.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-3xl border border-[#d8d0c3] bg-white/55 p-6"
              >
                <Icon className="h-8 w-8 text-[#143d2f]" />
                <h3 className="mt-6 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5a665f]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY NOW */}
      <section id="why-now" className="bg-[#ede8dd] px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr]">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-[#55705f]">
                WHY NOW
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                Small moments need better rituals.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#27352f]">
                People look for small moments to reset throughout the day.
              </p>
              <p className="mt-4 text-base leading-8 text-[#27352f]">
                Before work, during study, after stress, or between daily
                routines, we believe personal refresh can become more
                intentional and refined.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {moments.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-3xl border border-[#d5ccbc] bg-[#f7f2ea] p-6"
                >
                  <Icon className="h-8 w-8 text-[#143d2f]" />
                  <h3 className="mt-6 text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5a665f]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTION */}
      <section id="direction" className="bg-[#f7f2ea] px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 rounded-[2rem] border border-[#d8d0c3] bg-white/55 p-8 lg:grid-cols-[0.34fr_0.33fr_0.33fr] lg:items-center lg:p-10">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-[#55705f]">
                DIRECTION
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                Our direction is simple.
              </h2>
            </div>

            <div className="text-4xl font-semibold leading-tight tracking-[-0.05em] text-[#092119]">
              Personal.
              <br />
              Dry.
              <br />
              Refillable.
              <br />
              Portable.
            </div>

            <div className="flex items-start gap-5 rounded-3xl border border-[#d8d0c3] bg-[#f7f2ea] p-6">
              <Lock className="mt-1 h-6 w-6 shrink-0 text-[#143d2f]" />
              <p className="text-sm leading-7 text-[#27352f]">
                Detailed structure, material composition, and manufacturing
                methods are not publicly disclosed at this stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT STAGE */}
      <section id="stage" className="bg-[#06130f] px-6 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#cbbf9f]">
            CURRENT STAGE
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
            Building the project step by step.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-5">
            {stages.map(({ number, icon: Icon, title, text }) => (
              <div key={title} className="relative">
                <div className="rounded-3xl border border-white/12 bg-white/[0.04] p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eadcc4] text-sm font-bold text-[#092119]">
                      {number}
                    </span>
                    <Icon className="h-7 w-7 text-[#eadcc4]" />
                  </div>
                  <h3 className="mt-7 text-base font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/58">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-start gap-5 rounded-3xl border border-white/12 bg-white/[0.04] p-6">
            <Lock className="mt-1 h-6 w-6 shrink-0 text-[#eadcc4]" />
            <div className="grid gap-2 md:grid-cols-[0.42fr_0.58fr] md:items-center">
              <p className="font-semibold text-white">
                Product details are protected.
              </p>
              <p className="text-sm leading-7 text-white/62">
                SVAS / KOMEL is currently developing through idea validation,
                early feedback, and partnership discussions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#f4efe5] px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-[#0a241b] p-8 text-white lg:grid-cols-[0.45fr_0.55fr] lg:items-center lg:p-10">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-[#cbbf9f]">
              CONTACT
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.05em]">
              Your feedback drives the next step.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/68">
              We are currently collecting early feedback and partnership
              inquiries for SVAS / KOMEL.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <a
              href={formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl bg-[#eadcc4] p-7 text-[#092119] transition hover:bg-white"
            >
              <MessageCircle className="h-8 w-8" />
              <div className="mt-8 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">Share Feedback</h3>
                  <p className="mt-2 text-sm leading-6 text-[#3d4c45]">
                    Tell us your first impression.
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </div>
            </a>

            <a
              href={formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-white/18 bg-white/[0.04] p-7 text-white transition hover:bg-white/[0.08]"
            >
              <Handshake className="h-8 w-8 text-[#eadcc4]" />
              <div className="mt-8 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    Partnership Inquiry
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/62">
                    Manufacturing, investment, or collaboration.
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#06130f] px-6 py-10 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.25fr_0.35fr_0.4fr] md:items-center">
          <div>
            <div className="text-3xl font-light tracking-[0.22em]">SVAS</div>
            <div className="mt-1 text-xs font-semibold tracking-[0.35em] text-white/60">
              KOMEL
            </div>
          </div>

          <div className="text-sm leading-7 text-white/56">
            <p>Refresh your moment.</p>
            <p>In your own way.</p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-white/58 md:items-end">
            <p>Founder. Kim Taeyoung</p>
            <p>Based in Korea</p>
            <p className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" />
              {contactEmail}
            </p>
            <p>www.svas.kr</p>
            <p className="text-xs text-white/35">© 2026 SVAS / KOMEL.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
