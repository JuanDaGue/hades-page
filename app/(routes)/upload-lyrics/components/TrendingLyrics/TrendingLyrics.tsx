"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import axios from "axios";

import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { trendingLyrics } from "./TrendingLyrics.data";

export function TrendingLyrics() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const uploadTrendingLyrics = async () => {
    setIsLoading(true);
    try {
      await axios.post("/api/create-popular-lyrics", {
        lyrics: trendingLyrics,
      });
      toast({ title: "Letras populares subidas con éxito" });

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="border rounded-lg border-white-400 p-6 hover:bg-slate-500 transition-all duration-300">
      <h1 className="text-xl font-bold mb-4">Subir letras populares</h1>
      <Button
        className="w-full"
        onClick={uploadTrendingLyrics}
        variant="secondary"
        disabled={isLoading}
      >
        Subir letras
        <Upload className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}
