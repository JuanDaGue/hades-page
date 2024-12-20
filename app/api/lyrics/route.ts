import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
    try {
        const lyrics = await db.song.findMany({
        orderBy: [
            { title: 'asc' },
            { artist: 'asc' },
        ],
        });
        return NextResponse.json(lyrics, { status: 200 });
    } catch (error) {
        console.error("Error fetching lyrics:", error);
        return NextResponse.json({ error: "Error fetching lyrics" }, { status: 500 });
    }
}
