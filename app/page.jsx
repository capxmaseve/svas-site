"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("ko");
  const [email, setEmail] = useState("");
  const [waitMessage, setWaitMessage] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem("svas-language");
    if (saved === "en" || saved === "ko") {
      setLang(saved);
    }
  }, []);

  const changeLanguage = (nextLang) => {
    setLang(nextLang);
    setWaitMessage("");
    window.localStorage.setItem("svas-language", nextLang);
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
        eyebrow: "새로운 퍼스널 향 경험",
        headline1: "당신의 하루에,",
        headline2: "짧은 리셋을 선물합니다.",
        description:
          "휴대가 간편한 · 리필형 · 비전자식 · 비분사형\n나만의 퍼스널 향 오브제",
        project: "프로젝트 보기",
        investor: "투자자료 요청",
        statusLabel: "현재 단계",
        status1: "콘셉트 정의",
        status2: "기구설계 진행 중",
        status3: "워킹 시제품 제작 예정",
        conceptNote:
          "콘셉트 시각화 이미지입니다. 최종 제품은 개발 과정에서 변경될 수 있습니다.",
      },

      features: [
        ["휴대성", "언제 어디서나 간편하게"],
        ["리필형", "반복해서 사용할 수 있는 구조"],
        ["비전자식", "충전 없이 항상 준비된 상태"],
        ["비분사형", "주변을 방해하지 않는 개인적인 경험"],
      ],

      problem: {
        label: "문제 상황",
        title1: "바쁜 하루,",
        title2: "우리는 집중력을 잃습니다.",
        text:
          "업무, 공부, 운전, 이동 속에서 우리는 짧게 리프레시하고 싶은 순간을 반복해서 마주합니다.\n\n지금, 그 짧은 순간을 위한 새로운 선택지가 필요합니다.",
      },

      solution: {
        label: "해결책",
        text:
          "KOMEL은 언제 어디서나 사용할 수 있는 휴대형 리필 퍼스널 향 오브제를 개발하는 프로젝트입니다.",
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
          "실제 검증 결과가 생길 때마다 이 영역에 실제 수치와 성과를 추가합니다.",
      },

      progress: {
        title: "개발 진행상황",
        steps: [
          ["01", "콘셉트 정의", "제품 방향 및 핵심 경험 정의"],
          ["02", "기구설계", "실제 제조 가능한 구조 검토"],
          ["03", "워킹 시제품", "실제로 작동하는 시제품 제작"],
          ["04", "테스트 및 개선", "사용자 테스트와 반복 개선"],
          ["05", "초기 생산", "초기 생산 및 시장 진입"],
        ],
        currentTitle: "현재 위치",
        currentText:
          "제품 방향과 핵심 요구사항을 정의했으며, 현재 실제 제조 가능한 구조로 전환하기 위한 기구설계와 시제품 제작 준비를 진행하고 있습니다.",
        currentItems: [
          ["제품 방향", "정의 완료"],
          ["기구설계", "진행 중"],
          ["제작 파트너", "접촉 중"],
          ["다음 단계", "워킹 시제품"],
        ],
      },

      business: {
        title: "비즈니스 모델",
        modelTitle: "제품 구조",
        modelText:
          "본체를 한 번 구매하고 리필형 소비재를 반복적으로 사용하는 구조를 지향합니다.",
        targetTitle: "목표 고객",
        targets: [
          "업무 집중이 필요한 직장인",
          "학생 및 수험생",
          "운전자 및 이동이 많은 사용자",
          "웰니스·선물·기업 복지 시장",
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
        founder: "창업자에게 문의",
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
        text:
          "KOMEL은 일상 속 짧은 순간을 위한 새로운 퍼스널 향 경험을 만들기 위해 시작한 프로젝트입니다.\n\n현재 아이디어를 실제 제품으로 전환하기 위해 기구설계와 워킹 시제품 개발을 진행하고 있습니다.",
      },

      waitlist: {
        title: "KOMEL의 여정에 함께하세요.",
        text: "제품 개발과 주요 진행상황을 가장 먼저 받아보실 수 있습니다.",
        placeholder: "이메일을 입력하세요",
        button: "대기자 등록",
        success: "등록되었습니다. 감사합니다.",
        invalid: "올바른 이메일 주소를 입력해주세요.",
        note: "스팸 메일은 보내지 않습니다.",
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
        eyebrow: "A NEW PERSONAL SCENT EXPERIENCE",
        headline1: "A small reset",
        headline2: "for your everyday life.",
        description:
          "Portable · Refillable · Non-electronic · Non-spray\nA personal scent object for everyday moments.",
        project: "View Project",
        investor: "Request Investor Deck",
        statusLabel: "CURRENT STATUS",
        status1: "Concept Defined",
        status2: "Engineering in Progress",
        status3: "Working Prototype Next",
        conceptNote:
          "Concept visualization. Final product design may change during development.",
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
        text:
          "Work, study, driving and travel create repeated moments when we want a short reset.\n\nThose small moments deserve a better option.",
      },

      solution: {
        label: "OUR SOLUTION",
        text:
          "KOMEL is a project developing a compact, refillable personal scent object designed for use anytime and anywhere.",
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
          "Verified metrics and real traction will be added here as development progresses.",
      },

      progress: {
        title: "Development Progress",
        steps: [
          ["01", "Concept Defined", "Product direction and core experience"],
          ["02", "Engineering", "Manufacturability and structure review"],
          ["03", "Working Prototype", "First functional prototype"],
          ["04", "Testing & Iteration", "User testing and refinement"],
          ["05", "Initial Production", "Production and market entry"],
        ],
        currentTitle: "WHERE WE ARE NOW",
        currentText:
          "The product direction and core requirements are defined. We are now translating the concept into a manufacturable structure and preparing the first working prototype.",
        currentItems: [
          ["Product Direction", "Defined"],
          ["Engineering", "In Progress"],
          ["Prototype Partners", "Contacted"],
          ["Next Milestone", "Working Prototype"],
        ],
      },

      business: {
        title: "Business Model",
        modelTitle: "Product Model",
        modelText:
          "The model begins with a durable core object supported by repeat purchases of refill products.",
        targetTitle: "Target Users",
        targets: [
          "Knowledge workers",
          "Students and test takers",
          "Drivers and people on the move",
          "Wellness, gifting and corporate programs",
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
        founder: "Contact Founder",
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
        text:
          "KOMEL began as a project to create a new personal scent experience for short moments in everyday life.\n\nWe are now moving the concept toward a real product through mechanical engineering and working-prototype development.",
      },

      waitlist: {
        title: "Be part of KOMEL's journey.",
        text: "Receive major product-development updates and milestones.",
        placeholder: "Enter your email",
        button: "Join Waitlist",
        success: "Thank you. You are on the list.",
        invalid: "Please enter a valid email address.",
        note: "No spam. Only meaningful project updates.",
      },

      footer: {
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        contact: "Contact",
      },
    },
  };

  const t = content[lang];

  const handleWaitlist = (e) => {
    e.preventDefault();

    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    if (!valid) {
      setWaitMessage(t.waitlist.invalid);
      return;
    }

    setWaitMessage(t.waitlist.success);
    setEmail("");
  };

  return (
    <>
      <style>{`
        :root {
          --bg:#f5f0e8;
          --paper:#fbf9f5;
          --soft:#eee6d9;
          --ink:#171511;
          --muted:#6f695f;
          --gold:#a97938;
          --gold2:#c79b5b;
          --dark:#11110f;
          --line:rgba(23,21,17,.12);
        }

        * {
          box-sizing:border-box;
        }

        html {
          scroll-behavior:smooth;
        }

        body {
          margin:0;
          background:var(--bg);
          color:var(--ink);
          font-family:
            ${lang === "ko"
              ? '"Pretendard","Noto Sans KR",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif'
              : '"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif'};
          line-height:1.6;
          -webkit-font-smoothing:antialiased;
        }

        button,
        input {
          font:inherit;
        }

        a {
          color:inherit;
          text-decoration:none;
        }

        .wrap {
          width:min(1180px,calc(100% - 48px));
          margin:0 auto;
        }

        .serif {
          font-family:Georgia,"Times New Roman",serif;
        }

        .eyebrow {
          color:var(--gold);
          font-size:11px;
          font-weight:800;
          letter-spacing:.12em;
          text-transform:uppercase;
        }

        /* HEADER */

        .header {
          position:fixed;
          z-index:100;
          top:0;
          left:0;
          right:0;
          background:rgba(245,240,232,.92);
          backdrop-filter:blur(14px);
          border-bottom:1px solid rgba(23,21,17,.06);
        }

        .nav {
          height:70px;
          display:flex;
          align-items:center;
          gap:28px;
        }

        .logo {
          margin-right:auto;
          font-size:27px;
          font-weight:800;
          letter-spacing:.07em;
        }

        .navlinks {
          display:flex;
          gap:29px;
          font-size:12px;
          font-weight:650;
        }

        .navlinks a {
          opacity:.74;
        }

        .navlinks a:hover {
          opacity:1;
        }

        .rightnav {
          display:flex;
          align-items:center;
          gap:14px;
        }

        .language {
          display:flex;
          align-items:center;
          gap:6px;
          font-size:11px;
        }

        .language button {
          border:0;
          background:transparent;
          padding:3px;
          color:#8c857a;
          cursor:pointer;
        }

        .language button.active {
          color:#111;
          font-weight:800;
        }

        .langline {
          color:#bbb3a6;
        }

        .topcta {
          border:0;
          border-radius:999px;
          background:#111;
          color:#fff;
          padding:11px 17px;
          font-size:11px;
          font-weight:750;
        }

        /* HERO */

        .hero {
          padding:120px 0 38px;
          min-height:690px;
          overflow:hidden;
          position:relative;
        }

        .hero:after {
          content:"";
          position:absolute;
          right:-7%;
          top:-8%;
          width:58%;
          height:95%;
          background:
            radial-gradient(circle at center,rgba(190,155,106,.18),transparent 65%);
          pointer-events:none;
        }

        .heroGrid {
          position:relative;
          z-index:1;
          display:grid;
          grid-template-columns:1fr .95fr;
          gap:60px;
          align-items:center;
        }

        .heroIntro {
          font-size:23px;
          line-height:1.4;
          font-weight:750;
          margin:0 0 4px;
        }

        .heroName {
          font-family:Georgia,"Times New Roman",serif;
          font-size:clamp(74px,10vw,128px);
          font-weight:400;
          letter-spacing:-.035em;
          line-height:.82;
          margin:10px 0 27px;
        }

        .heroDescription {
          white-space:pre-line;
          max-width:540px;
          margin:0;
          font-size:18px;
          line-height:1.55;
          font-weight:620;
        }

        .buttons {
          display:flex;
          flex-wrap:wrap;
          gap:12px;
          margin-top:29px;
        }

        .button {
          min-height:47px;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding:0 24px;
          border-radius:4px;
          border:1px solid #171511;
          font-size:12px;
          font-weight:750;
        }

        .button.dark {
          background:#171511;
          color:#fff;
        }

        .button.gold {
          background:var(--gold);
          border-color:var(--gold);
          color:white;
        }

        .heroStatus {
          margin-top:34px;
        }

        .heroStatusTitle {
          font-size:11px;
          font-weight:800;
          color:var(--gold);
          margin-bottom:6px;
        }

        .statusRow {
          display:flex;
          flex-wrap:wrap;
          gap:9px;
          align-items:center;
          font-size:11px;
        }

        .statusRow .current {
          color:var(--gold);
          font-weight:800;
        }

        .arrow {
          color:#aaa297;
        }

        .heroVisual {
          min-height:500px;
          position:relative;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .heroVisual img {
          width:min(100%,500px);
          max-height:510px;
          object-fit:contain;
          filter:drop-shadow(0 25px 25px rgba(0,0,0,.17));
        }

        .conceptNote {
          position:absolute;
          bottom:7px;
          right:0;
          max-width:260px;
          text-align:right;
          font-size:10px;
          color:var(--muted);
        }

        .features {
          position:absolute;
          right:-135px;
          top:75px;
          width:210px;
          display:grid;
          gap:20px;
        }

        .feature {
          display:grid;
          grid-template-columns:38px 1fr;
          gap:10px;
          align-items:center;
        }

        .featureIcon {
          display:flex;
          align-items:center;
          justify-content:center;
          width:38px;
          height:38px;
          border:1px solid var(--gold2);
          border-radius:50%;
          color:var(--gold);
          font-size:16px;
        }

        .feature strong {
          font-size:12px;
          display:block;
        }

        .feature span {
          font-size:10px;
          color:var(--muted);
          display:block;
          margin-top:1px;
        }

        /* PROBLEM */

        .problemGrid {
          display:grid;
          grid-template-columns:1fr 1fr;
        }

        .problem,
        .solution {
          min-height:390px;
          padding:60px max(45px,calc((100vw - 1180px)/2));
        }

        .problem {
          color:white;
          background:#0f0f0e;
          position:relative;
          overflow:hidden;
        }

        .problemImage {
          position:absolute;
          inset:0 0 0 43%;
          opacity:.52;
          width:57%;
          height:100%;
          object-fit:cover;
        }

        .problemContent {
          position:relative;
          z-index:1;
          max-width:480px;
        }

        .problemTitle,
        .solutionTitle {
          font-family:Georgia,"Times New Roman",serif;
          font-size:clamp(35px,4vw,47px);
          font-weight:400;
          line-height:1.15;
          margin:14px 0 20px;
        }

        .problemText,
        .solutionText {
          max-width:490px;
          font-size:13px;
          white-space:pre-line;
        }

        .problemText {
          color:#d0cbc2;
        }

        .solutionText {
          color:var(--muted);
        }

        .solution {
          background:#fbf9f5;
        }

        .solutionModes {
          display:flex;
          gap:33px;
          margin-top:30px;
        }

        .mode {
          font-size:11px;
          text-align:center;
        }

        .modeIcon {
          width:42px;
          height:42px;
          display:flex;
          align-items:center;
          justify-content:center;
          border:1px solid var(--line);
          border-radius:50%;
          margin:0 auto 6px;
        }

        /* GENERIC SECTION */

        .section {
          padding:88px 0;
        }

        .section.soft {
          background:#faf7f1;
        }

        .centerTitle {
          text-align:center;
          margin-bottom:39px;
        }

        .centerTitle h2 {
          margin:6px 0 0;
          color:var(--gold);
          font-family:Georgia,"Times New Roman",serif;
          font-size:38px;
          font-weight:400;
        }

        /* EVIDENCE */

        .evidenceGrid {
          display:grid;
          grid-template-columns:repeat(4,1fr);
          border:1px solid var(--line);
          border-radius:9px;
          overflow:hidden;
        }

        .evidenceCard {
          min-height:135px;
          padding:26px 22px;
          border-right:1px solid var(--line);
          background:rgba(255,255,255,.35);
        }

        .evidenceCard:last-child {
          border-right:0;
        }

        .evidenceCard small {
          display:block;
          color:var(--muted);
          font-size:10px;
        }

        .evidenceCard strong {
          display:block;
          font-size:17px;
          line-height:1.4;
          margin-top:8px;
        }

        .evidenceNote {
          text-align:center;
          margin-top:17px;
          font-size:10px;
          color:var(--muted);
        }

        /* DEVELOPMENT */

        .timeline {
          display:grid;
          grid-template-columns:repeat(5,1fr);
          margin-top:46px;
          position:relative;
        }

        .timeline:before {
          content:"";
          height:1px;
          background:#cec6b9;
          position:absolute;
          top:24px;
          left:10%;
          right:10%;
        }

        .step {
          text-align:center;
          z-index:1;
        }

        .stepCircle {
          width:49px;
          height:49px;
          border-radius:50%;
          border:1px solid #bbb3a7;
          background:var(--bg);
          display:flex;
          justify-content:center;
          align-items:center;
          margin:0 auto 14px;
          font-size:11px;
          font-weight:750;
        }

        .step.done .stepCircle,
        .step.current .stepCircle {
          background:var(--gold);
          border-color:var(--gold);
          color:white;
        }

        .step h3 {
          font-size:11px;
          margin:0 0 5px;
        }

        .step p {
          font-size:10px;
          color:var(--muted);
          margin:0;
        }

        .currentPanel {
          display:grid;
          grid-template-columns:1.5fr repeat(4,1fr);
          gap:18px;
          margin-top:42px;
          padding:25px 27px;
          border:1px solid var(--line);
          background:#f0e8dc;
          border-radius:9px;
        }

        .currentPanel p {
          font-size:10px;
          color:var(--muted);
          margin:5px 0 0;
        }

        .currentStat strong {
          font-size:11px;
        }

        /* BUSINESS */

        .businessGrid {
          display:grid;
          grid-template-columns:repeat(3,1fr);
          border:1px solid var(--line);
          border-radius:9px;
          overflow:hidden;
        }

        .businessCard {
          min-height:250px;
          padding:31px 29px;
          border-right:1px solid var(--line);
        }

        .businessCard:last-child {
          border-right:0;
        }

        .businessCard h3 {
          margin:0 0 18px;
          font-size:12px;
          color:var(--gold);
        }

        .businessCard p,
        .businessCard li {
          color:var(--muted);
          font-size:11px;
        }

        .businessCard ul {
          list-style:none;
          padding:0;
          margin:0;
          display:grid;
          gap:9px;
        }

        .businessCard li:before {
          content:"✓";
          color:var(--gold);
          margin-right:8px;
          font-weight:800;
        }

        /* INVESTMENT */

        .investment {
          padding:72px 0;
          background:#0f0f0e;
          color:#f7f2e8;
        }

        .investmentGrid {
          display:grid;
          grid-template-columns:1.1fr 1fr .8fr;
          gap:45px;
        }

        .investment h2 {
          margin:8px 0 17px;
          font-family:Georgia,"Times New Roman",serif;
          font-size:40px;
          line-height:1.12;
          font-weight:400;
        }

        .investment p {
          font-size:11px;
          color:#bdb4a6;
        }

        .fundList {
          display:grid;
          gap:11px;
          margin-top:18px;
        }

        .fundItem {
          font-size:11px;
          display:flex;
          gap:11px;
          color:#ded6c9;
        }

        .fundItem b {
          color:var(--gold2);
        }

        .askCard {
          border:1px solid rgba(255,255,255,.15);
          border-radius:8px;
          padding:22px;
        }

        .askRow {
          margin-bottom:14px;
        }

        .askRow:last-child {
          margin-bottom:0;
        }

        .askRow small {
          color:#898174;
          display:block;
          font-size:9px;
        }

        .askRow strong {
          display:block;
          font-size:12px;
        }

        /* FOUNDER + WAITLIST */

        .founderSection {
          padding:64px 0 0;
        }

        .founderGrid {
          display:grid;
          grid-template-columns:190px .7fr 1.35fr;
          gap:35px;
          align-items:center;
        }

        .founderImage {
          width:175px;
          height:175px;
          border-radius:7px;
          overflow:hidden;
          background:#ddd;
        }

        .founderImage img {
          width:100%;
          height:100%;
          object-fit:cover;
        }

        .founderName {
          font-family:Georgia,"Times New Roman",serif;
          font-size:34px;
          line-height:1;
          margin:5px 0;
          font-weight:400;
        }

        .founderRole {
          font-size:11px;
          color:var(--muted);
        }

        .founderCopy {
          white-space:pre-line;
          font-size:12px;
          color:var(--muted);
        }

        .waitBox {
          margin-top:50px;
          padding:31px;
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:35px;
          align-items:center;
          border-radius:10px;
          background:#eee4d7;
        }

        .waitTitle {
          font-family:Georgia,"Times New Roman",serif;
          font-size:29px;
          margin:0;
          font-weight:400;
        }

        .waitText,
        .waitNote {
          color:var(--muted);
          font-size:10px;
          margin:3px 0 0;
        }

        .waitForm {
          display:flex;
        }

        .waitForm input {
          flex:1;
          min-width:0;
          border:0;
          background:white;
          padding:14px 15px;
          outline:none;
          font-size:11px;
        }

        .waitForm button {
          width:130px;
          border:0;
          background:var(--gold);
          color:white;
          font-size:10px;
          font-weight:800;
          cursor:pointer;
        }

        .waitMessage {
          min-height:17px;
          margin-top:6px;
          color:var(--gold);
          font-size:10px;
        }

        /* FOOTER */

        .footer {
          margin-top:58px;
          padding:21px 0;
          background:#0f0f0e;
          color:#8f877b;
          font-size:9px;
        }

        .footerGrid {
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:20px;
        }

        .footerLogo {
          color:white;
          font-size:16px;
          font-weight:800;
        }

        .footerLinks {
          display:flex;
          gap:19px;
        }

        /* RESPONSIVE */

        @media(max-width:1050px) {
          .navlinks {
            display:none;
          }

          .heroGrid,
          .problemGrid,
          .investmentGrid,
          .founderGrid,
          .waitBox {
            grid-template-columns:1fr;
          }

          .heroVisual {
            margin-top:20px;
          }

          .features {
            position:static;
            width:100%;
            grid-template-columns:repeat(2,1fr);
            margin-top:15px;
          }

          .heroVisual {
            flex-direction:column;
          }

          .conceptNote {
            position:static;
            text-align:center;
            max-width:100%;
            margin-top:15px;
          }

          .evidenceGrid,
          .businessGrid {
            grid-template-columns:repeat(2,1fr);
          }

          .timeline {
            grid-template-columns:1fr;
            gap:22px;
          }

          .timeline:before {
            display:none;
          }

          .currentPanel {
            grid-template-columns:1fr 1fr;
          }

          .founderImage {
            width:155px;
            height:155px;
          }
        }

        @media(max-width:620px) {
          .wrap {
            width:calc(100% - 30px);
          }

          .header .nav {
            height:62px;
          }

          .topcta {
            display:none;
          }

          .hero {
            padding-top:95px;
          }

          .heroIntro {
            font-size:18px;
          }

          .heroName {
            font-size:67px;
          }

          .heroDescription {
            font-size:16px;
          }

          .features,
          .evidenceGrid,
          .businessGrid,
          .currentPanel {
            grid-template-columns:1fr;
          }

          .problem,
          .solution {
            padding:48px 25px;
          }

          .problemImage {
            opacity:.24;
            inset:0;
            width:100%;
          }

          .evidenceCard,
          .businessCard {
            border-right:0;
            border-bottom:1px solid var(--line);
          }

          .solutionModes {
            gap:16px;
          }

          .founderImage {
            width:140px;
            height:140px;
          }

          .waitForm {
            flex-direction:column;
            gap:6px;
          }

          .waitForm button {
            width:100%;
            min-height:44px;
          }

          .footerGrid {
            flex-direction:column;
            align-items:flex-start;
          }

          .footerLinks {
            flex-wrap:wrap;
          }
        }
      `}</style>

      {/* HEADER */}
      <header className="header">
        <div className="wrap nav">
          <a href="#top" className="logo">
            SVAS
          </a>

          <nav className="navlinks">
            <a href="#project">{t.nav.project}</a>
            <a href="#progress">{t.nav.progress}</a>
            <a href="#business">{t.nav.business}</a>
            <a href="#investment">{t.nav.investment}</a>
            <a href="#founder">{t.nav.founder}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>

          <div className="rightnav">
            <div className="language">
              <button
                type="button"
                className={lang === "ko" ? "active" : ""}
                onClick={() => changeLanguage("ko")}
              >
                KR
              </button>

              <span className="langline">|</span>

              <button
                type="button"
                className={lang === "en" ? "active" : ""}
                onClick={() => changeLanguage("en")}
              >
                EN
              </button>
            </div>

            <a href="#investment" className="topcta">
              {t.nav.partnership}
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main id="top">
        <section className="hero">
          <div className="wrap heroGrid">
            <div>
              <div className="eyebrow">{t.hero.eyebrow}</div>

              {lang === "ko" ? (
                <p className="heroIntro">
                  {t.hero.headline1}
                  <br />
                  {t.hero.headline2}
                </p>
              ) : null}

              <h1 className="heroName">KOMEL</h1>

              {lang === "en" ? (
                <p
                  className="heroIntro"
                  style={{ marginTop: "-5px", marginBottom: "18px" }}
                >
                  {t.hero.headline1}
                  <br />
                  {t.hero.headline2}
                </p>
              ) : null}

              <p className="heroDescription">{t.hero.description}</p>

              <div className="buttons">
                <a className="button dark" href="#project">
                  {t.hero.project}
                </a>

                <a className="button" href="#investment">
                  {t.hero.investor}
                </a>
              </div>

              <div className="heroStatus">
                <div className="heroStatusTitle">{t.hero.statusLabel}</div>

                <div className="statusRow">
                  <span>{t.hero.status1}</span>
                  <span className="arrow">›</span>
                  <span className="current">{t.hero.status2}</span>
                  <span className="arrow">›</span>
                  <span>{t.hero.status3}</span>
                </div>
              </div>
            </div>

            <div className="heroVisual">
              <img
                src="/komel-locked.png"
                alt="KOMEL concept visualization"
              />

              <div className="features">
                {t.features.map((feature, index) => (
                  <div className="feature" key={feature[0]}>
                    <div className="featureIcon">
                      {["◌", "↻", "⌁", "×"][index]}
                    </div>

                    <div>
                      <strong>{feature[0]}</strong>
                      <span>{feature[1]}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="conceptNote">{t.hero.conceptNote}</div>
            </div>
          </div>
        </section>

        {/* PROBLEM / SOLUTION */}
        <section id="project">
          <div className="problemGrid">
            <div className="problem">
              <img
                src="/hero-breath.png"
                alt=""
                className="problemImage"
              />

              <div className="problemContent">
                <div className="eyebrow">{t.problem.label}</div>

                <h2 className="problemTitle">
                  {t.problem.title1}
                  <br />
                  {t.problem.title2}
                </h2>

                <p className="problemText">{t.problem.text}</p>
              </div>
            </div>

            <div className="solution">
              <div className="eyebrow">{t.solution.label}</div>

              <h2 className="solutionTitle">KOMEL</h2>

              <p className="solutionText">{t.solution.text}</p>

              <div className="solutionModes">
                <div className="mode">
                  <div className="modeIcon">◎</div>
                  {t.solution.focus}
                </div>

                <div className="mode">
                  <div className="modeIcon">◯</div>
                  {t.solution.refresh}
                </div>

                <div className="mode">
                  <div className="modeIcon">↻</div>
                  {t.solution.reset}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EVIDENCE */}
        <section className="section soft">
          <div className="wrap">
            <div className="centerTitle">
              <h2>{t.evidence.title}</h2>
            </div>

            <div className="evidenceGrid">
              {t.evidence.cards.map((card) => (
                <div className="evidenceCard" key={card[0]}>
                  <small>{card[0]}</small>
                  <strong>{card[1]}</strong>
                </div>
              ))}
            </div>

            <p className="evidenceNote">{t.evidence.note}</p>
          </div>
        </section>

        {/* DEVELOPMENT */}
        <section className="section" id="progress">
          <div className="wrap">
            <div className="centerTitle">
              <h2>{t.progress.title}</h2>
            </div>

            <div className="timeline">
              {t.progress.steps.map((step, index) => (
                <div
                  key={step[0]}
                  className={`step ${
                    index === 0 ? "done" : index === 1 ? "current" : ""
                  }`}
                >
                  <div className="stepCircle">
                    {index === 0 ? "✓" : step[0]}
                  </div>

                  <h3>{step[1]}</h3>
                  <p>{step[2]}</p>
                </div>
              ))}
            </div>

            <div className="currentPanel">
              <div>
                <div className="eyebrow">{t.progress.currentTitle}</div>
                <p>{t.progress.currentText}</p>
              </div>

              {t.progress.currentItems.map((item) => (
                <div className="currentStat" key={item[0]}>
                  <strong>{item[0]}</strong>
                  <p>{item[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BUSINESS */}
        <section className="section soft" id="business">
          <div className="wrap">
            <div className="centerTitle">
              <h2>{t.business.title}</h2>
            </div>

            <div className="businessGrid">
              <div className="businessCard">
                <h3>{t.business.modelTitle}</h3>
                <p>{t.business.modelText}</p>
              </div>

              <div className="businessCard">
                <h3>{t.business.targetTitle}</h3>

                <ul>
                  {t.business.targets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="businessCard">
                <h3>{t.business.revenueTitle}</h3>

                <ul>
                  {t.business.revenue.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* INVESTMENT */}
        <section className="investment" id="investment">
          <div className="wrap investmentGrid">
            <div>
              <div className="eyebrow">{t.investment.label}</div>

              <h2>
                {t.investment.title1}
                <br />
                → {t.investment.title2}
              </h2>

              <p>{t.investment.text}</p>

              <div className="buttons">
                <a
                  className="button gold"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfbO6nuetMo9Hj-V39sEsQUXuuVLbBwi_-elaeJyHOmYSG5UQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.investment.deck}
                </a>

                <a
                  className="button"
                  style={{ color: "white", borderColor: "#555" }}
                  href="mailto:roekty@gmail.com"
                >
                  {t.investment.founder}
                </a>
              </div>
            </div>

            <div>
              <div className="eyebrow">{t.investment.fundsTitle}</div>

              <div className="fundList">
                {t.investment.funds.map((item, index) => (
                  <div className="fundItem" key={item}>
                    <b>{String(index + 1).padStart(2, "0")}</b>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="askCard">
              <div className="askRow">
                <small>{t.investment.stage}</small>
                <strong>{t.investment.stageValue}</strong>
              </div>

              <div className="askRow">
                <small>{t.investment.current}</small>
                <strong>{t.investment.currentValue}</strong>
              </div>

              <div className="askRow">
                <small>{t.investment.next}</small>
                <strong>{t.investment.nextValue}</strong>
              </div>

              <div className="askRow">
                <small>{t.investment.amount}</small>
                <strong>{t.investment.amountValue}</strong>
              </div>
            </div>
          </div>
        </section>

        {/* FOUNDER */}
        <section className="founderSection" id="founder">
          <div className="wrap">
            <div className="founderGrid">
              <div className="founderImage">
                <img
                  src="/founder.png"
                  alt="SVAS Founder Kim Tae-Young"
                />
              </div>

              <div>
                <div className="eyebrow">{t.founder.label}</div>
                <h2 className="founderName">{t.founder.name}</h2>
                <div className="founderRole">{t.founder.role}</div>
              </div>

              <div className="founderCopy">{t.founder.text}</div>
            </div>

            {/* WAITLIST */}
            <div className="waitBox" id="contact">
              <div>
                <h2 className="waitTitle">{t.waitlist.title}</h2>
                <p className="waitText">{t.waitlist.text}</p>
              </div>

              <div>
                <form className="waitForm" onSubmit={handleWaitlist}>
                  <input
                    type="email"
                    value={email}
                    placeholder={t.waitlist.placeholder}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <button type="submit">{t.waitlist.button}</button>
                </form>

                <div className="waitMessage">{waitMessage}</div>
                <p className="waitNote">{t.waitlist.note}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="wrap footerGrid">
          <strong className="footerLogo">SVAS</strong>

          <span>© 2026 SVAS. All rights reserved.</span>

          <div className="footerLinks">
            <a href="#">{t.footer.privacy}</a>
            <a href="#">{t.footer.terms}</a>
            <a href="mailto:roekty@gmail.com">{t.footer.contact}</a>
          </div>
        </div>
      </footer>
    </>
  );
}
