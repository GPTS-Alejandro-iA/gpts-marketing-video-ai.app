"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiTool, FiBook, FiSettings, FiHelpCircle } from "react-icons/fi";

const navItems = [
  { label: "Tools", href: "/tools", icon: <FiTool size={18} /> },
  { label: "Library", href: "/library", icon: <FiBook size={18} /> },
  { label: "Settings", href: "/settings", icon: <FiSettings size={18} /> },
  { label: "Help Center", href: "/help", icon: <FiHelpCircle size={18} /> },
];

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {navItems.map((item) => {
        const isActive = pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            style={{
              padding: "10px 12px",
              borderRadius: "6px",
              background: isActive ? "#333" : "transparent",
              color: isActive ? "white" : "#bbb",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
              display: "flex",
              alignItems: "center",
              gap: "10px",
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


