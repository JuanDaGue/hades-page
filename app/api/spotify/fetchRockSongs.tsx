function sleep(ms = 1000) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const fetchRockSongs = async () => {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const url = `https://youtube.googleapis.com/youtube/v3/activities?part=snippet,contentDetails&channelId=UCbulh9WdLtEXiooRcYK7SWw&maxResults=25&chart=mostPopular&key=${apiKey}`;

  try {
    await sleep(1000); // Añadir un retardo de 1 segundo entre solicitudes
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data || [];
  } catch (err) {
    console.error("Failed to fetch songs:", err);
    throw err;
  }
};
