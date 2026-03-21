"use client";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar placeholder — luego lo reemplazamos por el real */}
      <div
        style={{
          width: "240px",
          background: "#111",
          color: "white",
          padding: "20px",
        }}
      >
        Sidebar
      </div>

      {/* Main content */}
      <div style={{ flex: 1, padding: "20px" }}>
        {children}
      </div>
    </div>
  );
}
