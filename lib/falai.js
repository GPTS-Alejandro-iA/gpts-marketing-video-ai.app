import fetch from "node-fetch";

export async function generateVideo(prompt) {
  const response = await fetch("https://fal.run/YOUR_MODEL_ENDPOINT", {
    method: "POST",
    headers: {
      "Authorization": `Key ${process.env.FAL_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt })
  });

  return await response.json();
}

