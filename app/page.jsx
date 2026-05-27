"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  Briefcase,
  Car,
  CheckCircle2,
  Coffee,
  EyeOff,
  Globe2,
  Heart,
  Mail,
  Menu,
  ShieldCheck,
  Snowflake,
  Target,
  Users,
  Wind,
  X,
  BookOpen,
} from "lucide-react";

export default function Page() {
  const contactEmail = "roekty@gmail.com";
  const formLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSfbO6nuetMo9Hj-V39sEsQUXuuVLbBwi_-elaeJyHOmYSG5UQ/viewform";

  const nav = [
    ["WHY NOW", "#why"],
    ["PROBLEM", "#problem"],
    ["DIRECTION", "#direction"],
    ["TARGET", "#target"],
    ["STAGE", "#stage"],
    ["SUPPORT", "#support"],
    ["CONTACT", "#contact"],
  ];

  const problems = [
    [Wind, "코에 직접 닿는\n사용 방식"],
    [Users, "타인 앞에서\n사용하기 부담스러운 이미지"],
    [Target, "저가형 제품처럼\n보이는 디자인"],
    [Coffee, "카페인과 흡연 외\n선택지 부족"],
  ];

  const targets = [
    [Car, "장시간 운전하는\n운전자"],
    [Briefcase, "집중 전환이 필요한\n직장인"],
    [BookOpen, "학습 중 리프레시가\n필요한 학생"],
    [Snowflake, "멘톨 쿨링감을\n선호하는 사용자"],
    [Users, "위생적인 개인 웰니스\n제품을 원하는 소비자"],
  ];

  const stages = [
    "브랜드 도메인 svas.kr 확보",
    "초기 랜딩페이지 구축",
    "제품 컨셉 이미지 정리",
    "MVP 후원 의향 등록 폼 구축",
    "창업지원 상담 신청 진행",
    "제조 및 시제품 제작 가능성 검토 중",
  ];

  return (
    <main className="min-h-screen bg-[#020914] text-white antialiased">
      <section id="top" className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_16%,rgba(37,99,235,0.36),transparent_34%),radial-gradient(circle_at_76%_36%,rgba(59,130,246,0.22),transparent_32%),linear-gradient(180deg,#020914,#04111f_65%,#020914)]" />
        <div className="absolute right-[8%] top-[18%] hidden h-[360px] w-[150px] rotate-[-3deg] rounded-[4rem] bg-black/90 shadow-[0_0_90px_rgba(59,130,246,0.65)] blur-[0.2px] md:block" />
        <div className="absolute right-[7%] top-[22%] hidden h-[310px] w-[120px] rotate-[-3deg] rounded-[4rem] bg-gradient-to-b from-white/10 via-black to-black opacity-45 md:block" />
        <div className="absolute right-[4%] top-[38%] hidden h-[110px] w-[110px] rounded-full border border-blue-300/20 opacity-35 md:block" />
        <div className="absolute right-[10%] top-[25%] hidden h-[220px] w-[430px] rounded-full bg-blue-500/15 blur-3xl md:block" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#020914] to-transparent" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-8">
          <a href="#top" className="text-xl font-semibold tracking-[0.2em]">
            SVAS <span className="text-blue-400">/ KOMEL</span>
          </a>

          <nav className="hidden items-center gap-8 text-xs font-semibold tracking-[0.16em] text-white/72 lg:flex">
            {nav.map(([label, href]) => (
              <a key={label} href={href} className="hover:text-blue-300">
                {label}
              </a>
            ))}
          </nav>

          <a
            href={`mailto:${contactEmail}?subject=SVAS KOMEL 투자·제조 협업 문의`}
            className="hidden rounded-lg border border-blue-400/45 px-4 py-2 text-xs font-semibold text-blue-100 hover:bg-blue-400/10 lg:block"
          >
            INVESTOR & PARTNER
          </a>

          <Menu className="h-7 w-7 text-white/80 lg:hidden" />
        </header>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-16 lg:grid-cols-[0.62fr_0.38fr] lg:px-8 lg:pb-24 lg:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold tracking-[0.24em] text-blue-400">
              01&nbsp;&nbsp; HERO
            </p>

            <h1 className="mt-7 text-5xl font-semibold leading-[1.08] tracking-[-0.05em] md:text-7xl">
              A New Way
              <br />
              to Refresh.
              <br />
              <span className="text-blue-500">Without Touching</span>
              <br />
              <span className="text-blue-500">Your Nose.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-white/72">
              SVAS/KOMEL is an early-stage project preparing a hygienic and
              sensory non-contact refresh wellness product.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-4 text-sm font-semibold shadow-[0_0_40px_rgba(37,99,235,0.38)] transition hover:bg-blue-500"
              >
                Register as Early Supporter <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={`mailto:${contactEmail}?subject=SVAS KOMEL 투자·제조 협업 문의`}
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/18 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              >
                Investor & Manufacturing Inquiry{" "}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <p className="mt-8 max-w-xl text-xs leading-6 text-white/42">
              This image is an initial concept visualization. Final product
              design may change during the MVP development process. Product
              structure and manufacturing details are protected and not publicly
              disclosed.
            </p>
          </motion.div>

          <div className="relative min-h-[360px] lg:min-h-[520px]">
            <div className="absolute left-1/2 top-10 h-[360px] w-[145px] -translate-x-1/2 rounded-[4rem] bg-black shadow-[0_0_90px_rgba(59,130,246,0.55)]" />
            <div className="absolute left-1/2 top-12 h-[320px] w-[115px] -translate-x-1/2 rounded-[4rem] bg-gradient-to-b from-white/8 via-black to-black opacity-40" />
            <div className="absolute left-1/2 top-[280px] h-[86px] w-[86px] -translate-x-1/2 rounded-full border border-blue-400/20" />
            <div className="absolute bottom-4 left-1/2 h-28 w-72 -translate-x-1/2 rounded-full bg-blue-600/18 blur-3xl" />
          </div>
        </div>
      </section>

      <Section id="why" number="01" eyebrow="WHY NOW" title="왜 지금인가">
        <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr]">
          <IconOrb icon={Wind} />
          <p className="text-lg leading-9 text-white/68">
            현대인은 집중 전환과 기분 환기를 위해 카페인, 흡연, 향
            제품에 의존하고 있습니다. 하지만 위생적이고 자연스럽게 사용할
            수 있는 개인 리프레시 제품은 부족합니다.
          </p>
        </div>
      </Section>

      <Section
        id="problem"
        number="02"
        eyebrow="PROBLEM"
        title="기존 리프레시 제품의 문제"
      >
        <div className="grid gap-4 md:grid-cols-4">
          {problems.map(([Icon, text]) => (
            <div
              key={text}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 text-center"
            >
              <Icon className="mx-auto h-9 w-9 text-blue-400" />
              <p className="mt-5 whitespace-pre-line text-sm leading-7 text-white/72">
                {text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="direction" number="03" eyebrow="DIRECTION" title="SVAS의 방향">
        <div className="grid gap-10 lg:grid-cols-[0.5fr_0.5fr] lg:items-center">
          <p className="text-lg leading-9 text-white/68">
            SVAS는 코에 직접 닿지 않는 비접촉 사용 경험으로 개인 리프레시
            루틴을 설계합니다. 제품 구조, 성분 배합, 제조 방식 등 세부
            내용은 보호를 위해 공개하지 않으며, 협업 논의 단계에서 별도
            공유합니다.
          </p>

          <div className="relative h-48 overflow-hidden rounded-3xl border border-blue-400/10 bg-blue-500/[0.03]">
            <div className="absolute left-1/2 top-1/2 h-20 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/45 shadow-[0_0_45px_rgba(59,130,246,0.35)]" />
            <div className="absolute left-1/2 top-1/2 h-32 w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/25" />
          </div>
        </div>
      </Section>

      <Section id="target" number="04" eyebrow="TARGET" title="주요 타깃">
        <div className="grid gap-5 md:grid-cols-5">
          {targets.map(([Icon, text]) => (
            <div key={text} className="text-center">
              <Icon className="mx-auto h-9 w-9 text-blue-400" />
              <p className="mt-5 whitespace-pre-line text-sm leading-7 text-white/70">
                {text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="stage" number="05" eyebrow="CURRENT STAGE" title="현재 준비된 것">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stages.map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm text-white/70">
              <CheckCircle2 className="h-5 w-5 text-blue-400" />
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="support"
        number="06"
        eyebrow="MVP SUPPORT"
        title="MVP 제작 후원 의향 등록"
      >
        <div className="grid gap-10 lg:grid-cols-[0.6fr_0.4fr] lg:items-center">
          <p className="text-lg leading-9 text-white/68">
            SVAS/KOMEL은 현재 제품 완성 전 단계에서 MVP 제작을 준비하고
            있습니다. 초기 서포터는 정식 후원/펀딩 오픈 전 프로젝트 소식과
            테스트 참여 기회를 우선 안내받을 수 있습니다. 현재 등록은 결제나
            후원금 수령이 아닌, MVP 제작을 위한 후원 의향 확인 단계입니다.
          </p>

          <a
            href={formLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-8 py-5 text-sm font-semibold shadow-[0_0_40px_rgba(37,99,235,0.32)] hover:bg-blue-500"
          >
            초기 서포터 등록하기 <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Section>

      <section id="contact" className="px-6 py-8 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/[0.025] p-8">
          <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold tracking-[0.24em] text-blue-400">
                07&nbsp;&nbsp; CONTACT
              </p>
              <h2 className="mt-5 text-3xl font-semibold">투자·제조 협업 문의</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
              <p className="text-sm leading-7 text-white/62">
                투자·제조·유통 협업자는 이메일을 통해 문의해 주세요. 제품
                구조, 제조 방식, 세부 자료는 공개 사이트에 노출하지 않으며,
                협업 논의 단계에서 별도 공유합니다.
              </p>

              <a
                href={`mailto:${contactEmail}?subject=SVAS KOMEL 투자·제조 협업 문의`}
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/16 px-6 py-4 text-sm font-semibold hover:bg-white/10"
              >
                투자·제조 협업 문의 <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 pb-10 pt-4 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-white/10 pt-8 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p className="font-semibold tracking-[0.2em]">SVAS / KOMEL</p>
          <div className="flex flex-wrap gap-6">
            <span>Founder. Kim Taeyoung</span>
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" />
              {contactEmail}
            </span>
            <span className="inline-flex items-center gap-2">
              <Globe2 className="h-4 w-4" />
              svas.kr
            </span>
          </div>
          <p>© 2024 SVAS / KOMEL.</p>
        </div>
      </footer>
    </main>
  );
}

function Section({ id, number, eyebrow, title, children }) {
  return (
    <section id={id} className="px-6 py-3 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/[0.025] p-8 shadow-[0_0_80px_rgba(0,0,0,0.18)] md:p-10">
        <div className="mb-7 flex items-start gap-8">
          <div className="min-w-12 text-2xl font-semibold text-blue-400">{number}</div>
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-blue-400/80">
              {eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">{title}</h2>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

function IconOrb({ icon: Icon }) {
  return (
    <div className="flex h-28 w-28 items-center justify-center rounded-full border border-blue-400/35 bg-blue-500/[0.06] text-blue-400 shadow-[0_0_45px_rgba(59,130,246,0.22)]">
      <Icon className="h-10 w-10" />
    </div>
  );
}
