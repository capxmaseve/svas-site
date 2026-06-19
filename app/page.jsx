"use client";

import React from "react";
import {
  ArrowRight,
  BarChart3,
  Box,
  Building2,
  CircleDollarSign,
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
} from "lucide-react";

export default function Page() {
  const contactEmail = "roekty@gmail.com";
  const formLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSfbO6nuetMo9Hj-V39sEsQUXuuVLbBwi_-elaeJyHOmYSG5UQ/viewform";

  const navItems = [
    ["시장", "#market"],
    ["차별성", "#moat"],
    ["수익 구조", "#business"],
    ["로드맵", "#roadmap"],
    ["IR 문의", "#contact"],
  ];

  const marketProblems = [
    {
      icon: Target,
      title: "낮은 사회적 수용성",
      text: "기존 개인 리프레시 제품은 공공장소나 업무 환경에서 사용 이미지가 제한적입니다.",
    },
    {
      icon: ShieldCheck,
      title: "위생과 신뢰의 문제",
      text: "반복 사용 제품일수록 위생성, 관리 방식, 사용 맥락에 대한 신뢰가 중요합니다.",
    },
    {
      icon: Sparkles,
      title: "저가 이미지의 한계",
      text: "기능은 존재하지만, 오래 소유하고 싶은 프리미엄 오브제로 해석되는 제품은 부족합니다.",
    },
  ];

  const moatItems = [
    {
      icon: Lock,
      title: "Protected Product Architecture",
      text: "제품의 핵심 구조와 세부 메커니즘은 공개하지 않으며, 협업 논의 단계에서 선별적으로 공유됩니다.",
    },
    {
      icon: Repeat2,
      title: "Repeat-Use Experience",
      text: "단발성 소비가 아닌, 반복 사용과 재구매 흐름을 전제로 한 제품 경험을 설계합니다.",
    },
    {
      icon: Layers3,
      title: "Premium Object Design",
      text: "휴대성과 소유감을 동시에 고려한 프리미엄 오브제 방향으로 개발하고 있습니다.",
    },
  ];

  const businessItems = [
    {
      icon: PackageCheck,
      title: "Device",
      label: "The Razor",
      text: "프리미엄 하드웨어를 통해 브랜드 인식과 제품 락인을 형성합니다.",
    },
    {
      icon: Repeat2,
      title: "Refill / Core",
      label: "The Blade",
      text: "전용 소모 구조를 기반으로 반복 구매와 장기 고객 관계를 설계합니다.",
    },
    {
      icon: CircleDollarSign,
      title: "Recurring Revenue",
      label: "The Model",
      text: "본체 판매 이후에도 리필·소모품·라인업 확장을 통해 지속 매출을 목표로 합니다.",
    },
  ];

  const roadmap = [
    {
      phase: "Phase 1",
      title: "Concept & Architecture",
      text: "제품 방향성, 사용 시나리오, 외형 설계 및 핵심 구조 검토",
      status: "현재 단계",
    },
    {
      phase: "Phase 2",
      title: "Sourcing & Protection",
      text: "소재·제조 파트너 검토, 샘플 제작, 권리 보호 전략 준비",
      status: "준비 중",
    },
    {
      phase: "Phase 3",
      title: "Prototype Validation",
      text: "목업·MVP 테스트, 초기 사용자 반응 수집, 개선 반복",
      status: "예정",
    },
    {
      phase: "Phase 4",
      title: "Premium Launch",
      text: "프리미엄 편집 채널, B2B 복지몰, 글로벌 니치 마켓 진입 검토",
      status: "로드맵",
    },
  ];

  return (
    <main className="min-h-screen bg-[#040302] text-[#f4e6cf] antialiased">
      {/* HERO */}
      <section
        id="top"
        className="relative min-h-screen overflow-hidden border-b border-[#b88746]/25 bg-[#040302]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_34%,rgba(190,126,58,0.22),transparent_34%),radial-gradient(circle_at_28%_16%,rgba(255,214,156,0.08),transparent_28%),linear-gradient(120deg,#050403_0%,#0b0704_48%,#020100_100%)]" />

        {/* Protected product visual */}
        <div className="absolute right-0 top-0 hidden h-full w-[58%] lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/50 to-transparent" />

          {/* Main body silhouette */}
          <div className="absolute right-[145px] top-[180px] h-[520px] w-[230px] rounded-[72px] bg-black/95 shadow-[0_0_90px_rgba(200,140,70,0.22)]" />
          <div className="absolute right-[174px] top-[220px] h-[435px] w-[170px] rounded-[64px] bg-gradient-to-b from-white/12 via-black/90 to-black opacity-55 blur-[1px]" />

          {/* Refill bottle silhouette */}
          <div className="absolute bottom-[120px] left-[190px] h-[255px] w-[86px] rounded-b-3xl rounded-t-xl bg-black/90 shadow-[0_0_60px_rgba(201,146,77,0.28)]" />
          <div className="absolute bottom-[296px] left-[216px] h-[72px] w-[34px] rounded-full border border-[#d7a55e]/35 bg-black/90" />
          <div className="absolute bottom-[142px] left-[201px] h-[76px] w-[64px] rounded-sm bg-[#946225]/70 blur-[0.5px]" />
          <div className="absolute bottom-[170px] left-[203px] text-[13px] tracking-[0.2em] text-[#e7c188]/55">
            KOMEL
          </div>

          {/* Ring shadow */}
          <div className="absolute bottom-[108px] right-[62px] h-[82px] w-[130px] rotate-[-12deg] rounded-full border-[10px] border-[#c08b4b]/45 blur-[0.4px]" />

          {/* Heavy blind overlay */}
          <div className="absolute right-[98px] top-[150px] h-[620px] w-[390px] bg-black/42 blur-3xl" />
          <div className="absolute right-[130px] top-[220px] h-[390px] w-[260px] bg-black/38 blur-xl" />

          {/* Clear lock card */}
          <div className="absolute right-[210px] top-[310px] z-20 w-[430px] border border-[#b88746]/65 bg-black/78 p-9 text-center shadow-[0_0_70px_rgba(0,0,0,0.72)] backdrop-blur-md">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#d5a261]/45 bg-black/45">
              <Lock className="h-10 w-10 text-[#d5a261]" />
            </div>
            <h3 className="mt-7 text-3xl font-semibold tracking-[-0.04em] text-[#d8aa68]">
              세부 정보 보호
            </h3>
            <p className="mt-3 text-sm tracking-[0.24em] text-[#d8aa68]/80">
              DETAILS RESERVED
            </p>
            <p className="mx-auto mt-6 max-w-xs text-base leading-8 text-[#efe2cd]/66">
              제품의 구체적인 구조와 제조 방식은 NDA 기반 협업 논의
              단계에서 선별 공개됩니다.
            </p>
          </div>
        </div>

        {/* Header */}
        <header className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-6 py-8 lg:px-8">
          <a
            href="#top"
            className="text-4xl font-light tracking-[0.3em] text-[#d8aa68]"
          >
            SVAS
          </a>

          <nav className="hidden items-center gap-10 text-sm font-medium text-[#f3e6d0]/78 lg:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-[#d8aa68]">
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
            IR 자료 요청
          </a>

          <Menu className="h-7 w-7 text-[#f3e6d0]/80 lg:hidden" />
        </header>

        <div className="relative z-20 mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-20 lg:grid-cols-[0.54fr_0.46fr] lg:px-8 lg:pb-32 lg:pt-24">
          <div>
            <p className="text-lg font-medium tracking-[0.06em] text-[#d8aa68]">
              SVAS가 선보이는 첫 번째 제품, KOMEL
            </p>

            <h1 className="mt-10 max-w-3xl text-5xl font-medium leading-[1.08] tracking-[-0.075em] text-[#f4e6cf] md:text-7xl">
              프리미엄 개인 리셋 시장의
              <br />
              다음 카테고리.
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-9 text-[#f3e6d0]/74">
              KOMEL은 일상 속 짧은 리셋 순간을 더 조용하고 세련되게
              만드는 SVAS의 첫 번째 프리미엄 리프레시 오브제입니다.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-md bg-[#c89552] px-8 py-4 text-sm font-semibold text-black transition hover:bg-[#e0b574]"
              >
                NDA 기반 IR 자료 요청 <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#business"
                className="inline-flex items-center justify-center gap-3 rounded-md border border-[#d8aa68]/70 px-8 py-4 text-sm font-semibold text-[#d8aa68] transition hover:bg-[#d8aa68]/10"
              >
                수익 구조 보기 <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 max-w-xl border border-[#b88746]/38 bg-black/35 p-6">
              <div className="flex items-start gap-4">
                <Lock className="mt-1 h-6 w-6 shrink-0 text-[#d8aa68]" />
                <p className="text-sm leading-7 text-[#f3e6d0]/66">
                  본 사이트는 기술 보안을 위해 일부 사양을 블라인드 처리하고
                  있습니다. 제품 상세 렌더링과 구조 자료는 공식 협업 논의
                  단계에서 별도 공유됩니다.
                </p>
              </div>
            </div>
          </div>

          <div className="min-h-[480px] lg:hidden">
            <div className="mt-10 border border-[#b88746]/50 bg-black/68 p-8 text-center">
              <Lock className="mx-auto h-12 w-12 text-[#d8aa68]" />
              <p className="mt-5 text-2xl font-semibold text-[#d8aa68]">
                세부 정보 보호
              </p>
              <p className="mt-4 text-sm leading-7 text-[#f3e6d0]/65">
                제품의 구체적인 구조와 제조 방식은 협업 논의 단계에서
                공개됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET */}
      <section id="market" className="border-b border-[#b88746]/18 bg-[#090705] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr]">
            <div>
              <p className="text-sm font-semibold tracking-[0.28em] text-[#d8aa68]">
                MARKET PROBLEM
              </p>
              <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.06em] text-[#f3e6d0]">
                리프레시는 필요하지만,
                <br />
                기존 방식은 세련되지 못했습니다.
              </h2>
              <p className="mt-7 text-base leading-8 text-[#f3e6d0]/62">
                SVAS는 스트레스 관리와 일상 리셋에 대한 수요가 커지는
                흐름 속에서, 더 위생적이고 조용하며 소유 가치가 있는
                개인 리프레시 카테고리를 준비합니다.
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
              label="Market Direction"
              value="Mental Wellness"
              text="스트레스 관리와 개인 웰니스 루틴 시장을 타깃으로 검토"
            />
            <MarketStat
              label="Positioning"
              value="Premium Object"
              text="저가 소모품이 아닌 소유하고 싶은 오브제형 제품 지향"
            />
            <MarketStat
              label="Validation"
              value="Early Stage"
              text="정량 데이터와 시장 반응은 현재 수집 및 검증 단계"
            />
          </div>
        </div>
      </section>

      {/* MOAT */}
      <section id="moat" className="border-b border-[#b88746]/18 bg-[#050403] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold tracking-[0.28em] text-[#d8aa68]">
                DIFFERENTIATION
              </p>
              <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.06em]">
                보호는 약점이 아니라,
                <br />
                독점적 우위의 시작입니다.
              </h2>
            </div>

            <p className="max-w-3xl text-base leading-8 text-[#f3e6d0]/62">
              KOMEL의 구체적인 구조는 공개하지 않습니다. 대신 어떤 문제를
              해결하려는지, 어떤 방향의 제품 경험을 만들고 있는지,
              그리고 왜 반복 가능한 비즈니스가 가능한지를 공개합니다.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {moatItems.map(({ icon: Icon, title, text }) => (
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
        </div>
      </section>

      {/* BUSINESS */}
      <section id="business" className="border-b border-[#b88746]/18 bg-[#0b0805] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr]">
            <div>
              <p className="text-sm font-semibold tracking-[0.28em] text-[#d8aa68]">
                BUSINESS MODEL
              </p>
              <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.06em]">
                본체 판매로 끝나지 않는
                <br />
                반복 매출 구조.
              </h2>
              <p className="mt-7 text-base leading-8 text-[#f3e6d0]/62">
                KOMEL은 단일 제품 판매가 아니라, 프리미엄 하드웨어와 전용
                소모 구조를 연결하는 Razor & Blade 전략을 지향합니다.
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
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="border-b border-[#b88746]/18 bg-[#050403] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold tracking-[0.28em] text-[#d8aa68]">
            ROADMAP
          </p>
          <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-[-0.06em]">
            아이디어를 넘어,
            <br />
            실행 로드맵으로 이동합니다.
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
              IR & PARTNERSHIP
            </p>
            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.06em]">
              단순 문의가 아닌,
              <br />
              다음 기회를 요청하세요.
            </h2>
            <p className="mt-7 text-base leading-8 text-[#f3e6d0]/62">
              본 사이트는 제품 보안을 위해 일부 사양을 블라인드 처리하고
              있습니다. NDA 체결이 가능한 공식 기관, 제조 파트너, 투자자에
              한해 제품 상세 렌더링과 IR 자료를 선별적으로 공유합니다.
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
                <span className="font-semibold">NDA 기반 IR 자료 요청</span>
                <ArrowRight className="h-5 w-5" />
              </a>

              <a
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border border-[#b88746]/55 px-6 py-5 text-[#d8aa68] transition hover:bg-[#d8aa68]/10"
              >
                <span className="font-semibold">제조·투자 파트너십 문의</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-8 flex items-start gap-4 border border-[#b88746]/25 bg-black/40 p-5">
              <Lock className="mt-1 h-5 w-5 shrink-0 text-[#d8aa68]" />
              <p className="text-sm leading-7 text-[#f3e6d0]/56">
                상세 구조, 소재, 제조 방식, 재무 계획은 공개 페이지에
                게시하지 않으며, 공식 협업 논의 단계에서 별도 공유됩니다.
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

function MarketStat({ label, value, text }) {
  return (
    <div className="border border-[#b88746]/25 bg-black/24 p-6">
      <p className="text-xs font-semibold tracking-[0.22em] text-[#d8aa68]/70">
        {label}
      </p>
      <p className="mt-5 text-2xl font-semibold text-[#f3e6d0]">{value}</p>
      <p className="mt-3 text-sm leading-7 text-[#f3e6d0]/55">{text}</p>
    </div>
  );
}
