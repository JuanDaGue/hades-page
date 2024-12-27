import Image from "next/image";
import { NewTrendingLyricsProps } from "./TrendingLyrics.types";

export function TrendingLyrics({ songs }: NewTrendingLyricsProps) {
  return (
    <div className="pt-11 md:pt-0 md:-top-24 lg:-top-28 relative px-[4%]">
      <h3 className="text-2xl font-semibold mb-3 text-center md:text-left">
        Los videos de Metal más recientes de Youtube
      </h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
        {songs?.slice(0, 5).map((song) => {
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
                <div
                className="flex transition duration 
              group-hover:opacity-90 delay-300 w-full justify-center"
              >
                <Image
                  src="/GuitarInHell2.png"
                  alt="Number"
                  width={56}
                  height={150}
                  className="h-auto w-auto lg:max-h-full"
                />
                <Image
                  src={thumbnail}
                  alt="Image"
                  width={146}
                  height={180}
                  className="h-auto w-auto md:max-h-[180px] lg:max-h-full"
                />
                                <Image
                  src="/GuitarInHell2.png"
                  alt="Number"
                  width={56}
                  height={150}
                  className="h-auto w-auto lg:max-h-full transform scale-x-[-1]"
                />
              </div>
                ) : (
                  <div className="w-[320px] h-[180px] bg-gray-300 flex items-center justify-center text-sm text-gray-700">
                    No Image
                  </div>
                )}
              </div>
              <div className="mt-2 text-center">
                <p className="font-bold text-sm md:text-base lg:text-lg truncate max-w-xs mx-auto" title={songTitle}>
                      {songTitle}
                    </p>
                    <p className="text-sm md:text-base lg:text-lg text-gray-500 truncate max-w-xs mx-auto" title={channelTitle}>
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
