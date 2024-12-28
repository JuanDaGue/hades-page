"use client";

import { useState } from "react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

interface UploadSongFormProps {
  showtrack: boolean;
}

export default function UploadSongForm({ showtrack }: UploadSongFormProps) {

  const [formData, setFormData] = useState(showtrack ? {
    title: "",
    artist: "",
    album: "",
    genre: "",
    releaseDate: "",
    duration: "",
    lyrics: "",
    mainIdea: "",
    description: "",
    ranking: "",
  } : {
    title: "",
    artist: "",
    album: "",
    genre: "",
    releaseDate: "",
    duration: "",
    lyrics: "",
    mainIdea: "",
    description: "",
  });

  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === "ranking" ? parseInt(value, 10) : value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      // Split genre into an array
      const genreArray = formData.genre.split(",").map((item) => item.trim());

      const url = showtrack ? "/api/create-lyrics" : "/api/create-popular-lyrics";
      console.log(url);
      console.log(formData);
      const res = await axios.post(url, {
        lyrics: [{ ...formData, genre: genreArray }],
      });

      if (res.status === 201) {
        toast({ title: showtrack ? "Track uploaded successfully!" : "Popular lyrics uploaded successfully!" });
        setFormData(showtrack ? {
          title: "",
          artist: "",
          album: "",
          genre: "",
          releaseDate: "",
          duration: "",
          lyrics: "",
          mainIdea: "",
          description: "",
          ranking: "",
        } : {
          title: "",
          artist: "",
          album: "",
          genre: "",
          releaseDate: "",
          duration: "",
          lyrics: "",
          mainIdea: "",
          description: "",
        });
      } else {
        toast({ title: "Error uploading" });
      }
    } catch (error) {
      console.error("Error uploading song", error);
      toast({ title: "Error uploading song" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 p-8 max-w-4xl w-full mx-auto border-2 border-white text-white shadow-md rounded bg-transparent"
    >
      <h1 className="text-2xl font-bold text-center">{showtrack ? "Track" : "No Track"}</h1>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        className="border p-2 rounded bg-transparent text-white"
        required
      />
      <input
        type="text"
        name="artist"
        value={formData.artist}
        onChange={handleChange}
        placeholder="Artist"
        className="border p-2 rounded bg-transparent text-white"
        required
      />
      <input
        type="text"
        name="album"
        value={formData.album}
        onChange={handleChange}
        placeholder="Album"
        className="border p-2 rounded bg-transparent text-white"
        required
      />
      <input
        type="text"
        name="genre"
        value={formData.genre}
        onChange={handleChange}
        placeholder="Genre (comma-separated)"
        className="border p-2 rounded bg-transparent text-white"
        required
      />
      <input
        type="date"
        name="releaseDate"
        value={formData.releaseDate}
        onChange={handleChange}
        className="border p-2 rounded bg-transparent text-white"
        required
      />
      <input
        type="text"
        name="duration"
        value={formData.duration}
        onChange={handleChange}
        placeholder="Duration"
        className="border p-2 rounded bg-transparent text-white"
        required
      />
      <textarea
        name="lyrics"
        value={formData.lyrics}
        onChange={handleChange}
        placeholder="Lyrics"
        className="border p-2 rounded bg-transparent text-white h-48"
        required
      />
      <textarea
        name="mainIdea"
        value={formData.mainIdea}
        onChange={handleChange}
        placeholder="Main Idea"
        className="border p-2 rounded bg-transparent text-white"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="border p-2 rounded bg-transparent text-white"
      />
      {!showtrack && (
        <input
          type="number"
          name="ranking"
          value={formData.ranking}
          onChange={handleChange}
          placeholder="Ranking"
          className="border p-2 rounded bg-transparent text-white"
          required
        />
      )}
      <Button
        type="submit"
        className="border rounded-lg border-white-400 p-6 hover:bg-slate-500 transition-all duration-300"
        disabled={isLoading}
      >
        {isLoading ? "Uploading..." : "Upload Song"}
        <Upload className="w-4 h-4 ml-2" />
      </Button>
    </form>
  );
}
