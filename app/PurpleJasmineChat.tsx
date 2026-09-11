"use client";

import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function PurpleJasmineChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! 👋 Welcome to Purple Jasmine Cafe.\n\nI'm here to help with our menu, reservations, opening hours, location, catering, and orders.\n\nHow can I help you today?",
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
      const response = await fetch("/api/purple-jasmine-chat", {
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

  function renderMessageContent(content: string) {
    return content.split("\n").map((line, lineIndex) => {
      const whatsappMatch = line.match(
        /^\[\[WHATSAPP\|(.*)\]\]$/
      );

      if (whatsappMatch) {
        const message = whatsappMatch[1];

        const whatsappUrl =
          `https://wa.me/2348148247243?text=${encodeURIComponent(
            message
          )}`;

        return (
          <div
            key={lineIndex}
            style={{
              marginTop: "8px",
            }}
          >
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
              📲 Chat with Purple Jasmine
            </a>
          </div>
        );
      }

      return (
        <span key={lineIndex}>
          {line}
          {lineIndex < content.split("\n").length - 1 && <br />}
        </span>
      );
    });
  }

  return (
    <>
      {!open && (
        <div
          style={{
            position: "fixed",
            right: "24px",
            bottom: "70px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            zIndex: 100,
          }}
        >
          <div
            style={{
              background: "#15110d",
              color: "white",
              padding: "10px 14px",
              borderRadius: "12px",
              fontSize: "12px",
              fontWeight: 600,
              boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
              border: "1px solid rgba(255,255,255,0.1)",
              whiteSpace: "nowrap",
            }}
          >
            Chat with Purple Jasmine
          </div>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open Purple Jasmine Cafe assistant"
            style={{
              width: "62px",
              height: "62px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.2)",
              background:
                "linear-gradient(135deg, #b78a4a, #6d4322)",
              color: "white",
              fontSize: "25px",
              cursor: "pointer",
              boxShadow:
                "0 15px 50px rgba(80,50,20,0.45)",
            }}
          >
            ✦
          </button>
        </div>
      )}

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
            background: "#15110d",
            border:
              "1px solid rgba(255,255,255,0.12)",
            borderRadius: "22px",
            boxShadow:
              "0 30px 100px rgba(0,0,0,0.7)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            zIndex: 100,
          }}
        >
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
                  "linear-gradient(135deg, #b78a4a, #6d4322)",
                color: "white",
              }}
            >
              ✦
            </div>

            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "white",
                }}
              >
                Purple Jasmine Cafe
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
              aria-label="Close chat"
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
                      ? "#8b6237"
                      : "rgba(255,255,255,0.06)",
                  color:
                    message.role === "user"
                      ? "white"
                      : "#ded6cc",
                  fontSize: "13px",
                  lineHeight: 1.55,
                }}
              >
                {renderMessageContent(message.content)}
              </div>
            ))}

            {loading && (
              <div
                style={{
                  alignSelf: "flex-start",
                  padding: "11px 15px",
                  borderRadius: "15px",
                  background:
                    "rgba(255,255,255,0.06)",
                  color: "#777",
                  fontSize: "13px",
                }}
              >
                Purple Jasmine is thinking...
              </div>
            )}
          </div>

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
                background:
                  "rgba(255,255,255,0.05)",
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
                placeholder="Ask Purple Jasmine..."
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
                      : "#8b6237",
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
                color: "#555",
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