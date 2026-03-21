"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ConfirmModal from "@/app/components/ConfirmModal";

export default function VideoHistoryPage() {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

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

  useEffect(() => {
    fetchVideos();
  }, []);

  const openDeleteModal = (id: string) => {
    setSelectedId(id);
    setModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!selectedId) return;

    setDeleting(true);

    try {
      const response = await fetch("/api/videos/delete", {
        method: "POST",
        body: JSON.stringify({ id: selectedId }),
      });

      const data = await response.json();

      if (data.success) {
        setVideos((prev) => prev.filter((v) => v.id !== selectedId));
      }
    } catch (error) {
      console.error("Delete error:", error);
    }

    setDeleting(false);
    setModalOpen(false);
    setSelectedId(null);
  };

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
            <div
              key={video.id}
              style={{
                padding: "16px",
                background: "#111",
                border: "1px solid #1f1f1f",
                borderRadius: "8px",
                color: "#ccc",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Link
                href={`/library/video/${video.id}`}
                style={{
                  textDecoration: "none",
                  color: "#ccc",
                  flex: 1,
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

              <button
                onClick={() => openDeleteModal(video.id)}
                style={{
                  marginLeft: "20px",
                  padding: "8px 14px",
                  background: "#b71c1c",
                  border: "none",
                  borderRadius: "6px",
                  color: "white",
                  cursor: "pointer",
                  transition: "0.2s",
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {/* MODAL */}
      <ConfirmModal
        open={modalOpen}
        title="Delete Video"
        message="Are you sure you want to delete this video? This action cannot be undone."
        confirmText={deleting ? "Deleting..." : "Delete"}
        cancelText="Cancel"
        onConfirm={confirmDelete}
        onCancel={() => {
          setModalOpen(false);
          setSelectedId(null);
        }}
      />
    </div>
  );
}


    
