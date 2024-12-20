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
        import { SongInfo } from "./SongInfo"; // If you want to show song-specific details like duration, album, etc.

        export function CarouselSong(props: CarouselSongProps) {
        const { Songs, isMyList } = props;
        console.log(Songs);   
        return (
            <Carousel className="w-full">
            <CarouselContent className="-ml-1 gap-2 overflow-inherit">
                {Songs.map((song) =>{
                
                
                const albumCover = song.data?.coverArt?.sources[0]?.url;
                const artistName = song.data.artists?.items[0].profile.name || "Unknown Artist";
                const albumName = song.data.album?.name || "Unknown Album";
                const songName = song.data.name;
                return(
                <CarouselItem
                    key={song.data.uri}
                    className="pl-1 md:basis-1/2 lg:basis-1/5 transition delay-300 group relative hover:bg-transparent"
                >
                    <Card className="cursor-pointer transition delay-300 group relative">
                    <CardContent className="flex aspect-video items-center justify-center p-6 relative border-none rounded-md bg-zinc-900">
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
                            {/* You can add buttons like Play, Add to Playlist, etc. */}
                            <ActionsButtons songId={song.data.uri} song={song} isMyList={isMyList} />
                            
                            <div className="text-white">
                            <h3>{song.title}</h3>
                            <p>{song.artist}</p>
                            </div>

                            {/* If you want more song details, you can add something like: */}
                            <SongInfo duration={song.duration} album={song.album} />
                        </div>
                        </div>
                    </CardContent>
                    </Card>
                </CarouselItem>
                )})}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
        );
    }
