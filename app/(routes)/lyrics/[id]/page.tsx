import { db } from "@/lib/db";
import { Navbar } from "@/components/Shared/Navbar";
import { getArtistImage } from "../components/utils/getArtistImage";

export default async function SongPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const song = await db.song.findUnique({
    where: { id },
  });

  if (!song) {
    return <div className="bg-zinc-900 min-h-screen p-8 text-white">Song not found</div>;
  }

  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-col items-center p-8 text-white max-w-5xl w-full mx-auto">
            <img
            src={getArtistImage(song.artist)}
            alt={`${song.artist} image`}
            className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h1 className="text-3xl font-semibold mb-4">{song.title}</h1>
            <p className="mb-2"><strong>Artist:</strong> {song.artist}</p>
            <p className="mb-2"><strong>Album:</strong> {song.album}</p>
            <p className="mb-2"><strong>Genre:</strong> {song.genre.join(", ")}</p>
            <p className="mb-2"><strong>Release Date:</strong> {new Date(song.releaseDate).toLocaleDateString()}</p>
            <p className="mb-2"><strong>Duration:</strong> {song.duration}</p>
            <p className="mb-2"><strong>Main Idea:</strong> {song.mainIdea}</p>
            <p className="mb-4"><strong>Description:</strong> {song.description}</p>
            <h2 className="text-2xl font-semibold mb-2">Lyrics:</h2>
            <pre className="bg-zinc-800 p-4 rounded w-full max-w-5xl">{song.lyrics}</pre>
        </div>
        </div>
    );
}
