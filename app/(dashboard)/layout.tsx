"use client";

import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div style={{ flex: 1, padding: "20px" }}>
        {children}
      </div>
    </div>
  );
}
