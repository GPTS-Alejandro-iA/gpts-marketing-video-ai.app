"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function VideoHistoryPage() {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/api/videos/list");
        const data = await response.json();

        if (data.success && Array.isArray(data.data)) {
          setVideos(data.data);
        } else {
          setVideos([]);
        }
      } catch (error) {
        setVideos([]);
      }

      setLoading(false);
    };

    fetchVideos();
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
      ) : videos.length === 0 ? (
        <p style={{ color: "#777" }}>No hay videos generados aún.</p>
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
              <strong>Prompt:</strong> {video.prompt || "N/A"}
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
              <strong>Fecha:</strong> {video.createdAt || "N/A"}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
