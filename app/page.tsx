import { Navbar } from "@/components/Shared/Navbar";
import SliderVideo from "@/components/SliderVideo/SliderVideo";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative bg-zinc-900">
      <Navbar />
      <SliderVideo/>

    </div>
  );
}
