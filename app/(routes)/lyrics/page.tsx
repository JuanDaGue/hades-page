import { db } from "@/lib/db";
import Card from "./components/utils/Card";

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
    <div className="relative">

      <div className="h-full flex flex-col items-center">
        <h1 className="text-2xl font-semibold my-8 text-white">
          Todas las letras
        </h1>
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mb-8">
          <h2 className="text-xl font-semibold col-span-full text-white">
            Canciones con pista mp3 incluida
          </h2>
          {lyrics.map((song) => (
            <Card key={song.id} id={song.id} title={song.title} artist={song.artist} />
          ))}
        </div>
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          <h2 className="text-xl font-semibold col-span-full text-white">
            Canciones con letra, pista mp3 no incluida
          </h2>
          {popularSongs.map((song) => (
            <Card key={song.id} id={song.id} title={song.title} artist={song.artist} />
          ))}
        </div>
      </div>
    </div>
  );
}
