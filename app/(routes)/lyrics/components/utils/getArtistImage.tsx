const artistImages: { [key: string]: string } = {
    "LEO": "/feathers.jpeg",
    "CAMILO": "/GuitarBouns.jpeg",
    "JUAN": "/GuitarInHell.jpeg",
    "DANIEL": "/HadesBouns.jpeg",
    // Add more mappings as needed
  };
  
  export function getArtistImage(artist: string) {
    return artistImages[artist] || "/Death.jpeg";
  }
  