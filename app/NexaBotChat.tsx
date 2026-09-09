"use client";

import { useEffect, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function ChatBot({
  apiEndpoint = "/api/chat",
  businessName = "NexaBot",
}: {
  apiEndpoint?: string;
  businessName?: string;
}) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
  const openChat = () => {
    setOpen(true);
  };

  window.addEventListener("open-nexabot-chat", openChat);

  return () => {
    window.removeEventListener("open-nexabot-chat", openChat);
  };
}, []);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
  businessName === "KLEMZ Autos"
    ? "Hi! 👋 Welcome to KLEMZ Autos Workshop. How can I help you today?"
    : "Hi! 👋 I'm NexaBot. How can I help you learn more about our AI solutions?",
    },
  ]);

  async function sendMessage() {
    const text = input.trim();

    if (!text || loading) return;

    const userMessage: Message = {
      role: "user",
      content: text,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
     const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: data.message,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            "Sorry, I couldn't connect right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (event.key === "Enter") {
      sendMessage();
    }
  }

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open NexaBot"
          style={{
            position: "fixed",
            right: "24px",
            bottom: "70px",
            width: "62px",
            height: "62px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.2)",
            background:
              "linear-gradient(135deg, #7d70ff, #3828c8)",
            color: "white",
            fontSize: "25px",
            cursor: "pointer",
            boxShadow: "0 15px 50px rgba(70,50,255,0.45)",
            zIndex: 100,
          }}
        >
          ✦
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div
          style={{
            position: "fixed",
            right: "24px",
            bottom: "24px",
            width: "370px",
            maxWidth: "calc(100vw - 32px)",
            height: "560px",
            maxHeight: "calc(100vh - 48px)",
            background: "#090909",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "22px",
            boxShadow:
              "0 30px 100px rgba(0,0,0,0.7), 0 0 60px rgba(80,60,255,0.15)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            zIndex: 100,
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "17px",
              borderBottom:
                "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              gap: "11px",
            }}
          >
            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "12px",
                display: "grid",
                placeItems: "center",
                background:
                  "linear-gradient(135deg, #7d70ff, #3828c8)",
                boxShadow:
                  "0 0 25px rgba(90,70,255,0.35)",
              }}
            >
              ✦
            </div>

            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "14px",
                }}
              >
                NexaBot AI
              </div>

              <div
                style={{
                  color: "#62e89a",
                  fontSize: "11px",
                  marginTop: "2px",
                }}
              >
                ● Online
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "#777",
                fontSize: "22px",
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "18px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  alignSelf:
                    message.role === "user"
                      ? "flex-end"
                      : "flex-start",
                  maxWidth: "84%",
                  padding: "11px 13px",
                  borderRadius:
                    message.role === "user"
                      ? "15px 15px 4px 15px"
                      : "15px 15px 15px 4px",
                  background:
                    message.role === "user"
                      ? "#5848ff"
                      : "rgba(255,255,255,0.06)",
                  color:
                    message.role === "user"
                      ? "white"
                      : "#c7c7c7",
                  fontSize: "13px",
                  lineHeight: 1.55,
                }}
              >
{message.content.split("\n").map((line, lineIndex) => {
  const whatsappMatch = line.match(/^\[\[WHATSAPP\|(.*)\]\]$/);

  if (whatsappMatch) {
    const whatsappUrl = `https://wa.me/2348141528264?text=${whatsappMatch[1]}`;

    return (
      <div key={lineIndex} style={{ marginTop: "8px" }}>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "11px 15px",
            borderRadius: "12px",
            background: "#25D366",
            color: "white",
            textDecoration: "none",
            fontSize: "12px",
            fontWeight: 600,
          }}
        >
          📲 Send Enquiry to KLEMZ Autos
        </a>
      </div>
    );
  }

  if (line.includes("08141528264")) {
    const parts = line.split("08141528264");

    return (
      <span key={lineIndex}>
        {parts[0]}

        <a
          href="https://wa.me/2348141528264"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#8f84ff",
            textDecoration: "underline",
            fontWeight: 600,
          }}
        >
          08141528264
        </a>

        {parts[1]}

        {lineIndex < message.content.split("\n").length - 1 && <br />}
      </span>
    );
  }

  return (
    <span key={lineIndex}>
      {line}
      {lineIndex < message.content.split("\n").length - 1 && <br />}
    </span>
  );
})}
              </div>
            ))}

            {loading && (
              <div
                style={{
                  alignSelf: "flex-start",
                  padding: "11px 15px",
                  borderRadius: "15px",
                  background: "rgba(255,255,255,0.06)",
                  color: "#777",
                  fontSize: "13px",
                }}
              >
                NexaBot is thinking...
              </div>
            )}
          </div>

          {/* Input */}
          <div
            style={{
              padding: "12px",
              borderTop:
                "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "8px",
                background: "rgba(255,255,255,0.05)",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                borderRadius: "13px",
                padding: "5px",
              }}
            >
              <input
                value={input}
                onChange={(event) =>
                  setInput(event.target.value)
                }
                onKeyDown={handleKeyDown}
                placeholder="Ask NexaBot..."
                disabled={loading}
                style={{
                  flex: 1,
                  minWidth: 0,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "white",
                  padding: "9px",
                  fontSize: "13px",
                }}
              />

              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  border: "none",
                  background:
                    loading || !input.trim()
                      ? "#292929"
                      : "#6455ff",
                  color: "white",
                  cursor:
                    loading || !input.trim()
                      ? "default"
                      : "pointer",
                  fontSize: "16px",
                }}
              >
                ↑
              </button>
            </div>

            <div
              style={{
                textAlign: "center",
                color: "#444",
                fontSize: "9px",
                marginTop: "7px",
              }}
            >
              Powered by NexaBot AI
            </div>
          </div>
        </div>
      )}
    </>
  );
}