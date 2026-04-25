import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page") || 1);
    const filter = searchParams.get("filter") || "all";

    // Nueva URL del backend en Render
    const backendUrl = new URL(`${process.env.BACKEND_URL}/videos/list`);

    backendUrl.searchParams.set("page", page.toString());
    backendUrl.searchParams.set("limit", "10");

    if (filter !== "all") {
      backendUrl.searchParams.set("filter", filter);
    }

    // Llamada al backend en Render
    const response = await fetch(backendUrl.toString(), {
      method: "GET",
    });

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

 

