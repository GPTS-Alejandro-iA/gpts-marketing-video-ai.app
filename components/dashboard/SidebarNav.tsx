"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Tools", href: "/tools" },
  { label: "Library", href: "/library" },
  { label: "Settings", href: "/settings" },
  { label: "Help Center", href: "/help" },
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
            }}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

