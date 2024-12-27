// "use client";

// import React, { useState } from "react";
// //import SearchSong from "@/components/SearchSong";
// import { SearchSong } from "@/components/Shared/SearchSong";
// import { Search } from "lucide-react";

// const API_KEY = "YOUR_YOUTUBE_API_KEY";  // Replace with your YouTube API key

// const FavSearch = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showSearch, setShowSearch] = useState(false);
//   const [videos, setVideos] = useState([]);

//   const handleSearch = async () => {
//     if (!searchTerm) return;

//     const response = await fetch(
//       `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchTerm)}&key=${API_KEY}&type=video`
//     );

//     const data = await response.json();
//     const videoResults = data.items.map(item => ({
//       id: item.id.videoId,
//       title: item.snippet.title,
//       thumbnailUrl: item.snippet.thumbnails.default.url,
//     }));

//     setVideos(videoResults);
//     setShowSearch(false);  // Hide search bar after search
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === "Enter") {
//       handleSearch();
//     }
//   };

//   return (
//     <div>
//       <button onClick={() => setShowSearch(!showSearch)} className="flex items-center gap-2">
//         <Search className="w-6 h-6" />
//         FavSearch
//       </button>
//       {showSearch && (
//         <div className="mt-4">
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             onKeyPress={handleKeyPress}
//             className="p-2 border border-gray-300 rounded"
//             placeholder="Search for a song..."
//           />
//           <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
//             Search
//           </button>
//         </div>
//       )}
//       {videos.length > 0 && <SearchSong videos={videos} />}
//     </div>
//   );
// };

// export default FavSearch;
