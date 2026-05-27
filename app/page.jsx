"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Bell, ClipboardList, Factory, Globe2, Handshake, Mail,
  ShieldCheck, Target, Users, Wind, X
} from "lucide-react";

export default function Page() {
  const contactEmail = "roekty@gmail.com";
  const heroImage = "/hero-breath.png";

  const problemItems = [
    "코에 직접 닿는 사용 방식",
    "타인 앞에서 사용하기 부담스러운 이미지",
    "저가형 제품처럼 보이는 디자인",
    "카페인과 흡연 외 선택지 부족",
  ];

  const targets = [
    "장시간 운전하는 운전자",
    "집중 전환이 필요한 직장인",
    "학습 중 리프레시가 필요한 학생",
    "멘톨 쿨링감을 선호하는 사용자",
    "위생적인 개인 웰니스 제품을 원하는 소비자",
  ];

  const progress = [
    [Globe2, "브랜드 도메인 확보", "svas.kr"],
    [ClipboardList, "제품 컨셉 검증 중", "비접촉 리프레시 포지셔닝 정리"],
    [Wind, "초기 시제품 개발", "준비 단계"],
    [Factory, "제조·투자·유통", "파트너 검토 중"],
  ];

  const plans = [
    [Bell, "Classic", "출시 알림 및 개발 소식", "관심등록"],
    [Users, "Basic", "초기 사용자 테스트 우선 안내", "관심등록"],
    [Handshake, "Premium", "투자·제조·유통 협업 문의", "개별 문의"],
  ];

  return (
    <main className="min-h-screen bg-[#06111f] text-white antialiased">
      <section className="relative min-h-[660px] overflow-hidden border-b border-white/10 bg-[#06111f]">
        <div className="absolute inset-0 bg-cover bg-[75%_center] opacity-90 md:bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06111f] via-[#06111f]/82 to-[#06111f]/18" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06111f] via-transparent to-transparent" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-8">
          <a href="#top">
            <div className="text-3xl font-semibold tracking-[0.35em]">SVAS</div>
            <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/55">Breathe Different</div>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/78 md:flex">
            <a href="#why" className="hover:text-blue-200">Why Now</a>
            <a href="#problem" className="hover:text-blue-200">Problem</a>
            <a href="#direction" className="hover:text-blue-200">Direction</a>
            <a href="#target" className="hover:text-blue-200">Target</a>
            <a href="#progress" className="hover:text-blue-200">Progress</a>
            <a href="#early-access" className="hover:text-blue-200">Early Access</a>
            <a href="#contact" className="hover:text-blue-200">Contact</a>
          </nav>
          <a href={`mailto:${contactEmail}?subject=SVAS KOMEL 투자·제조 협업 문의`} className="hidden rounded-lg border border-blue-300/30 bg-blue-400/10 px-5 py-3 text-sm font-semibold text-blue-100 hover:bg-blue-300/20 lg:block">
            투자·제조 협업 문의
          </a>
        </header>

        <div id="top" className="relative z-10 mx-auto flex max-w-7xl items-center px-6 pb-28 pt-16 lg:min-h-[540px] lg:px-8 lg:pt-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
            <p className="text-lg font-medium tracking-wide text-blue-300">KOMEL Project</p>
            <h1 className="mt-8 text-5xl font-semibold leading-[1.18] tracking-[-0.04em] md:text-7xl">
              코에 닿지 않는<br />새로운 <span className="text-blue-300">리프레시 경험</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-9 text-white/78">
              SVAS는 위생적이고 감각적인 개인 웰니스 루틴을 설계하는 비접촉 리프레시 브랜드 프로젝트입니다.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href={`mailto:${contactEmail}?subject=SVAS KOMEL 투자·제조 협업 문의`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-400 px-8 py-4 text-sm font-semibold text-white shadow-[0_0_40px_rgba(96,165,250,0.25)] hover:bg-blue-300">
                투자·제조 협업 문의 <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#early-access" className="inline-flex items-center justify-center rounded-xl border border-white/25 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10">
                관심등록하기
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#06111f] px-6 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl divide-y divide-white/10 md:grid-cols-4 md:divide-x md:divide-y-0">
          <InfoBlock number="01" title="Why Now" icon={Wind}>현대인은 카페인, 흡연, 기존 향 제품에 의존해 일상의 집중과 리프레시를 해결해왔습니다.</InfoBlock>
          <InfoBlock number="02" title="Problem" icon={X}>기존 리프레시 제품은 위생, 이미지, 디자인, 대안 부족의 한계를 가집니다.</InfoBlock>
          <InfoBlock number="03" title="Direction" icon={Target}>SVAS는 코에 직접 닿지 않는 비접촉 사용 경험으로 개인 리프레시 루틴을 설계합니다.</InfoBlock>
          <InfoBlock number="04" title="Target" icon={Users}>운전자, 직장인, 학생, 멘톨 선호층, 개인 웰니스 소비자를 초기 타깃으로 봅니다.</InfoBlock>
        </div>
      </section>

      <section id="why" className="bg-[#06111f] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="01" title="Why Now" />
          <div className="mt-6 grid gap-12 lg:grid-cols-[0.72fr_1fr]">
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">더 위생적이고 감각적인<br />새로운 리프레시 루틴이 필요합니다.</h2>
            <p className="text-lg leading-9 text-white/68">사람들은 집중 전환과 기분 환기를 위해 카페인, 흡연, 향 제품을 사용합니다. 그러나 타인 앞에서도 자연스럽게 사용할 수 있고, 위생성과 감각적 디자인을 동시에 만족시키는 개인 리프레시 제품은 아직 부족합니다.</p>
          </div>
        </div>
      </section>

      <section id="problem" className="border-y border-white/10 bg-[#08182a] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="02" title="Problem" />
          <div className="mt-6 grid gap-12 lg:grid-cols-[0.75fr_1fr]">
            <div>
              <h2 className="text-3xl font-semibold md:text-5xl">기존 제품의 한계</h2>
              <p className="mt-6 text-lg leading-9 text-white/62">SVAS는 기존 리프레시 제품의 사용성과 이미지 문제에서 새로운 기회를 봅니다.</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8">
              <ul className="space-y-5">
                {problemItems.map((item) => <li key={item} className="flex gap-4 text-base leading-8 text-white/78"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-300" />{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="direction" className="bg-[#06111f] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="03" title="Direction" />
          <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_1.08fr]">
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">비접촉 경험을 중심으로<br />개인 리프레시 루틴을 새롭게 설계합니다.</h2>
            <div className="rounded-[2rem] border border-blue-300/15 bg-blue-300/[0.06] p-8">
              <p className="text-lg leading-9 text-white/72">제품 구조, 성분 배합, 제조 방식 등 세부 내용은 투자·제조 협의 단계에서 비밀유지 조건 하에 별도 공유됩니다. 공개 사이트에서는 시장 문제와 프로젝트 방향성만 전달합니다.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <MiniBadge icon={ShieldCheck} label="위생적 사용성" />
                <MiniBadge icon={Wind} label="비접촉 리프레시" />
                <MiniBadge icon={Target} label="신규 카테고리" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="target" className="border-y border-white/10 bg-[#08182a] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="04" title="Target" />
          <h2 className="mt-6 text-3xl font-semibold md:text-5xl">주요 타깃</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {targets.map((item) => <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6"><Users className="mb-6 h-7 w-7 text-blue-300" /><p className="text-sm leading-7 text-white/75">{item}</p></div>)}
          </div>
        </div>
      </section>

      <section id="progress" className="bg-[#06111f] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 md:p-12">
          <SectionLabel number="05" title="Current Stage" />
          <h2 className="mt-6 text-3xl font-semibold md:text-5xl">현재 진행 단계</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {progress.map(([Icon, title, desc]) => <div key={title} className="text-center"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-blue-300/25 bg-blue-300/10 text-blue-300"><Icon className="h-8 w-8" /></div><h3 className="mt-7 text-base font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-white/58">{desc}</p></div>)}
          </div>
        </div>
      </section>

      <section id="early-access" className="border-y border-white/10 bg-[#06111f] px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <SectionLabel number="06" title="Early Access" />
            <h2 className="mt-6 text-3xl font-semibold md:text-5xl">SVAS Early Access</h2>
            <p className="mt-6 text-lg leading-9 text-white/65">현재 결제 및 제품 판매는 진행하지 않습니다. 아래 플랜은 정식 출시 전 수요 확인을 위한 예정 구성입니다.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {plans.map(([Icon, plan, desc, status]) => <div key={plan} className="rounded-[1.6rem] border border-white/10 bg-white/[0.035] p-7"><Icon className="h-8 w-8 text-blue-300" /><h3 className="mt-5 text-2xl font-semibold">{plan}</h3><p className="mt-5 min-h-[76px] text-sm leading-7 text-white/60">{desc}</p><a href={plan === "Premium" ? `mailto:${contactEmail}?subject=SVAS Premium 협업 문의` : "#contact"} className="mt-8 flex items-center justify-center rounded-lg border border-blue-300/35 px-4 py-3 text-sm font-semibold hover:bg-blue-300/12">{status}</a></div>)}
          </div>
        </div>
      </section>
      <section id="mvp-support" className="bg-[#08182a] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-blue-300/15 bg-blue-300/[0.06] p-8 md:p-12">
          <SectionLabel number="07" title="MVP Support" />

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
                MVP 후원 의향 등록
              </h2>

              <p className="mt-6 text-lg leading-9 text-white/65">
                SVAS/KOMEL은 비접촉 리프레시 웰니스 경험을 위한 초기 제품 프로젝트입니다.
                현재 정식 후원금 수령 및 제품 판매는 진행하지 않으며,
                MVP 제작을 위한 초기 서포터와 후원 의향자를 모집하고 있습니다.
              </p>

              <p className="mt-5 text-sm leading-7 text-white/45">
                개인 후원 또는 협업 의향이 있으신 분께는 문의 후 개별 안내드립니다.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-[#05101d] p-7">
              <h3 className="text-2xl font-semibold">초기 서포터 참여</h3>

              <ul className="mt-6 space-y-4 text-sm leading-7 text-white/65">
                <li>• MVP 제작 후원 의향 등록</li>
                <li>• 초기 사용자 테스트 우선 안내</li>
                <li>• 공식 후원/펀딩 진행 시 우선 알림</li>
                <li>• 투자·제조·브랜드 협업 문의 가능</li>
              </ul>


<a
  href="https://docs.google.com/forms/d/e/1FAIpQLSfbO6nuetMo9Hj-V39sEsQUXuuVLbBwi_-elaeJyHOmYSG5UQ/viewform"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 flex items-center justify-center rounded-xl bg-blue-400 px-6 py-5 text-sm font-semibold text-white transition hover:bg-blue-300"
>
  MVP 후원 의향 등록하기
</a>

              <p className="mt-5 text-xs leading-6 text-white/40">
                본 등록은 정식 결제 또는 후원금 수령이 아닌, 후원 의향 확인을 위한 사전 문의입니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="bg-[#06111f] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 md:p-12">
          <SectionLabel number="08" title="Contact" />
          <div className="mt-8 grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
           <h2 className="text-3xl font-semibold leading-tight md:text-5xl">투자·제조 협업 문의</h2>
              <p className="mt-6 text-lg leading-9 text-white/65">SVAS는 현재 제품 개발, 제조 파트너십, 초기 투자 및 유통 협업 논의를 열어두고 있습니다.</p>
              <div className="mt-6 rounded-xl border border-white/10 bg-[#05101d] p-5 text-sm leading-7 text-white/70">
<p>Founder. 김태영</p>
<p>Project. SVAS / KOMEL</p>
<p>Email. roekty@gmail.com</p>
</div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <a href={`mailto:${contactEmail}?subject=SVAS KOMEL 투자·제조 협업 문의`} className="flex items-center justify-center gap-3 rounded-xl bg-blue-400 px-6 py-5 text-sm font-semibold hover:bg-blue-300"><Mail className="h-5 w-5" />투자·제조 검토 문의하기</a>
              <a href={`mailto:${contactEmail}?subject=SVAS KOMEL 관심등록`} className="flex items-center justify-center gap-3 rounded-xl border border-white/16 px-6 py-5 text-sm font-semibold hover:bg-white/10"><Users className="h-5 w-5" />관심등록하기</a>
              <div className="rounded-xl border border-white/10 bg-[#05101d] p-6 md:col-span-2">
                <div className="grid gap-4 text-sm text-white/72 sm:grid-cols-3">
                  <span className="flex items-center gap-3"><Mail className="h-4 w-4 text-blue-300" />{contactEmail}</span>
                  <span className="flex items-center gap-3"><Globe2 className="h-4 w-4 text-blue-300" />svas.kr</span>
                  <span className="flex items-center gap-3"><ShieldCheck className="h-4 w-4 text-blue-300" />KOMEL Project by SVAS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionLabel({ number, title }) {
  return <div className="text-blue-300"><p className="text-xl font-semibold">{number}</p><p className="mt-4 text-2xl font-medium">{title}</p></div>;
}

function InfoBlock({ number, title, icon: Icon, children }) {
  return <div className="p-7 md:p-8"><p className="text-xl font-semibold text-blue-300">{number}</p><h3 className="mt-4 text-2xl font-medium text-blue-300">{title}</h3><p className="mt-6 min-h-[104px] text-base leading-8 text-white/72">{children}</p><Icon className="mt-8 h-8 w-8 text-blue-300/80" /></div>;
}

function MiniBadge({ icon: Icon, label }) {
  return <div className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-sm text-white/78"><Icon className="h-5 w-5 text-blue-300" />{label}</div>;
}
