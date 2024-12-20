import { SongData } from "@/app/(home)/components/TrendingLyrics/TrendingLyrics.types";
import { Song } from "@prisma/client";
export type CarouselSongProps = {
    Songs: SongData[];
    isMyList: boolean;
};
