"use client";
import React, { useEffect, useState } from "react";

interface TrackProps {
  title: string;
}

const Track: React.FC<TrackProps> = ({ title }) => {
    const [trackUrl, setTrackUrl] = useState<string | null>(null);

    useEffect(() => {
        const trackPath = `/tracks/${title.toLowerCase()}.mp3`;
        fetch(trackPath)
        .then((response) => {
            if (response.ok) {
            setTrackUrl(trackPath);
            }
        })
        .catch((error) => {
            console.error("Error fetching track:", error);
        });
    }, [title]);

    return (
        <div className="mt-8">
        {trackUrl ? (
            <audio controls>
            <source src={trackUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
            </audio>
        ) : (
            <p className="text-white">Track not available</p>
        )}
        </div>
    );
};

export default Track;
