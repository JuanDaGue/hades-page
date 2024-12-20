import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: "Song ID is required" }, { status: 400 });
    }

    try {
        const song = await db.song.findUnique({
        where: { id },
        });

        if (!song) {
        return NextResponse.json({ error: "Song not found" }, { status: 404 });
        }

        return NextResponse.json(song, { status: 200 });
    } catch (error) {
        console.error("Error fetching song:", error);
        return NextResponse.json({ error: "Error fetching song" }, { status: 500 });
    }
}
