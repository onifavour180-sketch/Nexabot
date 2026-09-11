import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    const conversation = messages || [];

    const lastMessage =
      conversation[conversation.length - 1]?.content
        ?.toLowerCase()
        .trim() || "";

    let reply =
      "I'm here to help with Purple Jasmine Cafe. You can ask me about our menu, prices, opening hours, location, reservations, catering, or ordering.";

    // GREETING
    if (
      /\b(hi|hello|hey|good morning|good afternoon|good evening)\b/.test(
        lastMessage
      )
    ) {
      reply =
        "Hi! 👋 Welcome to Purple Jasmine Cafe.\n\nI'm here to help with our menu, reservations, opening hours, location, catering, and orders.\n\nHow can I help you today?";
    }

    // LOCATION
    else if (
      lastMessage.includes("location") ||
      lastMessage.includes("where are you") ||
      lastMessage.includes("where is purple jasmine") ||
      lastMessage.includes("address") ||
      lastMessage.includes("located")
    ) {
      reply =
        "We're located at:\n\n📍 97 Awolowo Road, Ikoyi, Lagos 101251, Lagos, Nigeria.\n\nWe'd love to welcome you! 😊";
    }

    // OPENING HOURS
    else if (
      lastMessage.includes("opening") ||
      lastMessage.includes("open") ||
      lastMessage.includes("close") ||
      lastMessage.includes("closing") ||
      lastMessage.includes("hours") ||
      lastMessage.includes("what time")
    ) {
      reply =
        "Purple Jasmine Cafe is open every day from 8:30 AM to 10:00 PM. 🕐\n\nYou're welcome to visit us anytime during our opening hours.";
    }

    // PARMESAN CHICKEN
    else if (
      lastMessage.includes("parmesan chicken") ||
      lastMessage.includes("parmesan")
    ) {
      reply =
        "Our Purple Jasmine Parmesan Chicken is ₦13,500. 🍗\n\nIt's herb-seasoned chicken finished with parmesan, rich yet balanced.\n\nYou can order online or contact us on WhatsApp if you'd like help with your order.";
    }

    // TRUFFLE SHRIMP MELT
    else if (
      lastMessage.includes("truffle shrimp") ||
      lastMessage.includes("shrimp melt")
    ) {
      reply =
        "Our Truffle Shrimp Melt is ₦15,000. 🦐\n\nIt's made with sautéed shrimp, melted cheese and truffle aroma in toasted bread.";
    }

    // PANCAKES
    else if (
      lastMessage.includes("pancake") ||
      lastMessage.includes("pancakes")
    ) {
      reply =
        "Our Fluffy PJ Pancakes are ₦8,500. 🥞\n\nThey're served with berries and syrup.";
    }

    // CHICKEN HERB RICE BOWL
    else if (
      lastMessage.includes("chicken herb") ||
      lastMessage.includes("rice bowl") ||
      lastMessage.includes("herb rice")
    ) {
      reply =
        "Our Chicken Herb Rice Bowl is ₦16,500. 🍚\n\nIt features herb-grilled chicken served over fluffy rice.";
    }

    // MENU
    else if (
      lastMessage.includes("menu") ||
      lastMessage.includes("food") ||
      lastMessage.includes("dishes") ||
      lastMessage.includes("what do you serve") ||
      lastMessage.includes("what do you have")
    ) {
      reply =
        "We offer an all-day dining experience including breakfast, brunch, lunch, dinner and cocktails. 🍽️\n\nSome of our featured dishes include:\n\n• Purple Jasmine Parmesan Chicken — ₦13,500\n• Truffle Shrimp Melt — ₦15,000\n• Fluffy PJ Pancakes — ₦8,500\n• Chicken Herb Rice Bowl — ₦16,500\n\nOur menu also includes signature drinks, coffee and other selections.\n\nWould you like to know the price of a particular dish?";
    }

    // PRICE QUESTIONS
    else if (
      lastMessage.includes("price") ||
      lastMessage.includes("how much") ||
      lastMessage.includes("cost")
    ) {
      reply =
        "I can help you with our menu prices. 😊\n\nSome popular options include:\n\n• Parmesan Chicken — ₦13,500\n• Truffle Shrimp Melt — ₦15,000\n• Fluffy PJ Pancakes — ₦8,500\n• Chicken Herb Rice Bowl — ₦16,500\n\nIf there's a specific dish you're interested in, tell me its name.";
    }

    // SUNDAY BRUNCH
    else if (
      lastMessage.includes("sunday brunch") ||
      lastMessage.includes("brunch")
    ) {
      reply =
        "Our Sunday Brunch is ₦55,000. 🥂\n\nIt includes a delicious 3-course brunch with 2 drinks, designed for a beautiful dining experience.\n\nIf you'd like to reserve a table, I can help you contact the Purple Jasmine team.";
    }

    // RESERVATION
    else if (
      lastMessage.includes("reservation") ||
      lastMessage.includes("reserve") ||
      lastMessage.includes("book a table") ||
      lastMessage.includes("table") ||
      lastMessage.includes("booking")
    ) {
      reply =
        "Absolutely! 📅 You can make a reservation with Purple Jasmine Cafe.\n\nFor assistance with your reservation, you can contact our team on WhatsApp.\n\n[[WHATSAPP|Hi Purple Jasmine Cafe, I'd like to make a reservation.]]";
    }

    // CATERING
    else if (
      lastMessage.includes("catering") ||
      lastMessage.includes("event") ||
      lastMessage.includes("bulk order") ||
      lastMessage.includes("bulk orders") ||
      lastMessage.includes("party")
    ) {
      reply =
        "Yes! 🎉 Purple Jasmine Cafe offers catering services and bulk orders.\n\nWe provide premium meals and classy service for events and special occasions.\n\nYou can contact our team on WhatsApp to discuss your event and requirements.\n\n[[WHATSAPP|Hi Purple Jasmine Cafe, I'd like to ask about your catering services.]]";
    }

    // ORDERING
    else if (
      lastMessage.includes("order") ||
      lastMessage.includes("buy") ||
      lastMessage.includes("purchase")
    ) {
      reply =
        "Absolutely! 🛍️ You can place an order through Purple Jasmine's online ordering page.\n\nYou can also contact us on WhatsApp if you need assistance with your order.\n\n[[WHATSAPP|Hi Purple Jasmine Cafe, I'd like to place an order.]]";
    }

    // WHATSAPP / CONTACT
    else if (
      lastMessage.includes("whatsapp") ||
      lastMessage.includes("contact") ||
      lastMessage.includes("phone") ||
      lastMessage.includes("number")
    ) {
      reply =
        "You can reach Purple Jasmine Cafe on WhatsApp at 0814 824 7243.\n\n[[WHATSAPP|Hi Purple Jasmine Cafe, I'd like to make an enquiry.]]";
    }

    // COFFEE / DRINKS
    else if (
      lastMessage.includes("coffee") ||
      lastMessage.includes("cocktail") ||
      lastMessage.includes("drink") ||
      lastMessage.includes("drinks") ||
      lastMessage.includes("matcha")
    ) {
      reply =
        "Purple Jasmine Cafe offers handcrafted drinks, rich espresso, Matcha Milkshakes and craft cocktails. ☕🍸\n\nIf you'd like to know about a specific drink, tell me its name and I'll help if I have the information.";
    }

    // ABOUT
    else if (
      lastMessage.includes("about") ||
      lastMessage.includes("purple jasmine") ||
      lastMessage.includes("who are you")
    ) {
      reply =
        "Purple Jasmine Cafe & Lounge is an all-day café and lounge located in Ikoyi.\n\nWe focus on exceptional food, signature cocktails and warm hospitality, with a menu combining local flavours and international café classics.\n\nWe're open every day from 8:30 AM to 10:00 PM.";
    }

    // THANK YOU
    else if (
      lastMessage.includes("thank you") ||
      lastMessage.includes("thanks")
    ) {
      reply =
        "You're very welcome! 😊\n\nIf you need anything else, I'm happy to help.";
    }

    // FALLBACK
    else {
      reply =
        "I'd be happy to help. 😊\n\nYou can ask me about:\n\n🍽️ Our menu and prices\n📅 Reservations\n🥂 Sunday Brunch\n🎉 Catering and events\n📍 Our location\n🕐 Opening hours\n🛍️ Ordering\n📲 WhatsApp enquiries\n\nWhat would you like to know?";
    }

    return NextResponse.json({
      message: reply,
    });
  } catch (error) {
    console.error("PURPLE JASMINE CHAT ERROR:", error);

    return NextResponse.json(
      {
        message:
          "Sorry, something went wrong. Please try sending your message again.",
      },
      { status: 500 }
    );
  }
}