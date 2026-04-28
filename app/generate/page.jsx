"use client";

import { useState } from "react";

export default function GeneratePage() {
  const [result, setResult] = useState(null);

  async function handleGenerate() {
    // Aquí puedes llamar a tu backend local o dejarlo vacío por ahora
    const response = { message: "Backend local no implementado aún" };
    console.log(response);
    setResult(response);
  }

  return (
    <div>
      <button onClick={handleGenerate}>
        Generar video
      </button>

      {result && (
        <pre>{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
}


