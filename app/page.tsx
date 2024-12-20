import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { auth } from "@/auth";
import { Navbar } from "@/components/Shared/Navbar";
import SliderVideo from "@/components/SliderVideo/SliderVideo";
import { TrendingLyrics } from "./(home)/components/TrendingLyrics";
import { ListLyrics } from "./(home)/components/ListLyrics";
import Footer from "@/components/Shared/Footer/Footer";
import { fetchRockSongs } from "@/app/api/spotify/route";

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

  const trendingSongs = await db.popularSong.findMany();

  let rockSongs = [];
  try {
    rockSongs = await fetchRockSongs();
  } catch (err) {
    console.error("Error fetching rock songs:", err);
  }
  //console.log("rockSongs", rockSongs);
  return (
    <div className="relative bg-zinc-900">
      <Navbar users={usersNetflix} />
      <SliderVideo />
      <TrendingLyrics songs={rockSongs.tracks?.items} />
      <ListLyrics songs={rockSongs.albums.items} />
      <Footer />
    </div>
  );
}
