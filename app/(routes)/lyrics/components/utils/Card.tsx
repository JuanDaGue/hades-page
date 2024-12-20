import Link from "next/link";
import { getArtistImage } from "./getArtistImage";

type CardProps = {
    id: string;
    title: string;
    artist: string;
    };

    export default function Card({ id, title, artist }: CardProps) {
    return (
        <Link href={`/lyrics/${id}`} legacyBehavior>
        <a className="bg-zinc-800 rounded-lg p-4 flex flex-col items-center text-white hover:bg-zinc-700 transition duration-300 ease-in-out">
            <img
            src={getArtistImage(artist)}
            alt={`${artist} image`}
            className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm">{artist}</p>
        </a>
        </Link>
    );
}
