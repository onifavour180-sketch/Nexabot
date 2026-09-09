import { ChatBot } from "./NexaBotChat";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <ChatBot businessName="KLEMZ Autos" />
      </body>
    </html>
  );
}