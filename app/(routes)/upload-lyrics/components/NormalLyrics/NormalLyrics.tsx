"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { normalLyrics } from "./NormalLyrics.data";
import { useToast } from "@/hooks/use-toast";

export function NormalLyrics() {
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const uploadNormalLyrics = async () => {
        setIsLoading(true);
        try {
        await axios.post("/api/create-lyrics", {
            lyrics: normalLyrics,
        });

        toast({ title: "Letras subidas con éxito" });
        setIsLoading(false);
        } catch (error) {
        console.log(error);
        setIsLoading(false);
        }
    };

    return (
        <div className="border rounded-lg border-white-400 p-6 hover:bg-[#E50914] transition-all duration-300 ">
        <h1 className="text-xl font-bold mb-4">Subir letras normales</h1>
        <Button
            className="w-full"
            variant={"outline"}
            onClick={uploadNormalLyrics}
            disabled={isLoading}
        >
            Subir letras
            <Upload className="w-4 h-4 ml-2" />
        </Button>
        </div>
    );
}
