import { ChatBot } from "../NexaBotChat";

export default function EmbedPage() {
  return (
    <main className="h-screen w-screen m-0 p-0 bg-transparent overflow-hidden flex flex-col justify-end items-end">
      <ChatBot
        apiEndpoint="/api/klemz-chat"
        businessName="KLEMZ Autos"
      />
    </main>
  );
}