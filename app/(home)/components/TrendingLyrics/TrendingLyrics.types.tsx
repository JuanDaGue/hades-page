import { Song } from "@prisma/client";

export type TrendingLyricsProps = {
    songs: {
        title: string;
        id: string;
        artist: string;
        album: string;
        genre: string[];
        releaseDate: Date;
        duration: string;
        lyrics: string;
        mainIdea: string;
        description: string | null;
        ranking: number;
    }[];
};
