import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { lyrics } = await req.json();

  if (!lyrics || !Array.isArray(lyrics) || lyrics.length === 0) {
    return new NextResponse("Lyrics data is required", { status: 400 });
  }

  try {
    const createdLyrics = await Promise.all(
      lyrics.map(async (lyric) => {
        const {
          id,
          title,
          artist,
          album,
          genre,
          releaseDate,
          duration,
          lyrics: lyricText,
          mainIdea,
          description,
          ranking,
        } = lyric;

        if (
          !title ||
          !artist ||
          !album ||
          !genre ||
          !releaseDate ||
          !duration ||
          !lyricText ||
          !mainIdea ||
          ranking == null
        ) {
          throw new Error(`Missing data for lyric: ${title}`);
        }

        return await db.popularSong.create({
          data: {
            id,
            title,
            artist,
            album,
            genre,
            releaseDate: new Date(releaseDate),
            duration,
            lyrics: lyricText,
            mainIdea,
            description,
            ranking,
            //createdAt: new Date(),
          },
        });
      })
    );

    return NextResponse.json(createdLyrics, { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
