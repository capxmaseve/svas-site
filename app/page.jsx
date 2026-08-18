"use client";

import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("ko");

  const t = {
    ko: {
      nav1: "제품",
      nav2: "철학",
      nav3: "개발 현황",
      nav4: "문의",

      status: "IN DEVELOPMENT",

      heroTitle1: "BREATHE",
      heroTitle2: "DIFFERENT.",

      heroDesc:
        "SVAS는 일상 속 짧은 순간에 향을 경험할 수 있는 새로운 형태의 휴대용 리필형 오브제를 개발하고 있습니다.",

      prototype: "현재 프로토타입 개발 단계",

      sectionLabel: "KOMEL",
      sectionTitle: "A NEW WAY TO EXPERIENCE SCENT.",

      sectionDesc:
        "KOMEL은 전자식도, 분사식도 아닙니다. 향을 머금은 내부 소재를 통해 사용자가 필요할 때 직접 향을 경험하는 휴대용 리필형 제품입니다.",

      feature1Title: "NON-ELECTRONIC",
      feature1Desc: "배터리와 충전이 필요 없는 구조",

      feature2Title: "NON-SPRAY",
      feature2Desc: "공간에 분사하지 않고 개인적으로 사용하는 방식",

      feature3Title: "REFILLABLE",
      feature3Desc: "반복 사용을 고려한 리필 구조",

      philosophyLabel: "WHY SVAS",
      philosophyTitle: "SCENT, DESIGNED AS AN OBJECT.",

      philosophyDesc:
        "우리는 향을 단순히 공간에 퍼뜨리는 방식에서 벗어나, 개인이 직접 소지하고 필요할 때 사용하는 하나의 오브제로 만들고자 합니다.",

      developmentLabel: "DEVELOPMENT",
      developmentTitle: "FROM IDEA TO PRODUCT.",

      step1: "CONCEPT",
      step1Desc: "제품 콘셉트 및 사용 방식 설계",

      step2: "ENGINEERING",
      step2Desc: "기구 구조 및 제조 가능성 검토",

      step3: "PROTOTYPE",
      step3Desc: "기능 검증용 시제품 개발",

      step4: "VALIDATION",
      step4Desc: "사용성 검증 및 개선",

      current: "CURRENT",

      founderLabel: "FOUNDER",
      founderTitle: "BUILDING SVAS FROM ZERO.",

      founderDesc:
        "SVAS는 하나의 질문에서 시작했습니다. 향을 경험하는 방식 자체를 새롭게 만들 수 있을까? 현재 KOMEL의 실제 제품화를 목표로 설계와 프로토타입 개발을 진행하고 있습니다.",

      contactLabel: "CONTACT",
      contactTitle: "LET'S BUILD WHAT'S NEXT.",

      contactDesc:
        "제품 개발, 제조, 투자 및 비즈니스 협업에 관한 문의를 기다립니다.",

      email: "CONTACT",
      footer: "© 2026 SVAS. All rights reserved.",
      confidential:
        "Product concept and specifications are subject to change during development.",
    },

    en: {
      nav1: "Product",
      nav2: "Philosophy",
      nav3: "Development",
      nav4: "Contact",

      status: "IN DEVELOPMENT",

      heroTitle1: "BREATHE",
      heroTitle2: "DIFFERENT.",

      heroDesc:
        "SVAS is developing a new refillable portable object designed to create a personal scent experience in everyday moments.",

      prototype: "Prototype currently in development",

      sectionLabel: "KOMEL",
      sectionTitle: "A NEW WAY TO EXPERIENCE SCENT.",

      sectionDesc:
        "KOMEL is neither electronic nor spray-based. It is a portable refillable product designed to let users experience scent personally whenever they need it.",

      feature1Title: "NON-ELECTRONIC",
      feature1Desc: "No battery. No charging.",

      feature2Title: "NON-SPRAY",
      feature2Desc: "A personal experience without spraying into the surrounding space.",

      feature3Title: "REFILLABLE",
      feature3Desc: "Designed for repeated use through a refillable system.",

      philosophyLabel: "WHY SVAS",
      philosophyTitle: "SCENT, DESIGNED AS AN OBJECT.",

      philosophyDesc:
        "We want to move beyond conventional ways of spreading scent into a space and turn scent into a personal object that can be carried and experienced on demand.",

      developmentLabel: "DEVELOPMENT",
      developmentTitle: "FROM IDEA TO PRODUCT.",

      step1: "CONCEPT",
      step1Desc: "Product concept and user experience",

      step2: "ENGINEERING",
      step2Desc: "Mechanical structure and manufacturability",

      step3: "PROTOTYPE",
      step3Desc: "Functional prototype development",

      step4: "VALIDATION",
      step4Desc: "User validation and refinement",

      current: "CURRENT",

      founderLabel: "FOUNDER",
      founderTitle: "BUILDING SVAS FROM ZERO.",

      founderDesc:
        "SVAS began with one question: Can we create a new way to experience scent? We are currently developing the engineering and prototype required to bring KOMEL into the real world.",

      contactLabel: "CONTACT",
      contactTitle: "LET'S BUILD WHAT'S NEXT.",

      contactDesc:
        "For product development, manufacturing, investment, and business collaboration inquiries.",

      email: "CONTACT",
      footer: "© 2026 SVAS. All rights reserved.",
      confidential:
        "Product concept and specifications are subject to change during development.",
    },
  };

  const text = t[lang];

  return (
    <main>
      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: #080808;
          color: #f5f5f5;
          font-family: Arial, Helvetica, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 78px;
          padding: 0 6%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(8, 8, 8, 0.86);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid #202020;
          z-index: 100;
        }

        .logo {
          font-size: 24px;
          font-weight: 900;
          letter-spacing: 6px;
        }

        .navRight {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .navLinks {
          display: flex;
          gap: 26px;
          font-size: 13px;
          color: #aaa;
        }

        .navLinks a:hover {
          color: white;
        }

        .language {
          display: flex;
          border: 1px solid #333;
          border-radius: 100px;
          overflow: hidden;
        }

        .language button {
          border: 0;
          background: transparent;
          color: #777;
          padding: 8px 11px;
          cursor: pointer;
          font-size: 11px;
        }

        .language .active {
          background: white;
          color: black;
        }

        .hero {
          min-height: 100vh;
          padding: 150px 8% 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-bottom: 1px solid #222;
        }

        .status {
          width: fit-content;
          border: 1px solid #444;
          border-radius: 100px;
          padding: 8px 14px;
          font-size: 10px;
          letter-spacing: 2px;
          margin-bottom: 35px;
          color: #aaa;
        }

        h1 {
          font-size: clamp(64px, 12vw, 180px);
          line-height: 0.82;
          letter-spacing: -7px;
          font-weight: 900;
        }

        .outline {
          color: transparent;
          -webkit-text-stroke: 1px #666;
        }

        .heroBottom {
          margin-top: 70px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
        }

        .heroDesc {
          max-width: 580px;
          font-size: 18px;
          line-height: 1.8;
          color: #aaa;
        }

        .prototype {
          font-size: 11px;
          color: #666;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        section {
          padding: 130px 8%;
          border-bottom: 1px solid #222;
        }

        .label {
          font-size: 11px;
          letter-spacing: 3px;
          color: #777;
          margin-bottom: 25px;
        }

        h2 {
          max-width: 1000px;
          font-size: clamp(42px, 7vw, 90px);
          line-height: 0.98;
          letter-spacing: -4px;
        }

        .description {
          max-width: 700px;
          color: #999;
          line-height: 1.9;
          font-size: 17px;
          margin-top: 40px;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-top: 90px;
          border-top: 1px solid #333;
        }

        .feature {
          padding: 35px 30px 35px 0;
          border-right: 1px solid #333;
        }

        .feature + .feature {
          padding-left: 30px;
        }

        .feature:last-child {
          border-right: none;
        }

        .featureNumber {
          color: #555;
          font-size: 11px;
          margin-bottom: 50px;
        }

        .feature h3 {
          font-size: 18px;
          margin-bottom: 15px;
        }

        .feature p {
          color: #777;
          font-size: 14px;
          line-height: 1.7;
        }

        .philosophy {
          min-height: 75vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .developmentGrid {
          margin-top: 80px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .developmentStep {
          min-height: 270px;
          padding: 25px;
          border: 1px solid #292929;
          margin-right: -1px;
          position: relative;
        }

        .developmentStep.current {
          border-color: #777;
          background: #111;
        }

        .stepNumber {
          font-size: 11px;
          color: #555;
        }

        .currentTag {
          position: absolute;
          top: 22px;
          right: 22px;
          font-size: 9px;
          letter-spacing: 1px;
          border: 1px solid #555;
          padding: 5px 8px;
          border-radius: 100px;
        }

        .stepContent {
          position: absolute;
          left: 25px;
          bottom: 25px;
          right: 25px;
        }

        .stepContent h3 {
          font-size: 16px;
          margin-bottom: 10px;
        }

        .stepContent p {
          color: #666;
          font-size: 13px;
          line-height: 1.6;
        }

        .founder {
          background: #eee;
          color: #080808;
        }

        .founder .label {
          color: #777;
        }

        .founder .description {
          color: #555;
        }

        .contact {
          min-height: 70vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .contactButton {
          margin-top: 50px;
          width: fit-content;
          padding: 17px 30px;
          border: 1px solid #555;
          border-radius: 100px;
          font-size: 12px;
          letter-spacing: 2px;
          transition: 0.2s;
        }

        .contactButton:hover {
          background: white;
          color: black;
        }

        footer {
          padding: 35px 8%;
          color: #555;
          font-size: 11px;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          border-top: 1px solid #222;
        }

        @media (max-width: 800px) {
          .nav {
            padding: 0 5%;
          }

          .navLinks {
            display: none;
          }

          .navRight {
            gap: 10px;
          }

          .hero {
            padding-left: 6%;
            padding-right: 6%;
          }

          h1 {
            letter-spacing: -4px;
          }

          .heroBottom {
            flex-direction: column;
            align-items: flex-start;
          }

          section {
            padding: 90px 6%;
          }

          h2 {
            letter-spacing: -2px;
          }

          .features {
            grid-template-columns: 1fr;
          }

          .feature,
          .feature + .feature {
            padding: 30px 0;
            border-right: none;
            border-bottom: 1px solid #333;
          }

          .featureNumber {
            margin-bottom: 25px;
          }

          .developmentGrid {
            grid-template-columns: 1fr;
          }

          .developmentStep {
            min-height: 190px;
            margin-bottom: -1px;
          }

          footer {
            flex-direction: column;
          }
        }
      `}</style>

      <nav className="nav">
        <a href="#" className="logo">
          SVAS
        </a>

        <div className="navRight">
          <div className="navLinks">
            <a href="#product">{text.nav1}</a>
            <a href="#philosophy">{text.nav2}</a>
            <a href="#development">{text.nav3}</a>
            <a href="#contact">{text.nav4}</a>
          </div>

          <div className="language">
            <button
              className={lang === "ko" ? "active" : ""}
              onClick={() => setLang("ko")}
            >
              KR
            </button>

            <button
              className={lang === "en" ? "active" : ""}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="status">{text.status}</div>

        <h1>{text.heroTitle1}</h1>
        <h1 className="outline">{text.heroTitle2}</h1>

        <div className="heroBottom">
          <p className="heroDesc">{text.heroDesc}</p>
          <p className="prototype">{text.prototype}</p>
        </div>
      </header>

      <section id="product">
        <div className="label">{text.sectionLabel}</div>

        <h2>{text.sectionTitle}</h2>

        <p className="description">{text.sectionDesc}</p>

        <div className="features">
          <div className="feature">
            <div className="featureNumber">01</div>
            <h3>{text.feature1Title}</h3>
            <p>{text.feature1Desc}</p>
          </div>

          <div className="feature">
            <div className="featureNumber">02</div>
            <h3>{text.feature2Title}</h3>
            <p>{text.feature2Desc}</p>
          </div>

          <div className="feature">
            <div className="featureNumber">03</div>
            <h3>{text.feature3Title}</h3>
            <p>{text.feature3Desc}</p>
          </div>
        </div>
      </section>

      <section id="philosophy" className="philosophy">
        <div className="label">{text.philosophyLabel}</div>

        <h2>{text.philosophyTitle}</h2>

        <p className="description">{text.philosophyDesc}</p>
      </section>

      <section id="development">
        <div className="label">{text.developmentLabel}</div>

        <h2>{text.developmentTitle}</h2>

        <div className="developmentGrid">
          <div className="developmentStep">
            <div className="stepNumber">01</div>
            <div className="stepContent">
              <h3>{text.step1}</h3>
              <p>{text.step1Desc}</p>
            </div>
          </div>

          <div className="developmentStep current">
            <div className="stepNumber">02</div>
            <div className="currentTag">{text.current}</div>
            <div className="stepContent">
              <h3>{text.step2}</h3>
              <p>{text.step2Desc}</p>
            </div>
          </div>

          <div className="developmentStep">
            <div className="stepNumber">03</div>
            <div className="stepContent">
              <h3>{text.step3}</h3>
              <p>{text.step3Desc}</p>
            </div>
          </div>

          <div className="developmentStep">
            <div className="stepNumber">04</div>
            <div className="stepContent">
              <h3>{text.step4}</h3>
              <p>{text.step4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="founder">
        <div className="label">{text.founderLabel}</div>

        <h2>{text.founderTitle}</h2>

        <p className="description">{text.founderDesc}</p>
      </section>

      <section id="contact" className="contact">
        <div className="label">{text.contactLabel}</div>

        <h2>{text.contactTitle}</h2>

        <p className="description">{text.contactDesc}</p>

        <a className="contactButton" href="mailto:roekty@gmail.com">
          {text.email} →
        </a>
      </section>

      <footer>
        <span>{text.footer}</span>
        <span>{text.confidential}</span>
      </footer>
    </main>
  );
}
