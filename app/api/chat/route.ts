import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    const lastMessage =
      messages?.[messages.length - 1]?.content?.toLowerCase() || "";

    let reply =
      "Thanks for contacting NexaBot Agency! How can I help you today?";

    if (
      lastMessage.includes("service") ||
      lastMessage.includes("what do you do")
    ) {
      reply =
        "NexaBot Agency builds AI chatbots and automation systems for businesses. Our services include AI customer support, lead generation, appointment booking, sales automation, business knowledge systems, and custom AI systems.";
    } else if (
      lastMessage.includes("price") ||
      lastMessage.includes("cost") ||
      lastMessage.includes("how much")
    ) {
      reply =
        "Our setup packages start at $499, with monthly support starting at $199/month. For a custom AI system, you can book a demo with NexaBot Agency.";
    } else if (
      lastMessage.includes("book") ||
      lastMessage.includes("demo") ||
      lastMessage.includes("appointment")
    ) {
      reply =
        "Absolutely! We'd be happy to discuss your business and show you what NexaBot can build. Click the 'Book a Demo' button on the website to get started.";
    } else if (
      lastMessage.includes("hello") ||
      lastMessage.includes("hi") ||
      lastMessage.includes("hey")
    ) {
      reply =
        "Hey! 👋 Welcome to NexaBot Agency. I'm NexaBot, your AI assistant. What would you like to know about our AI solutions?";
    } else if (
      lastMessage.includes("ecommerce") ||
      lastMessage.includes("e-commerce") ||
      lastMessage.includes("online store")
    ) {
      reply =
        "Yes! We can build AI customer support and sales assistants for e-commerce businesses. NexaBot can answer product questions, help customers, capture leads, and guide shoppers toward a purchase.";
    } else if (
      lastMessage.includes("real estate") ||
      lastMessage.includes("property")
    ) {
      reply =
        "Yes! NexaBot can help real estate businesses qualify leads, answer property questions, collect customer information, and help prospects book appointments.";
    } else if (
      lastMessage.includes("consult")
    ) {
      reply =
        "NexaBot can help consultancies automate repetitive questions, qualify potential clients, capture leads, and schedule consultations.";
    }

    return NextResponse.json({
      message: reply,
    });
  } catch (error) {
    console.error("CHAT ERROR:", error);

    return NextResponse.json(
      {
        message: "Sorry, something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}