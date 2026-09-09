import { ImageResponse } from "next/og";

export const alt = "Jordan Pene — AI Engineer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#0b101d",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(27, 160, 152, 0.22) 0%, transparent 45%), radial-gradient(circle at 15% 85%, rgba(59, 74, 140, 0.22) 0%, transparent 45%)",
          padding: "80px",
          fontFamily: "sans-serif",
          color: "#f8fafc",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "20px",
            fontWeight: 600,
            color: "#1ba098",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#1ba098",
            }}
          />
          AI Engineer Portfolio
        </div>

        <h1
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#ffffff",
            margin: "0 0 16px 0",
            letterSpacing: "-0.02em",
          }}
        >
          Jordan Pene
        </h1>

        <p
          style={{
            fontSize: "32px",
            fontWeight: 600,
            color: "#1ba098",
            margin: "0 0 32px 0",
          }}
        >
          Prompt Engineering · RAG · Autonomous Agents
        </p>

        <p
          style={{
            fontSize: "22px",
            color: "#cbd5e1",
            maxWidth: "900px",
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          I build AI systems that go from prompt to production — deployed applications with real evaluation, guardrails, and cited answers.
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
