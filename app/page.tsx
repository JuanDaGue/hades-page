import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { auth } from "@/auth";
import { Navbar } from "@/components/Shared/Navbar";
import SliderVideo from "@/components/SliderVideo/SliderVideo";
import { TrendingLyrics } from "./(home)/components/TrendingLyrics";
import { ListLyrics } from "./(home)/components/ListLyrics";

export default async function Home() {
  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    return redirect("/login");
  }

  const usersNetflix = await db.userNetflix.findMany({
    where: {
      userId: session.user.id,
    },
  });
  const songs = await db.song.findMany();
  const trendingSongs = await db.popularSong.findMany();
  
  // console.log(songs)
  return (
    <div className="relative bg-zinc-900">
      <Navbar />
      <SliderVideo />
      <TrendingLyrics songs ={trendingSongs}/>
      <ListLyrics songs ={songs} />
    </div>
  );
}