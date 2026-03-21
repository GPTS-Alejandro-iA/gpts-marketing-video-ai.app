import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Llamada al backend de RunPod (reemplaza la URL con tu endpoint real)
    const response = await fetch(
      `${process.env.RUNPOD_API_URL}/list`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.RUNPOD_API_KEY}`,
        },
      }
    );

    const data = await response.json();

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Video List API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

