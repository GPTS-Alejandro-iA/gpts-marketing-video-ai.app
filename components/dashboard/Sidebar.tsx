"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "240px",
        background: "#111",
        color: "white",
        padding: "20px",
        height: "100vh",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Dashboard</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Link href="/tools">Tools</Link>
        <Link href="/library">Library</Link>
        <Link href="/settings">Settings</Link>
        <Link href="/help">Help Center</Link>
      </nav>
    </div>
  );
}

