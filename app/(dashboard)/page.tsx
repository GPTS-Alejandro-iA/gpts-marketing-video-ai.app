export default function ToolsPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "600", margin: 0 }}>
        Tools
      </h1>

      <p style={{ color: "#999", margin: 0 }}>
        Aquí estarán todas tus herramientas premium para generar videos,
        administrar contenido y automatizar tu flujo de trabajo.
      </p>

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          background: "#111",
          border: "1px solid #1f1f1f",
          borderRadius: "8px",
          color: "#bbb",
        }}
      >
        <p style={{ margin: 0 }}>
          🚧 Próximamente: herramientas de video, plantillas, generadores y más.
        </p>
      </div>
    </div>
  );
}
