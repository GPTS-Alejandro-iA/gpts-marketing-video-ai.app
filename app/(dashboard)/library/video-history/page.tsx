"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function VideoHistoryPage() {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchVideos = async (reset = false) => {
    try {
      const response = await fetch(`/api/videos/list?page=${page}&filter=${filter}`);
      const data = await response.json();

      if (data.success && Array.isArray(data.data)) {
        if (reset) {
          setVideos(data.data);
        } else {
          setVideos((prev) => [...prev, ...data.data]);
        }

        // Si el backend devuelve menos de 10, asumimos que no hay más
        setHasMore(data.data.length === 10);
      } else {
        setVideos([]);
        setHasMore(false);
      }
    } catch (error) {
      setVideos([]);
      setHasMore(false);
    }

    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    setPage(1);
    fetchVideos(true);
  }, [filter]);

  useEffect(() => {
    if (page > 1) fetchVideos();
  }, [page]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "600", margin: 0 }}>
        Video History
      </h1>

      <p style={{ color: "#999", margin: 0 }}>
        Aquí podrás ver todos los videos generados recientemente.
      </p>

      {/* Filtros */}
      <div style={{ display: "flex", gap: "10px" }}>
        {["all", "completed", "processing", "failed"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: "8px 14px",
              borderRadius: "6px",
              background: filter === f ? "#1c1c1c" : "#111",
              border: "1px solid #1f1f1f",
              color: filter === f ? "white" : "#aaa",
              cursor: "pointer",
              transition: "0.2s",
            }}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

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
                      : video.status === "failed"
                      ? "#f44336"
                      : "#ccc",
                }}
              >
                {video.status}
              </span>
              <br />
              <strong>Fecha:</strong> {video.createdAt || "N/A"}
            </Link>
          ))}

          {/* Botón Load More */}
          {hasMore && (
            <button
              onClick={() => setPage((p) => p + 1)}
              style={{
                marginTop: "10px",
                padding: "12px",
                background: "#1c1c1c",
                border: "1px solid #333",
                borderRadius: "8px",
                color: "white",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Load more
            </button>
          )}
        </div>
      )}
    </div>
  );
}

