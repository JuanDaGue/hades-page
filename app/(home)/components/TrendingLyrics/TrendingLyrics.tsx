import Image from "next/image";

import { NewTrendingLyricsProps } from "./TrendingLyrics.types";

export function TrendingLyrics({ songs }: NewTrendingLyricsProps) {
  return (
    <div className="pt-11 md:pt-0 md:-top-24 lg:-top-28 relative px-[4%]">
      <h3 className="text-2xl font-semibold mb-3">
        Las canciones de Metal y rock más populares hoy en el Mundo entero.
      </h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
        {songs?.slice(0, 4).map((song) => {
          // Safely access properties with optional chaining
          const albumCover = song.data.albumOfTrack
          ?.coverArt?.sources?.[0]?.url;
          const artistName = song.data.artists?.items[0].profile.name || "Unknown Artist";
          const albumName = song.data.album?.name || "Unknown Album";
          const songName = song.data.name;

          return (
            <a
              key={song.data.uri}
              href={song.data.uri}
              target="_blank"
              rel="noopener noreferrer"
              className="group block cursor-pointer transition-transform transform hover:scale-105"
            >
              <div className="relative flex justify-center items-center w-full">
                {albumCover ? (
                  <Image
                    src={albumCover}
                    alt={`Album cover of ${albumName}`}
                    width={116}
                    height={150}
                    className="h-auto w-auto md:max-h-[180px] lg:max-h-full rounded-lg shadow-lg"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-[116px] h-[150px] bg-gray-300 flex items-center justify-center text-sm text-gray-700">
                    No Image
                  </div>
                )}
              </div>
              <div className="mt-2 text-center">
                <p className="font-bold text-sm truncate" title={songName}>
                  {songName}
                </p>
                <p className="text-sm text-gray-500 truncate" title={artistName}>
                  {artistName}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
