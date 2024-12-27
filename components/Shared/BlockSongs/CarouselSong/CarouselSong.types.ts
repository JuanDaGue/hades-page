
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

        id: string;
    
        title: string;
    
        artist: string;
    
        album: string;
    
        genre: string[];
    
        releaseDate: Date;
    
        duration: string;
    
        lyrics: string;
    
        mainIdea: string;
    
        description: string | null;
    
        createdAt: Date;
    
        thumbnails?: Thumbnail;
        snippet: Snippet;
    }
    
    export interface CarouselSongProps {
        // songs: Song[];
        isMyList: boolean;
        Songs: Song[];    
}
  