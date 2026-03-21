"use client";

import { useEffect } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error";
  visible: boolean;
  onClose: () => void;
}

export default function Toast({
  message,
  type = "success",
  visible,
  onClose,
}: ToastProps) {
  useEffect(() => {
    if (!visible) return;

    const timer = setTimeout(() => {
      onClose();
    }, 2500);

    return () => clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        padding: "14px 20px",
        background: type === "success" ? "#1b5e20" : "#b71c1c",
        color: "white",
        borderRadius: "8px",
        fontWeight: "600",
        boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
        zIndex: 9999,
      }}
    >
      {message}
    </div>
  );
}


