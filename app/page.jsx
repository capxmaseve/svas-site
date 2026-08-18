"use client";

import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("ko");

  const content = {
    ko: {
      nav: {
        about: "소개",
        product: "제품",
        progress: "개발 현황",
        contact: "문의",
      },

      hero: {
        badge: "PRODUCT IN DEVELOPMENT",
        title1: "BREATHE",
        title2: "DIFFERENT.",
        desc: "SVAS는 향을 경험하는 새로운 방식을 만들고 있습니다.",
        sub: "현재 KOMEL의 실제 제품화를 위한 기구설계 및 시제품 개발을 진행하고 있습니다.",
      },

      intro: {
        label: "SVAS",
        title: "향을 소지하는 새로운 방식.",
        desc:
          "우리는 향을 공간 전체에 퍼뜨리는 방식이 아니라, 개인이 직접 소지하고 필요할 때 경험할 수 있는 새로운 형태의 제품을 만들고 있습니다.",
      },

      product: {
        label: "KOMEL",
        title: "A PERSONAL SCENT OBJECT.",
        desc:
          "KOMEL은 휴대성과 반복 사용을 고려해 개발 중인 비전동·비분사형 리필 제품입니다. 사용자가 필요할 때 개인적으로 향을 경험할 수 있도록 설계하고 있습니다.",

        item1Title: "PORTABLE",
        item1Desc: "일상에서 휴대할 수 있는 소형 오브제",

        item2Title: "NON-SPRAY",
        item2Desc: "주변 공간에 향을 분사하지 않는 개인형 방식",

        item3Title: "REFILLABLE",
        item3Desc: "반복 사용을 고려한 리필 구조",

        note:
          "현재 공개된 내용은 제품 콘셉트에 대한 소개이며, 세부 구조 및 기술 사양은 개발 과정에서 변경될 수 있습니다.",
      },

      why: {
        label: "WHY KOMEL",
        title: "SCENT SHOULD BE PERSONAL.",
        desc:
          "향은 공간을 채우는 것만이 아니라, 개인이 원하는 순간 직접 선택하고 경험할 수도 있다고 생각합니다. KOMEL은 그 경험을 하나의 휴대 가능한 오브제로 구현하는 것을 목표로 합니다.",
      },

      development: {
        label: "DEVELOPMENT",
        title: "FROM IDEA TO PRODUCT.",
        steps: [
          {
            no: "01",
            title: "CONCEPT",
            desc: "제품 콘셉트 및 사용 경험 정의",
            status: "done",
          },
          {
            no: "02",
            title: "ENGINEERING",
            desc: "기구 구조 및 제조 가능성 검토",
            status: "current",
          },
          {
            no: "03",
            title: "PROTOTYPE",
            desc: "기능 검증용 워킹 시제품 제작",
            status: "next",
          },
          {
            no: "04",
            title: "VALIDATION",
            desc: "사용성 테스트 및 구조 개선",
            status: "next",
          },
        ],
        current: "CURRENT",
      },

      founder: {
        label: "FOUNDER STORY",
        title: "STARTED FROM A REAL EXPERIENCE.",
        desc1:
          "SVAS는 태국에서 향 제품을 직접 경험한 이후 시작되었습니다. 이후 실제 판매 테스트와 제품 구조에 대한 반복적인 고민을 거치며 단순 수입 제품이 아닌 새로운 형태의 제품을 개발하는 방향으로 발전했습니다.",
        desc2:
          "현재는 KOMEL을 실제 제조 가능한 제품으로 만들기 위해 기구설계와 시제품 개발 단계에 집중하고 있습니다.",
      },

      contact: {
        label: "CONTACT",
        title: "LET'S BUILD WHAT'S NEXT.",
        desc:
          "제품 개발, 제조 협력, 투자 및 비즈니스 파트너십에 관한 문의를 기다립니다.",
        development: "PRODUCT DEVELOPMENT",
        manufacturing: "MANUFACTURING",
        investment: "INVESTMENT",
        partnership: "PARTNERSHIP",
        button: "CONTACT",
      },

      footer1: "© 2026 SVAS. All rights reserved.",
      footer2: "KOMEL is currently under development.",
    },

    en: {
      nav: {
        about: "About",
        product: "Product",
        progress: "Development",
        contact: "Contact",
      },

      hero: {
        badge: "PRODUCT IN DEVELOPMENT",
        title1: "BREATHE",
        title2: "DIFFERENT.",
        desc: "SVAS is creating a new way to experience scent.",
        sub: "KOMEL is currently undergoing mechanical engineering and prototype development.",
      },

      intro: {
        label: "SVAS",
        title: "A NEW WAY TO CARRY SCENT.",
        desc:
          "We are creating a new type of product that allows people to carry scent personally and experience it whenever they choose, rather than dispersing it throughout a space.",
      },

      product: {
        label: "KOMEL",
        title: "A PERSONAL SCENT OBJECT.",
        desc:
          "KOMEL is a portable, refillable, non-electronic and non-spray product currently in development. It is designed to provide a personal scent experience whenever the user chooses.",

        item1Title: "PORTABLE",
        item1Desc: "A compact object designed for everyday carry",

        item2Title: "NON-SPRAY",
        item2Desc: "A personal experience without spraying into the surrounding space",

        item3Title: "REFILLABLE",
        item3Desc: "Designed for repeated use through a refillable system",

        note:
          "The information shown here introduces the product concept only. Detailed structures and technical specifications may change during development.",
      },

      why: {
        label: "WHY KOMEL",
        title: "SCENT SHOULD BE PERSONAL.",
        desc:
          "We believe scent does not always need to fill a room. It can be something personal—chosen and experienced at the exact moment the user wants it. KOMEL aims to turn that experience into a portable object.",
      },

      development: {
        label: "DEVELOPMENT",
        title: "FROM IDEA TO PRODUCT.",
        steps: [
          {
            no: "01",
            title: "CONCEPT",
            desc: "Product concept and user experience definition",
            status: "done",
          },
          {
            no: "02",
            title: "ENGINEERING",
            desc: "Mechanical structure and manufacturability review",
            status: "current",
          },
          {
            no: "03",
            title: "PROTOTYPE",
            desc: "Functional working prototype development",
            status: "next",
          },
          {
            no: "04",
            title: "VALIDATION",
            desc: "Usability testing and structural refinement",
            status: "next",
          },
        ],
        current: "CURRENT",
      },

      founder: {
        label: "FOUNDER STORY",
        title: "STARTED FROM A REAL EXPERIENCE.",
        desc1:
          "SVAS began after experiencing a scent product in Thailand. Following an early sales test and repeated exploration of product structures, the project evolved from simply selling an existing product into developing a new product concept.",
        desc2:
          "Today, the focus is on engineering KOMEL into a manufacturable product and developing its first working prototype.",
      },

      contact: {
        label: "CONTACT",
        title: "LET'S BUILD WHAT'S NEXT.",
        desc:
          "We welcome inquiries regarding product development, manufacturing, investment, and business partnerships.",
        development: "PRODUCT DEVELOPMENT",
        manufacturing: "MANUFACTURING",
        investment: "INVESTMENT",
        partnership: "PARTNERSHIP",
        button: "CONTACT",
      },

      footer1: "© 2026 SVAS. All rights reserved.",
      footer2: "KOMEL is currently under development.",
    },
  };

  const t = content[lang];

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
          background: #090909;
          color: #f4f4f4;
          font-family: Arial, Helvetica, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          font-family: inherit;
        }

        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 76px;
          padding: 0 6%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(9, 9, 9, 0.88);
          backdrop-filter: blur(15px);
          border-bottom: 1px solid #1d1d1d;
          z-index: 100;
        }

        .logo {
          font-weight: 900;
          letter-spacing: 6px;
          font-size: 21px;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-links {
          display: flex;
          gap: 25px;
          font-size: 12px;
          color: #909090;
        }

        .nav-links a:hover {
          color: white;
        }

        .lang {
          display: flex;
          border: 1px solid #333;
          border-radius: 30px;
          overflow: hidden;
        }

        .lang button {
          border: none;
          background: transparent;
          color: #777;
          padding: 7px 10px;
          font-size: 10px;
          cursor: pointer;
        }

        .lang .active {
          background: white;
          color: black;
        }

        .hero {
          min-height: 100vh;
          padding: 150px 8% 85px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-bottom: 1px solid #202020;
        }

        .badge {
          width: fit-content;
          padding: 7px 13px;
          border: 1px solid #464646;
          border-radius: 40px;
          color: #999;
          font-size: 9px;
          letter-spacing: 2px;
          margin-bottom: 32px;
        }

        .hero h1 {
          font-size: clamp(70px, 11vw, 165px);
          line-height: 0.82;
          letter-spacing: -7px;
          font-weight: 900;
        }

        .outline {
          color: transparent;
          -webkit-text-stroke: 1px #444;
        }

        .hero-bottom {
          margin-top: 65px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 40px;
        }

        .hero-copy {
          max-width: 630px;
        }

        .hero-copy p:first-child {
          font-size: 19px;
          line-height: 1.7;
          margin-bottom: 12px;
        }

        .hero-copy p:last-child {
          color: #777;
          line-height: 1.7;
          font-size: 14px;
        }

        section {
          padding: 125px 8%;
          border-bottom: 1px solid #202020;
        }

        .label {
          font-size: 10px;
          letter-spacing: 3px;
          color: #6e6e6e;
          margin-bottom: 24px;
        }

        h2 {
          max-width: 1050px;
          font-size: clamp(42px, 7vw, 88px);
          line-height: 0.98;
          letter-spacing: -4px;
        }

        .desc {
          max-width: 720px;
          margin-top: 38px;
          color: #969696;
          line-height: 1.9;
          font-size: 16px;
        }

        .intro {
          min-height: 70vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .product-grid {
          margin-top: 85px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid #303030;
          border-bottom: 1px solid #303030;
        }

        .product-card {
          padding: 34px 28px;
          min-height: 205px;
          border-right: 1px solid #303030;
        }

        .product-card:last-child {
          border-right: 0;
        }

        .product-card span {
          font-size: 10px;
          color: #555;
        }

        .product-card h3 {
          margin-top: 58px;
          margin-bottom: 12px;
          font-size: 17px;
        }

        .product-card p {
          color: #747474;
          font-size: 13px;
          line-height: 1.7;
        }

        .note {
          margin-top: 25px;
          max-width: 760px;
          color: #555;
          font-size: 11px;
          line-height: 1.7;
        }

        .why {
          min-height: 75vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          margin-top: 75px;
        }

        .step {
          min-height: 255px;
          border: 1px solid #292929;
          margin-right: -1px;
          padding: 24px;
          position: relative;
        }

        .step.current {
          background: #121212;
          border-color: #777;
        }

        .step-no {
          color: #555;
          font-size: 10px;
        }

        .current {
          position: absolute;
          top: 20px;
          right: 20px;
          padding: 5px 8px;
          border: 1px solid #555;
          border-radius: 30px;
          font-size: 8px;
          letter-spacing: 1px;
        }

        .step-bottom {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 24px;
        }

        .step-bottom h3 {
          margin-bottom: 9px;
          font-size: 15px;
        }

        .step-bottom p {
          font-size: 12px;
          line-height: 1.6;
          color: #676767;
        }

        .founder {
          background: #efefef;
          color: #090909;
        }

        .founder .label {
          color: #777;
        }

        .founder .story {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-top: 50px;
          max-width: 1000px;
        }

        .founder .story p {
          color: #555;
          line-height: 1.9;
          font-size: 15px;
        }

        .contact {
          min-height: 80vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .contact-types {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          max-width: 850px;
          margin-top: 45px;
          border-top: 1px solid #303030;
          border-bottom: 1px solid #303030;
        }

        .contact-types div {
          padding: 22px 15px 22px 0;
          color: #777;
          font-size: 10px;
          letter-spacing: 1px;
          border-right: 1px solid #303030;
        }

        .contact-types div + div {
          padding-left: 15px;
        }

        .contact-types div:last-child {
          border-right: 0;
        }

        .contact-btn {
          margin-top: 45px;
          width: fit-content;
          padding: 16px 28px;
          border: 1px solid #555;
          border-radius: 40px;
          font-size: 11px;
          letter-spacing: 2px;
          transition: 0.2s;
        }

        .contact-btn:hover {
          background: white;
          color: black;
        }

        footer {
          padding: 30px 8%;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          color: #505050;
          font-size: 10px;
        }

        @media (max-width: 850px) {
          .nav {
            padding: 0 5%;
          }

          .nav-links {
            display: none;
          }

          .hero {
            padding-left: 6%;
            padding-right: 6%;
          }

          .hero h1 {
            letter-spacing: -4px;
          }

          .hero-bottom {
            flex-direction: column;
            align-items: flex-start;
          }

          section {
            padding: 90px 6%;
          }

          h2 {
            letter-spacing: -2px;
          }

          .product-grid,
          .steps,
          .contact-types {
            grid-template-columns: 1fr;
          }

          .product-card {
            border-right: 0;
            border-bottom: 1px solid #303030;
          }

          .product-card:last-child {
            border-bottom: 0;
          }

          .step {
            min-height: 180px;
            margin-bottom: -1px;
          }

          .founder .story {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .contact-types div {
            border-right: 0;
            border-bottom: 1px solid #303030;
            padding: 18px 0;
          }

          .contact-types div + div {
            padding-left: 0;
          }

          .contact-types div:last-child {
            border-bottom: 0;
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

        <div className="nav-right">
          <div className="nav-links">
            <a href="#about">{t.nav.about}</a>
            <a href="#product">{t.nav.product}</a>
            <a href="#development">{t.nav.progress}</a>
            <a href="#contact">{t.nav.contact}</a>
          </div>

          <div className="lang">
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
        <div className="badge">{t.hero.badge}</div>

        <h1>{t.hero.title1}</h1>
        <h1 className="outline">{t.hero.title2}</h1>

        <div className="hero-bottom">
          <div className="hero-copy">
            <p>{t.hero.desc}</p>
            <p>{t.hero.sub}</p>
          </div>
        </div>
      </header>

      <section id="about" className="intro">
        <div className="label">{t.intro.label}</div>
        <h2>{t.intro.title}</h2>
        <p className="desc">{t.intro.desc}</p>
      </section>

      <section id="product">
        <div className="label">{t.product.label}</div>

        <h2>{t.product.title}</h2>

        <p className="desc">{t.product.desc}</p>

        <div className="product-grid">
          <div className="product-card">
            <span>01</span>
            <h3>{t.product.item1Title}</h3>
            <p>{t.product.item1Desc}</p>
          </div>

          <div className="product-card">
            <span>02</span>
            <h3>{t.product.item2Title}</h3>
            <p>{t.product.item2Desc}</p>
          </div>

          <div className="product-card">
            <span>03</span>
            <h3>{t.product.item3Title}</h3>
            <p>{t.product.item3Desc}</p>
          </div>
        </div>

        <p className="note">{t.product.note}</p>
      </section>

      <section className="why">
        <div className="label">{t.why.label}</div>
        <h2>{t.why.title}</h2>
        <p className="desc">{t.why.desc}</p>
      </section>

      <section id="development">
        <div className="label">{t.development.label}</div>

        <h2>{t.development.title}</h2>

        <div className="steps">
          {t.development.steps.map((step) => (
            <div
              className={`step ${step.status === "current" ? "current" : ""}`}
              key={step.no}
            >
              <div className="step-no">{step.no}</div>

              {step.status === "current" && (
                <div className="current">{t.development.current}</div>
              )}

              <div className="step-bottom">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="founder">
        <div className="label">{t.founder.label}</div>

        <h2>{t.founder.title}</h2>

        <div className="story">
          <p>{t.founder.desc1}</p>
          <p>{t.founder.desc2}</p>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="label">{t.contact.label}</div>

        <h2>{t.contact.title}</h2>

        <p className="desc">{t.contact.desc}</p>

        <div className="contact-types">
          <div>{t.contact.development}</div>
          <div>{t.contact.manufacturing}</div>
          <div>{t.contact.investment}</div>
          <div>{t.contact.partnership}</div>
        </div>

        <a className="contact-btn" href="mailto:roekty@gmail.com">
          {t.contact.button} →
        </a>
      </section>

      <footer>
        <span>{t.footer1}</span>
        <span>{t.footer2}</span>
      </footer>
    </main>
  );
}
