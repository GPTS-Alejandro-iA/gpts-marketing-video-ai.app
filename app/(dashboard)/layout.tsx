"use client";

import Sidebar from "@/app/components/dashboard/Sidebar";
import Header from "@/app/components/dashboard/Header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <Header />

        {/* Page content */}
        <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

