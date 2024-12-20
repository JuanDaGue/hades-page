"use client";
import { useState } from "react";
import { Logo } from "@/components/Shared/Navbar/Logo";
import { NormalLyrics } from "./components/NormalLyrics";
import { TrendingLyrics } from "./components/TrendingLyrics";
import { Button } from "@/components/ui/button";
import UploadSongForm from "./components/Form/UploadSongForm";

export default function UploadLyricsPage() {
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  return (
    <div className="bg-zinc-900 h-full flex flex-col justify-center items-center">
      <Logo />
      <h1 className="text-2xl my-8 font-semibold">Sube tus letras favoritas 🤟🏽</h1>
      <div className="max-w-2xl mx-auto grid grid-cols-2 gap-4 mb-8">
        <NormalLyrics />
        <TrendingLyrics />
      </div>
      <Button className="mb-4" onClick={() => setShowUpdateForm(!showUpdateForm)}>
        {showUpdateForm ? "Close Update Form" : "Open Update Form"}
      </Button>
      {showUpdateForm && <UploadSongForm />}
    </div>
  );
}

