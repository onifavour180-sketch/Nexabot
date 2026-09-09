import { NextResponse } from "next/server";

const WHATSAPP_NUMBER = "2348141528264";

const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    const conversation = messages || [];
    const userMessages = conversation
  .filter((message: { role?: string }) => message.role === "user")
  .map((message: { content?: string }) => message.content || "");

const conversationText = userMessages.join(" ").toLowerCase();

    const lastMessage =
      conversation[conversation.length - 1]?.content
        ?.toLowerCase()
        .trim() || "";
    const isBatteryReplacementLead =
      conversationText.includes("battery replacement") ||
      conversationText.includes("replace battery") ||
      conversationText.includes("change battery") ||
      conversationText.includes("install battery") ||
      conversationText.includes("need a new battery");

    const hasVehicleYear = /\b(19|20)\d{2}\b/.test(conversationText);

    const hasPhoneNumber =
  /\b(?:0\d{10}|\+234\d{10})\b/.test(conversationText);

    const locationWords = [
      "ile-ife",
      "ileife",
      "ile ife",
      "ife",
      "osun",
      "lagos",
      "abuja",
      "ibadan",
      "osogbo",
      "akure",
      "ondo",
      "ilorin",
    ];

    const hasLocation = locationWords.some((location) =>
      conversationText.includes(location)
    );

    const hasBatterySpec =
      /\b(62|75|80|100)\s?ah\b/.test(conversationText);

    const hasVehicleDetails =
      hasVehicleYear &&
      /\b(toyota|honda|lexus|mercedes|benz|bmw|hyundai|kia|ford|nissan|mazda|volkswagen|volvo|peugeot|mitsubishi)\b/i.test(
        conversationText
      );
        let reply =
      "Welcome to KLEMZ Autos Workshop 👋. I can help with car batteries, roadside assistance, diagnostics, charging systems, alternator services, battery recycling, and training opportunities. What can I help you with?";

    /*
     * BATTERY REPLACEMENT LEAD FLOW
     * The chatbot uses the previous messages in the conversation
     * to determine what information is still missing.
     */
    if (isBatteryReplacementLead) {
      if (!hasVehicleDetails) {
        reply =
          "Absolutely 🔋 I can help you with a battery replacement.\n\n" +
          "First, please tell me your vehicle make, model, and year.\n\n" +
          "For example: Toyota Camry 2015.";
      } else if (!hasBatterySpec && !hasLocation) {
        reply =
          "Thanks! 👍 Now please tell me your current battery specification if you know it, such as 62Ah, 75Ah, 80Ah, or 100Ah.\n\n" +
          "Also, please tell me your current location.";
      } else if (!hasBatterySpec) {
        reply =
          "Thanks! 👍 What's the battery specification you currently use, if you know it?\n\n" +
          "Examples: 62Ah, 75Ah, 80Ah, or 100Ah.\n\n" +
          "If you're not sure, that's okay — the KLEMZ Autos team can help confirm it.";
      } else if (!hasLocation) {
        reply =
          "Great. 🔋 Now please tell me your current location so KLEMZ Autos can advise you on the next step.";
      } else if (!hasPhoneNumber) {
        reply =
          "Perfect. We have your vehicle information and location. 📍\n\n" +
          "Please provide the best phone number for KLEMZ Autos to reach you.";
      } else {
  const vehicleMessage =
    userMessages.find((message) => /\b(19|20)\d{2}\b/.test(message)) ||
    "Vehicle details provided";

  const vehicleMatch = vehicleMessage.match(
    /(.+?)\s+((?:19|20)\d{2})/
  );

  const vehicle = vehicleMatch
    ? vehicleMatch[1].trim()
    : vehicleMessage.trim();

  const vehicleYear = vehicleMatch
    ? vehicleMatch[2]
    : "Not specified";

  const batteryMatch = conversationText.match(
    /\b(62|75|80|100)\s?ah\b/i
  );

  const batterySpec = batteryMatch
    ? `${batteryMatch[1]}Ah`
    : "Not specified";

  const phoneMatch = conversationText.match(
    /\b(?:0\d{10}|\+234\d{10})\b/
  );

  const customerPhone = phoneMatch
    ? phoneMatch[0]
    : "Not provided";

  const detectedLocation =
    locationWords.find((location) =>
      conversationText.includes(location)
    ) || "Not specified";

  const enquiryText =
    `Hello KLEMZ Autos,\n\n` +
    `I would like to request a battery replacement.\n\n` +
    `Vehicle: ${vehicle}\n` +
    `Year: ${vehicleYear}\n` +
    `Battery: ${batterySpec}\n` +
    `Location: ${detectedLocation}\n` +
    `Customer phone: ${customerPhone}\n\n` +
    `Please help me confirm the appropriate battery, current price, and availability.`;

  const encodedEnquiry = encodeURIComponent(enquiryText);

  reply =
    "Perfect — I have the information needed to get your enquiry started. ✅\n\n" +
    "KLEMZ Autos can now confirm the appropriate battery, current price, availability, and the next step.\n\n" +
    `[[WHATSAPP|${encodedEnquiry}]]`;
}
    }

  
    // GREETING
   else if (
  /\b(hi|hello|hey|good morning|good afternoon|good evening)\b/.test(
    lastMessage
  )
) {
      reply =
        "Hello! 👋 Welcome to KLEMZ Autos Workshop.\n\nI'm the KLEMZ Autos customer service assistant. I can help with battery enquiries, roadside assistance, diagnostics, alternator and charging-system checks, battery recycling, and our internship/IT training opportunities.\n\nWhat can I help you with today?";
    }

    // BATTERY SALES
    else if (
      lastMessage.includes("sell car batteries") ||
      lastMessage.includes("sell batteries") ||
      lastMessage.includes("battery for sale") ||
      lastMessage.includes("do you sell")
    ) {
      reply =
        "Yes. 🔋 KLEMZ Autos Workshop provides car battery sales and replacement services.\n\nOur current battery range includes 62Ah, 75Ah, 80Ah, and 100Ah options.\n\nBecause the correct battery and price depend on the vehicle and battery specification, please send your vehicle make, model, year, and preferred battery specification on WhatsApp for confirmation.";
    }

    // BATTERY PRICE
    else if (
      lastMessage.includes("battery price") ||
      lastMessage.includes("how much is a battery") ||
      lastMessage.includes("how much is the battery") ||
      lastMessage.includes("battery cost") ||
      lastMessage.includes("price of battery")
    ) {
      reply = `Battery prices can vary depending on the specification and vehicle.

KLEMZ Autos currently handles 62Ah, 75Ah, 80Ah, and 100Ah batteries.

We do not guess or provide unconfirmed prices. Please send your vehicle details or battery specification to KLEMZ Autos on WhatsApp for the current price.

[Contact KLEMZ Autos on WhatsApp](${whatsappLink(
        "Hello KLEMZ Autos. I would like to know the current price of a car battery."
      )})`;
    }

    // BATTERY SIZE
    else if (
      lastMessage.includes("62ah") ||
      lastMessage.includes("75ah") ||
      lastMessage.includes("80ah") ||
      lastMessage.includes("100ah") ||
      lastMessage.includes("battery specification") ||
      lastMessage.includes("battery size")
    ) {
      reply =
        "KLEMZ Autos currently works with 62Ah, 75Ah, 80Ah, and 100Ah battery options. 🔋\n\nThe correct specification depends on the vehicle. Please provide your vehicle make, model, and year so the KLEMZ Autos team can help confirm the appropriate option.";
    }

    // WHICH BATTERY
    else if (
      lastMessage.includes("which battery") ||
      lastMessage.includes("suitable battery") ||
      lastMessage.includes("right battery") ||
      lastMessage.includes("battery for my car") ||
      lastMessage.includes("battery do i need")
    ) {
      reply =
        "I can help you get started. 🔋\n\nPlease provide:\n\n• Vehicle make\n• Vehicle model\n• Vehicle year\n• Current battery specification, if available\n\nKLEMZ Autos can then confirm the appropriate battery before you purchase.";
    }

  // BATTERY REPLACEMENT
else if (
  lastMessage.includes("replace battery") ||
  lastMessage.includes("battery replacement") ||
  lastMessage.includes("change battery") ||
  lastMessage.includes("install battery") ||
  lastMessage.includes("need a new battery")
) {
  reply =
    "Absolutely 🔋 I can help you get started with a battery replacement.\n\n" +
    "Please send me these details:\n\n" +
    "• Vehicle make\n" +
    "• Vehicle model\n" +
    "• Vehicle year\n" +
    "• Your current battery specification, if you know it\n" +
    "• Your location\n\n" +
    "Once I have those details, KLEMZ Autos can confirm the appropriate battery and the next step.";
}

    // DELIVERY
    else if (
      lastMessage.includes("deliver") ||
      lastMessage.includes("delivery")
    ) {
      reply = `Battery delivery enquiries can be handled directly by KLEMZ Autos.

Please send your vehicle details and location on WhatsApp so the team can confirm delivery availability and the applicable arrangements.

[Message KLEMZ Autos on WhatsApp](${whatsappLink(
        "Hello KLEMZ Autos. I would like to ask about battery delivery."
      )})`;
    }

// ROADSIDE ASSISTANCE
else if (
  lastMessage.includes("roadside") ||
  lastMessage.includes("emergency") ||
  lastMessage.includes("car won't start") ||
  lastMessage.includes("car wont start") ||
  lastMessage.includes("vehicle won't start") ||
  lastMessage.includes("vehicle wont start") ||
  lastMessage.includes("stranded")
) {
  reply =
    "🚨 I'm sorry you're dealing with that.\n\n" +
    "KLEMZ Autos provides emergency roadside assistance.\n\n" +
    "To help the KLEMZ Autos team respond quickly, please provide:\n\n" +
    "• Your name\n" +
    "• Your phone number\n" +
    "• Vehicle make and model\n" +
    "• Your current location\n" +
    "• A brief description of what happened\n\n" +
    "For urgent assistance, please contact KLEMZ Autos directly on WhatsApp at 08141528264.";
}
    // BATTERY TEST
    else if (
      lastMessage.includes("test my battery") ||
      lastMessage.includes("battery test") ||
      lastMessage.includes("check my battery")
    ) {
      reply = `Yes. KLEMZ Autos can assist with battery and charging-system checks.

For service details or pricing, please contact the team on WhatsApp so they can confirm the current service information.

[Ask KLEMZ Autos on WhatsApp](${whatsappLink(
        "Hello KLEMZ Autos. I would like to ask about testing my vehicle battery."
      )})`;
    }

    // BATTERY DRAIN
    else if (
      lastMessage.includes("battery draining") ||
      lastMessage.includes("battery drains") ||
      lastMessage.includes("battery keeps dying") ||
      lastMessage.includes("battery dies")
    ) {
      reply =
        "A battery that repeatedly goes flat can have several possible causes, including a weak battery or a charging/electrical-system problem.\n\nKLEMZ Autos can help investigate the issue through battery, charging-system, alternator, and vehicle electrical-system checks.\n\nIf you'd like the team to assess your vehicle, contact KLEMZ Autos on WhatsApp.";
    }

    // ALTERNATOR
    else if (
      lastMessage.includes("alternator") ||
      lastMessage.includes("alternator charging") ||
      lastMessage.includes("alternator check")
    ) {
      reply =
        "Yes. ⚙️ KLEMZ Autos provides alternator diagnosis and servicing, as well as charging-system checks.\n\nFor pricing and service details, please contact the team directly on WhatsApp so they can confirm the current information.";
    }

    // DIAGNOSTICS
    else if (
      lastMessage.includes("diagnostic") ||
      lastMessage.includes("diagnose my vehicle") ||
      lastMessage.includes("vehicle diagnosis") ||
      lastMessage.includes("car diagnostics")
    ) {
      reply =
        "Yes. KLEMZ Autos provides vehicle diagnostics and vehicle electrical-system diagnosis. 🔧\n\nFor current pricing and availability, please contact the KLEMZ Autos team on WhatsApp.";
    }

    // OLD BATTERY / RECYCLING
    else if (
      lastMessage.includes("old battery") ||
      lastMessage.includes("used battery") ||
      lastMessage.includes("recycle") ||
      lastMessage.includes("recycling") ||
      lastMessage.includes("trade in")
    ) {
      reply =
        "Yes. ♻️ KLEMZ Autos collects old batteries for recycling.\n\nThe business partners with a recycling company that processes the battery plastic into pellets that can be used to reproduce new products.\n\nIf you're replacing your battery, ask the KLEMZ Autos team about the old battery collection process.";
    }

    // LOCATION
    else if (
      lastMessage.includes("where are you") ||
      lastMessage.includes("location") ||
      lastMessage.includes("located") ||
      lastMessage.includes("address")
    ) {
      reply =
        "KLEMZ Autos Workshop is located in OAU Central Market, off Remi Tinubu Drive, Ile-Ife, Osun State, Nigeria.\n\nFor the exact current address details or directions, please confirm with KLEMZ Autos via WhatsApp.";
    }

    // OPENING HOURS
    else if (
      lastMessage.includes("opening hours") ||
      lastMessage.includes("open") ||
      lastMessage.includes("closing time") ||
      lastMessage.includes("what time")
    ) {
      reply =
        "I don't want to give you an unconfirmed opening time. Please contact KLEMZ Autos on WhatsApp for the current opening and closing hours.";
    }

    // BOOK / SERVICE REQUEST
    else if (
      lastMessage.includes("book a service") ||
      lastMessage.includes("book service") ||
      lastMessage.includes("schedule a service") ||
      lastMessage.includes("appointment")
    ) {
      reply = `KLEMZ Autos can help you request a service.

Please send your:
• Name
• Phone number
• Vehicle make and model
• Service you need
• Preferred time
• Location, if roadside assistance is required

[Request a service on WhatsApp](${whatsappLink(
        "Hello KLEMZ Autos. I would like to request a vehicle service."
      )})`;
    }

    // SERVICE PRICE
    else if (
      lastMessage.includes("service price") ||
      lastMessage.includes("diagnosis cost") ||
      lastMessage.includes("how much does diagnosis") ||
      lastMessage.includes("how much is the service")
    ) {
      reply = `Service prices can vary depending on the vehicle and the work required.

I won't guess or provide an unconfirmed price.

Please contact KLEMZ Autos on WhatsApp with your vehicle make, model, year, and the service you need.

[Ask for the current price on WhatsApp](${whatsappLink(
        "Hello KLEMZ Autos. I would like to know the current price for a vehicle service."
      )})`;
    }

    // ALL BRANDS
    else if (
      lastMessage.includes("all car brands") ||
      lastMessage.includes("every car") ||
      lastMessage.includes("all vehicles") ||
      lastMessage.includes("what brands")
    ) {
      reply =
        "KLEMZ Autos provides automotive battery and vehicle support services, but I don't want to claim coverage for every vehicle brand without confirmation.\n\nSend the vehicle make and model to KLEMZ Autos on WhatsApp and the team can confirm whether they can assist.";
    }

    // INTERNSHIP
    else if (
      lastMessage.includes("internship") ||
      lastMessage.includes("industrial training") ||
      lastMessage.includes("it training") ||
      lastMessage.includes("siwes")
    ) {
      reply =
        "KLEMZ Autos also provides internship and industrial training opportunities for students. 🎓\n\nFor current openings, requirements, and application information, please contact the KLEMZ Autos team directly on WhatsApp.";
    }

    // IT TRAINING / RECRUITMENT
    else if (
      lastMessage.includes("recruitment") ||
      lastMessage.includes("training opportunity") ||
      lastMessage.includes("student training")
    ) {
      reply =
        "KLEMZ Autos has opportunities related to IT training, recruitment, and student industrial training.\n\nBecause availability and requirements can change, please contact KLEMZ Autos on WhatsApp for the current information.";
    }

    // WARRANTY
    else if (
      lastMessage.includes("warranty") ||
      lastMessage.includes("guarantee")
    ) {
      reply = `Warranty information depends on the specific product or service.

I don't want to give you an incorrect warranty statement.

Please send your product or service details to KLEMZ Autos on WhatsApp so the team can confirm the applicable warranty.

[Ask about warranty on WhatsApp](${whatsappLink(
        "Hello KLEMZ Autos. I would like to ask about the warranty for a product or service."
      )})`;
    }

    // CONTACT
    else if (
      lastMessage.includes("contact") ||
      lastMessage.includes("phone number") ||
      lastMessage.includes("call")
    ) {
      reply =
        "You can contact KLEMZ Autos through these phone numbers:\n\n08141528264\n09040908807\n07053453925\n\nFor WhatsApp enquiries, use 08141528264.";
    }

    // SERVICES
    else if (
      lastMessage.includes("services") ||
      lastMessage.includes("what do you do") ||
      lastMessage.includes("what services")
    ) {
      reply =
        "KLEMZ Autos Workshop provides:\n\n🔋 Car battery sales and replacement\n🚨 Emergency roadside assistance\n⚡ Battery charging and charging-system checks\n⚙️ Alternator diagnosis and servicing\n🔧 Vehicle electrical-system diagnosis\n🛠️ Car diagnostics\n♻️ Old-battery recycling\n🎓 IT training, recruitment, and student internship opportunities\n\nThe business also plans to expand into broader mechanical and automotive repair services.";
    }

    // HELP
    else if (
      lastMessage.includes("help") ||
      lastMessage.includes("what can you help")
    ) {
      reply =
        "I can help you with:\n\n🔋 Battery questions\n🚗 Battery replacement\n🚨 Roadside assistance\n⚡ Charging-system problems\n⚙️ Alternator checks\n🔧 Vehicle diagnostics\n♻️ Battery recycling\n📍 Location\n🎓 Internship / IT training opportunities\n\nTell me what you need and I'll point you in the right direction.";
    }

    return NextResponse.json({
      message: reply,
    });
  } catch (error) {
    console.error("KLEMZ AUTOS CHAT ERROR:", error);

    return NextResponse.json(
      {
        message:
          "Sorry, I couldn't process that request right now. Please contact KLEMZ Autos directly on WhatsApp for assistance.",
      },
      { status: 500 }
    );
  }
}