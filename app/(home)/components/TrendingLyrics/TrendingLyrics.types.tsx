// export type Data = {
//     uri: string;
//     albumOfTrack: {
//     coverArt: {
//         sources: { url: string; width: number; height: number }[];
//     };};
//     artists: {
//         items: { profile: { name: string } }[];
//     };
//     album: {
//         name: string;
//     };
//     name: string;
//     key: string; // Esta línea permite que existan otras propiedades no especificadas
// };

// export type SongData = {
//     data: Data;
//     id: string; // Unique identifier
//     name: string; // Song name
//     uri: string; // Spotify URI
//     albumOfTrack: {
//         uri: string;
//         name: string;
//         coverArt: {
//             sources: { url: string; width: number; height: number }[];
//         };
//         id: string;
//         sharingInfo: {
//             shareUrl: string;
//         };
//     };
//     artists: {
//         items: { name: string }[];
//     };
//     contentRating: {
//         label: string;
//     };
//     duration: {
//         totalMilliseconds: number;
//     };
//     playability: {
//         playable: boolean;
//     };
// };

// export interface NewTrendingLyricsProps {
//     songs: SongData[];
// }
export interface Thumbnail {
    url: string;
    width: number;
    id: string;
    height: number;
  }
  
  export interface Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: Thumbnail;
      medium: Thumbnail;
      high: Thumbnail;
      standard?: Thumbnail;
      maxres?: Thumbnail;
    };
    channelTitle: string;
    type: string;
    id: string;
  }
  
  export interface Song {
    kind: string;
    etag: string;
    id: string;
    snippet: Snippet;
    contentDetails: {
        upload: {
            videoId: string;
        };
    };
}

export interface NewTrendingLyricsProps {
    songs: Song[];
    isMyList: boolean;
    Songs: Song[];
  }
  