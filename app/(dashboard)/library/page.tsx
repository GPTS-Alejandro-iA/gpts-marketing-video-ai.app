export default function LibraryPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "600", margin: 0 }}>
        Library
      </h1>

      <p style={{ color: "#999", margin: 0 }}>
        Aquí podrás ver, organizar y administrar todos los videos, escenas,
        plantillas y recursos generados dentro de la plataforma.
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
          📁 Próximamente: tu biblioteca de contenido inteligente.
        </p>
      </div>
    </div>
  );
}


