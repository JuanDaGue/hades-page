import Image from "next/image";
import { TrendingLyricsProps } from "./TrendingLyrics.types";

export function TrendingLyrics(props: TrendingLyricsProps) {
    const { songs } = props;

    return (
        <div className="pt-11 md:pt-0 md:-top-24 lg:-top-28 relative px-[4%]">
        <h3 className="text-2xl font-semibold mb-3">
            Las canciones de Metal y rock más populares hoy en el Mundo entero.
        </h3>
        <div>
            <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
            {songs.map((song) => (
                <div
                key={song.id}
                className="cursor-pointer transition delay-300 hover:h-[14vh] group relative"
                >
                <div
                    className="flex transition duration 
                    group-hover:opacity-90 delay-300 w-full justify-center"
                >
                    {/* <Image
                    src={`https://raw.githubusercontent.com/ratasi/images-netflix-clone/refs/heads/main/ranking/${song.ranking}.png`}
                    alt="Number"
                    width={116}
                    height={150}
                    className="h-auto w-auto lg:max-h-full"
                    />
                    <Image
                    src={song.album}
                    alt="Album"
                    width={116}
                    height={150}
                    className="h-auto w-auto md:max-h-[180px] lg:max-h-full"
                    /> */}
                </div>
                {/* <InfoExtraSong song={song} /> */}
                </div>
            ))}
            </div>
        </div>
        </div>
    );
}
