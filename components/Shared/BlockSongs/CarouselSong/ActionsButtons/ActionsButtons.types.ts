
import { Song } from "@prisma/client";

export type ActionsButtonsProps = {
        songId: any|string;
        song: Song;
        isMyList: boolean;
};
