export default function HelpReportPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "600", margin: 0 }}>
        Report an Issue
      </h1>

      <p style={{ color: "#999", margin: 0 }}>
        Si encontraste un problema, error o comportamiento inesperado en la
        plataforma, aquí podrás reportarlo para que podamos solucionarlo.
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
          🐞 Próximamente: formulario para reportar errores y enviar feedback.
        </p>
      </div>
    </div>
  );
}


