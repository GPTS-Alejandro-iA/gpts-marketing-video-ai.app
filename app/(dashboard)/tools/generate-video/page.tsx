"use client";

import { useState } from "react";

export default function GenerateVideoPage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/videos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({ error: "Error generating video" });
    }

    setLoading(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "600", margin: 0 }}>
        Generate Video
      </h1>

      <p style={{ color: "#999", margin: 0 }}>
        Escribe un prompt y genera un video usando tu backend conectado.
      </p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe el video que deseas generar..."
        style={{
          width: "100%",
          height: "120px",
          padding: "12px",
          background: "#111",
          border: "1px solid #1f1f1f",
          borderRadius: "8px",
          color: "white",
          resize: "none",
        }}
      />

      <button
        onClick={handleGenerate}
        disabled={loading}
        style={{
          padding: "12px 20px",
          background: loading ? "#333" : "#1c1c1c",
          border: "1px solid #333",
          borderRadius: "8px",
          color: "white",
          cursor: loading ? "not-allowed" : "pointer",
          fontWeight: "600",
          transition: "0.2s",
        }}
      >
        {loading ? "Generating..." : "Generate Video"}
      </button>

      {result && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            background: "#111",
            border: "1px solid #1f1f1f",
            borderRadius: "8px",
            color: "#bbb",
            whiteSpace: "pre-wrap",
          }}
        >
          <strong>Response:</strong>
          <br />
          {JSON.stringify(result, null, 2)}
        </div>
      )}
    </div>
  );
}

