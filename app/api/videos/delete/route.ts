import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "Video ID is required" },
        { status: 400 }
      );
    }

    // Llamada al backend real para eliminar el video
    const response = await fetch(
      `${process.env.RUNPOD_API_URL}/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${process.env.RUNPOD_API_KEY}`,
        },
      }
    );

    const data = await response.json();

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Delete Video API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

