"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("ko");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("svas-language");

    if (saved === "ko" || saved === "en") {
      setLang(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const changeLanguage = (nextLang) => {
    setLang(nextLang);
    setMessage("");
    localStorage.setItem("svas-language", nextLang);
    document.documentElement.lang = nextLang;
  };

  const content = {
    ko: {
      nav: {
        project: "프로젝트",
        progress: "개발 진행상황",
        business: "비즈니스 모델",
        investment: "투자 유치",
        founder: "창업자",
        contact: "문의하기",
        partnership: "파트너십 / 투자 문의",
      },

      hero: {
        small: "새로운 퍼스널 향 경험",
        intro1: "당신의 하루에,",
        intro2: "짧은 리셋을 선물합니다.",
        desc1: "휴대가 간편한 · 리필형 · 비전자식 · 비분사형",
        desc2: "나만의 퍼스널 향 오브제",
        project: "프로젝트 보기",
        investor: "투자자료 요청",
        current: "현재 단계",
        step1: "콘셉트 정의",
        step2: "기구설계 진행 중",
        step3: "워킹 시제품 제작 예정",
        note:
          "콘셉트 시각화 이미지입니다. 최종 디자인은 개발 과정에서 변경될 수 있습니다.",
      },

      features: [
        ["휴대성", "언제 어디서나 간편하게"],
        ["리필형", "반복해서 사용할 수 있는 구조"],
        ["비전자식", "충전 없이 사용할 수 있는 방식"],
        ["비분사형", "주변을 방해하지 않는 개인적인 경험"],
      ],

      problem: {
        label: "문제 상황",
        title1: "바쁜 하루,",
        title2: "우리는 집중력을 잃습니다.",
        text1:
          "업무, 공부, 운전, 이동 속에서 우리는 잠깐 리프레시하고 싶은 순간을 반복해서 마주합니다.",
        text2: "그 짧은 순간을 위한 새로운 선택지가 필요합니다.",
      },

      solution: {
        label: "해결책",
        text:
          "KOMEL은 언제 어디서나 휴대하며 사용할 수 있는 리필형 퍼스널 향 오브제를 개발하는 프로젝트입니다.",
        focus: "집중",
        refresh: "리프레시",
        reset: "리셋",
      },

      evidence: {
        title: "현재까지의 실행",
        cards: [
          ["제품 방향", "콘셉트 정의 완료"],
          ["기구 요구사항", "핵심 요구조건 정의"],
          ["제작 준비", "업체 견적 및 설계 검토"],
          ["다음 목표", "워킹 시제품 제작"],
        ],
        note:
          "검증된 결과가 생길 때마다 실제 수치와 진행상황을 이 영역에 추가합니다.",
      },

      development: {
        title: "개발 진행상황",

        steps: [
          ["01", "콘셉트 정의", "제품 방향과 핵심 경험 정의"],
          ["02", "기구설계", "제조 가능한 구조와 공차 검토"],
          ["03", "워킹 시제품", "실제로 작동하는 시제품 제작"],
          ["04", "테스트 및 개선", "사용자 테스트와 반복 개선"],
          ["05", "초기 생산", "초기 생산 및 시장 진입"],
        ],

        currentLabel: "현재 위치",
        currentText:
          "제품 방향과 핵심 요구사항을 정의했으며, 현재 실제 제조 가능한 구조로 전환하기 위한 기구설계와 워킹 시제품 제작 준비를 진행하고 있습니다.",

        status: [
          ["제품 방향", "정의 완료"],
          ["핵심 구조", "정의 완료"],
          ["제작 파트너", "접촉 중"],
          ["다음 단계", "워킹 시제품"],
        ],
      },

      business: {
        title: "비즈니스 모델",

        firstTitle: "제품 구조",
        firstText:
          "본체를 한 번 구매한 뒤 리필 제품을 반복적으로 이용하는 구조를 지향합니다.",

        targetTitle: "목표 고객",
        targets: [
          "업무 집중이 필요한 직장인",
          "학생 및 수험생",
          "운전자 및 이동이 많은 사용자",
          "기업 복지 · 선물 · 웰니스 시장",
        ],

        revenueTitle: "수익 확장 방향",
        revenue: [
          "본체 판매",
          "리필 제품 판매",
          "기업 대상 공급",
          "향후 제품 라인 확장",
        ],
      },

      investment: {
        label: "투자 및 파트너십",
        title1: "아이디어에서",
        title2: "워킹 시제품까지",
        text:
          "KOMEL을 실제 제품으로 전환하기 위한 초기 투자와 제조·개발 파트너십을 찾고 있습니다.",

        deck: "프로젝트 자료 요청",
        contact: "창업자에게 문의",

        fundsTitle: "자금 사용 방향",
        funds: [
          "기구설계 및 워킹 시제품 제작",
          "테스트 및 반복 개선",
          "지식재산권 및 인증 검토",
          "초기 시장 검증",
        ],

        stage: "현재 단계",
        stageValue: "시제품 이전 단계",

        current: "현재 진행",
        currentValue: "기구설계 진행 중",

        next: "다음 목표",
        nextValue: "워킹 시제품",

        amount: "투자 규모",
        amountValue: "협의",
      },

      founder: {
        label: "창업자",
        name: "김태영",
        role: "SVAS 창업자",
        text1:
          "KOMEL은 일상 속 짧은 순간을 위한 새로운 퍼스널 향 경험을 만들기 위해 시작한 프로젝트입니다.",
        text2:
          "현재 아이디어를 실제 제품으로 전환하기 위해 기구설계와 워킹 시제품 개발을 진행하고 있습니다.",
      },

      wait: {
        title: "KOMEL의 여정에 함께하세요.",
        text: "제품 개발과 주요 진행상황을 가장 먼저 받아보세요.",
        placeholder: "이메일을 입력하세요",
        button: "대기자 등록",
        note: "중요한 개발 소식만 전달합니다.",
        invalid: "올바른 이메일 주소를 입력해주세요.",
        success: "등록되었습니다. 감사합니다.",
      },

      footer: {
        privacy: "개인정보처리방침",
        terms: "이용약관",
        contact: "문의하기",
      },
    },

    en: {
      nav: {
        project: "Project",
        progress: "Development",
        business: "Business Model",
        investment: "Investment",
        founder: "Founder",
        contact: "Contact",
        partnership: "Partnership / Investment",
      },

      hero: {
        small: "A NEW PERSONAL SCENT EXPERIENCE",
        intro1: "A small reset",
        intro2: "for your everyday life.",
        desc1: "Portable · Refillable · Non-electronic · Non-spray",
        desc2: "A personal scent object for everyday moments.",
        project: "View Project",
        investor: "Request Investor Deck",
        current: "CURRENT STATUS",
        step1: "Concept Defined",
        step2: "Engineering in Progress",
        step3: "Working Prototype Next",
        note:
          "Concept visualization. Final design may change during development.",
      },

      features: [
        ["Portable", "Designed to go anywhere"],
        ["Refillable", "Designed for repeated use"],
        ["Non-electronic", "No charging required"],
        ["Non-spray", "A discreet personal experience"],
      ],

      problem: {
        label: "THE PROBLEM",
        title1: "Busy days",
        title2: "break our focus.",
        text1:
          "Work, study, driving and travel repeatedly create moments when we want a short reset.",
        text2: "Those small moments deserve a better option.",
      },

      solution: {
        label: "OUR SOLUTION",
        text:
          "KOMEL is a project developing a compact, refillable personal scent object designed for everyday use.",
        focus: "Focus",
        refresh: "Refresh",
        reset: "Reset",
      },

      evidence: {
        title: "Progress So Far",
        cards: [
          ["Product Direction", "Concept Defined"],
          ["Mechanical Requirements", "Core Requirements Defined"],
          ["Prototype Preparation", "Quotes & Engineering Review"],
          ["Next Milestone", "Working Prototype"],
        ],
        note:
          "Verified metrics and progress will be added here as development continues.",
      },

      development: {
        title: "Development Progress",

        steps: [
          ["01", "Concept Defined", "Product direction and core experience"],
          ["02", "Engineering", "Manufacturability and tolerance review"],
          ["03", "Working Prototype", "Build the first functional prototype"],
          ["04", "Testing & Iteration", "User testing and refinement"],
          ["05", "Initial Production", "Production and market entry"],
        ],

        currentLabel: "WHERE WE ARE NOW",
        currentText:
          "The product direction and core requirements are defined. We are now translating the concept into a manufacturable structure and preparing the first working prototype.",

        status: [
          ["Product Direction", "Defined"],
          ["Core Architecture", "Defined"],
          ["Prototype Partners", "Contacted"],
          ["Next Milestone", "Working Prototype"],
        ],
      },

      business: {
        title: "Business Model",

        firstTitle: "Product Model",
        firstText:
          "The model begins with a durable core object supported by repeat purchases of refill products.",

        targetTitle: "Target Users",
        targets: [
          "Knowledge workers",
          "Students and test takers",
          "Drivers and people on the move",
          "Corporate wellness and gifting",
        ],

        revenueTitle: "Revenue Direction",
        revenue: [
          "Core product sales",
          "Refill sales",
          "B2B supply",
          "Future product extensions",
        ],
      },

      investment: {
        label: "INVESTMENT & PARTNERSHIP",
        title1: "From concept",
        title2: "to working prototype",
        text:
          "We are seeking early-stage investment and development partners to move KOMEL from concept to a real working product.",

        deck: "Request Project Deck",
        contact: "Contact Founder",

        fundsTitle: "USE OF FUNDS",
        funds: [
          "Mechanical engineering & working prototype",
          "Testing & iteration",
          "IP & certification review",
          "Initial market validation",
        ],

        stage: "Stage",
        stageValue: "Pre-Prototype",

        current: "Current",
        currentValue: "Engineering in Progress",

        next: "Next Milestone",
        nextValue: "Working Prototype",

        amount: "Investment Amount",
        amountValue: "To Be Discussed",
      },

      founder: {
        label: "FOUNDER",
        name: "TAEYOUNG KIM",
        role: "Founder, SVAS",
        text1:
          "KOMEL began as a project to create a new personal scent experience for short moments in everyday life.",
        text2:
          "We are now moving the idea toward a real product through mechanical engineering and working-prototype development.",
      },

      wait: {
        title: "Be part of KOMEL's journey.",
        text: "Receive major product-development updates and milestones.",
        placeholder: "Enter your email",
        button: "Join Waitlist",
        note: "Only meaningful project updates.",
        invalid: "Please enter a valid email address.",
        success: "Thank you. You are on the list.",
      },

      footer: {
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        contact: "Contact",
      },
    },
  };

  const t = content[lang];

  const submitWaitlist = (event) => {
    event.preventDefault();

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    if (!isValid) {
      setMessage(t.wait.invalid);
      return;
    }

    setMessage(t.wait.success);
    setEmail("");
  };

  return (
    <>
      {/* HEADER */}
      <header className="siteHeader">
        <div className="container nav">
          <a href="#top" className="brand">
            SVAS
          </a>

          <nav className="desktopNav">
            <a href="#project">{t.nav.project}</a>
            <a href="#progress">{t.nav.progress}</a>
            <a href="#business">{t.nav.business}</a>
            <a href="#investment">{t.nav.investment}</a>
            <a href="#founder">{t.nav.founder}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>

          <div className="navActions">
            <div className="languageSwitch">
              <button
                className={lang === "ko" ? "active" : ""}
                onClick={() => changeLanguage("ko")}
                type="button"
              >
                KR
              </button>

              <span>|</span>

              <button
                className={lang === "en" ? "active" : ""}
                onClick={() => changeLanguage("en")}
                type="button"
              >
                EN
              </button>
            </div>

            <a href="#investment" className="navCTA">
              {t.nav.partnership}
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="container heroGrid">
            <div className="heroCopy">
              <p className="sectionLabel">{t.hero.small}</p>

              <p className="heroIntro">
                {t.hero.intro1}
                <br />
                {t.hero.intro2}
              </p>

              <h1>KOMEL</h1>

              <p className="heroDescription">
                {t.hero.desc1}
                <br />
                {t.hero.desc2}
              </p>

              <div className="heroButtons">
                <a href="#project" className="primaryButton">
                  {t.hero.project}
                </a>

                <a href="#investment" className="secondaryButton">
                  {t.hero.investor}
                </a>
              </div>

              <div className="currentStage">
                <span className="stageLabel">{t.hero.current}</span>

                <div className="stageRow">
                  <span>{t.hero.step1}</span>
                  <b>›</b>
                  <span className="stageActive">{t.hero.step2}</span>
                  <b>›</b>
                  <span>{t.hero.step3}</span>
                </div>
              </div>
            </div>

            <div className="heroProductArea">
              <div className="productVisual">
                <div className="metalBody">
                  <div className="capDivider" />
                  <span>SVAS</span>
                </div>

                <div className="woodBase">
                  <div className="keyHole" />
                  <div className="keyRing" />
                </div>
              </div>

              <div className="featureList">
                {t.features.map((feature, index) => (
                  <div className="featureItem" key={feature[0]}>
                    <div className="featureIcon">
                      {["○", "↻", "⌁", "×"][index]}
                    </div>

                    <div>
                      <strong>{feature[0]}</strong>
                      <small>{feature[1]}</small>
                    </div>
                  </div>
                ))}
              </div>

              <p className="conceptNote">{t.hero.note}</p>
            </div>
          </div>
        </section>

        {/* PROBLEM + SOLUTION */}
        <section id="project" className="problemSolution">
          <article className="problemBox">
            <img src="/hero-breath.png" alt="" className="problemBackground" />

            <div className="problemInner">
              <p className="sectionLabel">{t.problem.label}</p>

              <h2>
                {t.problem.title1}
                <br />
                {t.problem.title2}
              </h2>

              <p>{t.problem.text1}</p>
              <p>{t.problem.text2}</p>
            </div>
          </article>

          <article className="solutionBox">
            <p className="sectionLabel">{t.solution.label}</p>

            <h2>KOMEL</h2>

            <p>{t.solution.text}</p>

            <div className="solutionModes">
              <div>
                <span>◎</span>
                <small>{t.solution.focus}</small>
              </div>

              <div>
                <span>◯</span>
                <small>{t.solution.refresh}</small>
              </div>

              <div>
                <span>↻</span>
                <small>{t.solution.reset}</small>
              </div>
            </div>
          </article>
        </section>

        {/* EVIDENCE */}
        <section className="section lightSection">
          <div className="container">
            <h2 className="goldHeading">{t.evidence.title}</h2>

            <div className="evidenceGrid">
              {t.evidence.cards.map((card) => (
                <article className="evidenceCard" key={card[0]}>
                  <small>{card[0]}</small>
                  <strong>{card[1]}</strong>
                </article>
              ))}
            </div>

            <p className="smallCenterText">{t.evidence.note}</p>
          </div>
        </section>

        {/* DEVELOPMENT */}
        <section className="section" id="progress">
          <div className="container">
            <h2 className="goldHeading">{t.development.title}</h2>

            <div className="timeline">
              {t.development.steps.map((step, index) => (
                <div
                  className={`timelineStep ${
                    index === 0
                      ? "complete"
                      : index === 1
                        ? "current"
                        : ""
                  }`}
                  key={step[0]}
                >
                  <div className="timelineCircle">
                    {index === 0 ? "✓" : step[0]}
                  </div>

                  <strong>{step[1]}</strong>
                  <small>{step[2]}</small>
                </div>
              ))}
            </div>

            <div className="statusPanel">
              <div className="statusDescription">
                <p className="sectionLabel">
                  {t.development.currentLabel}
                </p>

                <p>{t.development.currentText}</p>
              </div>

              {t.development.status.map((item) => (
                <div className="statusItem" key={item[0]}>
                  <strong>{item[0]}</strong>
                  <small>{item[1]}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BUSINESS */}
        <section className="section lightSection" id="business">
          <div className="container">
            <h2 className="goldHeading">{t.business.title}</h2>

            <div className="businessGrid">
              <article className="businessCard">
                <h3>{t.business.firstTitle}</h3>
                <p>{t.business.firstText}</p>
              </article>

              <article className="businessCard">
                <h3>{t.business.targetTitle}</h3>

                <ul>
                  {t.business.targets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="businessCard">
                <h3>{t.business.revenueTitle}</h3>

                <ul>
                  {t.business.revenue.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* INVESTMENT */}
        <section className="investmentSection" id="investment">
          <div className="container investmentGrid">
            <div>
              <p className="sectionLabel">{t.investment.label}</p>

              <h2>
                {t.investment.title1}
                <br />
                → {t.investment.title2}
              </h2>

              <p>{t.investment.text}</p>

              <div className="investmentButtons">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfbO6nuetMo9Hj-V39sEsQUXuuVLbBwi_-elaeJyHOmYSG5UQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="goldButton"
                >
                  {t.investment.deck}
                </a>

                <a
                  href="mailto:roekty@gmail.com"
                  className="darkOutlineButton"
                >
                  {t.investment.contact}
                </a>
              </div>
            </div>

            <div>
              <p className="sectionLabel">{t.investment.fundsTitle}</p>

              <div className="fundList">
                {t.investment.funds.map((item, index) => (
                  <div key={item}>
                    <b>{String(index + 1).padStart(2, "0")}</b>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="investmentStatusCard">
              <div>
                <small>{t.investment.stage}</small>
                <strong>{t.investment.stageValue}</strong>
              </div>

              <div>
                <small>{t.investment.current}</small>
                <strong>{t.investment.currentValue}</strong>
              </div>

              <div>
                <small>{t.investment.next}</small>
                <strong>{t.investment.nextValue}</strong>
              </div>

              <div>
                <small>{t.investment.amount}</small>
                <strong>{t.investment.amountValue}</strong>
              </div>
            </div>
          </div>
        </section>

        {/* FOUNDER */}
        <section className="founderSection" id="founder">
          <div className="container founderGrid">
            <div className="founderPhoto">
              <img src="/founder.png" alt="SVAS Founder" />
            </div>

            <div>
              <p className="sectionLabel">{t.founder.label}</p>
              <h2>{t.founder.name}</h2>
              <p className="founderRole">{t.founder.role}</p>
            </div>

            <div className="founderStory">
              <p>{t.founder.text1}</p>
              <p>{t.founder.text2}</p>
            </div>
          </div>

          {/* WAITLIST */}
          <div className="container waitlistBox" id="contact">
            <div>
              <h2>{t.wait.title}</h2>
              <p>{t.wait.text}</p>
            </div>

            <div>
              <form className="waitlistForm" onSubmit={submitWaitlist}>
                <input
                  type="email"
                  placeholder={t.wait.placeholder}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />

                <button type="submit">{t.wait.button}</button>
              </form>

              <p className="waitMessage">{message}</p>
              <small>{t.wait.note}</small>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="container footerGrid">
          <strong className="footerBrand">SVAS</strong>

          <span>© 2026 SVAS. All rights reserved.</span>

          <nav>
            <a href="#">{t.footer.privacy}</a>
            <a href="#">{t.footer.terms}</a>
            <a href="mailto:roekty@gmail.com">{t.footer.contact}</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
