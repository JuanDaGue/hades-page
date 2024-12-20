import { Song} from "@prisma/client";

export type BlockSongsProps = {
  title: string;
  Songs: Song[];
  isMyList: boolean;
};