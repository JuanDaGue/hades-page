import { BlockSongsProps } from "./BlockSongs.types";
import { CarouselSong } from "./CarouselSong";

export function BlockSongs(props: BlockSongsProps) {
    const { title, Songs, isMyList } = props;

    if (!Songs || Songs.length === 0) return null;

    return (
        <div className="-top-16 relative px-[4%] md:pt-20 md:pb-20 overflow-auto bg-[#171717]">
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <CarouselSong Songs={Songs} isMyList={isMyList} />
        </div>
    );
}