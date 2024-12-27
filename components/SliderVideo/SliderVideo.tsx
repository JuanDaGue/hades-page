"use client";

import { useState, useRef } from 'react';
import { Info, Play, VolumeX, Volume2 } from "lucide-react";
import { useRouter } from 'next/navigation';
import { Button } from "../ui/button";

export default function SliderVideo() {
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const router = useRouter();

    const handlePlayPause = () => {
        if (videoRef.current) {
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
        }
    };

    const handleMoreInfo = () => {
        router.push('/instruments');
    };

    return (
        <div className="relative w-full h-[80vw] md:h-[56.25vw] lg:h-[45vw]">
        {/* Video Background */}
        <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            className="brightness-50 object-fill w-full h-[80vw] md:h-[56.25vw] lg:h-[45vw]"
            src="/videos/Hades_retunr.mp4"
        />

        {/* Content Overlay */}
        <div className="flex flex-col justify-end absolute w-full md:w-[36%] px-4 md:px-0 md:left-[4%] z-20 top-0 -bottom-7 md:bottom-[36%]">
            <div className="pt-24 md:pt-0">
            <h2 className="text-[#E50914] text-2xl md:text-5xl lg:text-8xl font-extrabold drop-shadow-xl">HADES</h2>
            <p className="max-w-md mt-2 text-xs md:text-base">
                En los abismos de Hades, los acordes melancólicos resuenan como lamentos del inframundo, 
                donde cada nota es una lágrima del alma perdida y cada riff un eco del sufrimiento eterno.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mt-5">
                <Button size="lg" variant="secondary" onClick={handlePlayPause}>
                {isMuted ? <Play className="h-6 w-6 mr-2 fill-black" /> : <Volume2 className="h-6 w-6 mr-2 fill-black" />}
                {isMuted ? "Reproducir" : "Silenciar"}
                </Button>
                <Button size="lg" className="bg-gray-500/50 hover:bg-gray-500/40" onClick={handleMoreInfo}>
                <Info className="h-6 w-6 mr-2" />
                Más información
                </Button>
            </div>
            </div>
        </div>

        <div className="bg-transparent bg-no-repeat bg-contain w-full opacity-100 top-auto h-[14.7vw] -bottom-16 absolute bg-gradient-video" />

        {/* Gradient Overlay (Optional for styling) */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 to-transparent z-5" />
        </div>
    );
}
