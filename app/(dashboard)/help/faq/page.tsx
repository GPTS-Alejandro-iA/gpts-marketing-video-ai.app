export default function HelpFaqPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "600", margin: 0 }}>
        FAQ
      </h1>

      <p style={{ color: "#999", margin: 0 }}>
        Preguntas frecuentes sobre el uso de la plataforma, herramientas,
        integración y soporte.
      </p>

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          background: "#111",
          border: "1px solid #1f1f1f",
          borderRadius: "8px",
          color: "#bbb",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <p style={{ margin: 0 }}>
          ❓ Próximamente: preguntas frecuentes, respuestas rápidas y guías
          prácticas.
        </p>
      </div>
    </div>
  );
}


