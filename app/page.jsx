"use client";

import React from "react";
import {
  ArrowRight,
  Box,
  Building2,
  CheckCircle2,
  Globe2,
  Handshake,
  Lock,
  Mail,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function Page() {
  const contactEmail = "roekty@gmail.com";
  const formLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSfbO6nuetMo9Hj-V39sEsQUXuuVLbBwi_-elaeJyHOmYSG5UQ/viewform";

  const navItems = [
    ["브랜드", "#brand"],
    ["기술 철학", "#philosophy"],
    ["제품", "#product"],
    ["협업", "#contact"],
  ];

  const principles = [
    {
      icon: Sparkles,
      title: "브랜드 중심 오브제",
      text: "일상 속 가치를 높이는 미니멀 럭셔리 디자인",
    },
    {
      icon: Box,
      title: "보호된 제품 방향",
      text: "핵심 구조와 세부 메커니즘은 비공개로 관리",
    },
    {
      icon: ShieldCheck,
      title: "공개 범위 제한",
      text: "외형과 감도는 보여주되, 설계 정보는 보호",
    },
    {
      icon: CheckCircle2,
      title: "협업 기반 고도화",
      text: "피드백과 파트너십을 통해 제품 완성도 향상",
    },
  ];

  const stages = [
    ["01", "아이디어 검증"],
    ["02", "랜딩 페이지 운영"],
    ["03", "초기 피드백 수집"],
    ["04", "디자인 방향 연구"],
    ["05", "파트너십 논의"],
  ];

  return (
    <main className="min-h-screen bg-[#050403] text-[#f3e6d0] antialiased">
      {/* HERO */}
      <section
        id="top"
        className="relative min-h-screen overflow-hidden border-b border-[#b88746]/20 bg-[#050403]"
      >
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,rgba(196,140,75,0.22),transparent_30%),radial-gradient(circle_at_35%_18%,rgba(255,221,160,0.08),transparent_26%),linear-gradient(120deg,#050403_0%,#090704_48%,#020201_100%)]" />

        {/* Abstract protected product scene */}
        <div className="absolute right-[2%] top-[12%] hidden h-[620px] w-[720px] lg:block">
          {/* back dark object */}
          <div className="absolute right-[120px] top-[50px] h-[460px] w-[210px] rounded-[72px] bg-black/90 shadow-[0_0_80px_rgba(201,146,77,0.18)]" />
          <div className="absolute right-[145px] top-[86px] h-[390px] w-[152px] rounded-[64px] bg-gradient-to-b from-white/10 via-black/90 to-black opacity-55 blur-[1px]" />

          {/* small bottle */}
          <div className="absolute bottom-[55px] left-[130px] h-[250px] w-[82px] rounded-b-3xl rounded-t-xl bg-black/80 shadow-[0_0_55px_rgba(201,146,77,0.22)]" />
          <div className="absolute bottom-[230px] left-[154px] h-[72px] w-[34px] rounded-full bg-black/90 border border-[#d7a55e]/25" />
          <div className="absolute bottom-[70px] left-[142px] h-[70px] w-[58px] rounded-md bg-[#9b6b2b]/70 blur-[0.4px]" />
          <div className="absolute bottom-[94px] left-[152px] text-[13px] tracking-[0.18em] text-[#e7c188]/70">
            KOMEL
          </div>

          {/* ring silhouette */}
          <div className="absolute bottom-[45px] right-[70px] h-[86px] w-[126px] rotate-[-10deg] rounded-full border-[10px] border-[#c08b4b]/45 blur-[0.3px]" />

          {/* protected card */}
          <div className="absolute right-[170px] top-[205px] z-20 w-[430px] border border-[#b88746]/55 bg-black/72 p-9 text-center shadow-[0_0_70px_rgba(0,0,0,0.6)] backdrop-blur-md">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#d5a261]/40 bg-black/40">
              <Lock className="h-10 w-10 text-[#d5a261]" />
            </div>
            <h3 className="mt-7 text-3xl font-semibold tracking-[-0.04em] text-[#d8aa68]">
              내부 구조 보호 중
            </h3>
            <p className="mt-3 text-lg tracking-[0.12em] text-[#d8aa68]/80">
              PRODUCT DETAILS PROTECTED
            </p>
            <p className="mx-auto mt-7 max-w-xs text-base leading-8 text-[#efe2cd]/68">
              핵심 구조와 세부 메커니즘은 보호 원칙에 따라 공개하지
              않습니다.
            </p>
          </div>

          {/* dark cover overlay to hide details */}
          <div className="absolute inset-y-0 right-0 w-[70%] bg-gradient-to-l from-black via-black/40 to-transparent" />
          <div className="absolute right-[110px] top-[115px] h-[420px] w-[260px] bg-black/45 blur-2xl" />
        </div>

        {/* Header */}
        <header className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-6 py-8 lg:px-8">
          <a href="#top" className="text-4xl font-light tracking-[0.28em] text-[#d8aa68]">
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
            협업 문의
          </a>

          <Menu className="h-7 w-7 text-[#f3e6d0]/80 lg:hidden" />
        </header>

        {/* Hero content */}
        <div className="relative z-20 mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-20 lg:grid-cols-[0.52fr_0.48fr] lg:px-8 lg:pb-28 lg:pt-24">
          <div>
            <p className="text-lg font-medium tracking-[0.06em] text-[#d8aa68]">
              SVAS의 첫 제품, KOMEL
            </p>

            <h1 className="mt-10 text-[4.4rem] font-light leading-[0.95] tracking-[0.12em] text-[#d8aa68] md:text-[7.5rem]">
              KOMEL
            </h1>

            <h2 className="mt-10 max-w-2xl text-4xl font-medium leading-[1.35] tracking-[-0.06em] text-[#f3e6d0] md:text-5xl">
              직접 드러내지 않아도
              <br />
              느껴지는 리프레시 혁신
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-9 text-[#f3e6d0]/72">
              핵심 구조와 세부 메커니즘은 보호 중이며, 현재는 브랜드
              방향성과 기술 철학 중심으로 공개합니다.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#brand"
                className="inline-flex items-center justify-center gap-3 rounded-md bg-[#c89552] px-8 py-4 text-sm font-semibold text-black transition hover:bg-[#e0b574]"
              >
                브랜드 소개 보기 <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-md border border-[#d8aa68]/70 px-8 py-4 text-sm font-semibold text-[#d8aa68] transition hover:bg-[#d8aa68]/10"
              >
                협업 문의 <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-5 border-t border-[#b88746]/25 pt-8">
              <InfoMini icon={ShieldCheck} label="브랜드" value="SVAS" />
              <InfoMini icon={Lock} label="제품" value="KOMEL" />
              <InfoMini icon={Lock} label="공개 원칙" value="선별적 공개" />
            </div>
          </div>

          <div className="min-h-[480px] lg:hidden">
            <div className="mt-10 border border-[#b88746]/40 bg-black/60 p-8 text-center">
              <Lock className="mx-auto h-12 w-12 text-[#d8aa68]" />
              <p className="mt-5 text-2xl font-semibold text-[#d8aa68]">
                제품 세부 정보 보호 중
              </p>
              <p className="mt-4 text-sm leading-7 text-[#f3e6d0]/65">
                핵심 구조와 세부 메커니즘은 현재 공개하지 않습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="brand" className="border-b border-[#b88746]/18 bg-[#090705] px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.35fr_0.65fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.28em] text-[#d8aa68]">
              BRAND PHILOSOPHY
            </p>
            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.06em] text-[#f3e6d0]">
              SVAS는 기술과 감도의 균형으로,
              <br />
              숨겨진 가치를 완성합니다.
            </h2>
          </div>

          <p className="max-w-3xl text-lg leading-9 text-[#f3e6d0]/68">
            KOMEL은 SVAS가 선보이는 첫 제품입니다. 우리는 제품을 모두
            설명하기보다, 사용자가 느끼는 경험과 브랜드가 지향하는 태도를
            먼저 보여주고자 합니다. 구조와 제조 방식은 보호하고, 프로젝트의
            방향성은 신뢰감 있게 공개합니다.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section id="philosophy" className="bg-[#050403] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-4">
            {principles.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="border border-[#b88746]/25 bg-black/28 p-8"
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
      </section>

      {/* Product protected */}
      <section id="product" className="border-y border-[#b88746]/18 bg-[#0b0805] px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.28em] text-[#d8aa68]">
              PRODUCT
            </p>
            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.06em]">
              공개보다 중요한 것은
              <br />
              보호입니다.
            </h2>
            <p className="mt-7 text-lg leading-9 text-[#f3e6d0]/65">
              KOMEL의 세부 구조, 소재 구성, 제조 방식 등 핵심 정보는
              현재 보호 단계에 있습니다. 필요한 정보는 협업 논의 과정에서
              선별적으로 공유됩니다.
            </p>
          </div>

          <div className="border border-[#b88746]/35 bg-black/45 p-10">
            <div className="grid gap-5 md:grid-cols-2">
              <ProtectedItem title="구조 정보" />
              <ProtectedItem title="소재 구성" />
              <ProtectedItem title="제조 방식" />
              <ProtectedItem title="세부 메커니즘" />
            </div>
          </div>
        </div>
      </section>

      {/* Stage + Contact */}
      <section id="contact" className="bg-[#050403] px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.58fr_0.42fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.28em] text-[#d8aa68]">
              CURRENT STAGE
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-5">
              {stages.map(([number, label]) => (
                <div key={number}>
                  <p className="text-2xl font-light text-[#d8aa68]">{number}</p>
                  <div className="my-5 h-px w-full bg-[#b88746]/35" />
                  <p className="text-sm leading-7 text-[#f3e6d0]/70">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-l border-[#b88746]/25 pl-0 lg:pl-12">
            <p className="text-sm font-semibold tracking-[0.28em] text-[#d8aa68]">
              CONTACT
            </p>
            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.06em]">
              여러분의 의견이
              <br />
              다음 단계를 만듭니다.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#f3e6d0]/62">
              피드백과 제조·투자·파트너십 제안은 KOMEL을 발전시키는
              중요한 자료가 됩니다.
            </p>

            <div className="mt-10 grid gap-4">
              <a
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border border-[#b88746]/55 px-6 py-5 text-[#d8aa68] transition hover:bg-[#d8aa68]/10"
              >
                <span className="font-semibold">피드백 보내기</span>
                <ArrowRight className="h-5 w-5" />
              </a>

              <a
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border border-[#b88746]/55 px-6 py-5 text-[#d8aa68] transition hover:bg-[#d8aa68]/10"
              >
                <span className="font-semibold">파트너십 문의</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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

function InfoMini({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-1 h-5 w-5 text-[#d8aa68]" />
      <div>
        <p className="text-sm text-[#d8aa68]">{label}</p>
        <p className="mt-1 text-base text-[#f3e6d0]">{value}</p>
      </div>
    </div>
  );
}

function ProtectedItem({ title }) {
  return (
    <div className="flex items-center gap-4 border border-[#b88746]/22 bg-black/30 p-5">
      <Lock className="h-5 w-5 text-[#d8aa68]" />
      <div>
        <p className="font-semibold text-[#f3e6d0]">{title}</p>
        <p className="mt-1 text-xs text-[#f3e6d0]/42">Protected</p>
      </div>
    </div>
  );
}
