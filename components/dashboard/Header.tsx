"use client";

export default function Header() {
  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        background: "#1a1a1a",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        borderBottom: "1px solid #333",
      }}
    >
      <div style={{ fontSize: "18px", fontWeight: "bold" }}>
        Dashboard
      </div>

      <div>
        {/* Placeholder para perfil, notificaciones, etc. */}
        User
      </div>
    </div>
  );
}

