"use client";

import { runVideoBackend } from "@/lib/runpod";
import { useState } from "react";

export default function GeneratePage() {
  const [result, setResult] = useState(null);

  async function handleGenerate() {
    const response = await runVideoBackend("hola");
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

