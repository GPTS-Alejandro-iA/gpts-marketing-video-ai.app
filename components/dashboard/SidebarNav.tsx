"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiTool, FiBook, FiSettings, FiHelpCircle } from "react-icons/fi";

const navItems = [
  // TOOLS
  { label: "Tools", href: "/tools", icon: <FiTool size={18} /> },
  { label: "Generate Video", href: "/tools/generate-video", icon: <FiTool size={18} /> },

  // LIBRARY
  { label: "Library", href: "/library", icon: <FiBook size={18} /> },
  { label: "Video History", href: "/library/video-history", icon: <FiBook size={18} /> },

  // SETTINGS
  { label: "Settings", href: "/settings", icon: <FiSettings size={18} /> },

  // HELP
  { label: "Help Center", href: "/help", icon: <FiHelpCircle size={18} /> },
];

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {navItems.map((item) => {
        const isActive = pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            style={{
              padding: "10px 14px",
              borderRadius: "8px",
              background: isActive ? "#1c1c1c" : "transparent",
              color: isActive ? "white" : "#9a9a9a",
              textDecoration: "none",
              fontWeight: isActive ? "600" : "400",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              transition: "all 0.18s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = isActive ? "#1c1c1c" : "#151515";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = isActive ? "#1c1c1c" : "transparent";
              e.currentTarget.style.color = isActive ? "white" : "#9a9a9a";
            }}
          >
            {item.icon}
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
