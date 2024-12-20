export type Data = {
    uri: string;
    albumOfTrack: {
    coverArt: {
        sources: { url: string; width: number; height: number }[];
    };};
    artists: {
        items: { profile: { name: string } }[];
    };
    album: {
        name: string;
    };
    name: string;
    key: string; // Esta línea permite que existan otras propiedades no especificadas
};

export type SongData = {
    data: Data;
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
