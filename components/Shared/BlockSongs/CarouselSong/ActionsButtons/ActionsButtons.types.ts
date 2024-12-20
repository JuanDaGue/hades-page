import { Song } from "@prisma/client";

export type ActionsButtonsProps = {
  songId: string; // Asegúrate de que songId sea siempre una cadena
  song: Song;
  isMyList: boolean;
};
