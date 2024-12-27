"use client";

//import { useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import {
    DropdownMenu,

    DropdownMenuTrigger,
    } from "@/components/ui/dropdown-menu";

    // interface VideoSelectorProps {
    // videos: Array<{ id: string; title: string; thumbnailUrl: string }>;
    // }

    export function SearchSong() {
    const [selectedVideo] = useState<string | null>(null);
   
    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <div className="flex gap-1 items-center cursor-pointer">
            <Image
                src="/default-avatar.png" // Placeholder or dynamic user avatar
                alt="Profile Image"
                width={35}
                height={35}
                className="rounded-full"
            />
            <ChevronDown />
            </div>
        </DropdownMenuTrigger>

        {selectedVideo && (
            <div className="mt-4 flex justify-center">
            <video controls width="600">
                <source src={`/videos/${selectedVideo}.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>
        )}
        </DropdownMenu>
    );
}
