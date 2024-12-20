import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselSongProps } from "./CarouselSong.types";
import { ActionsButtons } from "./ActionsButtons";

export function CarouselSong(props: CarouselSongProps) {
  const { Songs, isMyList } = props;

  return (
        <Carousel className="w-full">
        <CarouselContent className="overflow-hidden">
            {Songs.map((song) => {
            const albumCover = song.data?.coverArt?.sources[0]?.url;
            const artistName = song.data.artists?.items[0].profile.name || "Unknown Artist";
            const songName = song.data.name;

            return (
                <CarouselItem
                key={song.data.uri}
                className="basis-1/3 md:basis-1/4 lg:basis-1/6 px-2 transition delay-300 group relative hover:bg-transparent"
                >
                <Card className="cursor-pointer transition delay-300 group relative">
                    <CardContent className="flex aspect-square items-center justify-center p-1 relative border-none rounded-md bg-zinc-900">
                    <Image
                        src={albumCover}
                        alt="Album Art"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="rounded-md"
                    />
                    <div
                        className="opacity-0 absolute top-0 transition-all 
                                duration-300 z-10 invisible sm:visible delay-300
                                w-full bg-zinc-900 rounded-lg scale-0 
                                group-hover:lg:scale-125 group-hover:md:scale-150
                                group-hover:-translate-y-[5vw] group-hover:opacity-100"
                    >
                        <Image
                        src={albumCover}
                        alt="Song"
                        width={200}
                        height={200}
                        className="cursor-pointer object-cover transition-all duration-300 shadow-xl w-full rounded-t-lg"
                        />
                        <div className="mt-2 text-center">
                        <p className="font-bold text-sm truncate" title={songName}>
                            {songName}
                        </p>
                        <p className="text-sm text-gray-500 truncate" title={artistName}>
                            {artistName}
                        </p>
                        </div>
                        <div className="p-2 shadow-lg">
                        <ActionsButtons songId={song.data.uri} song={song} isMyList={isMyList} />
                        </div>
                    </div>
                    </CardContent>
                </Card>
                </CarouselItem>
            );
            })}
</CarouselContent> 
<CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800 text-white p-2 rounded-full" /> 
<CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800 text-white p-2 rounded-full" />
    </Carousel>
  );
}
