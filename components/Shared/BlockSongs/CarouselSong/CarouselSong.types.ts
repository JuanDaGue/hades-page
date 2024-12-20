import { Song } from "@prisma/client";

export type CarouselSongProps = {
    movies: Song[];
    isMyList: boolean;
    songs: Song[];
    //song: Song;
};