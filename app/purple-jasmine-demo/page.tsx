import { PurpleJasmineChat } from "../PurpleJasmineChat";

export default function PurpleJasmineDemoPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f6f1ea",
        color: "#2b2118",
        padding: "50px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#8b6237",
            marginBottom: "12px",
          }}
        >
          NexaBot Demo
        </p>

        <h1
          style={{
            fontSize: "42px",
            margin: "0 0 15px",
            fontWeight: 600,
          }}
        >
          Purple Jasmine Cafe
        </h1>

        <p
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            fontSize: "17px",
            lineHeight: 1.7,
            color: "#66584c",
          }}
        >
          A quick demonstration of how an AI assistant could help
          Purple Jasmine Cafe answer customer questions, handle
          enquiries, and direct customers to WhatsApp.
        </p>

        <div
          style={{
            marginTop: "45px",
            padding: "30px",
            background: "#fffaf5",
            borderRadius: "20px",
            border: "1px solid #e8ddd1",
            textAlign: "left",
          }}
        >
          <h2 style={{ marginTop: 0 }}>
            Try the assistant
          </h2>

          <p
            style={{
              color: "#66584c",
              lineHeight: 1.6,
            }}
          >
            Click the chat button in the bottom-right corner
            and ask questions such as:
          </p>

          <ul
            style={{
              color: "#66584c",
              lineHeight: 1.9,
            }}
          >
            <li>What is on your menu?</li>
            <li>How much is the Parmesan Chicken?</li>
            <li>What time do you close?</li>
            <li>Where are you located?</li>
            <li>I'd like to make a reservation</li>
            <li>Do you offer catering?</li>
          </ul>
        </div>
      </div>

      <PurpleJasmineChat />
    </main>
  );
}