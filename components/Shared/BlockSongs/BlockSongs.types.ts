//import { Song} from "@prisma/client";
import { Song} from "./CarouselSong/CarouselSong.types";

export type BlockSongsProps = {
  title: string;
  Songs: Song[];
  isMyList: boolean;
};