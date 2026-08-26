```jsx
"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("en");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [founderImageError, setFounderImageError] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("svas-language");

    if (saved === "ko" || saved === "en") {
      setLang(saved);
      document.documentElement.lang = saved;
    } else {
      document.documentElement.lang = "en";
    }
  }, []);

  function changeLanguage(nextLang) {
    setLang(nextLang);
    setMessage("");
    document.documentElement.lang = nextLang;
    window.localStorage.setItem("svas-language", nextLang);
  }

  const content = {
    ko: {
      nav: {
        object: "제품",
        why: "왜 KOMEL인가",
        log: "개발 기록",
        development: "개발 진행상황",
        business: "비즈니스 모델",
        support: "지원 및 파트너십",
        founder: "창업자",
      },

      topCta: "파트너십 / 투자 문의",

      hero: {
        eyebrow: "새로운 퍼스널 향 경험",
        intro1: "당신의 하루에,",
        intro2: "짧은 리셋을 선물합니다.",
        description1: "휴대형 · 리필형 · 비전자식 · 비분사형",
        description2: "일상 속 짧은 순간을 위한 퍼스널 향 오브제",
        project: "프로젝트 보기",
        investor: "투자자료 요청",
        current: "현재 단계",
        stage1: "콘셉트 정의",
        stage2: "기구설계 진행 중",
        stage3: "워킹 시제품 제작 예정",
        caption:
          "콘셉트 시각화 이미지입니다. 최종 디자인은 개발 과정에서 변경될 수 있습니다.",
      },

      object: {
        label: "제품",
        title: "오래 곁에 두고 싶은 오브제.",
        intro:
          "KOMEL은 한 번 쓰고 버리는 제품이 아니라, 가방에 넣고 책상 위에 두며 반복해서 사용하는 퍼스널 오브제를 지향합니다.",
        values: [
          {
            icon: "○",
            title: "휴대성",
            subtitle: "언제 어디서나",
            text: "가방 속이나 책상 위 어디에 두어도 자연스럽게 어울리는 휴대성을 지향합니다.",
          },
          {
            icon: "↻",
            title: "리필형",
            subtitle: "반복 사용",
            text: "본체는 오래 사용하고 필요한 경험은 리필하는 구조를 지향합니다.",
          },
          {
            icon: "⌁",
            title: "비전자식",
            subtitle: "충전 없이",
            text: "배터리와 충전에 의존하지 않는 단순하고 직관적인 사용 경험을 목표로 합니다.",
          },
          {
            icon: "×",
            title: "비분사형",
            subtitle: "개인적인 경험",
            text: "주변 공간에 분사하지 않고 개인적으로 사용할 수 있는 경험을 지향합니다.",
          },
        ],
        caption:
          "콘셉트 시각화 이미지입니다. 최종 디자인은 개발 과정에서 변경될 수 있습니다.",
      },

      why: {
        label: "왜 KOMEL인가",
        title: "바쁜 하루 속, 짧은 리셋의 순간.",
        body:
          "업무, 공부, 운전, 이동 중에는 집중이 흐트러지고 잠깐 리프레시하고 싶은 순간이 반복됩니다. KOMEL은 바로 그 짧은 순간을 위한 새로운 선택지를 만들고 있습니다.",
        points: [
          {
            number: "01",
            title: "사용의 어색함",
            text: "일상과 업무 공간에서도 부담 없이 사용할 수 있는 형태를 지향합니다.",
          },
          {
            number: "02",
            title: "위생과 신뢰",
            text: "개인용 제품에 필요한 깔끔하고 신뢰감 있는 경험을 중요하게 생각합니다.",
          },
          {
            number: "03",
            title: "프리미엄 오브제의 부재",
            text: "단순 소모품이 아닌, 소유하고 오래 사용하는 오브제라는 방향을 제안합니다.",
          },
        ],
      },

      log: {
        label: "개발 기록",
        title: "실제로 움직이고 있습니다.",
        note:
          "검증된 결과가 생길 때마다 실제 진행상황을 이곳에 추가합니다.",
        items: [
          {
            date: "2026.08",
            status: "완료",
            title: "제품 콘셉트 및 핵심 요구사항 정의",
            text: "제품 형태, 사용 경험 및 주요 기구 요구사항을 정리했습니다.",
          },
          {
            date: "2026.08",
            status: "완료",
            title: "시제품 제작 요구사항 정리",
            text: "제작업체 검토를 위한 제품 요구사항과 참고자료를 준비했습니다.",
          },
          {
            date: "2026.08",
            status: "진행 중",
            title: "기구설계·CNC 제작업체 접촉",
            text: "국내 업체를 대상으로 견적과 제조 가능성을 검토하고 있습니다.",
          },
          {
            date: "다음",
            status: "예정",
            title: "기구설계 검토 및 제조 가능성 검증",
            text: "실제 제작 가능한 구조와 공차를 검토하는 단계입니다.",
          },
          {
            date: "다음",
            status: "예정",
            title: "워킹 시제품",
            text: "실제로 조립·사용·테스트할 수 있는 첫 시제품 제작이 목표입니다.",
          },
        ],
      },

      development: {
        title: "개발 진행상황",
        steps: [
          ["01", "콘셉트 정의", "제품 방향과 핵심 경험 정의"],
          ["02", "기구설계", "실제 제조 가능한 구조 검토"],
          ["03", "워킹 시제품", "작동 가능한 첫 시제품 제작"],
          ["04", "테스트 및 개선", "사용자 테스트와 반복 개선"],
          ["05", "초기 생산", "초기 생산 및 시장 진입"],
        ],
        currentTitle: "현재 위치",
        currentText:
          "제품 방향과 핵심 요구사항을 정의했으며, 현재 실제 제조 가능한 구조로 전환하기 위한 기구설계 및 시제품 제작 준비를 진행하고 있습니다.",
      },

      business: {
        title: "비즈니스 모델",
        cards: [
          {
            title: "제품",
            text: "오래 사용할 수 있는 핵심 오브제를 중심으로 브랜드와 사용 경험을 구축합니다.",
          },
          {
            title: "리필",
            text: "반복적으로 사용할 수 있는 리필 제품을 통해 지속적인 구매 경험을 설계합니다.",
          },
          {
            title: "기업 및 확장",
            text: "기업 복지·선물 시장과 향후 제품군 확장 가능성을 함께 검토합니다.",
          },
        ],
      },

      support: {
        label: "지원 및 파트너십",
        title: "KOMEL의 다음 단계에 함께하세요.",
        cards: [
          {
            number: "01",
            type: "whatsapp",
            title: "WhatsApp 문의",
            text: "WhatsApp을 통해 KOMEL 제품, 개발 및 파트너십에 대해 빠르게 문의하세요.",
            button: "WhatsApp: +82 10-5836-1236",
            href: "https://wa.me/821058361236",
          },
          {
            number: "02",
            title: "개발·제조 파트너",
            text: "기구설계, CNC 가공, 시제품 및 제조 협력이 가능한 파트너를 찾고 있습니다.",
            button: "파트너 문의",
            href: "mailto:roekty@gmail.com",
          },
          {
            number: "03",
            title: "투자 문의",
            text: "투자 및 파트너십 논의를 위한 프로젝트 자료를 제공합니다. 상세 기술자료는 필요한 경우 별도 절차를 통해 공유합니다.",
            button: "프로젝트 자료 요청",
            href: "https://docs.google.com/forms/d/e/1FAIpQLSfbO6nuetMo9Hj-V39sEsQUXuuVLbBwi_-elaeJyHOmYSG5UQ/viewform",
          },
        ],
      },

      investment: {
        title: "아이디어에서 워킹 시제품까지",
        description:
          "현재 KOMEL을 실제 제품으로 전환하기 위한 초기 투자와 개발·제조 파트너십을 찾고 있습니다.",
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
        story1:
          "KOMEL은 일상 속 짧은 순간을 위한 새로운 퍼스널 향 경험을 만들기 위해 시작한 프로젝트입니다.",
        story2:
          "현재 아이디어를 실제 제품으로 전환하기 위해 기구설계와 워킹 시제품 개발을 진행하고 있습니다.",
      },

      waitlist: {
        title: "KOMEL의 여정에 함께하세요.",
        text: "제품 개발과 주요 진행상황을 가장 먼저 받아보세요.",
        placeholder: "이메일을 입력하세요",
        button: "대기자 등록",
        invalid: "올바른 이메일 주소를 입력해주세요.",
        note: "중요한 개발 소식만 전달합니다.",
      },

      footer: {
        privacy: "개인정보처리방침",
        terms: "이용약관",
        contact: "문의하기",
      },
    },

    en: {
      nav: {
        object: "The Object",
        why: "Why KOMEL",
        log: "Live Log",
        development: "Development",
        business: "Business Model",
        support: "Support",
        founder: "Founder",
      },

      topCta: "Partnership / Investment",

      hero: {
        eyebrow: "A NEW PERSONAL SCENT EXPERIENCE",
        intro1: "A small reset",
        intro2: "for your everyday life.",
        description1: "Portable · Refillable · Non-electronic · Non-spray",
        description2: "A personal scent object for everyday moments.",
        project: "View Project",
        investor: "Request Project Deck",
        current: "CURRENT STATUS",
        stage1: "Concept Defined",
        stage2: "Engineering in Progress",
        stage3: "Working Prototype Next",
        caption:
          "Concept visualization. The final design is subject to development.",
      },

      object: {
        label: "THE OBJECT",
        title: "An object, designed to be kept.",
        intro:
          "KOMEL is not intended to be a disposable. It is designed as a personal object you can carry, keep on your desk, and use repeatedly.",
        values: [
          {
            icon: "○",
            title: "Portable",
            subtitle: "Go anywhere",
            text: "Designed to fit naturally into everyday carry and desk environments.",
          },
          {
            icon: "↻",
            title: "Refillable",
            subtitle: "Repeated use",
            text: "One core object, supported by a refillable experience.",
          },
          {
            icon: "⌁",
            title: "Non-electronic",
            subtitle: "No charging",
            text: "A simple experience that does not depend on batteries or charging.",
          },
          {
            icon: "×",
            title: "Non-spray",
            subtitle: "Personal",
            text: "A discreet experience designed to stay personal.",
          },
        ],
        caption:
          "Concept visualization. The final design is subject to development.",
      },

      why: {
        label: "WHY KOMEL",
        title: "A short reset, for busy days.",
        body:
          "Between work, study, driving and travel, there are repeated moments when focus slips and we want a brief reset. KOMEL is being developed as a new option for those moments.",
        points: [
          {
            number: "01",
            title: "Awkward everyday use",
            text: "Designed to feel natural in daily and professional environments.",
          },
          {
            number: "02",
            title: "Hygiene & trust",
            text: "A personal object should feel clean, considered and trustworthy.",
          },
          {
            number: "03",
            title: "No premium object category",
            text: "KOMEL explores a shift from disposable utility to an object worth keeping.",
          },
        ],
      },

      log: {
        label: "LIVE DEVELOPMENT LOG",
        title: "Moving, with evidence.",
        note:
          "We add verified progress to this log as development moves forward.",
        items: [
          {
            date: "2026.08",
            status: "Done",
            title: "Product concept and core requirements defined",
            text: "Product form, intended experience and key mechanical requirements were organized.",
          },
          {
            date: "2026.08",
            status: "Done",
            title: "Prototype requirements prepared",
            text: "Product requirements and reference materials were prepared for manufacturing review.",
          },
          {
            date: "2026.08",
            status: "In progress",
            title: "Mechanical design & CNC partners contacted",
            text: "Domestic partners are being reviewed for quotation and manufacturability.",
          },
          {
            date: "NEXT",
            status: "Planned",
            title: "Mechanical design & manufacturability validation",
            text: "Review the structure and tolerances required for physical production.",
          },
          {
            date: "NEXT",
            status: "Planned",
            title: "Working prototype",
            text: "Build the first prototype that can be assembled, used and tested.",
          },
        ],
      },

      development: {
        title: "Development Progress",
        steps: [
          ["01", "Concept Defined", "Product direction and experience defined"],
          ["02", "Engineering", "Manufacturability and structure review"],
          ["03", "Working Prototype", "First functional prototype"],
          ["04", "Testing & Iteration", "User testing and refinement"],
          ["05", "Initial Production", "Production and market entry"],
        ],
        currentTitle: "WHERE WE ARE NOW",
        currentText:
          "The product direction and core requirements are defined. We are now translating the concept into a manufacturable structure and preparing the first working prototype.",
      },

      business: {
        title: "Business Model",
        cards: [
          {
            title: "Core Product",
            text: "Build the brand and product experience around a durable personal object.",
          },
          {
            title: "Refills",
            text: "Create an ongoing purchase experience through refill products designed for repeated use.",
          },
          {
            title: "B2B & Expansion",
            text: "Explore corporate wellness, gifting and future product-line extensions.",
          },
        ],
      },

      support: {
        label: "SUPPORT / PARTNERSHIP",
        title: "Join the next stage of KOMEL.",
        cards: [
          {
            number: "01",
            type: "whatsapp",
            title: "Chat on WhatsApp",
            text: "Quickly connect with us via WhatsApp for KOMEL, development, partnership, or general inquiries.",
            button: "WhatsApp: +82 10-5836-1236",
            href: "https://wa.me/821058361236",
          },
          {
            number: "02",
            title: "Development / Manufacturing Partner",
            text: "We are looking for partners in mechanical design, CNC machining, prototyping and manufacturing.",
            button: "Partner Inquiry",
            href: "mailto:roekty@gmail.com",
          },
          {
            number: "03",
            title: "Investment Inquiry",
            text: "Project materials are available for investment and partnership discussions. Detailed technical materials may be shared separately when appropriate.",
            button: "Request Project Deck",
            href: "https://docs.google.com/forms/d/e/1FAIpQLSfbO6nuetMo9Hj-V39sEsQUXuuVLbBwi_-elaeJyHOmYSG5UQ/viewform",
          },
        ],
      },

      investment: {
        title: "From concept to working prototype",
        description:
          "We are seeking early-stage investment and development partners to move KOMEL toward a real working product.",
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
        amountValue: "Open to Discussion",
      },

      founder: {
        label: "FOUNDER",
        name: "TAEYOUNG KIM",
        role: "Founder, SVAS",
        story1:
          "KOMEL began as a project to create a new personal scent experience for short moments in everyday life.",
        story2:
          "We are now moving the idea toward a physical product through mechanical engineering and working-prototype development.",
      },

      waitlist: {
        title: "Be part of the KOMEL journey.",
        text: "Receive key product-development updates and milestones.",
        placeholder: "Enter your email",
        button: "Join Waitlist",
        invalid: "Please enter a valid email address.",
        note: "Only meaningful project updates.",
      },

      footer: {
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        contact: "Contact",
      },
    },
  };

  const t = content[lang];

  function submitWaitlist(event) {
    event.preventDefault();

    const cleanEmail = email.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail);

    if (!valid) {
      setMessage(t.waitlist.invalid);
      return;
    }

    const subject =
      lang === "ko"
        ? "KOMEL 대기자 등록"
        : "KOMEL Waitlist Registration";

    const body =
      lang === "ko"
        ? `KOMEL 대기자 등록을 신청합니다.\n\n이메일: ${cleanEmail}`
        : `I would like to join the KOMEL waitlist.\n\nEmail: ${cleanEmail}`;

    const mailtoUrl = `mailto:roekty@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;

    setMessage(
      lang === "ko"
        ? "메일 앱이 열립니다. 보내기를 눌러 등록을 완료해주세요."
        : "Your mail app will open. Please press Send to complete registration."
    );
  }

  return (
    <>
      <header className="siteHeader">
        <div className="container nav">
          <a className="brand" href="#top">
            SVAS
          </a>

          <nav className="desktopNav">
            <a href="#object">{t.nav.object}</a>
            <a href="#why">{t.nav.why}</a>
            <a href="#log">{t.nav.log}</a>
            <a href="#development">{t.nav.development}</a>
            <a href="#business">{t.nav.business}</a>
            <a href="#support">{t.nav.support}</a>
            <a href="#founder">{t.nav.founder}</a>
          </nav>

          <div className="navActions">
            <div className="languageSwitch">
              <button
                type="button"
                className={lang === "ko" ? "active" : ""}
                onClick={() => changeLanguage("ko")}
              >
                KR
              </button>

              <span>|</span>

              <button
                type="button"
                className={lang === "en" ? "active" : ""}
                onClick={() => changeLanguage("en")}
              >
                EN
              </button>
            </div>

            <a href="#support" className="navCTA">
              {t.topCta}
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="container heroGrid">
            <div className="heroCopy">
              <p className="sectionLabel">{t.hero.eyebrow}</p>

              <p className="heroIntro">
                {t.hero.intro1}
                <br />
                {t.hero.intro2}
              </p>

              <h1>KOMEL</h1>

              <p className="heroDescription">
                {t.hero.description1}
                <br />
                {t.hero.description2}
              </p>

              <div className="heroButtons">
                <a href="#object" className="primaryButton">
                  {t.hero.project}
                </a>

                <a href="#support" className="secondaryButton">
                  {t.hero.investor}
                </a>
              </div>

              <div className="currentStage">
                <span className="stageLabel">{t.hero.current}</span>

                <div className="stageRow">
                  <span>{t.hero.stage1}</span>
                  <b>›</b>
                  <span className="stageActive">{t.hero.stage2}</span>
                  <b>›</b>
                  <span>{t.hero.stage3}</span>
                </div>
              </div>
            </div>

            <div className="heroVisual">
              <ProductVisual large />
              <p className="visualCaption">{t.hero.caption}</p>
            </div>
          </div>
        </section>

        {/* OBJECT */}
        <section className="section objectSection" id="object">
          <div className="container">
            <div className="splitHeading">
              <div>
                <p className="sectionLabel">{t.object.label}</p>
                <h2>{t.object.title}</h2>
              </div>

              <p className="sectionIntro">{t.object.intro}</p>
            </div>

            <div className="objectShowcase">
              <div className="objectVisualPanel">
                <ProductVisual />
                <p className="visualCaption centered">{t.object.caption}</p>
              </div>

              <div className="valueGrid">
                {t.object.values.map((item) => (
                  <article className="valueCard" key={item.title}>
                    <div className="valueIcon">{item.icon}</div>
                    <small>{item.subtitle}</small>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="section whySection" id="why">
          <div className="container">
            <div className="whyIntro">
              <p className="sectionLabel">{t.why.label}</p>
              <h2>{t.why.title}</h2>
              <p>{t.why.body}</p>
            </div>

            <div className="whyGrid">
              {t.why.points.map((point) => (
                <article className="whyCard" key={point.number}>
                  <span>{point.number}</span>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* LIVE LOG */}
        <section className="section logSection" id="log">
          <div className="container">
            <div className="centerHeading">
              <p className="sectionLabel">{t.log.label}</p>
              <h2>{t.log.title}</h2>
              <p>{t.log.note}</p>
            </div>

            <div className="logList">
              {t.log.items.map((item, index) => (
                <article
                  className={`logItem ${
                    item.status === "진행 중" ||
                    item.status === "In progress"
                      ? "logCurrent"
                      : ""
                  }`}
                  key={`${item.date}-${index}`}
                >
                  <div className="logDate">{item.date}</div>
                  <div className="logDot" />

                  <div className="logContent">
                    <div className="logTop">
                      <h3>{item.title}</h3>
                      <span>{item.status}</span>
                    </div>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* DEVELOPMENT */}
        <section className="section developmentSection" id="development">
          <div className="container">
            <div className="centerHeading">
              <h2>{t.development.title}</h2>
            </div>

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

            <div className="currentPanel">
              <p className="sectionLabel">
                {t.development.currentTitle}
              </p>
              <p>{t.development.currentText}</p>
            </div>
          </div>
        </section>

        {/* BUSINESS */}
        <section className="section businessSection" id="business">
          <div className="container">
            <div className="centerHeading">
              <h2>{t.business.title}</h2>
            </div>

            <div className="businessGrid">
              {t.business.cards.map((card, index) => (
                <article className="businessCard" key={card.title}>
                  <span>0{index + 1}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SUPPORT */}
        <section className="section supportSection" id="support">
          <div className="container">
            <div className="centerHeading lightHeading">
              <p className="sectionLabel">{t.support.label}</p>
              <h2>{t.support.title}</h2>
            </div>

            <div className="supportGrid">
              {t.support.cards.map((card) => (
                <article
                  className={`supportCard ${
                    card.type === "whatsapp" ? "whatsappCard" : ""
                  }`}
                  key={card.number}
                >
                  <span className="supportNumber">{card.number}</span>

                  {card.type === "whatsapp" && (
                    <div className="whatsappIcon" aria-hidden="true">
                      <svg
                        viewBox="0 0 32 32"
                        width="28"
                        height="28"
                        fill="currentColor"
                      >
                        <path d="M16.04 3C8.85 3 3 8.7 3 15.72c0 2.24.6 4.43 1.74 6.35L3 29l7.12-1.82a13.2 13.2 0 0 0 5.91 1.42h.01C23.23 28.6 29 22.9 29 15.88 29 8.86 23.23 3 16.04 3Zm0 23.45a11 11 0 0 1-5.6-1.5l-.4-.24-4.22 1.08 1.13-4.02-.27-.41a10.46 10.46 0 0 1-1.65-5.64c0-5.8 4.94-10.52 11.02-10.52 6.07 0 11.01 4.72 11.01 10.52 0 5.8-4.94 10.73-11.02 10.73Zm6.05-7.91c-.33-.16-1.96-.95-2.27-1.06-.3-.1-.52-.16-.74.16-.22.32-.86 1.06-1.05 1.28-.19.22-.39.24-.72.08-.33-.16-1.4-.5-2.67-1.6a10.1 10.1 0 0 1-1.85-2.25c-.19-.32-.02-.5.14-.66.15-.15.33-.38.5-.57.16-.19.22-.32.33-.54.11-.21.05-.4-.03-.57-.08-.16-.74-1.74-1.02-2.38-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.58.08-.88.4-.3.33-1.16 1.12-1.16 2.72 0 1.6 1.19 3.15 1.36 3.37.16.21 2.34 3.51 5.67 4.92.79.34 1.41.54 1.89.69.79.25 1.51.21 2.08.13.63-.09 1.96-.79 2.24-1.55.27-.76.27-1.41.19-1.55-.08-.13-.3-.21-.63-.37Z" />
                      </svg>
                    </div>
                  )}

                  <h3>{card.title}</h3>
                  <p>{card.text}</p>

                  <a
                    href={card.href}
                    target={
                      card.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      card.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={
                      card.type === "whatsapp"
                        ? "whatsappButton"
                        : undefined
                    }
                  >
                    {card.button}

                    {card.type === "whatsapp" ? (
                      <span className="whatsappArrow">→</span>
                    ) : (
                      " →"
                    )}
                  </a>
                </article>
              ))}
            </div>

            <div className="investmentStrip">
              <div>
                <h3>{t.investment.title}</h3>
                <p>{t.investment.description}</p>
              </div>

              <div>
                <strong>{t.investment.fundsTitle}</strong>
                <ul>
                  {t.investment.funds.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="investmentFacts">
                <Fact
                  label={t.investment.stage}
                  value={t.investment.stageValue}
                />

                <Fact
                  label={t.investment.current}
                  value={t.investment.currentValue}
                />

                <Fact
                  label={t.investment.next}
                  value={t.investment.nextValue}
                />

                <Fact
                  label={t.investment.amount}
                  value={t.investment.amountValue}
                />
              </div>
            </div>
          </div>
        </section>

        {/* FOUNDER */}
        <section className="section founderSection" id="founder">
          <div className="container founderGrid">
            <div className="founderPhoto">
              {!founderImageError ? (
                <img
                  src="/founder.png"
                  alt="SVAS Founder"
                  onError={() => setFounderImageError(true)}
                />
              ) : (
                <div className="founderFallback">KT</div>
              )}
            </div>

            <div className="founderIdentity">
              <p className="sectionLabel">{t.founder.label}</p>
              <h2>{t.founder.name}</h2>
              <p>{t.founder.role}</p>
            </div>

            <div className="founderStory">
              <p>{t.founder.story1}</p>
              <p>{t.founder.story2}</p>
            </div>
          </div>
        </section>

        {/* WAITLIST */}
        <section className="waitlistSection" id="waitlist">
          <div className="container waitlistBox">
            <div>
              <h2>{t.waitlist.title}</h2>
              <p>{t.waitlist.text}</p>
            </div>

            <div>
              <form
                className="waitlistForm"
                onSubmit={submitWaitlist}
              >
                <input
                  type="email"
                  placeholder={t.waitlist.placeholder}
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                />

                <button type="submit">
                  {t.waitlist.button}
                </button>
              </form>

              <p className="waitMessage">{message}</p>
              <small>{t.waitlist.note}</small>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footerGrid">
          <strong>SVAS</strong>

          <span>© 2026 SVAS. All rights reserved.</span>

          <nav>
            <a href="#">{t.footer.privacy}</a>
            <a href="#">{t.footer.terms}</a>
            <a href="mailto:roekty@gmail.com">
              {t.footer.contact}
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}

function ProductVisual({ large = false }) {
  return (
    <div
      className={`productVisual ${
        large ? "productVisualLarge" : ""
      }`}
    >
      <div className="metalBody">
        <div className="capLine" />
        <span>SVAS</span>
      </div>

      <div className="woodBase">
        <div className="keyHole" />
        <div className="keyRing" />
      </div>
    </div>
  );
}

function Fact({ label, value }) {
  return (
    <div>
      <small>{label}</small>
      <strong>{value}</strong>
    </div>
  );
}
```
