import { ImageResponse } from "next/og";

export const alt = "龍隠庵";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(135deg, #f7f6ec 0%, #ebe8d8 46%, #d9d9c3 100%)",
          color: "#1c1917",
          position: "relative",
          overflow: "hidden",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 38% 35%, rgba(124, 145, 88, 0.22), transparent 340px), radial-gradient(circle at 72% 72%, rgba(205, 194, 118, 0.20), transparent 360px)",
          }}
        />
        <div
          style={{
            width: 760,
            height: 760,
            border: "1px solid rgba(120, 113, 108, 0.22)",
            borderRadius: "50%",
            position: "absolute",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 104,
              letterSpacing: "0.18em",
              fontWeight: 400,
            }}
          >
            龍隠庵
          </div>
          <div
            style={{
              fontSize: 26,
              letterSpacing: "0.32em",
              color: "#57534e",
            }}
          >
            RYUINAN / KITAKAMAKURA
          </div>
        </div>
      </div>
    ),
    size,
  );
}
