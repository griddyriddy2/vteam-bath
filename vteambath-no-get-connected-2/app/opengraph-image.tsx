import { ImageResponse } from "next/og";

export const alt = "V Team Bath — Your Community. Your Impact.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#FCE9DC", fontFamily: "Arial, sans-serif", color: "#252525", padding: 72 }}>
      <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "#BF4444", marginBottom: 48 }}>V TEAM BATH · UNIVERSITY OF BATH</div>
      <div style={{ display: "flex", fontSize: 76, fontWeight: 800, textAlign: "center" }}>Your Community.</div>
      <div style={{ display: "flex", fontSize: 76, fontWeight: 800, color: "#E45656", textAlign: "center" }}>Your Impact.</div>
      <div style={{ display: "flex", fontSize: 25, marginTop: 48 }}>Student-led volunteering · vteambath.com</div>
    </div>,
    { ...size },
  );
}
