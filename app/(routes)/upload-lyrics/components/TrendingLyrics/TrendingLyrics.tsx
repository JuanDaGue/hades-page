 "use client";


import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TrendingLyricsProps {
  showUpdateForm: boolean;
  setShowUpdateForm: (value: boolean) => void;
  setShowTrack: (value: boolean) => void;
}

export function TrendingLyrics({ showUpdateForm, setShowUpdateForm, setShowTrack }: TrendingLyricsProps) {

  return (
    <div className="border rounded-lg border-white-400 p-6 hover:bg-slate-500 transition-all duration-300">
      <h1 className="text-xl font-bold mb-4">Subir la letra y el track</h1>
      <Button
        className="w-full"
        onClick={() => {
          setShowUpdateForm(!showUpdateForm);
          setShowTrack(true);
        }}
        variant="secondary"
      >

        Subir letras
        <Upload className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}
