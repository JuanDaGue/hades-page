import { Song } from "@prisma/client";

export type CarouselSongProps = {
    Songs: Array<any>; 
    isMyList: boolean;

};