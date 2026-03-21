"use client";

import { useEffect, useState } from "react";

export default function VideoDetailsPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const [video, setVideo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Más adelante esto vendrá de tu backend real
    // Por ahora simulamos datos
    setTimeout(() => {
      setVideo({
        id,
        prompt: "Video sobre paneles solares EG4",
        status: "completed",
        createdAt: "2026-03-20 10:32 AM",
        outputUrl: null, // luego aquí irá el video final
      });
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return <p style={{ color: "#777" }}>Cargando detalles...</p>;
  }

  if (!video) {
    return <p style={{ color: "#999" }}>Video no encontrado.</p>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "600", margin: 0 }}>
        Video Details
      </h1>

      <p style={{ color: "#999", margin: 0 }}>
        Información detallada del video generado.
      </p>

      <div
        style={{
          padding: "20px",
          background: "#111",
          border: "1px solid #1f1f1f",
          borderRadius: "8px",
          color: "#ccc",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <p><strong>ID:</strong> {video.id}</p>
        <p><strong>Prompt:</strong> {video.prompt}</p>
        <p>
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
        </p>
        <p><strong>Fecha:</strong> {video.createdAt}</p>

        <div
          style={{
            marginTop: "10px",
            padding: "16px",
            background: "#0d0d0d",
            borderRadius: "8px",
            border: "1px solid #222",
          }}
        >
          <strong>Video Output:</strong>
          <br />
          {video.outputUrl ? (
            <video
              src={video.outputUrl}
              controls
              style={{ width: "100%", marginTop: "10px", borderRadius: "8px" }}
            />
          ) : (
            <p style={{ color: "#777", marginTop: "8px" }}>
              El video aún no está disponible.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

