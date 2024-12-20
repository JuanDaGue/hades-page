import { db } from "@/lib/db";
import Card from "./components/utils/Card";
import { Navbar } from "@/components/Shared/Navbar";

export default async function LyricsPage() {
  const lyrics = await db.song.findMany({
    orderBy: [
      { title: 'asc' },
      { artist: 'asc' },
    ],
  });

  const popularSongs = await db.popularSong.findMany({
    orderBy: [
      { title: 'asc' },
      { artist: 'asc' },
    ],
  });

  return (
    <div className="relative bg-zinc-900">
      <Navbar />
      <div className="bg-zinc-900 h-full flex flex-col items-center">
        <h1 className="text-2xl font-semibold my-8 text-white">
          Todas las letras
        </h1>
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mb-8">
          <h2 className="text-xl font-semibold col-span-full text-white">
            Songs (Demos without guitar pro complete)
          </h2>
          {lyrics.map((song) => (
            <Card key={song.id} id={song.id} title={song.title} artist={song.artist} />
          ))}
        </div>
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          <h2 className="text-xl font-semibold col-span-full text-white">
            Popular Songs in Production with Guitar Pro File
          </h2>
          {popularSongs.map((song) => (
            <Card key={song.id} id={song.id} title={song.title} artist={song.artist} />
          ))}
        </div>
      </div>
    </div>

  );
}
