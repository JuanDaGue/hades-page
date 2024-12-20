import { Song } from "@prisma/client";

export type ListSongsProps = {
    songs: Song[];
};
