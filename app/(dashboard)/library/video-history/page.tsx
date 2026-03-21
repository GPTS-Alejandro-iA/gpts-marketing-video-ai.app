"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function VideoHistoryPage() {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Aquí luego conectarás tu backend real o base de datos
    // Por ahora usamos datos simulados
    setTimeout(() => {
      setVideos([
        {
          id: "1",
          prompt: "Video sobre paneles solares EG4",
          status: "completed",
          createdAt: "2026-03-20 10:32 AM",
        },
        {
          id: "2",
          prompt: "Demo del Ark7200 para clientes",
          status: "processing",
          createdAt: "2026-03-20 11:10 AM",
        },
      ]);
      setLoading(false);
    }, 600);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "600", margin: 0 }}>
        Video History
      </h1>

      <p style={{ color: "#999", margin: 0 }}>
        Aquí podrás ver todos los videos generados recientemente.
      </p>

      {loading ? (
        <p style={{ color: "#777" }}>Cargando historial...</p>
      ) : (
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {videos.map((video) => (
            <Link
              key={video.id}
              href={`/library/video/${video.id}`}
              style={{
                padding: "16px",
                background: "#111",
                border: "1px solid #1f1f1f",
                borderRadius: "8px",
                color: "#ccc",
                textDecoration: "none",
                display: "block",
                transition: "0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#151515";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#111";
              }}
            >
              <strong>Prompt:</strong> {video.prompt}
              <br />
              <strong>Status:</strong>{" "}
              <span
                style={{
                  color:
                    video.status === "completed"
                      ? "#4caf50"
                      : video.status === "processing"
                      ? "#ff9800"
                      : "#ccc",
                }}
              >
                {video.status}
              </span>
              <br />
              <strong>Fecha:</strong> {video.createdAt}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
