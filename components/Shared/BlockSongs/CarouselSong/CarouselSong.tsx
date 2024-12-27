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
        <CarouselContent className="-ml-1 gap-2 overflow-inherit">
            {Songs.map((song) => {
            const thumbnail = song.snippet?.thumbnails?.standard?.url || song?.snippet?.thumbnails?.high?.url;
            const songTitle = song?.snippet?.title;
            const channelTitle = song?.snippet?.channelTitle;
            return (
                <CarouselItem
                key={song.id}
                className="pl-1 md:basis-1/2 lg:basis-1/5 transition delay-300 group relative hover:bg-transparent"
                >
                <Card className="cursor-pointer transition delay-300 group relative hover:bg-transparent">
                    <CardContent className="flex aspect-video items-center justify-center p-6 relative border-none rounded-md bg-zinc-900 ">
                    <Image
                        src={thumbnail}
                        alt={`Thumbnail of ${songTitle}`}
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
                        src={thumbnail}
                        alt={`Song`}
                        width={200}
                        height={200}
                        className="cursor-pointer object-cover transition-all duration-300 shadow-xl w-full rounded-t-lg"
                        />
                        <div className="mt-2 text-center">
                        <p className="font-bold text-sm truncate text-red-800" title={songTitle}>
                            {songTitle}
                        </p>
                        <p className="text-sm text-white truncate" title={channelTitle}>
                            {channelTitle}
                        </p>
                        </div>
                        
                        <div className="p-2 shadow-lg">
                        <ActionsButtons songId={song.id} song={song} isMyList={isMyList} />
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
