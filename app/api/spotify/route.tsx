export const fetchRockSongs = async () => {
    const url =
      'https://spotify23.p.rapidapi.com/search/?q=q%3Dgenre%3Ametal&type=multi&offset=0&limit=15&numberOfTopResults=15';
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "bc2a84acbamsh67e969b56e818b8p1d932fjsn03dad9ee4156",
        "x-rapidapi-host": "spotify23.p.rapidapi.com",
      },
    };
  
    try {
      const response = await fetch(url, options);
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
  