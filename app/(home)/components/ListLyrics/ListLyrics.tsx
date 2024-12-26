"use client";

import { useLovedSongs } from "@/hooks/use-loved-songs";
import { useCurrentNetflixUser } from "@/hooks/use-current-user";

import { BlockSongs } from "@/components/Shared/BlockSongs";

import { ListSongsProps } from "./ListLyrics.types";

export function ListLyrics(props: ListSongsProps) {
  const { songs } = props;
  const { lovedSongsByUser } = useLovedSongs();
  const { currentUser } = useCurrentNetflixUser();

  const userMusic = currentUser?.id;
  const lovedSongs = userMusic ? lovedSongsByUser[userMusic] : [];
  //console.log(songs);
  return (
    <div>
      <BlockSongs
        title="Canciones favoritas"
        Songs={lovedSongs}
        isMyList={true}
      />
      <BlockSongs
        title="Canciones más recientes"
        Songs={songs}
        isMyList={false}
      />
    </div>
  );
}
