<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>KOMEL | SVAS</title>

<meta
  id="metaDescription"
  name="description"
  content="SVAS가 개발 중인 휴대형 리필 퍼스널 웰니스 오브제 KOMEL. 현재 기구설계 및 워킹 시제품 개발을 진행하고 있습니다."
>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Noto+Sans+KR:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

<style>

/* =========================================================
   GLOBAL
========================================================= */

:root{
  --bg:#F5F0E8;
  --bg-soft:#EEE6D9;
  --paper:#FBF9F5;
  --ink:#171511;
  --muted:#6F695F;
  --gold:#A97835;
  --gold-soft:#C59A5B;
  --dark:#11110F;
  --line:rgba(23,21,17,.12);
  --serif:"DM Serif Display", Georgia, serif;
  --sans-ko:"Noto Sans KR", sans-serif;
  --sans-en:"Inter", sans-serif;
}

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html{
  scroll-behavior:smooth;
}

body{
  font-family:var(--sans-ko);
  background:var(--bg);
  color:var(--ink);
  line-height:1.65;
  -webkit-font-smoothing:antialiased;
  overflow-x:hidden;
}

html[lang="en"] body{
  font-family:var(--sans-en);
}

a{
  color:inherit;
  text-decoration:none;
}

button,
input{
  font:inherit;
}

button{
  cursor:pointer;
}

img{
  display:block;
  max-width:100%;
}

.wrap{
  width:min(1180px, calc(100% - 48px));
  margin:0 auto;
}

.label{
  color:var(--gold);
  font-size:11px;
  font-weight:700;
  letter-spacing:.12em;
  text-transform:uppercase;
}

.section-title{
  font-family:var(--serif);
  font-size:clamp(34px,4vw,50px);
  font-weight:400;
  line-height:1.08;
}

.reveal{
  opacity:0;
  transform:translateY(20px);
  transition:opacity .7s ease, transform .7s ease;
}

.reveal.visible{
  opacity:1;
  transform:none;
}


/* =========================================================
   HEADER
========================================================= */

header{
  position:fixed;
  top:0;
  left:0;
  right:0;
  z-index:100;
  border-bottom:1px solid transparent;
  transition:.25s ease;
}

header.scrolled{
  background:rgba(245,240,232,.93);
  backdrop-filter:blur(14px);
  border-color:var(--line);
}

.nav{
  height:72px;
  display:flex;
  align-items:center;
  gap:28px;
}

.logo{
  font-size:27px;
  font-weight:700;
  letter-spacing:.08em;
  margin-right:auto;
}

.nav-links{
  display:flex;
  align-items:center;
  gap:30px;
  font-size:12px;
  font-weight:600;
}

.nav-links a{
  opacity:.72;
  transition:.2s;
}

.nav-links a:hover{
  opacity:1;
}

.nav-right{
  display:flex;
  align-items:center;
  gap:14px;
}

.lang-switch{
  display:flex;
  align-items:center;
  gap:7px;
  font-size:11px;
}

.lang-btn{
  border:0;
  background:none;
  color:var(--muted);
  padding:4px 2px;
}

.lang-btn.active{
  color:var(--ink);
  font-weight:700;
}

.lang-switch span{
  color:#AAA399;
}

.nav-btn{
  background:var(--ink);
  color:#FFF;
  padding:11px 18px;
  border-radius:999px;
  font-size:11px;
  font-weight:700;
  white-space:nowrap;
}


/* =========================================================
   HERO
========================================================= */

.hero{
  min-height:720px;
  padding:125px 0 55px;
  overflow:hidden;
  position:relative;
}

.hero::after{
  content:"";
  position:absolute;
  right:-8%;
  top:-10%;
  width:60%;
  height:95%;
  background:
    radial-gradient(circle at center,
    rgba(185,151,102,.18),
    transparent 68%);
  pointer-events:none;
}

.hero-grid{
  position:relative;
  z-index:1;
  display:grid;
  grid-template-columns:1fr .95fr;
  align-items:center;
  gap:70px;
}

.hero h1{
  font-family:var(--serif);
  font-size:clamp(75px,10vw,128px);
  line-height:.86;
  font-weight:400;
  margin:14px 0 25px;
  letter-spacing:-.02em;
}

.hero-lead{
  max-width:540px;
  font-size:22px;
  font-weight:600;
  line-height:1.48;
}

.hero-sub{
  max-width:500px;
  margin-top:20px;
  color:var(--muted);
  font-size:15px;
}

.cta-row{
  margin-top:31px;
  display:flex;
  flex-wrap:wrap;
  gap:12px;
}

.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  min-height:48px;
  padding:0 25px;
  border:1px solid var(--ink);
  border-radius:5px;
  font-size:12px;
  font-weight:700;
  transition:.2s;
}

.btn-dark{
  background:var(--ink);
  color:#FFF;
}

.btn-dark:hover{
  background:#302D28;
}

.btn-light:hover{
  background:var(--ink);
  color:#FFF;
}

.status{
  margin-top:38px;
}

.status-title{
  color:var(--gold);
  font-size:11px;
  font-weight:700;
  margin-bottom:7px;
  text-transform:uppercase;
  letter-spacing:.07em;
}

.status-line{
  display:flex;
  align-items:center;
  flex-wrap:wrap;
  gap:10px;
  font-size:12px;
}

.status-line .active{
  color:var(--gold);
  font-weight:700;
}

.status-arrow{
  color:#AAA399;
}

/* ---------- CONCEPT PRODUCT ---------- */

.product-stage{
  position:relative;
  min-height:535px;
  display:flex;
  align-items:center;
  justify-content:center;
}

.product-card{
  position:relative;
  width:240px;
  height:500px;
  filter:drop-shadow(0 32px 28px rgba(0,0,0,.19));
}

.product-metal{
  position:absolute;
  top:0;
  left:50%;
  transform:translateX(-50%);
  width:128px;
  height:385px;
  border-radius:62px 62px 14px 14px;
  background:
    linear-gradient(
      90deg,
      #696864 0%,
      #B9B6AE 20%,
      #E3E0D8 40%,
      #A7A49E 58%,
      #E8E4DC 75%,
      #74736F 100%
    );
}

.product-cap-line{
  position:absolute;
  left:0;
  right:0;
  top:116px;
  height:1px;
  background:rgba(0,0,0,.27);
}

.product-brand{
  position:absolute;
  left:0;
  right:0;
  bottom:35px;
  text-align:center;
  font-size:16px;
  font-weight:600;
  letter-spacing:.06em;
}

.product-wood{
  position:absolute;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  width:128px;
  height:120px;
  border-radius:0 0 30px 30px;
  background:
    linear-gradient(
      100deg,
      #462817,
      #8A542F 40%,
      #5B341E 70%,
      #321E14
    );
}

.keyhole{
  position:absolute;
  right:17px;
  bottom:28px;
  width:24px;
  height:24px;
  background:#201B16;
  border:4px solid #79736B;
  border-radius:50%;
}

.keyring{
  position:absolute;
  right:-61px;
  bottom:0;
  width:88px;
  height:56px;
  border:5px solid #57524C;
  border-radius:50%;
  transform:rotate(25deg);
}

.concept-note{
  position:absolute;
  bottom:8px;
  right:10px;
  max-width:210px;
  color:var(--muted);
  font-size:10px;
  text-align:right;
}

/* ---------- FEATURES ---------- */

.hero-features{
  position:absolute;
  right:-160px;
  top:74px;
  width:170px;
  display:grid;
  gap:22px;
}

.hero-feature{
  display:grid;
  grid-template-columns:40px 1fr;
  gap:10px;
  align-items:center;
}

.hero-feature-icon{
  display:flex;
  align-items:center;
  justify-content:center;
  width:39px;
  height:39px;
  border:1px solid var(--gold-soft);
  border-radius:50%;
  color:var(--gold);
  font-size:17px;
}

.hero-feature strong{
  display:block;
  font-size:13px;
}

.hero-feature small{
  display:block;
  margin-top:1px;
  color:var(--muted);
  font-size:10px;
}


/* =========================================================
   PROBLEM / SOLUTION
========================================================= */

.problem-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
}

.problem,
.solution{
  min-height:420px;
  padding:70px max(48px, calc((100vw - 1180px)/2));
}

.problem{
  background:var(--dark);
  color:#FFF;
}

.solution{
  background:var(--paper);
}

.problem h2,
.solution h2{
  font-family:var(--serif);
  font-size:clamp(36px,4vw,48px);
  line-height:1.12;
  font-weight:400;
  margin:16px 0 22px;
}

.problem p{
  max-width:500px;
  color:#C9C2B8;
  font-size:14px;
}

.solution p{
  max-width:490px;
  color:var(--muted);
  font-size:14px;
}

.solution-icons{
  display:flex;
  gap:33px;
  margin-top:30px;
}

.solution-item{
  min-width:55px;
  text-align:center;
  font-size:11px;
}

.solution-item span{
  display:flex;
  align-items:center;
  justify-content:center;
  width:43px;
  height:43px;
  margin:0 auto 7px;
  border:1px solid var(--line);
  border-radius:50%;
  font-size:17px;
}


/* =========================================================
   EVIDENCE
========================================================= */

.evidence{
  padding:95px 0;
  background:#F8F4ED;
}

.center-head{
  text-align:center;
  margin-bottom:44px;
}

.center-head h2{
  font-family:var(--serif);
  color:var(--gold);
  font-size:clamp(34px,4vw,45px);
  font-weight:400;
  margin-top:8px;
}

.evidence-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  border:1px solid var(--line);
  border-radius:10px;
  overflow:hidden;
}

.evidence-card{
  min-height:145px;
  padding:28px 23px;
  background:rgba(255,255,255,.28);
  border-right:1px solid var(--line);
}

.evidence-card:last-child{
  border-right:0;
}

.evidence-card small{
  display:block;
  color:var(--muted);
  font-size:11px;
}

.evidence-card strong{
  display:block;
  margin-top:10px;
  font-size:19px;
  line-height:1.4;
}

.evidence-note{
  margin-top:20px;
  color:var(--muted);
  font-size:11px;
  text-align:center;
}


/* =========================================================
   DEVELOPMENT PROGRESS
========================================================= */

.progress{
  padding:105px 0;
}

.progress h2{
  text-align:center;
  font-family:var(--serif);
  color:var(--gold);
  font-size:clamp(34px,4vw,45px);
  font-weight:400;
}

.timeline{
  position:relative;
  display:grid;
  grid-template-columns:repeat(5,1fr);
  margin-top:55px;
}

.timeline::before{
  content:"";
  position:absolute;
  left:10%;
  right:10%;
  top:25px;
  height:1px;
  background:#CDC5B8;
}

.step{
  position:relative;
  z-index:1;
  text-align:center;
}

.step-circle{
  display:flex;
  align-items:center;
  justify-content:center;
  width:51px;
  height:51px;
  margin:0 auto 15px;
  border:1px solid #BDB5A9;
  border-radius:50%;
  background:var(--bg);
  font-size:12px;
  font-weight:700;
}

.step.done .step-circle,
.step.current .step-circle{
  background:var(--gold);
  border-color:var(--gold);
  color:#FFF;
}

.step h3{
  font-size:12px;
  margin-bottom:5px;
}

.step p{
  color:var(--muted);
  font-size:10px;
}

.current-box{
  display:grid;
  grid-template-columns:1.5fr repeat(3,1fr);
  gap:20px;
  margin-top:46px;
  padding:27px 30px;
  border:1px solid var(--line);
  border-radius:10px;
  background:#F2EADE;
}

.current-box p{
  margin-top:5px;
  color:var(--muted);
  font-size:11px;
}

.current-box strong{
  font-size:12px;
}


/* =========================================================
   BUSINESS MODEL
========================================================= */

.business{
  padding:95px 0;
  background:#F9F6F0;
}

.business-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  border:1px solid var(--line);
  border-radius:10px;
  overflow:hidden;
}

.biz-card{
  padding:36px 32px;
  border-right:1px solid var(--line);
}

.biz-card:last-child{
  border-right:0;
}

.biz-card h3{
  color:var(--gold);
  font-size:12px;
  margin-bottom:18px;
}

.biz-card p,
.biz-card li{
  color:var(--muted);
  font-size:12px;
}

.biz-card ul{
  display:grid;
  gap:10px;
  list-style:none;
}

.biz-card li::before{
  content:"✓";
  margin-right:8px;
  color:var(--gold);
  font-weight:700;
}


/* =========================================================
   INVESTMENT
========================================================= */

.investment{
  padding:80px 0;
  background:var(--dark);
  color:#F5F0E8;
}

.invest-grid{
  display:grid;
  grid-template-columns:1fr 1fr .85fr;
  gap:48px;
}

.investment h2{
  margin:10px 0 19px;
  font-family:var(--serif);
  font-size:clamp(35px,4vw,45px);
  font-weight:400;
  line-height:1.12;
}

.investment p{
  color:#BDB5A7;
  font-size:12px;
}

.use-list{
  display:grid;
  gap:13px;
  margin-top:20px;
}

.use-list div{
  display:flex;
  align-items:flex-start;
  gap:12px;
  color:#DDD4C5;
  font-size:12px;
}

.use-list b{
  min-width:24px;
  color:var(--gold-soft);
}

.ask-card{
  padding:24px;
  border:1px solid rgba(255,255,255,.15);
  border-radius:10px;
}

.ask-row{
  margin-bottom:16px;
}

.ask-row:last-child{
  margin-bottom:0;
}

.ask-row small{
  display:block;
  color:#8F877A;
  font-size:10px;
}

.ask-row strong{
  display:block;
  margin-top:2px;
  font-size:13px;
}


/* =========================================================
   FOUNDER
========================================================= */

.founder{
  padding:85px 0;
}

.founder-grid{
  display:grid;
  grid-template-columns:220px .8fr 1.3fr;
  align-items:center;
  gap:43px;
}

.founder-photo{
  width:200px;
  height:200px;
  overflow:hidden;
  border-radius:8px;
  background:#DDD;
}

.founder-photo img{
  width:100%;
  height:100%;
  object-fit:cover;
}

.founder h2{
  font-family:var(--serif);
  font-size:38px;
  font-weight:400;
}

.founder-role{
  margin-top:2px;
  color:var(--muted);
  font-size:12px;
}

.founder-copy{
  color:var(--muted);
  font-size:13px;
}


/* =========================================================
   WAITLIST
========================================================= */

.waitlist{
  padding:0 0 75px;
}

.wait-box{
  display:grid;
  grid-template-columns:1fr 1fr;
  align-items:center;
  gap:40px;
  padding:37px;
  border-radius:12px;
  background:#EEE4D6;
}

.wait-box h2{
  font-family:var(--serif);
  font-size:31px;
  font-weight:400;
}

.wait-box p{
  margin-top:3px;
  color:var(--muted);
  font-size:11px;
}

.wait-form{
  display:flex;
}

.wait-form input{
  flex:1;
  min-width:0;
  border:0;
  outline:none;
  padding:15px 17px;
  background:#FFF;
}

.wait-form button{
  width:145px;
  border:0;
  background:var(--gold);
  color:#FFF;
  font-weight:700;
  font-size:11px;
}

.wait-msg{
  min-height:18px;
  margin-top:7px;
  color:var(--gold);
  font-size:10px;
}


/* =========================================================
   FOOTER
========================================================= */

footer{
  padding:24px 0;
  background:var(--dark);
  color:#8F877A;
  font-size:10px;
}

.footer-flex{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:24px;
}

.footer-brand{
  color:#FFF;
  font-size:17px;
  font-weight:700;
  letter-spacing:.07em;
}

.footer-links{
  display:flex;
  gap:21px;
}


/* =========================================================
   MOBILE
========================================================= */

@media(max-width:1000px){

  .nav-links{
    display:none;
  }

  .hero-grid{
    grid-template-columns:1fr;
  }

  .product-stage{
    margin-top:20px;
  }

  .hero-features{
    position:static;
    width:100%;
    margin-top:28px;
    grid-template-columns:1fr 1fr;
  }

  .product-stage{
    min-height:610px;
    flex-direction:column;
  }

  .problem-grid,
  .invest-grid,
  .founder-grid,
  .wait-box{
    grid-template-columns:1fr;
  }

  .evidence-grid,
  .business-grid{
    grid-template-columns:1fr 1fr;
  }

  .evidence-card:nth-child(2){
    border-right:0;
  }

  .evidence-card{
    border-bottom:1px solid var(--line);
  }

  .timeline{
    grid-template-columns:1fr;
    gap:28px;
  }

  .timeline::before{
    display:none;
  }

  .current-box{
    grid-template-columns:1fr;
  }

  .founder-photo{
    width:170px;
    height:170px;
  }
}

@media(max-width:620px){

  .wrap{
    width:min(100% - 30px, 1180px);
  }

  .nav{
    gap:10px;
  }

  .logo{
    font-size:22px;
  }

  .nav-btn{
    display:none;
  }

  .hero{
    padding-top:105px;
  }

  .hero h1{
    font-size:67px;
  }

  .hero-lead{
    font-size:18px;
  }

  .hero-features{
    grid-template-columns:1fr;
  }

  .problem,
  .solution{
    padding:55px 25px;
  }

  .evidence-grid,
  .business-grid{
    grid-template-columns:1fr;
  }

  .evidence-card,
  .biz-card{
    border-right:0;
    border-bottom:1px solid var(--line);
  }

  .solution-icons{
    gap:20px;
  }

  .wait-form{
    flex-direction:column;
    gap:7px;
  }

  .wait-form button{
    width:100%;
    min-height:48px;
  }

  .footer-flex{
    flex-direction:column;
    align-items:flex-start;
  }

  .footer-links{
    flex-wrap:wrap;
  }
}

</style>
</head>


<body>


<!-- =======================================================
     HEADER
======================================================= -->

<header id="header">

  <div class="wrap nav">

    <a href="#top" class="logo">
      SVAS
    </a>

    <nav class="nav-links">

      <a
        href="#project"
        data-ko="프로젝트"
        data-en="Project"
      >
        프로젝트
      </a>

      <a
        href="#progress"
        data-ko="개발 진행상황"
        data-en="Progress"
      >
        개발 진행상황
      </a>

      <a
        href="#business"
        data-ko="비즈니스 모델"
        data-en="Business"
      >
        비즈니스 모델
      </a>

      <a
        href="#investment"
        data-ko="투자 유치"
        data-en="Investment"
      >
        투자 유치
      </a>

      <a
        href="#founder"
        data-ko="창업자"
        data-en="Founder"
      >
        창업자
      </a>

      <a
        href="#contact"
        data-ko="문의하기"
        data-en="Contact"
      >
        문의하기
      </a>

    </nav>


    <div class="nav-right">

      <div class="lang-switch">

        <button
          type="button"
          class="lang-btn active"
          data-lang-btn="ko"
        >
          KR
        </button>

        <span>|</span>

        <button
          type="button"
          class="lang-btn"
          data-lang-btn="en"
        >
          EN
        </button>

      </div>


      <a
        href="#investment"
        class="nav-btn"
        data-ko="파트너십 / 투자 문의"
        data-en="Partnership / Investment"
      >
        파트너십 / 투자 문의
      </a>

    </div>

  </div>

</header>


<!-- =======================================================
     HERO
======================================================= -->

<section class="hero" id="top">

  <div class="wrap hero-grid">

    <div class="reveal">

      <div
        class="label"
        data-ko="새로운 퍼스널 센트 경험"
        data-en="A NEW PERSONAL SCENT EXPERIENCE"
      >
        새로운 퍼스널 센트 경험
      </div>


      <h1>
        KOMEL
      </h1>


      <p
        class="hero-lead"
        data-ko="휴대가 간편한 · 리필형 · 비전자식 · 비분사형<br>퍼스널 웰니스 오브제"
        data-en="A compact, refillable, non-electronic and non-spray<br>personal wellness object."
      >
        휴대가 간편한 · 리필형 · 비전자식 · 비분사형<br>
        퍼스널 웰니스 오브제
      </p>


      <p
        class="hero-sub"
        data-ko="바쁜 일상 속 짧은 순간, 나만의 리프레시 경험을 위한 새로운 오브제를 개발하고 있습니다."
        data-en="We are developing a new object for short, personal moments of refresh in everyday life."
      >
        바쁜 일상 속 짧은 순간,
        나만의 리프레시 경험을 위한 새로운 오브제를 개발하고 있습니다.
      </p>


      <div class="cta-row">

        <a
          href="#project"
          class="btn btn-dark"
          data-ko="프로젝트 보기"
          data-en="View Project"
        >
          프로젝트 보기
        </a>


        <a
          href="#investment"
          class="btn btn-light"
          data-ko="투자자료 요청"
          data-en="Request Investor Deck"
        >
          투자자료 요청
        </a>

      </div>


      <div class="status">

        <div
          class="status-title"
          data-ko="현재 단계"
          data-en="CURRENT STATUS"
        >
          현재 단계
        </div>


        <div class="status-line">

          <span
            data-ko="콘셉트 정의"
            data-en="Concept Defined"
          >
            콘셉트 정의
          </span>

          <span class="status-arrow">›</span>

          <span
            class="active"
            data-ko="기구설계 진행 중"
            data-en="Engineering in Progress"
          >
            기구설계 진행 중
          </span>

          <span class="status-arrow">›</span>

          <span
            data-ko="워킹 시제품 제작 예정"
            data-en="Working Prototype Next"
          >
            워킹 시제품 제작 예정
          </span>

        </div>

      </div>

    </div>


    <div class="product-stage reveal">

      <!--
        중요:
        이 이미지는 내부 구조를 공개하지 않는
        "닫힌 상태의 콘셉트 외형"만 표현합니다.

        실제 시제품 완성 후에는
        이 CSS 제품을 실제 촬영 사진으로 교체하면 됩니다.
      -->

      <div class="product-card">

        <div class="product-metal">

          <div class="product-cap-line"></div>

          <div class="product-brand">
            SVAS
          </div>

        </div>

        <div class="product-wood">

          <div class="keyhole"></div>

          <div class="keyring"></div>

        </div>

      </div>


      <div class="hero-features">

        <div class="hero-feature">

          <div class="hero-feature-icon">
            ○
          </div>

          <div>
            <strong
              data-ko="휴대성"
              data-en="Portable"
            >
              휴대성
            </strong>

            <small
              data-ko="언제 어디서나"
              data-en="Carry anywhere."
            >
              언제 어디서나
            </small>
          </div>

        </div>


        <div class="hero-feature">

          <div class="hero-feature-icon">
            ↻
          </div>

          <div>
            <strong
              data-ko="리필형"
              data-en="Refillable"
            >
              리필형
            </strong>

            <small
              data-ko="반복해서 사용하는 구조"
              data-en="Designed for repeated use."
            >
              반복해서 사용하는 구조
            </small>
          </div>

        </div>


        <div class="hero-feature">

          <div class="hero-feature-icon">
            ∿
          </div>

          <div>
            <strong
              data-ko="비전자식"
              data-en="Non-electronic"
            >
              비전자식
            </strong>

            <small
              data-ko="충전 없이 사용"
              data-en="No charging required."
            >
              충전 없이 사용
            </small>
          </div>

        </div>


        <div class="hero-feature">

          <div class="hero-feature-icon">
            ×
          </div>

          <div>
            <strong
              data-ko="비분사형"
              data-en="Non-spray"
            >
              비분사형
            </strong>

            <small
              data-ko="개인적인 사용 경험"
              data-en="A personal experience."
            >
              개인적인 사용 경험
            </small>
          </div>

        </div>

      </div>


      <div
        class="concept-note"
        data-ko="콘셉트 시각화 이미지입니다. 최종 제품 디자인은 개발 과정에서 변경될 수 있습니다."
        data-en="Concept visualization. Final product design may change during development."
      >
        콘셉트 시각화 이미지입니다.
        최종 제품 디자인은 개발 과정에서 변경될 수 있습니다.
      </div>

    </div>

  </div>

</section>


<!-- =======================================================
     PROBLEM / SOLUTION
======================================================= -->

<section id="project">

  <div class="problem-grid">

    <div class="problem">

      <div
        class="label"
        data-ko="문제 상황"
        data-en="THE PROBLEM"
      >
        문제 상황
      </div>


      <h2
        data-ko="바쁜 하루,<br>우리는 집중을 잃습니다."
        data-en="In a busy day,<br>we lose our focus."
      >
        바쁜 하루,<br>
        우리는 집중을 잃습니다.
      </h2>


      <p
        data-ko="업무, 공부, 운전, 이동 중에는 짧게 리프레시하고 싶은 순간이 반복됩니다.<br><br>KOMEL은 바로 그 짧은 순간에 집중합니다."
        data-en="Work, study, driving and travel all create moments when we want a brief reset.<br><br>KOMEL is designed around those short moments."
      >
        업무, 공부, 운전, 이동 중에는
        짧게 리프레시하고 싶은 순간이 반복됩니다.
        <br><br>
        KOMEL은 바로 그 짧은 순간에 집중합니다.
      </p>

    </div>


    <div class="solution">

      <div
        class="label"
        data-ko="해결책"
        data-en="OUR SOLUTION"
      >
        해결책
      </div>


      <h2>
        KOMEL
      </h2>


      <p
        data-ko="휴대하기 쉽고 반복해서 사용할 수 있는 개인용 리프레시 오브제를 개발하고 있습니다."
        data-en="We are developing a compact personal refresh object designed to be carried and used repeatedly."
      >
        휴대하기 쉽고 반복해서 사용할 수 있는
        개인용 리프레시 오브제를 개발하고 있습니다.
      </p>


      <div class="solution-icons">

        <div class="solution-item">
          <span>◎</span>

          <div
            data-ko="집중"
            data-en="Focus"
          >
            집중
          </div>
        </div>


        <div class="solution-item">
          <span>◯</span>

          <div
            data-ko="리프레시"
            data-en="Refresh"
          >
            리프레시
          </div>
        </div>


        <div class="solution-item">
          <span>↻</span>

          <div
            data-ko="리셋"
            data-en="Reset"
          >
            리셋
          </div>
        </div>

      </div>

    </div>

  </div>

</section>


<!-- =======================================================
     EVIDENCE
======================================================= -->

<section class="evidence">

  <div class="wrap">

    <div class="center-head reveal">

      <div class="label">
        EVIDENCE & PROGRESS
      </div>

      <h2
        data-ko="현재까지의 실행"
        data-en="Evidence & Progress"
      >
        현재까지의 실행
      </h2>

    </div>


    <div class="evidence-grid reveal">

      <div class="evidence-card">

        <small
          data-ko="제품 방향"
          data-en="Product Direction"
        >
          제품 방향
        </small>

        <strong
          data-ko="콘셉트 정의 완료"
          data-en="Concept Defined"
        >
          콘셉트 정의 완료
        </strong>

      </div>


      <div class="evidence-card">

        <small
          data-ko="기구 요구사항"
          data-en="Mechanical Requirements"
        >
          기구 요구사항
        </small>

        <strong
          data-ko="핵심 요구조건 정의"
          data-en="Core Requirements Defined"
        >
          핵심 요구조건 정의
        </strong>

      </div>


      <div class="evidence-card">

        <small
          data-ko="현재 제작 단계"
          data-en="Current Manufacturing Stage"
        >
          현재 제작 단계
        </small>

        <strong
          data-ko="업체 견적 및 기구설계 검토"
          data-en="Prototype Quotes & Engineering Review"
        >
          업체 견적 및 기구설계 검토
        </strong>

      </div>


      <div class="evidence-card">

        <small
          data-ko="다음 목표"
          data-en="Next Milestone"
        >
          다음 목표
        </small>

        <strong
          data-ko="워킹 시제품 제작"
          data-en="Working Prototype"
        >
          워킹 시제품 제작
        </strong>

      </div>

    </div>


    <p
      class="evidence-note"
      data-ko="검증된 결과가 생길 때마다 이 영역에 실제 데이터가 추가됩니다."
      data-en="Verified results and real data will be added here as development progresses."
    >
      검증된 결과가 생길 때마다
      이 영역에 실제 데이터가 추가됩니다.
    </p>

  </div>

</section>


<!-- =======================================================
     DEVELOPMENT
======================================================= -->

<section class="progress" id="progress">

  <div class="wrap">

    <h2
      class="reveal"
      data-ko="개발 진행상황"
      data-en="Development Progress"
    >
      개발 진행상황
    </h2>


    <div class="timeline reveal">

      <div class="step done">

        <div class="step-circle">
          ✓
        </div>

        <h3
          data-ko="01. 콘셉트 정의"
          data-en="01. Concept Defined"
        >
          01. 콘셉트 정의
        </h3>

        <p
          data-ko="제품 콘셉트 및<br>핵심 방향 정의"
          data-en="Product concept and<br>direction defined"
        >
          제품 콘셉트 및<br>
          핵심 방향 정의
        </p>

      </div>


      <div class="step current">

        <div class="step-circle">
          02
        </div>

        <h3
          data-ko="02. 기구설계"
          data-en="02. Engineering"
        >
          02. 기구설계
        </h3>

        <p
          data-ko="기구설계 및<br>제조 구조 검토"
          data-en="Mechanical engineering<br>and manufacturability review"
        >
          기구설계 및<br>
          제조 구조 검토
        </p>

      </div>


      <div class="step">

        <div class="step-circle">
          03
        </div>

        <h3
          data-ko="03. 워킹 시제품"
          data-en="03. Working Prototype"
        >
          03. 워킹 시제품
        </h3>

        <p
          data-ko="실제로 작동하는<br>시제품 제작"
          data-en="Build the first<br>functional prototype"
        >
          실제로 작동하는<br>
          시제품 제작
        </p>

      </div>


      <div class="step">

        <div class="step-circle">
          04
        </div>

        <h3
          data-ko="04. 테스트 및 개선"
          data-en="04. Testing & Iteration"
        >
          04. 테스트 및 개선
        </h3>

        <p
          data-ko="사용자 테스트 및<br>제품 개선"
          data-en="User testing and<br>product iteration"
        >
          사용자 테스트 및<br>
          제품 개선
        </p>

      </div>


      <div class="step">

        <div class="step-circle">
          05
        </div>

        <h3
          data-ko="05. 초기 생산"
          data-en="05. Production"
        >
          05. 초기 생산
        </h3>

        <p
          data-ko="초기 생산 및<br>시장 진입"
          data-en="Initial production and<br>market entry"
        >
          초기 생산 및<br>
          시장 진입
        </p>

      </div>

    </div>


    <div class="current-box reveal">

      <div>

        <div
          class="label"
          data-ko="현재 위치"
          data-en="WHERE WE ARE NOW"
        >
          현재 위치
        </div>

        <p
          data-ko="제품 방향과 핵심 요구사항을 정의했으며, 현재 실제 제조 가능한 구조로 전환하기 위한 기구설계 및 워킹 시제품 준비를 진행하고 있습니다."
          data-en="The product direction and core requirements are defined. We are now translating the concept into a manufacturable design and preparing the first working prototype."
        >
          제품 방향과 핵심 요구사항을 정의했으며,
          현재 실제 제조 가능한 구조로 전환하기 위한
          기구설계 및 워킹 시제품 준비를 진행하고 있습니다.
        </p>

      </div>


      <div>
        <strong
          data-ko="제품 방향"
          data-en="Product Direction"
        >
          제품 방향
        </strong>

        <p>
          Defined
        </p>
      </div>


      <div>
        <strong
          data-ko="기구설계"
          data-en="Engineering"
        >
          기구설계
        </strong>

        <p>
          In Progress
        </p>
      </div>


      <div>
        <strong
          data-ko="다음 단계"
          data-en="Next Milestone"
        >
          다음 단계
        </strong>

        <p>
          Working Prototype
        </p>
      </div>

    </div>

  </div>

</section>


<!-- =======================================================
     BUSINESS
======================================================= -->

<section class="business" id="business">

  <div class="wrap">

    <div class="center-head reveal">

      <div class="label">
        BUSINESS MODEL
      </div>

      <h2
        data-ko="하나의 오브제에서 시작되는 반복 경험"
        data-en="A recurring experience built around one object."
      >
        하나의 오브제에서 시작되는 반복 경험
      </h2>

    </div>


    <div class="business-grid reveal">

      <div class="biz-card">

        <h3
          data-ko="제품 구조"
          data-en="PRODUCT MODEL"
        >
          제품 구조
        </h3>

        <p
          data-ko="본체를 한 번 구매하고, 리필형 소비재를 반복적으로 사용하는 구조를 지향합니다."
          data-en="The model begins with a durable core object, supported by repeat purchases of refill products."
        >
          본체를 한 번 구매하고,
          리필형 소비재를 반복적으로 사용하는 구조를 지향합니다.
        </p>

      </div>


      <div class="biz-card">

        <h3
          data-ko="목표 고객"
          data-en="TARGET USERS"
        >
          목표 고객
        </h3>

        <ul>

          <li
            data-ko="업무 집중이 필요한 직장인"
            data-en="Knowledge workers"
          >
            업무 집중이 필요한 직장인
          </li>

          <li
            data-ko="학생 및 수험생"
            data-en="Students and test takers"
          >
            학생 및 수험생
          </li>

          <li
            data-ko="운전자 및 이동이 많은 사용자"
            data-en="Drivers and people on the move"
          >
            운전자 및 이동이 많은 사용자
          </li>

          <li
            data-ko="B2B 웰니스·선물 시장"
            data-en="B2B wellness and gifting"
          >
            B2B 웰니스·선물 시장
          </li>

        </ul>

      </div>


      <div class="biz-card">

        <h3
          data-ko="수익 확장 방향"
          data-en="REVENUE DIRECTION"
        >
          수익 확장 방향
        </h3>

        <ul>

          <li
            data-ko="본체 판매"
            data-en="Core product sales"
          >
            본체 판매
          </li>

          <li
            data-ko="리필 제품 판매"
            data-en="Refill sales"
          >
            리필 제품 판매
          </li>

          <li
            data-ko="B2B 공급"
            data-en="B2B supply"
          >
            B2B 공급
          </li>

          <li
            data-ko="향후 제품 라인 확장"
            data-en="Future product extensions"
          >
            향후 제품 라인 확장
          </li>

        </ul>

      </div>

    </div>

  </div>

</section>


<!-- =======================================================
     INVESTMENT
======================================================= -->

<section class="investment" id="investment">

  <div class="wrap invest-grid">

    <div class="reveal">

      <div
        class="label"
        data-ko="파트너십 & 투자"
        data-en="PARTNERSHIP & FUNDING"
      >
        파트너십 & 투자
      </div>


      <h2
        data-ko="Concept<br>→ Working Prototype"
        data-en="Concept<br>→ Working Prototype"
      >
        Concept<br>
        → Working Prototype
      </h2>


      <p
        data-ko="KOMEL을 실제 제품으로 전환하기 위한 초기 파트너십과 투자 기회를 찾고 있습니다."
        data-en="We are seeking early partners and funding to move KOMEL from a defined concept to its first working prototype."
      >
        KOMEL을 실제 제품으로 전환하기 위한
        초기 파트너십과 투자 기회를 찾고 있습니다.
      </p>


      <div class="cta-row">

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfbO6nuetMo9Hj-V39sEsQUXuuVLbBwi_-elaeJyHOmYSG5UQ/viewform"
          target="_blank"
          rel="noopener"
          class="btn"
          style="background:var(--gold);border-color:var(--gold);color:#FFF;"
          data-ko="프로젝트 자료 요청"
          data-en="Request Project Deck"
        >
          프로젝트 자료 요청
        </a>


        <a
          href="mailto:hello@svas.kr"
          class="btn"
          style="border-color:#555;color:#FFF;"
          data-ko="창업자에게 문의"
          data-en="Contact Founder"
        >
          창업자에게 문의
        </a>

      </div>

    </div>


    <div class="reveal">

      <div
        class="label"
        data-ko="자금 사용 방향"
        data-en="USE OF FUNDS"
      >
        자금 사용 방향
      </div>


      <div class="use-list">

        <div>
          <b>01</b>

          <span
            data-ko="기구설계 및 워킹 시제품 제작"
            data-en="Mechanical engineering & working prototype"
          >
            기구설계 및 워킹 시제품 제작
          </span>
        </div>


        <div>
          <b>02</b>

          <span
            data-ko="테스트 및 반복 개선"
            data-en="Testing & iteration"
          >
            테스트 및 반복 개선
          </span>
        </div>


        <div>
          <b>03</b>

          <span
            data-ko="IP 및 인증 검토"
            data-en="IP & certification review"
          >
            IP 및 인증 검토
          </span>
        </div>


        <div>
          <b>04</b>

          <span
            data-ko="초기 시장 검증"
            data-en="Initial market validation"
          >
            초기 시장 검증
          </span>
        </div>

      </div>

    </div>


    <div class="ask-card reveal">

      <div class="ask-row">
        <small
          data-ko="현재 단계"
          data-en="Stage"
        >
          현재 단계
        </small>

        <strong>
          Pre-Prototype
        </strong>
      </div>


      <div class="ask-row">
        <small
          data-ko="현재 진행"
          data-en="Current"
        >
          현재 진행
        </small>

        <strong>
          Engineering in Progress
        </strong>
      </div>


      <div class="ask-row">
        <small
          data-ko="다음 목표"
          data-en="Next"
        >
          다음 목표
        </small>

        <strong>
          Working Prototype
        </strong>
      </div>


      <div class="ask-row">
        <small
          data-ko="투자 규모"
          data-en="Investment Amount"
        >
          투자 규모
        </small>

        <strong
          data-ko="협의"
          data-en="To Be Discussed"
        >
          협의
        </strong>
      </div>

    </div>

  </div>

</section>


<!-- =======================================================
     FOUNDER
======================================================= -->

<section class="founder" id="founder">

  <div class="wrap founder-grid">

    <div class="founder-photo reveal">

      <!--
        사용자가 올린 실제 사진을
        founder.png 파일명으로 저장해서
        index.html과 같은 폴더에 넣으세요.
      -->

      <img
        src="founder.png"
        alt="SVAS Founder Kim Tae-Young"
      >

    </div>


    <div class="reveal">

      <div
        class="label"
        data-ko="창업자"
        data-en="FOUNDER"
      >
        창업자
      </div>

      <h2
        data-ko="김태영"
        data-en="TAEYOUNG KIM"
      >
        김태영
      </h2>

      <div
        class="founder-role"
        data-ko="SVAS 창업자"
        data-en="Founder, SVAS"
      >
        SVAS 창업자
      </div>

    </div>


    <div
      class="founder-copy reveal"
      data-ko="KOMEL은 일상 속에서 짧게 사용할 수 있는 새로운 퍼스널 향 경험을 만들기 위한 프로젝트입니다.<br><br>현재 아이디어를 실제 제품으로 전환하기 위해 기구설계와 워킹 시제품 개발을 진행하고 있습니다."
      data-en="KOMEL is a project built around creating a new personal scent experience for short moments in everyday life.<br><br>We are now moving the concept toward a real product through mechanical engineering and working-prototype development."
    >
      KOMEL은 일상 속에서 짧게 사용할 수 있는
      새로운 퍼스널 향 경험을 만들기 위한 프로젝트입니다.
      <br><br>
      현재 아이디어를 실제 제품으로 전환하기 위해
      기구설계와 워킹 시제품 개발을 진행하고 있습니다.
    </div>

  </div>

</section>


<!-- =======================================================
     WAITLIST
======================================================= -->

<section class="waitlist" id="contact">

  <div class="wrap">

    <div class="wait-box reveal">

      <div>

        <h2
          data-ko="KOMEL의 여정에 함께하세요."
          data-en="Be part of KOMEL's journey."
        >
          KOMEL의 여정에 함께하세요.
        </h2>

        <p
          data-ko="제품 개발과 주요 진행상황을 받아보실 수 있습니다."
          data-en="Receive major product-development updates and milestones."
        >
          제품 개발과 주요 진행상황을 받아보실 수 있습니다.
        </p>

      </div>


      <div>

        <form
          class="wait-form"
          id="waitForm"
        >

          <input
            id="waitEmail"
            type="email"
            placeholder="이메일을 입력하세요"
            data-placeholder-ko="이메일을 입력하세요"
            data-placeholder-en="Enter your email"
            required
          >

          <button
            type="submit"
            data-ko="대기자 등록"
            data-en="Join Waitlist"
          >
            대기자 등록
          </button>

        </form>

        <div
          id="waitMsg"
          class="wait-msg"
        ></div>

      </div>

    </div>

  </div>

</section>


<!-- =======================================================
     FOOTER
======================================================= -->

<footer>

  <div class="wrap footer-flex">

    <span class="footer-brand">
      SVAS
    </span>


    <span>
      © 2026 SVAS. All rights reserved.
    </span>


    <div class="footer-links">

      <a
        href="#"
        data-ko="개인정보처리방침"
        data-en="Privacy Policy"
      >
        개인정보처리방침
      </a>

      <a
        href="#"
        data-ko="이용약관"
        data-en="Terms of Use"
      >
        이용약관
      </a>

      <a
        href="mailto:hello@svas.kr"
        data-ko="문의하기"
        data-en="Contact"
      >
        문의하기
      </a>

    </div>

  </div>

</footer>


<!-- =======================================================
     JAVASCRIPT
======================================================= -->

<script>

/* =========================================================
   HEADER SCROLL
========================================================= */

const header = document.getElementById("header");

window.addEventListener(
  "scroll",
  () => {

    header.classList.toggle(
      "scrolled",
      window.scrollY > 30
    );

  },
  { passive:true }
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if(entry.isIntersecting){

          entry.target.classList.add("visible");

          revealObserver.unobserve(entry.target);

        }

      });

    },
    {
      threshold:0.12
    }
  );

document
  .querySelectorAll(".reveal")
  .forEach((el) => {
    revealObserver.observe(el);
  });


/* =========================================================
   KR / EN LANGUAGE SYSTEM
========================================================= */

const langButtons =
  document.querySelectorAll("[data-lang-btn]");

const bilingualElements =
  document.querySelectorAll("[data-ko][data-en]");

const placeholderElements =
  document.querySelectorAll(
    "[data-placeholder-ko][data-placeholder-en]"
  );

const metaDescription =
  document.getElementById("metaDescription");


function setLanguage(lang){

  const isKorean = lang === "ko";

  document.documentElement.lang =
    isKorean ? "ko" : "en";


  /* TEXT */

  bilingualElements.forEach((el) => {

    const value =
      isKorean
        ? el.dataset.ko
        : el.dataset.en;

    if(value !== undefined){
      el.innerHTML = value;
    }

  });


  /* PLACEHOLDERS */

  placeholderElements.forEach((el) => {

    el.placeholder =
      isKorean
        ? el.dataset.placeholderKo
        : el.dataset.placeholderEn;

  });


  /* LANGUAGE BUTTON */

  langButtons.forEach((button) => {

    button.classList.toggle(
      "active",
      button.dataset.langBtn === lang
    );

  });


  /* TITLE + META */

  if(isKorean){

    document.title =
      "KOMEL | SVAS";

    metaDescription.setAttribute(
      "content",
      "SVAS가 개발 중인 휴대형 리필 퍼스널 웰니스 오브제 KOMEL. 현재 기구설계 및 워킹 시제품 개발을 진행하고 있습니다."
    );

  }else{

    document.title =
      "KOMEL | SVAS";

    metaDescription.setAttribute(
      "content",
      "KOMEL is a compact, refillable personal wellness object currently being developed by SVAS. Mechanical engineering is in progress and a working prototype is the next milestone."
    );

  }


  /* SAVE */

  localStorage.setItem(
    "svas-language",
    lang
  );

}


langButtons.forEach((button) => {

  button.addEventListener(
    "click",
    () => {

      setLanguage(
        button.dataset.langBtn
      );

    }
  );

});


const savedLanguage =
  localStorage.getItem(
    "svas-language"
  );

const initialLanguage =
  savedLanguage === "en"
    ? "en"
    : "ko";

setLanguage(initialLanguage);


/* =========================================================
   WAITLIST
========================================================= */

const waitForm =
  document.getElementById("waitForm");

const waitEmail =
  document.getElementById("waitEmail");

const waitMsg =
  document.getElementById("waitMsg");


waitForm.addEventListener(
  "submit",
  (event) => {

    event.preventDefault();

    const email =
      waitEmail.value.trim();

    const isValid =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      .test(email);

    const currentLanguage =
      document.documentElement.lang;


    if(!isValid){

      waitMsg.textContent =
        currentLanguage === "ko"
          ? "올바른 이메일 주소를 입력해주세요."
          : "Please enter a valid email address.";

      return;

    }


    /*
      중요:

      현재 이 폼은 화면상 동작만 합니다.
      실제 이메일 DB 저장 기능은 아직 없습니다.

      추후 다음 중 하나를 연결하세요.

      - Google Apps Script
      - Formspree
      - Supabase
      - Firebase
      - Mailchimp
    */


    waitMsg.textContent =
      currentLanguage === "ko"
        ? "등록되었습니다. 감사합니다."
        : "Thank you. You are on the list.";

    waitForm.reset();

  }
);

</script>

</body>
</html>
