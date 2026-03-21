export default function SettingsPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "600", margin: 0 }}>
        Settings
      </h1>

      <p style={{ color: "#999", margin: 0 }}>
        Configura tu cuenta, preferencias, integración con Shopify y ajustes
        generales de la aplicación.
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
          ⚙️ Próximamente: configuración avanzada del usuario y del sistema.
        </p>
      </div>
    </div>
  );
}
