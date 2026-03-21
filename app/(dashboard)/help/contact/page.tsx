export default function HelpContactPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "600", margin: 0 }}>
        Contact Support
      </h1>

      <p style={{ color: "#999", margin: 0 }}>
        Si necesitas ayuda personalizada, soporte técnico o tienes preguntas
        sobre la plataforma, aquí podrás comunicarte con nuestro equipo.
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
          📞 Próximamente: formulario de contacto, soporte técnico y asistencia
          personalizada.
        </p>
      </div>
    </div>
  );
}


