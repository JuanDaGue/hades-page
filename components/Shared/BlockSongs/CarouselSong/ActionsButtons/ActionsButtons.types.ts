// import { Song } from "@prisma/client";
import { Song } from "@/components/Shared/BlockSongs/CarouselSong/CarouselSong.types";
export type ActionsButtonsProps = {
  songId: string; // Asegúrate de que songId sea siempre una cadena
  song: Song;
  isMyList: boolean;
};
