"use client";

export default function Header() {
  return (
    <div
      style={{
        width: "100%",
        height: "64px",
        background: "#0f0f0f",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        borderBottom: "1px solid #1f1f1f",
        boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
      }}
    >
      {/* Left side */}
      <div style={{ fontSize: "18px", fontWeight: "600" }}>
        Dashboard
      </div>

      {/* Right side */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        {/* Placeholder for notifications */}
        <div
          style={{
            width: "10px",
            height: "10px",
            background: "#444",
            borderRadius: "50%",
          }}
        />

        {/* Avatar */}
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "#222",
            border: "1px solid #333",
          }}
        />
      </div>
    </div>
  );
}


