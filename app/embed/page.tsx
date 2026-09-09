import { ChatBot } from "../NexaBotChat";

export default function EmbedPage() {
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        background: "transparent",
        overflow: "hidden",
      }}
    >
      <ChatBot
        apiEndpoint="/api/klemz-chat"
        businessName="KLEMZ Autos"
      />
    </main>
  );
}