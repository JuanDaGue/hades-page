import Image from "next/image";
import { NewTrendingLyricsProps } from "./TrendingLyrics.types";

export function TrendingLyrics({ songs }: NewTrendingLyricsProps) {
  //console.log("rockSongs", songs);

  return (
    <div className="pt-11 md:pt-0 md:-top-24 lg:-top-28 relative px-[4%]">
      <h3 className="text-2xl font-semibold mb-3">
        Los videos de YouTube más recientes de Google for Developers
      </h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
        {songs?.slice(0, 4).map((song) => {
          const thumbnail = song.snippet?.thumbnails?.standard?.url || song?.snippet?.thumbnails?.high?.url;
          const songTitle = song?.snippet?.title;
          const channelTitle = song?.snippet?.channelTitle;

          return (
            <a
              key={song.id}
              href={`https://www.youtube.com/watch?v=${song.contentDetails?.upload?.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block cursor-pointer transition-transform transform hover:scale-105"
            >
              <div className="relative flex justify-center items-center w-full">
                {thumbnail ? (
                  <Image
                    src={thumbnail}
                    alt={`Thumbnail of ${songTitle}`}
                    width={320}
                    height={180}
                    className="h-auto w-auto md:max-h-[180px] lg:max-h-full rounded-lg shadow-lg"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-[320px] h-[180px] bg-gray-300 flex items-center justify-center text-sm text-gray-700">
                    No Image
                  </div>
                )}
              </div>
              <div className="mt-2 text-center">
                <p className="font-bold text-sm truncate" title={songTitle}>
                  {songTitle}
                </p>
                <p className="text-sm text-gray-500 truncate" title={channelTitle}>
                  {channelTitle}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
