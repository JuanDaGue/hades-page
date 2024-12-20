export type TrendingLyricsProps = {
    songs: {
        title: string;
        id: string;
        artist: string;
        album: string;
        genre: string[];
        releaseDate: Date;
        duration: string;
        lyrics: string;
        mainIdea: string;
        description: string | null;
        ranking: number;
    }[];
    };

    export type SongData = {
    data: any;
    id: string; // Unique identifier
    name: string; // Song name
    uri: string; // Spotify URI
    albumOfTrack: {
        uri: string;
        name: string;
        coverArt: {
        sources: { url: string; width: number; height: number }[];
        };
        id: string;
        sharingInfo: {
        shareUrl: string;
        };
    };
    artists: {
        items: { name: string }[];
    };
    contentRating: {
        label: string;
    };
    duration: {
        totalMilliseconds: number;
    };
    playability: {
        playable: boolean;
    };
};

export interface NewTrendingLyricsProps {
    songs: SongData[];
}
