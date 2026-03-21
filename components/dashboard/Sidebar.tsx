"use client";

import SidebarNav from "@/components/dashboard/SidebarNav";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "240px",
        background: "#111",
        color: "white",
        padding: "20px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h2 style={{ margin: 0, fontSize: "20px", fontWeight: "bold" }}>
        Dashboard
      </h2>

      <SidebarNav />
    </div>
  );
}

