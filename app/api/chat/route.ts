import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    const conversation = messages || [];

    const lastMessage =
      conversation[conversation.length - 1]?.content
        ?.toLowerCase()
        .trim() || "";

    const allMessages = conversation
      .map((message: { content?: string }) => message.content || "")
      .join(" ")
      .toLowerCase();

    let reply =
      "Thanks for reaching out to NexaBot Agency! Tell me a little about your business and what you'd like to improve.";

    // GREETING
    if (
      /\b(hi|hello|hey|good morning|good afternoon|good evening)\b/.test(
        lastMessage
      )
    ) {
      reply =
        "Hey! 👋 I'm NexaBot, the AI assistant for NexaBot Agency.\n\nI can help you figure out how AI could improve your business.\n\nFirst, what type of business do you run?";
    }

    // BUSINESS TYPE
    else if (
      lastMessage.includes("real estate") ||
      lastMessage.includes("property")
    ) {
      reply =
        "Nice! 🏠 Real estate is a great fit for AI.\n\nNexaBot can help qualify property leads, answer questions, collect prospect information, and help book viewings.\n\nWhat would help you most right now: getting more leads, answering customers, or booking appointments?";
    }

    else if (
      lastMessage.includes("ecommerce") ||
      lastMessage.includes("e-commerce") ||
      lastMessage.includes("online store")
    ) {
      reply =
        "Great choice! 🛍️ For an online store, NexaBot can answer product questions, recommend products, capture leads, and help customers move toward a purchase.\n\nWhich is your biggest priority: more sales, customer support, or lead capture?";
    }

    else if (
      lastMessage.includes("restaurant") ||
      lastMessage.includes("food business")
    ) {
      reply =
        "Perfect! 🍽️ NexaBot can help restaurants answer questions, handle common customer requests, collect enquiries, and help with reservations.\n\nAre you mainly looking for more customers, faster support, or easier booking?";
    }

    // LEAD GENERATION
    else if (
      lastMessage.includes("more leads") ||
      lastMessage.includes("get leads") ||
      lastMessage.includes("generate leads") ||
      lastMessage.includes("lead generation")
    ) {
      reply =
        "That's exactly where NexaBot can help. 🎯\n\nWe can build an AI assistant that talks to visitors, asks qualifying questions, captures important details, and sends qualified prospects toward your sales process.\n\nWould you like to see what that could look like for your business?";
    }

    // CUSTOMER SUPPORT
    else if (
      lastMessage.includes("customer support") ||
      lastMessage.includes("support") ||
      lastMessage.includes("customer service")
    ) {
      reply =
        "Absolutely. 🤖 NexaBot can handle frequently asked questions, provide information instantly, and give customers support 24/7.\n\nThis can reduce repetitive work for your team while making sure customers get quick responses.\n\nWould you like a business-specific demo?";
    }

    // APPOINTMENTS
    else if (
      lastMessage.includes("appointment") ||
      lastMessage.includes("booking") ||
      lastMessage.includes("bookings") ||
      lastMessage.includes("schedule")
    ) {
      reply =
        "Great. 📅 NexaBot can qualify visitors and guide them toward booking a consultation, appointment, viewing, or call.\n\nFor a real deployment, we can connect the system to the business's booking process.\n\nWould you like to discuss a demo?";
    }

    // SALES
    else if (
      lastMessage.includes("more sales") ||
      lastMessage.includes("increase sales") ||
      lastMessage.includes("sales")
    ) {
      reply =
        "That's a strong use case. 📈 NexaBot can answer buying questions, recommend next steps, qualify prospects, and guide interested visitors toward contacting your business.\n\nWould you like to see how an AI sales assistant could work for your business?";
    }

    // DEMO / READY TO BUY
    else if (
      lastMessage.includes("demo") ||
      lastMessage.includes("interested") ||
      lastMessage.includes("get started") ||
      lastMessage.includes("start") ||
      lastMessage.includes("yes")
    ) {
      reply =
        "Excellent! 🚀 The next step is a quick conversation with the NexaBot team so we can understand your business and recommend the right system.\n\nYou can book a demo through WhatsApp and we'll take it from there.";
    }

    // PRICING
    else if (
      lastMessage.includes("price") ||
      lastMessage.includes("pricing") ||
      lastMessage.includes("cost") ||
      lastMessage.includes("how much")
    ) {
      reply =
        "Our starter AI system begins at $499 setup + $199/month.\n\nOur Growth package starts at $999 setup + $299/month and includes more advanced lead qualification, booking, business knowledge, and automation.\n\nFor larger or more advanced systems, we create custom pricing based on the business requirements.\n\nWould you like help choosing the right package?";
    }

    // SERVICES
    else if (
      lastMessage.includes("service") ||
      lastMessage.includes("what do you do") ||
      lastMessage.includes("what can you do")
    ) {
      reply =
        "NexaBot Agency builds AI systems for businesses, including:\n\n• AI Customer Support\n• Lead Generation\n• Appointment Booking\n• Sales Automation\n• Business Knowledge Assistants\n• Custom AI Systems\n\nTell me what kind of business you run and I can recommend the most useful solution.";
    }

    // HOW IT WORKS
    else if (
      lastMessage.includes("how does it work") ||
      lastMessage.includes("how it works") ||
      lastMessage.includes("process")
    ) {
      reply =
        "It's simple:\n\n1. Discover — We understand your business.\n2. Design — We plan the AI experience.\n3. Build — We create the system.\n4. Launch — We put it into your customer journey.\n\nThe goal is to build something that actually helps the business, not just add a chatbot to a website.";
    }

    // 24/7
    else if (
      lastMessage.includes("24/7") ||
      lastMessage.includes("always available")
    ) {
      reply =
        "Yes. 🌙 An AI assistant can respond to customers 24/7, including nights, weekends, and holidays.\n\nThat means your business can continue answering questions and capturing opportunities even when your team is offline.";
    }

    // CUSTOM
    else if (
      lastMessage.includes("custom") ||
      lastMessage.includes("advanced")
    ) {
      reply =
        "Absolutely. 🚀 We can build custom AI systems around a business's exact workflow, including custom knowledge, lead qualification, sales processes, booking systems, WhatsApp, CRM integrations, and other automation.\n\nFor custom systems, we first learn what the business needs and then create the right solution.";
    }

    // THANK YOU
    else if (
      lastMessage.includes("thank you") ||
      lastMessage.includes("thanks")
    ) {
      reply =
        "You're very welcome! 😊 Let me know what you'd like to explore next.";
    }

    // FALLBACK FOR BUSINESS DISCOVERY
    else if (
      !allMessages.includes("what type of business") &&
      conversation.length <= 3
    ) {
      reply =
        "Got it. 👍 To recommend the right AI solution, I'd like to understand your business a little better.\n\nWhat type of business do you run, and what is the biggest problem you'd like AI to solve?";
    }

    return NextResponse.json({
      message: reply,
    });
  } catch (error) {
    console.error("CHAT ERROR:", error);

    return NextResponse.json(
      {
        message:
          "Sorry, something went wrong. Please try sending your message again.",
      },
      { status: 500 }
    );
  }
}