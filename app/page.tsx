"use client";

import { ChatBot } from "./NexaBotChat";

import { useState } from "react";

export default function Home() {
const [menuOpen, setMenuOpen] = useState(false);
const [openFaq, setOpenFaq] = useState<number | null>(null);
const [activeDemo, setActiveDemo] = useState("Real Estate");
const [currency, setCurrency] = useState<"NGN" | "USD">("NGN");
  const faqs = [
    { 
      question: "What exactly does NexaBot build?",
      answer:
        "We build AI-powered chatbots and automation systems that help businesses answer customers, capture leads, qualify prospects, and automate repetitive conversations.",
    },
    {
      question: "Will the AI chatbot work 24/7?",
      answer:
        "Yes. Once deployed, your chatbot can respond to website visitors around the clock without requiring someone from your team to be online.",
    },
    {
      question: "Can NexaBot be customized for my business?",
      answer:
        "Absolutely. The AI can be configured around your business information, services, frequently asked questions, tone of voice, and customer journey.",
    },
    {
      question: "How quickly can my chatbot go live?",
      answer:
        "The timeline depends on the complexity of the project. Simple website chatbots can be prepared much faster than advanced systems with multiple integrations and workflows.",
    },
  ];

  return (
    <>
      <style jsx global>{`
        * {
          box-sizing: border-box;
          scroll-behavior: smooth;
        }

        html {
          background: #050505;
        }

        body {
          margin: 0;
          background: #050505;
          color: #f5f5f5;
          font-family:
            Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
        }

        ::selection {
          background: #ffffff;
          color: #000000;
        }

        .nexa-page {
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(82, 61, 255, 0.12),
              transparent 30%
            ),
            #050505;
        }

        .container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .nav {
          height: 82px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
          z-index: 50;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          color: white;
          text-decoration: none;
          font-size: 20px;
          font-weight: 700;
          letter-spacing: -0.04em;
        }

        .logo-mark {
          width: 30px;
          height: 30px;
          border-radius: 9px;
          background:
            linear-gradient(135deg, #ffffff 0%, #8d82ff 48%, #503cff 100%);
          box-shadow: 0 0 30px rgba(93, 75, 255, 0.35);
          position: relative;
        }

        .logo-mark::after {
          content: "";
          width: 10px;
          height: 10px;
          border: 2px solid #050505;
          border-radius: 50%;
          position: absolute;
          left: 8px;
          top: 8px;
        }

        .nav-links {
          display: flex;
          gap: 34px;
          align-items: center;
        }

        .nav-links a {
          color: #999;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.25s ease;
        }

        .nav-links a:hover {
          color: white;
        }

        .nav-cta {
          padding: 11px 18px;
          background: white;
          color: black !important;
          border-radius: 100px;
          font-weight: 600 !important;
        }

        .mobile-button {
          display: none;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.04);
          color: white;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          font-size: 18px;
        }

        .mobile-menu {
          position: absolute;
          top: 76px;
          left: 0;
          right: 0;
          padding: 18px;
          background: rgba(10, 10, 10, 0.97);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          backdrop-filter: blur(20px);
        }

        .mobile-menu a {
          color: #ddd;
          text-decoration: none;
          padding: 14px;
          border-radius: 12px;
        }

        .mobile-menu a:hover {
          background: rgba(255, 255, 255, 0.06);
        }

        .hero {
          min-height: 850px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          text-align: center;
          padding: 100px 0 130px;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          opacity: 0.18;
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.06) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.06) 1px,
              transparent 1px
            );
          background-size: 70px 70px;
          mask-image: linear-gradient(to bottom, black, transparent 80%);
        }

        .hero-orb {
          position: absolute;
          width: 650px;
          height: 650px;
          border-radius: 50%;
          background:
            radial-gradient(
              circle,
              rgba(88, 66, 255, 0.26) 0%,
              rgba(76, 54, 230, 0.09) 32%,
              transparent 68%
            );
          filter: blur(15px);
          animation: floatOrb 7s ease-in-out infinite;
        }

        @keyframes floatOrb {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-22px) scale(1.04);
          }
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 920px;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 13px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.04);
          border-radius: 100px;
          color: #b5b5b5;
          font-size: 12px;
          margin-bottom: 28px;
          backdrop-filter: blur(15px);
        }

        .eyebrow-dot {
          width: 7px;
          height: 7px;
          background: #7c6cff;
          border-radius: 50%;
          box-shadow: 0 0 15px #7060ff;
        }

        .hero h1 {
          font-size: clamp(54px, 8.5vw, 104px);
          line-height: 0.91;
          letter-spacing: -0.075em;
          margin: 0;
          font-weight: 700;
        }

        .gradient-text {
          background: linear-gradient(
            100deg,
            #ffffff 10%,
            #a59cff 48%,
            #6555ff 75%,
            #ffffff 100%
          );
          background-size: 200% auto;
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
          animation: gradientMove 5s linear infinite;
        }

        @keyframes gradientMove {
          to {
            background-position: 200% center;
          }
        }

        .hero-description {
          max-width: 650px;
          margin: 30px auto 0;
          color: #858585;
          font-size: 18px;
          line-height: 1.7;
        }

        .hero-buttons {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 34px;
          flex-wrap: wrap;
        }

        .button-primary,
        .button-secondary {
          text-decoration: none;
          padding: 14px 21px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          transition:
            transform 0.25s ease,
            background 0.25s ease;
        }

        .button-primary {
          background: white;
          color: black;
        }

        .button-secondary {
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.04);
        }

        .button-primary:hover,
        .button-secondary:hover {
          transform: translateY(-3px);
        }

        .button-secondary:hover {
          background: rgba(255, 255, 255, 0.09);
        }

        .hero-proof {
          margin-top: 55px;
          color: #606060;
          font-size: 12px;
        }

        .hero-proof strong {
          color: #bcbcbc;
        }

        .ai-window-wrap {
          position: relative;
          margin: 70px auto 0;
          width: min(920px, 100%);
          perspective: 1000px;
        }

        .ai-window {
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 22px;
          background:
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.08),
              rgba(255, 255, 255, 0.025)
            ),
            #090909;
          box-shadow:
            0 60px 120px rgba(0, 0, 0, 0.6),
            0 0 100px rgba(80, 62, 255, 0.13);
          overflow: hidden;
          transform: rotateX(3deg);
        }

        .window-top {
          height: 48px;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 0 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .window-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #454545;
        }

        .window-label {
          margin-left: auto;
          margin-right: auto;
          color: #555;
          font-size: 11px;
        }

        .window-body {
          min-height: 360px;
          padding: 38px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 30px;
          text-align: left;
        }

        .dashboard-title {
          font-size: 12px;
          color: #676767;
          margin-bottom: 12px;
        }

        .dashboard-heading {
          font-size: 32px;
          line-height: 1.1;
          letter-spacing: -0.05em;
          max-width: 400px;
        }

        .mini-chart {
          margin-top: 30px;
          height: 100px;
          display: flex;
          align-items: end;
          gap: 7px;
        }

        .bar {
          flex: 1;
          border-radius: 5px 5px 0 0;
          background: linear-gradient(to top, #4d3eff, #aaa4ff);
          opacity: 0.8;
          animation: barPulse 2.5s ease-in-out infinite alternate;
        }

        .bar:nth-child(1) {
          height: 35%;
        }
        .bar:nth-child(2) {
          height: 48%;
          animation-delay: 0.2s;
        }
        .bar:nth-child(3) {
          height: 42%;
          animation-delay: 0.4s;
        }
        .bar:nth-child(4) {
          height: 63%;
          animation-delay: 0.6s;
        }
        .bar:nth-child(5) {
          height: 55%;
          animation-delay: 0.8s;
        }
        .bar:nth-child(6) {
          height: 76%;
          animation-delay: 1s;
        }
        .bar:nth-child(7) {
          height: 91%;
          animation-delay: 1.2s;
        }

        @keyframes barPulse {
          from {
            transform: scaleY(0.85);
          }
          to {
            transform: scaleY(1);
          }
        }

        .chat-preview {
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 17px;
          background: rgba(0, 0, 0, 0.3);
          padding: 18px;
          align-self: stretch;
        }

        .chat-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .bot-avatar {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #6e60ff, #3024b8);
          box-shadow: 0 0 25px rgba(90, 73, 255, 0.35);
        }

        .online {
          color: #6bffaf;
          font-size: 10px;
        }

        .message {
          margin-top: 16px;
          padding: 11px 13px;
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.06);
          color: #aaa;
          font-size: 12px;
          line-height: 1.6;
          max-width: 88%;
        }

        .message.user {
          margin-left: auto;
          background: #5848ff;
          color: white;
        }

        .section {
          padding: 125px 0;
        }

        .section-border {
          border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .section-label {
          color: #7468ff;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-weight: 700;
          margin-bottom: 17px;
        }

        .section-heading {
          font-size: clamp(38px, 5vw, 66px);
          line-height: 0.98;
          letter-spacing: -0.065em;
          max-width: 780px;
          margin: 0;
        }

        .section-subtitle {
          color: #777;
          line-height: 1.7;
          font-size: 16px;
          max-width: 590px;
          margin-top: 24px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 65px;
        }

        .service-card {
          min-height: 300px;
          padding: 30px;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 20px;
          background:
            radial-gradient(
              circle at 80% 10%,
              rgba(87, 68, 255, 0.11),
              transparent 35%
            ),
            rgba(255, 255, 255, 0.025);
          transition:
            transform 0.3s ease,
            border-color 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .service-card:hover {
          transform: translateY(-7px);
          border-color: rgba(119, 105, 255, 0.35);
        }

        .service-number {
          color: #505050;
          font-size: 12px;
          margin-bottom: 70px;
        }

        .service-icon {
          font-size: 25px;
          margin-bottom: 22px;
        }

        .service-card h3 {
          margin: 0 0 11px;
          font-size: 21px;
          letter-spacing: -0.03em;
        }

        .service-card p {
          margin: 0;
          color: #777;
          line-height: 1.65;
          font-size: 14px;
        }

        .marquee {
          border-top: 1px solid rgba(255, 255, 255, 0.07);
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          overflow: hidden;
          white-space: nowrap;
          padding: 22px 0;
        }

        .marquee-track {
          display: inline-flex;
          gap: 50px;
          animation: marquee 25s linear infinite;
          color: #3e3e3e;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        .marquee-track span:nth-child(even) {
          color: #666;
        }

        @keyframes marquee {
          to {
            transform: translateX(-50%);
          }
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-top: 65px;
        }

        .process-card {
          padding: 28px;
          min-height: 260px;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }

        .process-number {
          font-size: 12px;
          color: #7468ff;
        }

        .process-card h3 {
          margin-top: 75px;
          font-size: 22px;
          letter-spacing: -0.04em;
        }

        .process-card p {
          color: #707070;
          line-height: 1.6;
          font-size: 14px;
        }

        .feature-section {
          background: #080808;
        }

        .feature-layout {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 70px;
          align-items: center;
        }

        .feature-visual {
          min-height: 550px;
          border-radius: 25px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background:
            radial-gradient(
              circle at 50% 45%,
              rgba(87, 68, 255, 0.22),
              transparent 32%
            ),
            #0a0a0a;
          display: grid;
          place-items: center;
          position: relative;
          overflow: hidden;
        }

        .orbit {
          width: 300px;
          height: 300px;
          border: 1px solid rgba(123, 110, 255, 0.25);
          border-radius: 50%;
          position: absolute;
          animation: rotate 15s linear infinite;
        }

        .orbit.two {
          width: 430px;
          height: 430px;
          animation-direction: reverse;
          animation-duration: 22s;
        }

        .orbit.three {
          width: 560px;
          height: 560px;
          animation-duration: 30s;
        }

        .orbit-dot {
          width: 10px;
          height: 10px;
          background: #867aff;
          border-radius: 50%;
          box-shadow: 0 0 25px #7769ff;
          position: absolute;
          top: -5px;
          left: 50%;
        }

        @keyframes rotate {
          to {
            transform: rotate(360deg);
          }
        }

        .feature-core {
          width: 120px;
          height: 120px;
          border-radius: 35px;
          background: linear-gradient(135deg, #8378ff, #3425bd);
          display: grid;
          place-items: center;
          font-size: 45px;
          box-shadow:
            0 0 80px rgba(90, 74, 255, 0.4),
            inset 0 1px rgba(255, 255, 255, 0.4);
          position: relative;
          z-index: 3;
        }

        .benefits {
          margin-top: 42px;
          display: grid;
          gap: 18px;
        }

        .benefit {
          display: flex;
          gap: 15px;
          align-items: flex-start;
        }

        .check {
          width: 23px;
          height: 23px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: rgba(112, 99, 255, 0.14);
          color: #8277ff;
          font-size: 12px;
          flex-shrink: 0;
        }

        .benefit strong {
          display: block;
          font-size: 14px;
          margin-bottom: 4px;
        }

        .benefit span {
          color: #707070;
          font-size: 13px;
          line-height: 1.5;
        }

        .currency-switch {
          display: inline-flex;
          margin-top: 28px;
          padding: 4px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          background: rgba(255, 255, 255, 0.03);
        }

        .currency-switch button {
          border: none;
          background: transparent;
          color: #666;
          padding: 8px 15px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          transition:
            background 0.2s ease,
            color 0.2s ease;
        }

        .currency-switch button.currency-active {
          background: white;
          color: black;
        }
        .pricing-grid {
        
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 65px;
        }

        .pricing-card {
                .pricing-card-top {
          position: relative;
        }

        .pricing-label {
          display: inline-block;
          color: #7468ff;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .pricing-price {
          display: flex;
          align-items: baseline;
          gap: 5px;
          margin: 24px 0 4px;
        }

        .pricing-price .currency {
          font-size: 18px;
          color: #999;
        }

        .pricing-price .amount {
          font-size: 52px;
          line-height: 1;
          letter-spacing: -0.06em;
          font-weight: 700;
        }

        .pricing-price .price-note {
          color: #666;
          font-size: 11px;
        }

        .monthly-price {
          margin: 8px 0 0;
          color: #777;
          font-size: 12px;
        }

        .pricing-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
          margin: 25px 0;
        }

        .pricing-button {
          display: block;
          text-align: center;
          padding: 13px 16px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 100px;
          color: white;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          transition:
            background 0.2s ease,
            color 0.2s ease,
            transform 0.2s ease;
        }

        .pricing-button:hover {
          background: white;
          color: black;
          transform: translateY(-2px);
        }

        .pricing-button-primary {
          background: white;
          color: black;
        }

        .pricing-button-primary:hover {
          background: #e9e6ff;
        }

        .pricing-featured {
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(91, 74, 255, 0.2),
              transparent 45%
            ),
            rgba(255, 255, 255, 0.04);
          border-color: rgba(111, 96, 255, 0.4);
          position: relative;
        }

        .pricing-badge {
          display: inline-block;
          padding: 6px 10px;
          margin-bottom: 18px;
          border: 1px solid rgba(124, 112, 255, 0.3);
          border-radius: 100px;
          color: #8277ff;
          background: rgba(112, 99, 255, 0.08);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.12em;
        }

        .pricing-custom-price {
          font-size: 42px;
          font-weight: 700;
          letter-spacing: -0.05em;
          margin: 24px 0 6px;
        }
          padding: 34px;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.025);
        }

        .pricing-card.featured {
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(91, 74, 255, 0.2),
              transparent 45%
            ),
            rgba(255, 255, 255, 0.04);
          border-color: rgba(111, 96, 255, 0.4);
        }

        .popular {
          color: #8277ff;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 25px;
        }

        .pricing-card h3 {
          font-size: 21px;
          margin: 0;
        }

        .price {
          font-size: 44px;
          letter-spacing: -0.06em;
          font-weight: 700;
          margin: 20px 0 8px;
        }

        .price small {
          font-size: 12px;
          color: #666;
          letter-spacing: 0;
        }

        .pricing-description {
          color: #6e6e6e;
          font-size: 13px;
          line-height: 1.5;
          min-height: 40px;
        }

        .pricing-features {
          margin: 30px 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 13px;
        }

        .pricing-features li {
          color: #999;
          font-size: 13px;
        }

        .pricing-features li::before {
          content: "✓";
          color: #7c70ff;
          margin-right: 9px;
        }

        .price-button {
          display: block;
          text-align: center;
          padding: 12px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 100px;
          color: white;
          text-decoration: none;
          font-size: 13px;
          transition: background 0.2s ease;
        }

        .price-button:hover {
          background: white;
          color: black;
        }

        .testimonials {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 65px;
        }

        .testimonial {
          padding: 30px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.025);
        }

        .stars {
          color: #8d83ff;
          letter-spacing: 4px;
          font-size: 12px;
        }

        .testimonial p {
          color: #a0a0a0;
          line-height: 1.7;
          font-size: 14px;
          margin: 25px 0;
        }

        .person {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .person-avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: linear-gradient(135deg, #777, #242424);
        }

        .person strong {
          display: block;
          font-size: 12px;
        }

        .person span {
          color: #555;
          font-size: 11px;
        }
                  .demo-buttons {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 45px;
        }

        .demo-button {
          padding: 11px 18px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          background: rgba(255, 255, 255, 0.03);
          color: #777;
          font-size: 12px;
          cursor: pointer;
          transition:
            background 0.2s ease,
            color 0.2s ease,
            transform 0.2s ease;
        }

        .demo-button:hover {
          color: white;
          transform: translateY(-2px);
        }

        .demo-button.active {
          background: white;
          color: black;
        }

        .demo-panel {
          margin-top: 25px;
          min-height: 330px;
          padding: 45px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          background:
            radial-gradient(
              circle at 10% 10%,
              rgba(87, 68, 255, 0.14),
              transparent 35%
            ),
            rgba(255, 255, 255, 0.025);
          display: grid;
          grid-template-columns: 110px 1fr;
          gap: 30px;
          align-items: center;
        }

        .demo-icon {
          width: 90px;
          height: 90px;
          border-radius: 25px;
          display: grid;
          place-items: center;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.09);
          font-size: 38px;
        }

        .demo-label {
          color: #7468ff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          margin-bottom: 12px;
        }

        .demo-content h3 {
          margin: 0;
          font-size: 30px;
          line-height: 1.08;
          letter-spacing: -0.05em;
          max-width: 700px;
        }

        .demo-content p {
          color: #777;
          line-height: 1.7;
          font-size: 14px;
          max-width: 700px;
          margin: 18px 0 0;
        }

        .demo-points {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 20px;
          margin-top: 25px;
        }

        .demo-points span {
          color: #aaa;
          font-size: 12px;
        }

        .demo-cta {
          text-align: center;
          margin-top: 35px;
        }

        .demo-cta p {
          color: #666;
          font-size: 13px;
          margin-bottom: 16px;
        }
        .showcase-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 60px;
        }

        .showcase-card {
          padding: 26px;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 22px;
          background:
            radial-gradient(
              circle at 90% 0%,
              rgba(87, 68, 255, 0.1),
              transparent 35%
            ),
            rgba(255, 255, 255, 0.025);
          transition:
            transform 0.3s ease,
            border-color 0.3s ease;
        }

        .showcase-card:hover {
          transform: translateY(-6px);
          border-color: rgba(119, 105, 255, 0.35);
        }

        .showcase-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .showcase-icon {
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.06);
          font-size: 21px;
        }

        .showcase-status {
          color: #6bffaf;
          font-size: 9px;
          letter-spacing: 0.12em;
          font-weight: 700;
        }

        .showcase-label {
          color: #7468ff;
          font-size: 9px;
          letter-spacing: 0.16em;
          font-weight: 700;
          margin-top: 24px;
        }

        .showcase-card h3 {
          margin: 9px 0 10px;
          font-size: 22px;
          letter-spacing: -0.04em;
        }

        .showcase-card > p {
          color: #727272;
          font-size: 13px;
          line-height: 1.65;
          min-height: 63px;
        }

        .showcase-chat {
          margin-top: 24px;
          padding: 15px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 16px;
          background: rgba(0, 0, 0, 0.25);
        }

        .showcase-message {
          width: fit-content;
          max-width: 90%;
          padding: 9px 11px;
          margin-bottom: 9px;
          border-radius: 11px;
          background: rgba(255, 255, 255, 0.06);
          color: #aaa;
          font-size: 11px;
          line-height: 1.5;
        }

        .showcase-message:last-child {
          margin-bottom: 0;
        }

        .showcase-message.user {
          margin-left: auto;
          background: #5848ff;
          color: white;
        }

        .showcase-button {
          display: block;
          margin-top: 20px;
          padding: 12px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 100px;
          color: white;
          text-decoration: none;
          font-size: 12px;
          font-weight: 600;
          transition:
            background 0.2s ease,
            color 0.2s ease;
        }

        .showcase-button:hover {
          background: white;
          color: black;
        }
        .faq-wrap {
          max-width: 820px;
          margin: 60px auto 0;
        }

        .faq {
          border-top: 1px solid rgba(255, 255, 255, 0.09);
        }

        .faq:last-child {
          border-bottom: 1px solid rgba(255, 255, 255, 0.09);
        }

        .faq-question {
          width: 100%;
          background: none;
          border: none;
          color: white;
          text-align: left;
          padding: 24px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          font-size: 16px;
        }

        .faq-plus {
          color: #666;
          font-size: 20px;
          transition: transform 0.25s ease;
        }

        .faq-plus.open {
          transform: rotate(45deg);
        }

        .faq-answer {
          color: #707070;
          line-height: 1.7;
          font-size: 14px;
          max-width: 700px;
          padding: 0 0 24px;
        }

        .cta {
          position: relative;
          text-align: center;
          padding: 130px 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          overflow: hidden;
        }

        .cta::before {
          content: "";
          position: absolute;
          width: 700px;
          height: 350px;
          border-radius: 50%;
          background: rgba(81, 63, 255, 0.16);
          filter: blur(100px);
          top: 20%;
          left: 50%;
          transform: translateX(-50%);
        }

        .cta-content {
          position: relative;
          z-index: 2;
        }

        .cta h2 {
          max-width: 850px;
          margin: 0 auto;
          font-size: clamp(45px, 7vw, 82px);
          line-height: 0.94;
          letter-spacing: -0.075em;
        }

        .cta p {
          color: #747474;
          max-width: 520px;
          margin: 25px auto;
          line-height: 1.7;
        }

        .footer {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 40px 0;
        }

        .footer-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .footer-copy {
          color: #505050;
          font-size: 12px;
        }

        .footer-links {
          display: flex;
          gap: 20px;
        }

        .footer-links a {
          color: #666;
          text-decoration: none;
          font-size: 12px;
        }

        @media (max-width: 900px) {
          .nav-links,
          .nav-cta {
            display: none;
                      .showcase-grid {
            grid-template-columns: 1fr 1fr;
          }
          }

          .mobile-button {
            display: block;
          }

          .window-body {
            grid-template-columns: 1fr;
          }

          .chat-preview {
            display: none;
          }

          .services-grid,
          .pricing-grid,
          .testimonials {
            grid-template-columns: 1fr 1fr;
          }

          .process-grid {
            grid-template-columns: 1fr 1fr;
          }

          .feature-layout {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .container {
            width: min(100% - 28px, 1180px);
                      .showcase-grid {
            grid-template-columns: 1fr;
          }
          }

          .hero {
            min-height: 760px;
            padding-top: 80px;
          }

          .hero h1 {
            font-size: 54px;
          }

          .hero-description {
            font-size: 15px;
          }

          .ai-window {
            border-radius: 16px;
          }

          .window-body {
            min-height: 300px;
            padding: 25px;
          }

          .dashboard-heading {
            font-size: 26px;
          }

          .services-grid,
          .pricing-grid,
          .testimonials,
          .process-grid {
            grid-template-columns: 1fr;
          }

          .section {
            padding: 85px 0;
          }

          .feature-visual {
            min-height: 390px;
          }

          .orbit {
            width: 210px;
            height: 210px;
          }

          .orbit.two {
            width: 300px;
            height: 300px;
          }

          .orbit.three {
            width: 390px;
            height: 390px;
          }

          .feature-core {
            width: 90px;
            height: 90px;
            border-radius: 26px;
            font-size: 32px;
          }

          .footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <div className="nexa-page">
        {/* NAVIGATION */}
        <div className="container">
          <nav className="nav">
            <a href="#" className="logo">
              <span className="logo-mark" />
              NexaBot
            </a>

            <div className="nav-links">
              <a href="#services">Services</a>
              <a href="#process">Process</a>
              <a href="#results">Why NexaBot</a>
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQ</a>
            </div>
<a
  href="https://wa.me/2349018324277?text=Hi%20NexaBot%20Agency!%20I'm%20interested%20in%20your%20AI%20chatbot%20services."
  target="_blank"
  rel="noopener noreferrer"
  className="nav-cta"
>
  Book a Demo
</a>

            <button
              className="mobile-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open menu"
            >
              {menuOpen ? "×" : "☰"}
            </button>

            {menuOpen && (
              <div className="mobile-menu">
                <a href="#services" onClick={() => setMenuOpen(false)}>
                  Services
                </a>
                <a href="#process" onClick={() => setMenuOpen(false)}>
                  Process
                </a>
                <a href="#results" onClick={() => setMenuOpen(false)}>
                  Why NexaBot
                </a>
                <a href="#pricing" onClick={() => setMenuOpen(false)}>
                  Pricing
                </a>
                <a href="#faq" onClick={() => setMenuOpen(false)}>
                  FAQ
                </a>
              <a
  href="https://wa.me/2349018324277?text=Hi%20NexaBot%20Agency!%20I'm%20interested%20in%20booking%20a%20demo."
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setMenuOpen(false)}
>
  Book a Demo
</a>
              </div>
            )}
          </nav>
        </div>

        {/* HERO */}
        <section className="hero">
          <div className="hero-grid" />
          <div className="hero-orb" />

          <div className="container">
            <div className="hero-content">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                AI AUTOMATION FOR MODERN BUSINESSES
              </div>

              <h1>
                Your business.
                <br />
                <span className="gradient-text">Powered by AI.</span>
              </h1>

              <p className="hero-description">
                We build intelligent AI systems that turn conversations into
                customers, automate repetitive work, and help businesses
                operate around the clock.
              </p>

              <div className="hero-buttons">
               <a
  href="https://wa.me/2349018324277?text=Hi%20NexaBot%20Agency!%20I'd%20like%20to%20start%20an%20AI%20project."
  target="_blank"
  rel="noopener noreferrer"
  className="button-primary"
>
  Start a Project →
</a>

                <a href="#services" className="button-secondary">
                  Explore Solutions
                </a>
                <button
  type="button"
  className="button-secondary"
  onClick={() =>
    window.dispatchEvent(new Event("open-nexabot-chat"))
  }
>
  Talk to NexaBot ✦
</button>
              </div>

              <div className="hero-proof">
                Built for <strong>e-commerce</strong> ·{" "}
                <strong>real estate</strong> ·{" "}
                <strong>consulting</strong> ·{" "}
                <strong>modern businesses</strong>
              </div>

              {/* AI DASHBOARD */}
              <div className="ai-window-wrap">
                <div className="ai-window">
                  <div className="window-top">
                    <span className="window-dot" />
                    <span className="window-dot" />
                    <span className="window-dot" />
                    <span className="window-label">
                      nexabot.ai / dashboard
                    </span>
                  </div>

                  <div className="window-body">
                    <div>
                      <div className="dashboard-title">
                        AI PERFORMANCE OVERVIEW
                      </div>

                      <div className="dashboard-heading">
                        Your AI never takes a coffee break.
                      </div>

                      <div className="mini-chart">
                        <span className="bar" />
                        <span className="bar" />
                        <span className="bar" />
                        <span className="bar" />
                        <span className="bar" />
                        <span className="bar" />
                        <span className="bar" />
                      </div>
                    </div>

                    <div className="chat-preview">
                      <div className="chat-header">
                        <div className="bot-avatar">✦</div>
                        <div>
                          <div style={{ fontSize: "12px" }}>NexaBot AI</div>
                          <div className="online">● Online</div>
                        </div>
                      </div>

                      <div className="message">
                        Hi! 👋 How can I help you today?
                      </div>

                      <div className="message user">
                        I want to learn about your services.
                      </div>

                      <div className="message">
                        Absolutely. I can explain our AI automation solutions
                        or help you book a consultation.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee">
          <div className="marquee-track">
            <span>AI AUTOMATION</span>
            <span>✦</span>
            <span>SMARTER SUPPORT</span>
            <span>✦</span>
            <span>LEAD GENERATION</span>
            <span>✦</span>
            <span>24/7 INTELLIGENCE</span>
            <span>✦</span>
            <span>AI AUTOMATION</span>
            <span>✦</span>
            <span>SMARTER SUPPORT</span>
            <span>✦</span>
            <span>LEAD GENERATION</span>
            <span>✦</span>
            <span>24/7 INTELLIGENCE</span>
          </div>
        </div>

        {/* SERVICES */}
        <section id="services" className="section">
          <div className="container">
            <div className="section-label">What we build</div>

            <h2 className="section-heading">
              AI systems designed to move your business forward.
            </h2>

            <p className="section-subtitle">
              NexaBot combines conversational AI, automation, and thoughtful
              user experiences to help businesses reduce manual work and
              create better customer experiences.
            </p>

            <div className="services-grid">
              {[
                [
                  "01",
                  "✦",
                  "AI Customer Support",
                  "Give customers instant, intelligent answers without making them wait for your team.",
                ],
                [
                  "02",
                  "◎",
                  "Lead Generation",
                  "Capture potential customers directly from your website and turn conversations into opportunities.",
                ],
                [
                  "03",
                  "◌",
                  "Appointment Booking",
                  "Let prospects schedule calls and appointments without unnecessary back-and-forth.",
                ],
                [
                  "04",
                  "↗",
                  "Sales Automation",
                  "Qualify prospects and guide them toward the right product, service, or next step.",
                ],
                [
                  "05",
                  "⌁",
                  "Business Knowledge",
                  "Give your AI the information it needs to answer questions consistently and accurately.",
                ],
                [
                  "06",
                  "∞",
                  "Custom AI Systems",
                  "Build tailored AI workflows around the way your business actually operates.",
                ],
              ].map(([number, icon, title, description]) => (
                <div className="service-card" key={number}>
                  <div className="service-number">{number}</div>
                  <div className="service-icon">{icon}</div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="section section-border">
          <div className="container">
            <div className="section-label">How it works</div>

            <h2 className="section-heading">
              From conversation to automation.
            </h2>

            <p className="section-subtitle">
              We keep the process simple. You tell us what your business needs;
              we turn it into an intelligent system.
            </p>

            <div className="process-grid">
              {[
                [
                  "01",
                  "Discover",
                  "We understand your business, customers, goals, and repetitive tasks.",
                ],
                [
                  "02",
                  "Design",
                  "We map the conversations and workflows your AI needs to handle.",
                ],
                [
                  "03",
                  "Build",
                  "We create and configure your AI system around your requirements.",
                ],
                [
                  "04",
                  "Launch",
                  "Your AI goes live and starts working alongside your team.",
                ],
              ].map(([number, title, description]) => (
                <div className="process-card" key={number}>
                  <div className="process-number">{number}</div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY NEXABOT */}
        <section id="results" className="section feature-section">
          <div className="container">
            <div className="feature-layout">
              <div className="feature-visual">
                <div className="orbit">
                  <div className="orbit-dot" />
                </div>
                <div className="orbit two">
                  <div className="orbit-dot" />
                </div>
                <div className="orbit three">
                  <div className="orbit-dot" />
                </div>

                <div className="feature-core">✦</div>
              </div>

              <div>
                <div className="section-label">Why NexaBot</div>

                <h2 className="section-heading">
                  Your next employee might be artificial.
                </h2>

                <p className="section-subtitle">
                  The best AI isn't about replacing your team. It's about
                  giving your team leverage — handling repetitive
                  conversations while people focus on higher-value work.
                </p>

                <div className="benefits">
                  {[
                    [
                      "24/7 availability",
                      "Your AI keeps conversations moving even outside business hours.",
                    ],
                    [
                      "Consistent answers",
                      "Customers receive clear responses based on your business knowledge.",
                    ],
                    [
                      "More opportunities",
                      "Capture leads at the moment someone is interested.",
                    ],
                    [
                      "Less repetitive work",
                      "Automate routine questions so your team can focus elsewhere.",
                    ],
                  ].map(([title, text]) => (
                    <div className="benefit" key={title}>
                      <div className="check">✓</div>
                      <div>
                        <strong>{title}</strong>
                        <span>{text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="section section-border">
          <div className="container">
            <div style={{ textAlign: "center" }}>
              <div className="section-label">Simple pricing</div>

            <h2
  className="section-heading"
  style={{ margin: "0 auto" }}
>
  AI that pays for itself.
</h2>

              <p
  className="section-subtitle"
  style={{ marginLeft: "auto", marginRight: "auto" }}
>
  Choose the AI system that fits your business today, then scale as your
  needs grow.
</p>
              <div className="currency-switch">
  <button
    className={currency === "NGN" ? "currency-active" : ""}
    onClick={() => setCurrency("NGN")}
  >
    ₦ NGN
  </button>

  <button
    className={currency === "USD" ? "currency-active" : ""}
    onClick={() => setCurrency("USD")}
  >
    $ USD
  </button>
</div>
            </div>
<div className="pricing-grid">
  {/* Starter */}
  <div className="pricing-card">
    <div className="pricing-card-top">
      <span className="pricing-label">STARTER</span>
      <h3>AI Essentials</h3>
      <p className="pricing-description">
        Everything you need to add a professional AI assistant to your website.
      </p>
    </div>

    <div className="pricing-price">
  <span className="currency">
    {currency === "NGN" ? "₦" : "$"}
  </span>

  <span className="amount">
    {currency === "NGN" ? "750,000" : "499"}
  </span>

  <span className="price-note">setup</span>
</div>

<p className="monthly-price">
  + {currency === "NGN" ? "₦200,000" : "$199"}/month
</p>

    <div className="pricing-divider" />

    <ul className="pricing-features">
      <li>✓ AI website chatbot</li>
      <li>✓ FAQ & business information</li>
      <li>✓ Lead capture</li>
      <li>✓ Basic customization</li>
      <li>✓ Mobile-friendly experience</li>
    </ul>

    <a
      href="https://wa.me/2349018324277?text=Hi%20NexaBot%20Agency!%20I'm%20interested%20in%20the%20Starter%20AI%20Essentials%20package."
      target="_blank"
      rel="noopener noreferrer"
      className="pricing-button"
    >
      Get Started →
    </a>
  </div>

  {/* Growth */}
  <div className="pricing-card pricing-featured">
    <div className="pricing-badge">MOST POPULAR</div>

    <div className="pricing-card-top">
      <span className="pricing-label">GROWTH</span>
      <h3>AI Growth System</h3>
      <p className="pricing-description">
        A more powerful AI system designed to help businesses capture and
        convert more opportunities.
      </p>
    </div>

  <div className="pricing-price">
  <span className="currency">
    {currency === "NGN" ? "₦" : "$"}
  </span>

  <span className="amount">
    {currency === "NGN" ? "1,500,000" : "999"}
  </span>

  <span className="price-note">setup</span>
</div>

<p className="monthly-price">
  + {currency === "NGN" ? "₦300,000" : "$299"}/month
</p>

    <div className="pricing-divider" />

    <ul className="pricing-features">
      <li>✓ Everything in Starter</li>
      <li>✓ Lead qualification</li>
      <li>✓ Appointment booking</li>
      <li>✓ Custom business knowledge</li>
      <li>✓ Sales-focused conversations</li>
      <li>✓ Advanced automation</li>
    </ul>

    <a
      href="https://wa.me/2349018324277?text=Hi%20NexaBot%20Agency!%20I'm%20interested%20in%20the%20Growth%20AI%20package."
      target="_blank"
      rel="noopener noreferrer"
      className="pricing-button pricing-button-primary"
    >
      Book a Demo →
    </a>
  </div>

  {/* Custom */}
  <div className="pricing-card">
    <div className="pricing-card-top">
      <span className="pricing-label">CUSTOM</span>
      <h3>AI Business System</h3>
      <p className="pricing-description">
        Custom AI automation for businesses with advanced requirements.
      </p>
    </div>

    <div className="pricing-custom-price">
      Let's Talk
    </div>

    <p className="monthly-price">
      Custom pricing based on your requirements
    </p>

    <div className="pricing-divider" />

    <ul className="pricing-features">
      <li>✓ Custom AI workflows</li>
      <li>✓ WhatsApp integration</li>
      <li>✓ CRM integrations</li>
      <li>✓ Advanced automation</li>
      <li>✓ Multiple business systems</li>
      <li>✓ Custom deployment</li>
    </ul>

    <a
      href="https://wa.me/2349018324277?text=Hi%20NexaBot%20Agency!%20I'd%20like%20to discuss a custom AI system."
      target="_blank"
      rel="noopener noreferrer"
      className="pricing-button"
    >
      Talk to NexaBot →
    </a>
  </div>
</div>
          </div>
        </section>

        {/* AI DEMO */}
<section className="section section-border">
  <div className="container">
    <div style={{ textAlign: "center" }}>
      <div className="section-label">See NexaBot in action</div>

      <h2 className="section-heading" style={{ margin: "0 auto" }}>
        Imagine what AI could do for your business.
      </h2>

      <p
        className="section-subtitle"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        Explore a few ways NexaBot can be customized for different types of
        businesses.
      </p>
    </div>

    <div className="demo-buttons">
      {["Real Estate", "E-commerce", "Consulting"].map((business) => (
        <button
          key={business}
          className={`demo-button ${
            activeDemo === business ? "active" : ""
          }`}
          onClick={() => setActiveDemo(business)}
        >
          {business}
        </button>
      ))}
    </div>

    <div className="demo-panel">
      {activeDemo === "Real Estate" && (
        <>
          <div className="demo-icon">🏠</div>

          <div className="demo-content">
            <div className="demo-label">REAL ESTATE AI</div>

            <h3>Turn property enquiries into qualified leads.</h3>

            <p>
              NexaBot can answer property questions, identify serious buyers,
              collect lead information, and help prospects schedule viewings.
            </p>

            <div className="demo-points">
              <span>✓ Property questions</span>
              <span>✓ Lead qualification</span>
              <span>✓ Viewing requests</span>
              <span>✓ 24/7 responses</span>
            </div>
          </div>
        </>
      )}

      {activeDemo === "E-commerce" && (
        <>
          <div className="demo-icon">🛍️</div>

          <div className="demo-content">
            <div className="demo-label">E-COMMERCE AI</div>

            <h3>Help shoppers find what they need faster.</h3>

            <p>
              NexaBot can answer product questions, recommend products, handle
              common customer requests, capture leads, and guide shoppers
              toward purchasing.
            </p>

            <div className="demo-points">
              <span>✓ Product questions</span>
              <span>✓ Product recommendations</span>
              <span>✓ Customer support</span>
              <span>✓ Sales assistance</span>
            </div>
          </div>
        </>
      )}

      {activeDemo === "Consulting" && (
        <>
          <div className="demo-icon">💼</div>

          <div className="demo-content">
            <div className="demo-label">CONSULTING AI</div>

            <h3>Convert website visitors into consultation opportunities.</h3>

            <p>
              NexaBot can answer common questions, understand what a prospect
              needs, qualify potential clients, collect project information,
              and guide them toward booking a consultation.
            </p>

            <div className="demo-points">
              <span>✓ Prospect qualification</span>
              <span>✓ FAQ automation</span>
              <span>✓ Consultation requests</span>
              <span>✓ Lead capture</span>
            </div>
          </div>
        </>
      )}
    </div>

    <div className="demo-cta">
      <p>Want an AI system designed around your business?</p>

      <a
        href="https://wa.me/2349018324277?text=Hi%20NexaBot%20Agency!%20I'd%20like%20an%20AI%20system%20for%20my%20business."
        target="_blank"
        rel="noopener noreferrer"
        className="button-primary"
      >
        Build My AI System →
      </a>
    </div>
  </div>
</section>
{/* DEMO SHOWCASE */}
<section className="section section-border">
  <div className="container">
    <div style={{ textAlign: "center" }}>
      <div className="section-label">Live AI examples</div>

      <h2 className="section-heading" style={{ margin: "0 auto" }}>
        See what NexaBot can build for you.
      </h2>

      <p
        className="section-subtitle"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        These examples show how an AI assistant could work inside different
        types of businesses.
      </p>
    </div>

    <div className="showcase-grid">
      <div className="showcase-card">
        <div className="showcase-top">
          <span className="showcase-icon">🏠</span>
          <span className="showcase-status">● LIVE DEMO</span>
        </div>

        <div className="showcase-label">REAL ESTATE</div>

        <h3>AI Property Assistant</h3>

        <p>
          Helps visitors discover properties, answer questions, qualify buyers,
          and request viewings.
        </p>

        <div className="showcase-chat">
          <div className="showcase-message">
            Hi! 👋 Looking for a property?
          </div>
          <div className="showcase-message user">
            Yes, I'm looking for a 3-bedroom house.
          </div>
          <div className="showcase-message">
            Great. What's your preferred location and budget?
          </div>
        </div>

        <a
          href="https://wa.me/2349018324277?text=Hi%20NexaBot%20Agency!%20I'd%20like%20an%20AI%20assistant%20for%20my%20real%20estate%20business."
          target="_blank"
          rel="noopener noreferrer"
          className="showcase-button"
        >
          Build This System →
        </a>
      </div>

      <div className="showcase-card">
        <div className="showcase-top">
          <span className="showcase-icon">🛍️</span>
          <span className="showcase-status">● LIVE DEMO</span>
        </div>

        <div className="showcase-label">E-COMMERCE</div>

        <h3>AI Shopping Assistant</h3>

        <p>
          Answers product questions, recommends products, supports customers,
          and helps turn conversations into sales.
        </p>

        <div className="showcase-chat">
          <div className="showcase-message">
            Hey! 👋 What are you looking for today?
          </div>
          <div className="showcase-message user">
            I need a laptop for university.
          </div>
          <div className="showcase-message">
            I can help with that. What's your preferred budget?
          </div>
        </div>

        <a
          href="https://wa.me/2349018324277?text=Hi%20NexaBot%20Agency!%20I'd%20like%20an%20AI%20assistant%20for%20my%20e-commerce%20business."
          target="_blank"
          rel="noopener noreferrer"
          className="showcase-button"
        >
          Build This System →
        </a>
      </div>

      <div className="showcase-card">
        <div className="showcase-top">
          <span className="showcase-icon">💼</span>
          <span className="showcase-status">● LIVE DEMO</span>
        </div>

        <div className="showcase-label">CONSULTING</div>

        <h3>AI Client Assistant</h3>

        <p>
          Answers questions, understands visitor needs, qualifies prospects,
          and guides them toward booking a consultation.
        </p>

        <div className="showcase-chat">
          <div className="showcase-message">
            Welcome! 👋 How can our consulting team help?
          </div>
          <div className="showcase-message user">
            I need help improving my business.
          </div>
          <div className="showcase-message">
            Tell me a little about your business and your biggest challenge.
          </div>
        </div>

        <a
          href="https://wa.me/2349018324277?text=Hi%20NexaBot%20Agency!%20I'd%20like%20an%20AI%20assistant%20for%20my%20consulting%20business."
          target="_blank"
          rel="noopener noreferrer"
          className="showcase-button"
        >
          Build This System →
        </a>
      </div>
    </div>
  </div>
</section>
        {/* FAQ */}
        <section id="faq" className="section section-border">
          <div className="container">
            <div style={{ textAlign: "center" }}>
              <div className="section-label">FAQ</div>

              <h2
                className="section-heading"
                style={{ margin: "0 auto" }}
              >
                Questions, answered.
              </h2>
            </div>

            <div className="faq-wrap">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div className="faq" key={faq.question}>
                    <button
                      className="faq-question"
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                    >
                      <span>{faq.question}</span>
                      <span
                        className={`faq-plus ${isOpen ? "open" : ""}`}
                      >
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div className="faq-answer">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="cta">
          <div className="cta-content">
            <div className="section-label">Ready when you are</div>

            <h2>
              Let AI handle the conversations.
            </h2>

            <p>
              Build a smarter customer experience with NexaBot and give your
              business an AI-powered advantage.
            </p>

            <div className="hero-buttons">
              <a
  href="https://wa.me/2349018324277?text=Hi%20NexaBot%20Agency!%20I'm%20interested%20in%20booking%20a%20demo."
  target="_blank"
  rel="noopener noreferrer"
  className="button-primary"
>
  Book a Demo →
</a>

              <a href="#services" className="button-secondary">
                Explore NexaBot
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="container footer-inner">
            <a href="#" className="logo">
              <span className="logo-mark" />
              NexaBot
            </a>

            <div className="footer-copy">
              © {new Date().getFullYear()} NexaBot Agency. All rights
              reserved.
            </div>

            <div className="footer-links">
              <a href="#services">Services</a>
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>
        </footer>
   </div>
<ChatBot
  apiEndpoint="/api/chat"
  businessName="NexaBot"
  initialMessage="Hi! 👋 I'm NexaBot. How can I help you learn more about our AI solutions?"
/>
</>
);
}