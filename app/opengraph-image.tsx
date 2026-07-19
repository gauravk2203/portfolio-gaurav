import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Gaurav Kadam — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050507",
          padding: "64px 72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#D4A574",
            fontSize: 20,
            letterSpacing: 4,
            textTransform: "uppercase",
            fontFamily: "ui-sans-serif, system-ui",
          }}
        >
          Portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 72,
              color: "#F4F1EA",
              lineHeight: 1.05,
              letterSpacing: -1.5,
            }}
          >
            Gaurav Kadam
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#A8A59C",
              fontFamily: "ui-sans-serif, system-ui",
            }}
          >
            Full-Stack Developer · Mumbai
          </div>
          <div
            style={{
              marginTop: 12,
              fontSize: 24,
              color: "#D4A574",
              fontStyle: "italic",
            }}
          >
            React · TypeScript · Full-stack products
          </div>
        </div>
        <div
          style={{
            height: 2,
            width: 160,
            background: "#D4A574",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
