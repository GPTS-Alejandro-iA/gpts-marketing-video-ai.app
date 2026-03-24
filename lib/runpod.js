export async function runVideoBackend(prompt) {
  const response = await fetch(process.env.NEXT_PUBLIC_RUNPOD_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.NEXT_PUBLIC_RUNPOD_API_KEY}`
    },
    body: JSON.stringify({
      input: { prompt }
    })
  });

  return await response.json();
}


