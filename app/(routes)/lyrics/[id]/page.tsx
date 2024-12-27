import { db } from "@/lib/db";
import { getArtistImage } from "../components/utils/getArtistImage";
import Track from "./components/SongPage";
// import { GuitarProReader } from "./components/GuitarProReader";

export default async function SongPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const song = await db.song.findUnique({
        where: { id },
    });

    if (!song) {
        return <div className="min-h-screen p-8 text-white">Song not found</div>;
    }

    return (
        <div className="min-h-screen flex flex-col items-center">
        <div className="flex flex-col items-center p-4 sm:p-8 text-white max-w-5xl w-full mx-auto">
            <img
            src={getArtistImage(song.artist)}
            alt={`${song.artist} image`}
            className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full mb-4"
            />
            <h1 className="text-2xl sm:text-3xl font-semibold mb-4 text-center sm:text-left">{song.title}</h1>
            <p className="mb-2 text-center sm:text-left">
            <strong>Artist:</strong> {song.artist}
            </p>
            <p className="mb-2 text-center sm:text-left">
            <strong>Album:</strong> {song.album}
            </p>
            <p className="mb-2 text-center sm:text-left">
            <strong>Genre:</strong> {song.genre.join(", ")}
            </p>
            <p className="mb-2 text-center sm:text-left">
            <strong>Release Date:</strong> {new Date(song.releaseDate).toLocaleDateString()}
            </p>
            <p className="mb-2 text-center sm:text-left">
            <strong>Duration:</strong> {song.duration}
            </p>
            <p className="mb-2 text-center sm:text-left">
            <strong>Main Idea:</strong> {song.mainIdea}
            </p>
            <p className="mb-4 text-center sm:text-left">
            <strong>Description:</strong> {song.description}
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-center sm:text-left">Lyrics:</h2>
            <div className="bg-zinc-800 p-4 rounded w-full max-w-5xl overflow-auto break-words text-sm sm:text-base md:text-lg">
            <pre>
                {song.lyrics}
            </pre>
            </div>
            <Track title={song.title} />
            <div className="mt-8">
            <h1 className="text-xl font-semibold mb-4">Guitar Pro Reader</h1>
            {/* <GuitarProReader /> */}
            </div>
        </div>
        </div>
    );
}
