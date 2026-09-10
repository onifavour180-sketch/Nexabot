"use client";

import { ChatBot } from "./NexaBotChat";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What can NexaBot do for my business?",
      a: "NexaBot can answer common customer questions, collect important enquiry details, qualify potential customers and help your team know who to follow up with.",
    },
    {
      q: "Can it be customized for my business?",
      a: "Yes. NexaBot can be customized around your business, services, products, pricing, locations and frequently asked questions.",
    },
    {
      q: "Will customers know they are talking to AI?",
      a: "The experience is designed to feel like a natural conversation. Your customers can ask questions normally and receive immediate helpful responses.",
    },
    {
      q: "Can customers contact my team after chatting?",
      a: "Yes. NexaBot can guide qualified enquiries toward the next step, including contacting your team through WhatsApp or another preferred channel.",
    },
  ];

  return (
    <>
      <main className="site">
        {/* NAVBAR */}
        <nav className="navbar">
          <a href="#" className="logo">
            <span className="logoMark">✦</span>
            <span>NexaBot</span>
            <small>AGENCY</small>
          </a>

          <div className={`navLinks ${menuOpen ? "open" : ""}`}>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
              How It Works
            </a>
            <a href="#who-its-for" onClick={() => setMenuOpen(false)}>
              Who It's For
            </a>
            <a href="#pricing" onClick={() => setMenuOpen(false)}>
              Pricing
            </a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </a>
          </div>

          <a href="#contact" className="navCta">
            Book a Demo <span>↗</span>
          </a>

          <button
            className="menuButton"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="heroGlow glowOne" />
          <div className="heroGlow glowTwo" />

          <div className="heroContent">
            <div className="eyebrow">
              <span className="pulseDot" />
              AI CUSTOMER AUTOMATION
            </div>

            <h1>
              Turn Customer Questions Into{" "}
              <span>More Sales</span> — Automatically.
            </h1>

            <p className="heroSub">
              Your business doesn't sleep.
              <br />
              <strong>Neither should your customer support.</strong>
            </p>

            <p className="heroDescription">
              NexaBot answers customer questions, captures enquiries and helps
              your team follow up — 24/7.
            </p>

            <div className="heroActions">
              <a href="#contact" className="primaryButton">
                Get Your AI Assistant <span>→</span>
              </a>

              <a href="#demo" className="secondaryButton">
                See How It Works <span>↓</span>
              </a>
            </div>

            <div className="heroTrust">
              <div>
                <span>✦</span>
                24/7 Customer Response
              </div>
              <div>
                <span>✦</span>
                Qualified Enquiries
              </div>
              <div>
                <span>✦</span>
                WhatsApp Follow-up
              </div>
            </div>
          </div>

          {/* HERO CHAT DEMO */}
          <div className="heroVisual">
            <div className="visualOrb orbOne" />
            <div className="visualOrb orbTwo" />

            <div className="chatWindow">
              <div className="chatHeader">
                <div className="botIdentity">
                  <div className="botAvatar">✦</div>
                  <div>
                    <strong>NexaBot</strong>
                    <span>
                      <i /> Online
                    </span>
                  </div>
                </div>

                <div className="headerDots">•••</div>
              </div>

              <div className="chatBody">
                <div className="chatLabel">TODAY · CUSTOMER ENQUIRY</div>

                <div className="message customer">
                  <span className="messageTag">CUSTOMER</span>
                  <p>
                    Is the 3-bedroom apartment in Lekki still available?
                  </p>
                </div>

                <div className="message bot">
                  <div className="botMini">✦</div>
                  <div>
                    <span className="messageTag">NEXABOT</span>
                    <p>
                      Yes. It's currently available. What's your preferred
                      budget?
                    </p>
                  </div>
                </div>

                <div className="message customer short">
                  <span className="messageTag">CUSTOMER</span>
                  <p>₦100m–₦120m.</p>
                </div>

                <div className="message bot">
                  <div className="botMini">✦</div>
                  <div>
                    <span className="messageTag">NEXABOT</span>
                    <p>
                      Great. May I get your name and WhatsApp number so our
                      team can assist you?
                    </p>
                  </div>
                </div>

                <div className="qualification">
                  <div className="checkCircle">✓</div>
                  <div>
                    <strong>Qualified enquiry</strong>
                    <span>Ready for team follow-up</span>
                  </div>
                </div>
              </div>

              <div className="chatInput">
                <span>Type your message...</span>
                <button>↑</button>
              </div>
            </div>

            <div className="floatingCard responseCard">
              <span className="cardIcon">⚡</span>
              <div>
                <strong>Instant response</strong>
                <small>Customer answered in seconds</small>
              </div>
            </div>

            <div className="floatingCard leadCard">
              <span className="cardIcon">✓</span>
              <div>
                <strong>Enquiry captured</strong>
                <small>Customer requirements collected</small>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee">
          <div className="marqueeTrack">
            <span>AI CUSTOMER SUPPORT</span>
            <b>✦</b>
            <span>LEAD QUALIFICATION</span>
            <b>✦</b>
            <span>24/7 AUTOMATION</span>
            <b>✦</b>
            <span>SMART ENQUIRIES</span>
            <b>✦</b>
            <span>WHATSAPP FOLLOW-UP</span>
            <b>✦</b>
            <span>AI CUSTOMER SUPPORT</span>
            <b>✦</b>
            <span>LEAD QUALIFICATION</span>
            <b>✦</b>
            <span>24/7 AUTOMATION</span>
          </div>
        </div>

        {/* MONEY OUTCOME */}
        <section className="outcomeSection">
          <div className="sectionHeader center">
            <div className="eyebrow">THE PROBLEM</div>
            <h2>
              Every unanswered enquiry is a{" "}
              <span>potential customer</span> walking away.
            </h2>
            <p>
              Customers don't always wait. When they ask a question and nobody
              responds, they can simply move on to the next business.
            </p>
          </div>

          <div className="comparison">
            <div className="comparisonCard missed">
              <div className="comparisonTop">
                <span className="comparisonIcon">×</span>
                <span>WITHOUT NEXABOT</span>
              </div>

              <h3>Missed enquiry</h3>

              <div className="flow">
                <div>
                  <strong>Customer asks</strong>
                  <span>Interested in your service</span>
                </div>
                <i>→</i>
                <div>
                  <strong>Nobody responds</strong>
                  <span>Customer waits</span>
                </div>
                <i>→</i>
                <div>
                  <strong>Customer leaves</strong>
                  <span>Opportunity lost</span>
                </div>
              </div>
            </div>

            <div className="comparisonCard solved">
              <div className="comparisonTop">
                <span className="comparisonIcon">✓</span>
                <span>WITH NEXABOT</span>
              </div>

              <h3>Customer enquiry captured</h3>

              <div className="flow">
                <div>
                  <strong>Customer asks</strong>
                  <span>Interested in your service</span>
                </div>
                <i>→</i>
                <div>
                  <strong>Immediate response</strong>
                  <span>Question answered</span>
                </div>
                <i>→</i>
                <div>
                  <strong>Requirements collected</strong>
                  <span>Team follows up</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ENQUIRY JOURNEY */}
        <section className="journeySection" id="demo">
          <div className="sectionHeader center">
            <div className="eyebrow">FROM QUESTION TO OPPORTUNITY</div>
            <h2>
              From question to <span>qualified enquiry.</span>
            </h2>
            <p>
              NexaBot doesn't just answer questions. It helps move the
              conversation toward the next step.
            </p>
          </div>

          <div className="journeyGrid">
            <div className="journeyCard">
              <span className="stepNumber">01</span>
              <div className="journeyIcon">?</div>
              <h3>ASK</h3>
              <p>
                A customer asks about your product, service, price, location
                or availability.
              </p>
            </div>

            <div className="journeyLine">→</div>

            <div className="journeyCard">
              <span className="stepNumber">02</span>
              <div className="journeyIcon">✦</div>
              <h3>ANSWER</h3>
              <p>
                NexaBot responds immediately with helpful information based on
                your business.
              </p>
            </div>

            <div className="journeyLine">→</div>

            <div className="journeyCard">
              <span className="stepNumber">03</span>
              <div className="journeyIcon">◉</div>
              <h3>QUALIFY</h3>
              <p>
                The conversation can collect the details your team needs to
                understand the enquiry.
              </p>
            </div>

            <div className="journeyLine">→</div>

            <div className="journeyCard">
              <span className="stepNumber">04</span>
              <div className="journeyIcon">↗</div>
              <h3>FOLLOW UP</h3>
              <p>
                Your team receives a clearer enquiry and can continue the
                conversation.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="servicesSection" id="services">
          <div className="sectionHeader">
            <div>
              <div className="eyebrow">WHAT WE DO</div>
              <h2>
                Customer support that works{" "}
                <span>while you focus on business.</span>
              </h2>
            </div>

            <p>
              We build practical AI assistants around the questions your
              customers already ask every day.
            </p>
          </div>

          <div className="servicesGrid">
            <div className="serviceCard large">
              <div className="serviceNumber">01</div>
              <div className="serviceIcon">✦</div>
              <h3>AI Website Chatbots</h3>
              <p>
                Give visitors an immediate way to ask questions and start an
                enquiry directly from your website.
              </p>
              <div className="serviceVisual">
                <span>“Do you have this property available?”</span>
                <span>“Yes. Let me help you with that.”</span>
              </div>
            </div>

            <div className="serviceCard">
              <div className="serviceNumber">02</div>
              <div className="serviceIcon">◎</div>
              <h3>Lead Qualification</h3>
              <p>
                Collect useful customer information before your team takes
                over the conversation.
              </p>
            </div>

            <div className="serviceCard">
              <div className="serviceNumber">03</div>
              <div className="serviceIcon">↗</div>
              <h3>WhatsApp Follow-up</h3>
              <p>
                Move interested customers toward a direct conversation with
                your business.
              </p>
            </div>

            <div className="serviceCard">
              <div className="serviceNumber">04</div>
              <div className="serviceIcon">⌁</div>
              <h3>Business Knowledge</h3>
              <p>
                Build the assistant around your services, FAQs, products,
                locations and customer needs.
              </p>
            </div>

            <div className="serviceCard">
              <div className="serviceNumber">05</div>
              <div className="serviceIcon">◌</div>
              <h3>Customer Automation</h3>
              <p>
                Reduce repetitive questions so your team can spend more time
                on serious enquiries and customers.
              </p>
            </div>
          </div>
        </section>

        {/* WHO ITS FOR */}
        <section className="industriesSection" id="who-its-for">
          <div className="sectionHeader center">
            <div className="eyebrow">WHO IT'S FOR</div>
            <h2>
              Built for businesses that receive{" "}
              <span>customer enquiries.</span>
            </h2>
            <p>
              If customers regularly ask questions before buying, NexaBot can
              help you respond faster.
            </p>
          </div>

          <div className="industryGrid">
            <div className="industryCard">
              <div className="industryImage realEstate">
                <span>⌂</span>
              </div>
              <div className="industryContent">
                <span>01</span>
                <h3>Real Estate</h3>
                <p>
                  Answer property questions, collect requirements and help
                  agents identify serious prospects.
                </p>
                <a href="#contact">Explore solution →</a>
              </div>
            </div>

            <div className="industryCard">
              <div className="industryImage ecommerce">
                <span>◈</span>
              </div>
              <div className="industryContent">
                <span>02</span>
                <h3>E-commerce</h3>
                <p>
                  Help shoppers with products, availability, pricing and
                  common buying questions.
                </p>
                <a href="#contact">Explore solution →</a>
              </div>
            </div>

            <div className="industryCard">
              <div className="industryImage consultancy">
                <span>◇</span>
              </div>
              <div className="industryContent">
                <span>03</span>
                <h3>Consultancies</h3>
                <p>
                  Help potential clients understand your services and begin
                  the enquiry process.
                </p>
                <a href="#contact">Explore solution →</a>
              </div>
            </div>

            <div className="industryCard">
              <div className="industryImage auto">
                <span>◆</span>
              </div>
              <div className="industryContent">
                <span>04</span>
                <h3>Automotive</h3>
                <p>
                  Answer questions about vehicles, services, availability and
                  customer enquiries.
                </p>
                <a href="#contact">Explore solution →</a>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="processSection" id="how-it-works">
          <div className="processIntro">
            <div className="eyebrow">HOW IT WORKS</div>
            <h2>
              Simple for your customers.
              <br />
              <span>Powerful for your business.</span>
            </h2>
            <p>
              We handle the technical setup. You provide the business
              information. Your customers get a helpful assistant.
            </p>

            <a href="#contact" className="outlineButton">
              Talk to NexaBot <span>→</span>
            </a>
          </div>

          <div className="processSteps">
            <div className="processStep">
              <div className="processStepNumber">01</div>
              <div>
                <h3>Understand your business</h3>
                <p>
                  We learn about your products, services, customers and common
                  questions.
                </p>
              </div>
            </div>

            <div className="processStep">
              <div className="processStepNumber">02</div>
              <div>
                <h3>Build your AI assistant</h3>
                <p>
                  NexaBot is configured around your business information and
                  customer journey.
                </p>
              </div>
            </div>

            <div className="processStep">
              <div className="processStepNumber">03</div>
              <div>
                <h3>Connect it to your website</h3>
                <p>
                  Customers can interact with your assistant directly from
                  your website.
                </p>
              </div>
            </div>

            <div className="processStep">
              <div className="processStepNumber">04</div>
              <div>
                <h3>Start capturing enquiries</h3>
                <p>
                  Your customers get answers while your team gets better
                  opportunities to follow up.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY NEXABOT */}
        <section className="whySection">
          <div className="whyVisual">
            <div className="gridSphere">
              <div className="sphereCore">✦</div>
              <div className="orbit orbitA" />
              <div className="orbit orbitB" />
              <div className="orbit orbitC" />
            </div>

            <div className="whyFloating topFloat">
              <strong>24/7</strong>
              <span>Always available</span>
            </div>

            <div className="whyFloating bottomFloat">
              <strong>FAST</strong>
              <span>Instant responses</span>
            </div>
          </div>

          <div className="whyContent">
            <div className="eyebrow">WHY NEXABOT</div>
            <h2>
              Your team shouldn't have to answer the{" "}
              <span>same questions all day.</span>
            </h2>

            <p>
              NexaBot handles repetitive customer conversations so your team
              can focus on the enquiries that actually need a human.
            </p>

            <div className="benefits">
              <div>
                <span>✓</span>
                <div>
                  <strong>Respond instantly</strong>
                  <p>Customers don't have to wait for a reply.</p>
                </div>
              </div>

              <div>
                <span>✓</span>
                <div>
                  <strong>Never miss a late-night enquiry</strong>
                  <p>Your assistant keeps working outside business hours.</p>
                </div>
              </div>

              <div>
                <span>✓</span>
                <div>
                  <strong>Give your team better enquiries</strong>
                  <p>Collect useful information before follow-up.</p>
                </div>
              </div>

              <div>
                <span>✓</span>
                <div>
                  <strong>Reduce repetitive work</strong>
                  <p>Let AI handle common questions automatically.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KLEMZ CASE STUDY */}
        <section className="caseStudySection">
          <div className="caseStudyCard">
            <div className="caseStudyContent">
              <div className="eyebrow">OUR FIRST EXAMPLE</div>
              <h2>
                Klemz <span>Autos</span>
              </h2>

              <p className="caseLead">
                We built an AI customer-enquiry assistant for Klemz Autos that
                helps website visitors get answers to common questions and
                start an enquiry.
              </p>

              <div className="caseFlow">
                <div>
                  <span>01</span>
                  <strong>Customer asks</strong>
                </div>
                <div>
                  <span>02</span>
                  <strong>NexaBot responds</strong>
                </div>
                <div>
                  <span>03</span>
                  <strong>Enquiry starts</strong>
                </div>
                <div>
                  <span>04</span>
                  <strong>Business follows up</strong>
                </div>
              </div>

              <a
                href="https://klemzautos.wixsite.com/klemz-autos"
                target="_blank"
                rel="noopener noreferrer"
                className="primaryButton"
              >
                View Klemz Autos <span>↗</span>
              </a>
            </div>

            <div className="caseStudyVisual">
              <div className="caseBrowser">
                <div className="browserTop">
                  <span />
                  <span />
                  <span />
                  <div>klemz-autos</div>
                </div>

                <div className="fakeWebsite">
                  <div className="fakeNav">
                    <strong>KLEMZ</strong>
                    <span>Vehicles</span>
                    <span>Services</span>
                    <span>Contact</span>
                  </div>

                  <div className="fakeHero">
                    <small>WELCOME TO KLEMZ AUTOS</small>
                    <h3>Find your next vehicle.</h3>
                  </div>

                  <div className="miniChat">
                    <div className="miniChatHead">
                      <span>✦</span>
                      <strong>Klemz Autos</strong>
                      <i>×</i>
                    </div>
                    <div className="miniMessages">
                      <p className="miniCustomer">
                        Do you have cars available?
                      </p>
                      <p className="miniBot">
                        Yes! I can help you find the right vehicle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="pricingSection" id="pricing">
          <div className="sectionHeader center">
            <div className="eyebrow">FIRST CLIENT PROGRAMME</div>
            <h2>
              Start with an AI assistant{" "}
              <span>built around your business.</span>
            </h2>
            <p>
              Special introductory pricing for businesses ready to start
              automating customer enquiries.
            </p>
          </div>

          <div className="pricingCard">
            <div className="pricingGlow" />

            <div className="limitedBadge">LIMITED INTRODUCTORY PRICING</div>

            <div className="pricingMain">
              <div className="priceText">
                <span>SETUP</span>
                <div>
                  <small>₦</small>
                  150,000
                </div>
                <p>One-time setup</p>
              </div>

              <div className="pricePlus">+</div>

              <div className="priceText">
                <span>MONTHLY</span>
                <div>
                  <small>₦</small>
                  50,000
                </div>
                <p>Per month</p>
              </div>
            </div>

            <div className="pricingDivider" />

            <div className="pricingBottom">
              <div className="pricingFeatures">
                <span>✓ Customized AI chatbot</span>
                <span>✓ Website integration</span>
                <span>✓ Business knowledge setup</span>
                <span>✓ Enquiry qualification</span>
                <span>✓ WhatsApp follow-up flow</span>
                <span>✓ Ongoing support</span>
              </div>

              <a href="#contact" className="primaryButton">
                Get Started <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* DEMO SHOWCASE */}
        <section className="showcaseSection">
          <div className="showcaseTop">
            <div>
              <div className="eyebrow">SEE IT IN ACTION</div>
              <h2>
                Let customers ask.
                <br />
                <span>Let NexaBot handle the conversation.</span>
              </h2>
            </div>

            <p>
              The best way to understand NexaBot is to experience the
              conversation yourself.
            </p>
          </div>

          <div className="showcaseChat">
            <div className="showcaseHeader">
              <div className="showcaseBrand">
                <div>✦</div>
                <span>NexaBot AI</span>
              </div>

              <span className="liveStatus">
                <i /> LIVE DEMO
              </span>
            </div>

            <div className="showcaseMessages">
              <div className="showcaseCustomer">
                <span>CUSTOMER</span>
                <p>How much does your service cost?</p>
              </div>

              <div className="showcaseBot">
                <div className="showcaseBotIcon">✦</div>
                <div>
                  <span>NEXABOT</span>
                  <p>
                    I'd be happy to help. Are you looking for an AI chatbot
                    for a website, customer support or lead generation?
                  </p>
                </div>
              </div>

              <div className="showcaseCustomer">
                <span>CUSTOMER</span>
                <p>For my real estate business.</p>
              </div>

              <div className="showcaseBot">
                <div className="showcaseBotIcon">✦</div>
                <div>
                  <span>NEXABOT</span>
                  <p>
                    Perfect. NexaBot can help answer property questions,
                    qualify potential buyers and direct serious enquiries to
                    your team.
                  </p>
                </div>
              </div>
            </div>

            <div className="demoInput">
              <span>Ask NexaBot something...</span>
              <div>↑</div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faqSection" id="faq">
          <div className="faqIntro">
            <div className="eyebrow">FAQ</div>
            <h2>
              Questions?
              <br />
              <span>We've got answers.</span>
            </h2>
            <p>
              Still unsure whether NexaBot is right for your business? Here
              are some common questions.
            </p>
          </div>

          <div className="faqList">
            {faqs.map((faq, index) => (
              <div
                className={`faqItem ${openFaq === index ? "active" : ""}`}
                key={index}
              >
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  <span>{faq.q}</span>
                  <i>{openFaq === index ? "−" : "+"}</i>
                </button>

                <div className="faqAnswer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="ctaSection" id="contact">
          <div className="ctaGlow" />

          <div className="ctaContent">
            <div className="eyebrow">READY TO AUTOMATE?</div>

            <h2>
              Stop letting customer enquiries
              <br />
              <span>slip through the cracks.</span>
            </h2>

            <p>
              Give your customers instant answers and give your team better
              opportunities to follow up.
            </p>

            <div className="ctaActions">
              <a
                href="https://wa.me/2349018324277?text=Hi%20NexaBot%20Agency%2C%20I'd%20like%20to%20learn%20more%20about%20your%20AI%20chatbot."
                target="_blank"
                rel="noopener noreferrer"
                className="whatsappButton"
              >
                Chat on WhatsApp <span>↗</span>
              </a>

              <a href="#pricing" className="ctaSecondary">
                View First Client Programme
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footerTop">
            <div>
              <a href="#" className="logo">
                <span className="logoMark">✦</span>
                <span>NexaBot</span>
                <small>AGENCY</small>
              </a>

              <p>
                AI-powered customer automation for businesses that don't want
                to miss opportunities.
              </p>
            </div>

            <div className="footerLinks">
              <div>
                <strong>Navigate</strong>
                <a href="#services">Services</a>
                <a href="#how-it-works">How It Works</a>
                <a href="#pricing">Pricing</a>
              </div>

              <div>
                <strong>Company</strong>
                <a href="#who-its-for">Who It's For</a>
                <a href="#faq">FAQ</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>

          <div className="footerBottom">
            <span>© {new Date().getFullYear()} NexaBot Agency.</span>
            <span>Built for businesses that want to grow.</span>
          </div>
        </footer>
      </main>

      {/* YOUR EXISTING WORKING HOMEPAGE CHATBOT */}
      <ChatBot
        apiEndpoint="/api/chat"
        businessName="NexaBot"
        initialMessage="Hi! 👋 I'm NexaBot. How can I help you learn more about our AI solutions?"
      />

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #050507;
          color: #f5f5f7;
          font-family:
            Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          font: inherit;
        }

        .site {
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 75% 8%,
              rgba(128, 77, 255, 0.11),
              transparent 28%
            ),
            radial-gradient(
              circle at 10% 40%,
              rgba(67, 100, 255, 0.07),
              transparent 25%
            ),
            #050507;
        }

        .site section {
          position: relative;
        }

        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5vw;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(5, 5, 7, 0.78);
          backdrop-filter: blur(18px);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 20px;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .logoMark {
          display: grid;
          place-items: center;
          width: 29px;
          height: 29px;
          border: 1px solid rgba(177, 131, 255, 0.7);
          border-radius: 8px;
          color: #c59cff;
          box-shadow: 0 0 25px rgba(141, 86, 255, 0.3);
        }

        .logo small {
          margin-left: -5px;
          margin-top: 4px;
          font-size: 7px;
          letter-spacing: 1.5px;
          color: #777783;
        }

        .navLinks {
          display: flex;
          gap: 32px;
          align-items: center;
        }

        .navLinks a {
          color: #92929d;
          font-size: 13px;
          transition: 0.25s ease;
        }

        .navLinks a:hover {
          color: white;
        }

        .navCta {
          padding: 11px 17px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 9px;
          background: rgba(255, 255, 255, 0.045);
          font-size: 13px;
          transition: 0.25s ease;
        }

        .navCta:hover {
          border-color: rgba(180, 135, 255, 0.7);
          box-shadow: 0 0 25px rgba(133, 75, 255, 0.18);
        }

        .navCta span {
          color: #b990ff;
          margin-left: 6px;
        }

        .menuButton {
          display: none;
          border: 0;
          background: transparent;
          color: white;
          font-size: 25px;
        }

        .hero {
          min-height: calc(100vh - 76px);
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          align-items: center;
          gap: 40px;
          padding: 80px 7vw 100px;
          isolation: isolate;
        }

        .hero:before,
        .outcomeSection:before,
        .journeySection:before,
        .servicesSection:before,
        .industriesSection:before,
        .processSection:before,
        .whySection:before,
        .pricingSection:before,
        .showcaseSection:before,
        .faqSection:before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.28;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.035) 1px,
              transparent 1px
            );
          background-size: 70px 70px;
          mask-image: linear-gradient(to bottom, black, transparent 80%);
          z-index: -1;
        }

        .heroContent {
          position: relative;
          z-index: 2;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 21px;
          color: #ad8ae4;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2.5px;
        }

        .pulseDot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #b98aff;
          box-shadow: 0 0 12px #a86cff;
          animation: pulse 1.7s infinite;
        }

        @keyframes pulse {
          50% {
            opacity: 0.4;
            transform: scale(0.7);
          }
        }

        .hero h1 {
          max-width: 720px;
          margin: 0;
          font-size: clamp(46px, 6vw, 78px);
          line-height: 0.98;
          letter-spacing: -4px;
          font-weight: 800;
        }

        .hero h1 span,
        h2 span {
          color: #bd91ff;
          text-shadow: 0 0 35px rgba(157, 93, 255, 0.2);
        }

        .heroSub {
          margin: 29px 0 10px;
          color: #bcbcc6;
          font-size: 21px;
          line-height: 1.45;
        }

        .heroSub strong {
          color: white;
        }

        .heroDescription {
          max-width: 560px;
          margin: 0;
          color: #858591;
          font-size: 16px;
          line-height: 1.7;
        }

        .heroActions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .primaryButton,
        .secondaryButton,
        .outlineButton,
        .whatsappButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-height: 50px;
          padding: 0 21px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 700;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .primaryButton {
          color: white;
          background: linear-gradient(135deg, #8050d9, #9e6af4);
          box-shadow: 0 12px 40px rgba(118, 62, 220, 0.24);
        }

        .primaryButton:hover,
        .whatsappButton:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 50px rgba(133, 71, 240, 0.35);
        }

        .secondaryButton,
        .outlineButton {
          border: 1px solid rgba(255, 255, 255, 0.13);
          color: #d8d8df;
          background: rgba(255, 255, 255, 0.035);
        }

        .secondaryButton:hover,
        .outlineButton:hover {
          transform: translateY(-3px);
          border-color: rgba(190, 145, 255, 0.55);
        }

        .heroTrust {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 33px;
        }

        .heroTrust div {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #777783;
          font-size: 10px;
        }

        .heroTrust span {
          color: #ad82ed;
        }

        .heroVisual {
          position: relative;
          min-height: 650px;
          display: grid;
          place-items: center;
        }

        .visualOrb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }

        .orbOne {
          width: 300px;
          height: 300px;
          background: rgba(125, 68, 255, 0.16);
          top: 18%;
          right: 8%;
        }

        .orbTwo {
          width: 220px;
          height: 220px;
          background: rgba(47, 111, 255, 0.09);
          bottom: 8%;
          left: 8%;
        }

        .chatWindow {
          position: relative;
          width: min(500px, 100%);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 22px;
          background: rgba(13, 13, 17, 0.91);
          box-shadow:
            0 40px 100px rgba(0, 0, 0, 0.55),
            0 0 80px rgba(128, 69, 255, 0.13);
          overflow: hidden;
          transform: perspective(1200px) rotateY(-4deg) rotateX(2deg);
          animation: floatChat 5s ease-in-out infinite;
          z-index: 3;
        }

        @keyframes floatChat {
          0%,
          100% {
            transform: perspective(1200px) rotateY(-4deg) rotateX(2deg)
              translateY(0);
          }
          50% {
            transform: perspective(1200px) rotateY(-4deg) rotateX(2deg)
              translateY(-10px);
          }
        }

        .chatHeader {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 17px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.025);
        }

        .botIdentity {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .botAvatar,
        .botMini,
        .showcaseBotIcon {
          display: grid;
          place-items: center;
          flex-shrink: 0;
          color: #c59cff;
          background: rgba(157, 91, 255, 0.11);
          border: 1px solid rgba(177, 128, 255, 0.28);
          box-shadow: 0 0 22px rgba(142, 81, 255, 0.15);
        }

        .botAvatar {
          width: 36px;
          height: 36px;
          border-radius: 11px;
        }

        .botIdentity strong {
          display: block;
          font-size: 13px;
        }

        .botIdentity span {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-top: 3px;
          color: #777781;
          font-size: 9px;
        }

        .botIdentity i,
        .liveStatus i {
          width: 5px;
          height: 5px;
          display: inline-block;
          border-radius: 50%;
          background: #65d69a;
          box-shadow: 0 0 9px #65d69a;
        }

        .headerDots {
          color: #696973;
          letter-spacing: 3px;
        }

        .chatBody {
          padding: 23px;
        }

        .chatLabel,
        .messageTag,
        .showcaseCustomer span,
        .showcaseBot span {
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1.6px;
          color: #666671;
        }

        .chatLabel {
          margin-bottom: 18px;
        }

        .message {
          max-width: 88%;
          margin-bottom: 16px;
        }

        .message p {
          margin: 6px 0 0;
          padding: 13px 15px;
          font-size: 12px;
          line-height: 1.6;
        }

        .customer {
          margin-left: auto;
        }

        .customer .messageTag {
          display: block;
          text-align: right;
        }

        .customer p {
          color: #dedee5;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 14px 14px 3px 14px;
        }

        .bot {
          display: flex;
          gap: 9px;
        }

        .botMini {
          width: 27px;
          height: 27px;
          margin-top: 16px;
          border-radius: 8px;
          font-size: 10px;
        }

        .bot p {
          color: #cfcfd8;
          background: rgba(130, 76, 215, 0.09);
          border: 1px solid rgba(159, 103, 238, 0.13);
          border-radius: 3px 14px 14px 14px;
        }

        .qualification {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 20px;
          padding: 12px;
          border: 1px solid rgba(94, 206, 151, 0.17);
          border-radius: 10px;
          background: rgba(62, 190, 131, 0.045);
        }

        .checkCircle {
          display: grid;
          place-items: center;
          width: 27px;
          height: 27px;
          border-radius: 50%;
          background: rgba(75, 200, 142, 0.12);
          color: #6cdaa2;
        }

        .qualification strong,
        .qualification span {
          display: block;
        }

        .qualification strong {
          font-size: 10px;
        }

        .qualification span {
          margin-top: 3px;
          color: #74747e;
          font-size: 9px;
        }

        .chatInput,
        .demoInput {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0 15px 15px;
          padding: 9px 9px 9px 15px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 11px;
          color: #5f5f68;
          font-size: 10px;
        }

        .chatInput button,
        .demoInput div {
          display: grid;
          place-items: center;
          width: 29px;
          height: 29px;
          border: 0;
          border-radius: 8px;
          color: white;
          background: #8551d7;
        }

        .floatingCard {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 11px 13px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          background: rgba(12, 12, 16, 0.88);
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(15px);
          z-index: 5;
        }

        .responseCard {
          top: 14%;
          left: -1%;
          animation: floatSmall 4s ease-in-out infinite;
        }

        .leadCard {
          right: -2%;
          bottom: 15%;
          animation: floatSmall 4.5s ease-in-out infinite reverse;
        }

        @keyframes floatSmall {
          50% {
            transform: translateY(-7px);
          }
        }

        .cardIcon {
          display: grid;
          place-items: center;
          width: 29px;
          height: 29px;
          border-radius: 8px;
          color: #b991ff;
          background: rgba(144, 85, 231, 0.12);
        }

        .floatingCard strong,
        .floatingCard small {
          display: block;
        }

        .floatingCard strong {
          font-size: 10px;
        }

        .floatingCard small {
          margin-top: 3px;
          color: #70707b;
          font-size: 8px;
        }

        .marquee {
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(255, 255, 255, 0.018);
        }

        .marqueeTrack {
          display: flex;
          width: max-content;
          align-items: center;
          gap: 35px;
          padding: 17px 0;
          color: #555560;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2.5px;
          animation: marquee 25s linear infinite;
        }

        .marqueeTrack b {
          color: #8e62c6;
        }

        @keyframes marquee {
          to {
            transform: translateX(-30%);
          }
        }

        .outcomeSection,
        .journeySection,
        .servicesSection,
        .industriesSection,
        .processSection,
        .whySection,
        .pricingSection,
        .showcaseSection,
        .faqSection {
          padding: 130px 7vw;
        }

        .sectionHeader {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 50px;
          margin-bottom: 55px;
        }

        .sectionHeader.center {
          display: block;
          max-width: 800px;
          margin: 0 auto 55px;
          text-align: center;
        }

        .sectionHeader h2,
        .showcaseTop h2,
        .whyContent h2,
        .faqIntro h2,
        .processIntro h2,
        .ctaContent h2 {
          margin: 0;
          font-size: clamp(37px, 4.5vw, 62px);
          line-height: 1.02;
          letter-spacing: -3px;
        }

        .sectionHeader p {
          max-width: 430px;
          margin: 0;
          color: #777781;
          font-size: 14px;
          line-height: 1.8;
        }

        .sectionHeader.center p {
          max-width: 620px;
          margin: 20px auto 0;
        }

        .comparison {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          max-width: 1100px;
          margin: auto;
        }

        .comparisonCard {
          padding: 30px;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.025);
        }

        .comparisonCard.solved {
          border-color: rgba(162, 112, 237, 0.32);
          background: linear-gradient(
            145deg,
            rgba(125, 71, 214, 0.1),
            rgba(255, 255, 255, 0.025)
          );
          box-shadow: 0 20px 70px rgba(98, 46, 178, 0.08);
        }

        .comparisonTop {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #656570;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.8px;
        }

        .comparisonIcon {
          display: grid;
          place-items: center;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          color: #8b8b94;
        }

        .solved .comparisonIcon {
          color: #bd91ff;
          background: rgba(156, 99, 237, 0.14);
        }

        .comparisonCard h3 {
          margin: 20px 0 30px;
          font-size: 22px;
        }

        .flow {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 13px;
        }

        .flow div strong,
        .flow div span {
          display: block;
        }

        .flow strong {
          font-size: 11px;
        }

        .flow span {
          margin-top: 5px;
          color: #666671;
          font-size: 9px;
          line-height: 1.4;
        }

        .flow i {
          color: #555560;
          font-style: normal;
        }

        .solved .flow i {
          color: #9365d0;
        }

        .journeyGrid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
          align-items: stretch;
          gap: 12px;
        }

        .journeyCard {
          padding: 25px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.025);
          transition: 0.3s ease;
        }

        .journeyCard:hover,
        .serviceCard:hover,
        .industryCard:hover {
          transform: translateY(-6px);
          border-color: rgba(175, 126, 244, 0.32);
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.25);
        }

        .stepNumber,
        .serviceNumber,
        .industryContent > span {
          color: #62626c;
          font-size: 9px;
          letter-spacing: 1.5px;
        }

        .journeyIcon {
          display: grid;
          place-items: center;
          width: 46px;
          height: 46px;
          margin: 25px 0 20px;
          border: 1px solid rgba(164, 109, 240, 0.25);
          border-radius: 13px;
          color: #b991ff;
          background: rgba(145, 82, 225, 0.08);
          font-size: 19px;
        }

        .journeyCard h3 {
          margin: 0 0 9px;
          font-size: 13px;
          letter-spacing: 1px;
        }

        .journeyCard p {
          margin: 0;
          color: #73737d;
          font-size: 11px;
          line-height: 1.7;
        }

        .journeyLine {
          display: grid;
          place-items: center;
          color: #694b88;
          font-size: 20px;
        }

        .servicesGrid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }

        .serviceCard {
          position: relative;
          min-height: 270px;
          padding: 27px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 17px;
          background: rgba(255, 255, 255, 0.024);
          transition: 0.3s ease;
        }

        .serviceCard.large {
          grid-column: span 2;
          background:
            radial-gradient(
              circle at 80% 10%,
              rgba(143, 82, 230, 0.12),
              transparent 35%
            ),
            rgba(255, 255, 255, 0.024);
        }

        .serviceIcon {
          display: grid;
          place-items: center;
          width: 43px;
          height: 43px;
          margin: 27px 0 18px;
          border: 1px solid rgba(161, 105, 235, 0.25);
          border-radius: 12px;
          color: #b78cff;
          background: rgba(132, 72, 217, 0.08);
        }

        .serviceCard h3 {
          margin: 0 0 10px;
          font-size: 18px;
        }

        .serviceCard p {
          max-width: 430px;
          margin: 0;
          color: #75757f;
          font-size: 11px;
          line-height: 1.7;
        }

        .serviceVisual {
          position: absolute;
          right: 25px;
          bottom: 24px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          width: 230px;
          opacity: 0.7;
        }

        .serviceVisual span {
          padding: 8px 11px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 8px;
          color: #777782;
          background: rgba(255, 255, 255, 0.03);
          font-size: 8px;
        }

        .serviceVisual span:last-child {
          align-self: flex-end;
          color: #aa83db;
          border-color: rgba(164, 108, 235, 0.16);
        }

        .industryGrid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .industryCard {
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 17px;
          background: rgba(255, 255, 255, 0.025);
          transition: 0.3s ease;
        }

        .industryImage {
          height: 190px;
          display: grid;
          place-items: center;
          font-size: 45px;
          color: rgba(255, 255, 255, 0.55);
          background:
            radial-gradient(circle, rgba(157, 97, 230, 0.19), transparent 30%),
            linear-gradient(135deg, #17131d, #0b0b0e);
        }

        .industryImage span {
          filter: drop-shadow(0 0 25px rgba(170, 111, 244, 0.5));
        }

        .industryContent {
          padding: 23px;
        }

        .industryContent h3 {
          margin: 12px 0 8px;
          font-size: 17px;
        }

        .industryContent p {
          min-height: 62px;
          margin: 0 0 20px;
          color: #70707b;
          font-size: 10px;
          line-height: 1.7;
        }

        .industryContent a {
          color: #aa7be1;
          font-size: 10px;
          font-weight: 700;
        }

        .processSection {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 100px;
          align-items: start;
          background: #08080b;
        }

        .processIntro {
          position: sticky;
          top: 120px;
        }

        .processIntro p {
          max-width: 400px;
          margin: 25px 0;
          color: #777781;
          font-size: 13px;
          line-height: 1.8;
        }

        .processSteps {
          border-top: 1px solid rgba(255, 255, 255, 0.09);
        }

        .processStep {
          display: grid;
          grid-template-columns: 70px 1fr;
          gap: 25px;
          padding: 31px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .processStepNumber {
          color: #a273d8;
          font-size: 10px;
          letter-spacing: 2px;
        }

        .processStep h3 {
          margin: 0 0 9px;
          font-size: 16px;
        }

        .processStep p {
          margin: 0;
          color: #71717b;
          font-size: 11px;
          line-height: 1.7;
        }

        .whySection {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 100px;
        }

        .whyVisual {
          position: relative;
          min-height: 470px;
          display: grid;
          place-items: center;
        }

        .gridSphere {
          position: relative;
          width: 300px;
          height: 300px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background:
            radial-gradient(
              circle at center,
              rgba(148, 88, 230, 0.18),
              rgba(24, 19, 33, 0.7) 50%,
              transparent 70%
            ),
            repeating-radial-gradient(
              circle,
              rgba(173, 127, 241, 0.13) 0 1px,
              transparent 1px 24px
            );
          box-shadow: 0 0 100px rgba(115, 57, 206, 0.15);
        }

        .sphereCore {
          width: 90px;
          height: 90px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(192, 147, 255, 0.45);
          border-radius: 25px;
          color: #ca9fff;
          background: rgba(137, 78, 218, 0.1);
          box-shadow:
            0 0 40px rgba(138, 80, 226, 0.35),
            inset 0 0 30px rgba(155, 96, 238, 0.12);
          font-size: 30px;
          animation: corePulse 3s infinite;
        }

        @keyframes corePulse {
          50% {
            box-shadow:
              0 0 70px rgba(138, 80, 226, 0.45),
              inset 0 0 30px rgba(155, 96, 238, 0.2);
          }
        }

        .orbit {
          position: absolute;
          border: 1px solid rgba(170, 115, 237, 0.18);
          border-radius: 50%;
        }

        .orbitA {
          inset: 8%;
          transform: rotate(35deg) scaleY(0.45);
        }

        .orbitB {
          inset: 8%;
          transform: rotate(-35deg) scaleY(0.45);
        }

        .orbitC {
          inset: 8%;
          transform: rotate(90deg) scaleY(0.45);
        }

        .whyFloating {
          position: absolute;
          display: flex;
          flex-direction: column;
          padding: 13px 17px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          background: rgba(10, 10, 14, 0.9);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .topFloat {
          top: 18%;
          right: 5%;
        }

        .bottomFloat {
          bottom: 15%;
          left: 5%;
        }

        .whyFloating strong {
          color: #c095f2;
          font-size: 17px;
        }

        .whyFloating span {
          margin-top: 3px;
          color: #686873;
          font-size: 8px;
        }

        .whyContent > p {
          max-width: 540px;
          margin: 25px 0 35px;
          color: #7b7b85;
          font-size: 14px;
          line-height: 1.8;
        }

        .benefits {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
        }

        .benefits > div {
          display: flex;
          gap: 12px;
        }

        .benefits > div > span {
          display: grid;
          place-items: center;
          flex-shrink: 0;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          color: #b890ed;
          background: rgba(150, 89, 226, 0.1);
          font-size: 10px;
        }

        .benefits strong {
          font-size: 11px;
        }

        .benefits p {
          margin: 5px 0 0;
          color: #6b6b75;
          font-size: 9px;
          line-height: 1.5;
        }

        .caseStudySection {
          padding: 50px 7vw 130px;
        }

        .caseStudyCard {
          position: relative;
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          align-items: center;
          gap: 50px;
          padding: 55px;
          overflow: hidden;
          border: 1px solid rgba(175, 126, 244, 0.18);
          border-radius: 25px;
          background:
            radial-gradient(
              circle at 90% 20%,
              rgba(136, 77, 223, 0.13),
              transparent 35%
            ),
            #0a0a0e;
        }

        .caseStudyContent h2 {
          margin: 0;
          font-size: clamp(40px, 5vw, 66px);
          letter-spacing: -3px;
        }

        .caseStudyContent h2 span {
          color: #b78af1;
        }

        .caseLead {
          max-width: 510px;
          margin: 20px 0 30px;
          color: #777781;
          font-size: 13px;
          line-height: 1.8;
        }

        .caseFlow {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-bottom: 35px;
        }

        .caseFlow div {
          padding: 13px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 9px;
          background: rgba(255, 255, 255, 0.025);
        }

        .caseFlow span,
        .caseFlow strong {
          display: block;
        }

        .caseFlow span {
          color: #8962b3;
          font-size: 8px;
        }

        .caseFlow strong {
          margin-top: 6px;
          color: #d2d2d9;
          font-size: 9px;
        }

        .caseBrowser {
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.11);
          border-radius: 15px;
          background: #101014;
          box-shadow: 0 35px 80px rgba(0, 0, 0, 0.4);
          transform: rotate(2deg);
        }

        .browserTop {
          display: flex;
          align-items: center;
          gap: 6px;
          height: 35px;
          padding: 0 13px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          background: #17171b;
        }

        .browserTop > span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #55555e;
        }

        .browserTop div {
          flex: 1;
          margin-left: 10px;
          padding: 5px;
          border-radius: 5px;
          color: #55555f;
          background: #101014;
          text-align: center;
          font-size: 7px;
        }

        .fakeWebsite {
          position: relative;
          min-height: 350px;
          padding: 20px;
          background:
            radial-gradient(
              circle at 80% 30%,
              rgba(133, 75, 211, 0.16),
              transparent 30%
            ),
            linear-gradient(145deg, #16131b, #09090b);
        }

        .fakeNav {
          display: flex;
          gap: 18px;
          align-items: center;
          color: #666670;
          font-size: 7px;
        }

        .fakeNav strong {
          margin-right: auto;
          color: #c8c8ce;
          font-size: 11px;
        }

        .fakeHero {
          margin-top: 70px;
        }

        .fakeHero small {
          color: #936bc2;
          font-size: 7px;
          letter-spacing: 1.5px;
        }

        .fakeHero h3 {
          max-width: 300px;
          margin: 10px 0;
          font-size: 35px;
          letter-spacing: -2px;
        }

        .miniChat {
          position: absolute;
          right: 22px;
          bottom: 20px;
          width: 190px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 11px;
          background: #111116;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
          overflow: hidden;
        }

        .miniChatHead {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          font-size: 7px;
        }

        .miniChatHead span {
          color: #b889ee;
        }

        .miniChatHead i {
          margin-left: auto;
          color: #55555e;
        }

        .miniMessages {
          padding: 9px;
        }

        .miniMessages p {
          padding: 7px;
          margin: 5px 0;
          border-radius: 7px;
          font-size: 7px;
          line-height: 1.5;
        }

        .miniCustomer {
          margin-left: 20px !important;
          background: rgba(255, 255, 255, 0.07);
          color: #aaaab2;
        }

        .miniBot {
          background: rgba(132, 77, 216, 0.1);
          color: #b9a1d5;
        }

        .pricingCard {
          position: relative;
          max-width: 1000px;
          margin: auto;
          padding: 55px;
          overflow: hidden;
          border: 1px solid rgba(178, 130, 245, 0.3);
          border-radius: 22px;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(136, 79, 218, 0.16),
              transparent 45%
            ),
            #0a0a0e;
          box-shadow: 0 35px 100px rgba(81, 38, 145, 0.1);
        }

        .pricingGlow {
          position: absolute;
          width: 250px;
          height: 250px;
          right: -100px;
          top: -100px;
          border-radius: 50%;
          background: rgba(139, 78, 222, 0.13);
          filter: blur(70px);
        }

        .limitedBadge {
          position: relative;
          display: inline-flex;
          padding: 7px 11px;
          border: 1px solid rgba(177, 125, 242, 0.27);
          border-radius: 30px;
          color: #b991e6;
          background: rgba(157, 93, 231, 0.07);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .pricingMain {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 50px;
          margin: 50px 0;
        }

        .priceText {
          text-align: center;
        }

        .priceText > span {
          color: #686872;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .priceText > div {
          margin-top: 9px;
          font-size: clamp(35px, 5vw, 57px);
          font-weight: 800;
          letter-spacing: -3px;
        }

        .priceText small {
          margin-right: 3px;
          color: #a87ee0;
          font-size: 20px;
          letter-spacing: 0;
        }

        .priceText p {
          margin: 5px 0 0;
          color: #666671;
          font-size: 9px;
        }

        .pricePlus {
          color: #4c4c55;
          font-size: 27px;
        }

        .pricingDivider {
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
        }

        .pricingBottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          margin-top: 30px;
        }

        .pricingFeatures {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 35px;
        }

        .pricingFeatures span {
          color: #8d8d97;
          font-size: 9px;
        }

        .showcaseSection {
          background: #08080b;
        }

        .showcaseTop {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 50px;
          margin-bottom: 50px;
        }

        .showcaseTop > p {
          max-width: 350px;
          margin: 0;
          color: #71717c;
          font-size: 12px;
          line-height: 1.8;
        }

        .showcaseChat {
          max-width: 820px;
          margin: auto;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          background: #0c0c10;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.35);
          overflow: hidden;
        }

        .showcaseHeader {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 23px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .showcaseBrand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          font-weight: 700;
        }

        .showcaseBrand div {
          display: grid;
          place-items: center;
          width: 29px;
          height: 29px;
          border-radius: 8px;
          color: #bd8ef3;
          background: rgba(142, 78, 222, 0.11);
        }

        .liveStatus {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #666670;
          font-size: 8px;
          letter-spacing: 1px;
        }

        .showcaseMessages {
          display: grid;
          gap: 18px;
          padding: 35px;
        }

        .showcaseCustomer,
        .showcaseBot {
          max-width: 65%;
        }

        .showcaseCustomer {
          margin-left: auto;
        }

        .showcaseCustomer p,
        .showcaseBot p {
          margin: 7px 0 0;
          padding: 14px 17px;
          border-radius: 12px;
          font-size: 11px;
          line-height: 1.7;
        }

        .showcaseCustomer p {
          background: rgba(255, 255, 255, 0.065);
          color: #c5c5cc;
        }

        .showcaseBot {
          display: flex;
          gap: 10px;
        }

        .showcaseBotIcon {
          width: 29px;
          height: 29px;
          border-radius: 8px;
        }

        .showcaseBot p {
          background: rgba(133, 76, 218, 0.09);
          border: 1px solid rgba(158, 100, 237, 0.12);
          color: #bcb3c9;
        }

        .demoInput {
          margin: 0 25px 25px;
        }

        .faqSection {
          display: grid;
          grid-template-columns: 0.75fr 1.25fr;
          gap: 100px;
        }

        .faqIntro p {
          max-width: 350px;
          margin-top: 25px;
          color: #72727d;
          font-size: 12px;
          line-height: 1.8;
        }

        .faqList {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .faqItem {
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .faqItem button {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding: 24px 0;
          border: 0;
          background: transparent;
          color: #d8d8df;
          text-align: left;
          cursor: pointer;
          font-size: 13px;
        }

        .faqItem button i {
          display: grid;
          place-items: center;
          width: 26px;
          height: 26px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: #9e72cf;
          font-style: normal;
        }

        .faqAnswer {
          display: grid;
          grid-template-rows: 0fr;
          transition: 0.3s ease;
        }

        .faqAnswer p {
          min-height: 0;
          margin: 0;
          overflow: hidden;
          color: #72727c;
          font-size: 11px;
          line-height: 1.8;
        }

        .faqItem.active .faqAnswer {
          grid-template-rows: 1fr;
        }

        .faqItem.active .faqAnswer p {
          padding-bottom: 24px;
        }

        .ctaSection {
          min-height: 560px;
          display: grid;
          place-items: center;
          padding: 100px 7vw;
          text-align: center;
          overflow: hidden;
          background:
            radial-gradient(
              circle at center,
              rgba(126, 68, 214, 0.15),
              transparent 42%
            ),
            #07070a;
        }

        .ctaGlow {
          position: absolute;
          width: 500px;
          height: 500px;
          border: 1px solid rgba(160, 102, 235, 0.08);
          border-radius: 50%;
          box-shadow:
            0 0 0 100px rgba(160, 102, 235, 0.02),
            0 0 0 200px rgba(160, 102, 235, 0.015);
        }

        .ctaContent {
          position: relative;
          z-index: 2;
        }

        .ctaContent > p {
          max-width: 550px;
          margin: 25px auto 30px;
          color: #797983;
          font-size: 13px;
          line-height: 1.8;
        }

        .ctaActions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .whatsappButton {
          background: linear-gradient(135deg, #8050d9, #9f6af3);
        }

        .ctaSecondary {
          display: inline-flex;
          align-items: center;
          min-height: 50px;
          padding: 0 20px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 10px;
          color: #9999a3;
          font-size: 12px;
        }

        .footer {
          padding: 65px 7vw 25px;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
          background: #050507;
        }

        .footerTop {
          display: flex;
          justify-content: space-between;
          gap: 50px;
          padding-bottom: 60px;
        }

        .footerTop > div:first-child {
          max-width: 330px;
        }

        .footerTop p {
          margin-top: 20px;
          color: #60606a;
          font-size: 10px;
          line-height: 1.8;
        }

        .footerLinks {
          display: flex;
          gap: 90px;
        }

        .footerLinks div {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .footerLinks strong {
          margin-bottom: 7px;
          color: #a1a1ab;
          font-size: 9px;
          letter-spacing: 1px;
        }

        .footerLinks a {
          color: #5e5e68;
          font-size: 9px;
          transition: 0.2s;
        }

        .footerLinks a:hover {
          color: #b78bea;
        }

        .footerBottom {
          display: flex;
          justify-content: space-between;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          color: #4e4e57;
          font-size: 8px;
        }

        @media (max-width: 1050px) {
          .hero {
            grid-template-columns: 1fr;
          }

          .heroContent {
            text-align: center;
          }

          .hero h1,
          .heroDescription {
            margin-left: auto;
            margin-right: auto;
          }

          .heroActions,
          .heroTrust {
            justify-content: center;
          }

          .heroVisual {
            min-height: 600px;
          }

          .journeyGrid {
            grid-template-columns: 1fr 1fr;
          }

          .journeyLine {
            display: none;
          }

          .industryGrid {
            grid-template-columns: 1fr 1fr;
          }

          .processSection,
          .whySection,
          .faqSection {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .processIntro {
            position: static;
          }
        }

        @media (max-width: 750px) {
          .navbar {
            padding: 0 5vw;
          }

          .navLinks,
          .navCta {
            display: none;
          }

          .menuButton {
            display: block;
          }

          .navLinks.open {
            position: absolute;
            top: 76px;
            left: 0;
            right: 0;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
            padding: 15px 7vw 25px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            background: rgba(7, 7, 10, 0.97);
          }

          .navLinks.open a {
            width: 100%;
            padding: 15px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }

          .hero {
            padding: 70px 5vw 80px;
          }

          .hero h1 {
            font-size: clamp(43px, 12vw, 65px);
            letter-spacing: -3px;
          }

          .heroVisual {
            min-height: 500px;
          }

          .chatWindow {
            transform: none;
          }

          @keyframes floatChat {
            50% {
              transform: translateY(-7px);
            }
          }

          .floatingCard {
            transform: scale(0.82);
          }

          .responseCard {
            left: -30px;
          }

          .leadCard {
            right: -30px;
          }

          .outcomeSection,
          .journeySection,
          .servicesSection,
          .industriesSection,
          .processSection,
          .whySection,
          .pricingSection,
          .showcaseSection,
          .faqSection {
            padding: 90px 5vw;
          }

          .comparison,
          .servicesGrid {
            grid-template-columns: 1fr;
          }

          .serviceCard.large {
            grid-column: auto;
          }

          .flow {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .flow i {
            display: none;
          }

          .journeyGrid,
          .industryGrid {
            grid-template-columns: 1fr;
          }

          .sectionHeader,
          .showcaseTop {
            display: block;
          }

          .sectionHeader p,
          .showcaseTop > p {
            margin-top: 20px;
          }

          .serviceVisual {
            position: static;
            margin-top: 25px;
            width: 100%;
          }

          .processSection {
            gap: 50px;
          }

          .benefits {
            grid-template-columns: 1fr;
          }

          .caseStudySection {
            padding: 20px 5vw 90px;
          }

          .caseStudyCard {
            grid-template-columns: 1fr;
            padding: 30px 22px;
          }

          .caseBrowser {
            transform: none;
          }

          .fakeWebsite {
            min-height: 300px;
          }

          .pricingCard {
            padding: 30px 20px;
          }

          .pricingMain {
            gap: 15px;
          }

          .priceText > div {
            font-size: 31px;
            letter-spacing: -2px;
          }

          .pricingBottom {
            display: block;
          }

          .pricingFeatures {
            grid-template-columns: 1fr;
            margin-bottom: 25px;
          }

          .showcaseMessages {
            padding: 25px 17px;
          }

          .showcaseCustomer,
          .showcaseBot {
            max-width: 90%;
          }

          .ctaContent h2 {
            font-size: 40px;
            letter-spacing: -2px;
          }

          .footerTop {
            display: block;
          }

          .footerLinks {
            margin-top: 40px;
            gap: 60px;
          }

          .footerBottom {
            display: block;
          }

          .footerBottom span {
            display: block;
            margin-top: 8px;
          }
        }
      `}</style>
    </>
  );
}