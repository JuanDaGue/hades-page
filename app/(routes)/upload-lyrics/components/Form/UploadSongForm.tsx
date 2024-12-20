import { useState } from 'react';
import axios from 'axios';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';

export default function UploadSongForm() {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    album: '',
    genre: '',
    releaseDate: '',
    duration: '',
    lyrics: '',
    mainIdea: '',
    description: '',
    ranking: '',
  });

  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      // Split genre into an array
      const genreArray = formData.genre.split(',').map((item) => item.trim());

      const res = await axios.post('/api/create-lyrics', {
        lyrics: [{ ...formData, genre: genreArray }],
      });

      if (res.status === 201) {
        toast({ title: 'Song uploaded successfully!' });
        setFormData({
          title: '',
          artist: '',
          album: '',
          genre: '',
          releaseDate: '',
          duration: '',
          lyrics: '',
          mainIdea: '',
          description: '',
          ranking: '',
        });
      } else {
        toast({ title: 'Error uploading song' });
      }
    } catch (error) {
      console.error('Error uploading song', error);
      toast({ title: 'Error uploading song' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-8 max-w-4xl w-full mx-auto border-2 border-white text-white shadow-md rounded bg-transparent">
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
      <input
        type="number"
        name="ranking"
        value={formData.ranking}
        onChange={handleChange}
        placeholder="Ranking"
        className="border p-2 rounded bg-transparent text-white"
        required
      />
      <Button type="submit"  className="border rounded-lg border-white-400 p-6 hover:bg-slate-500 transition-all duration-300" disabled={isLoading}>
        Upload Song
        <Upload className="w-4 h-4 ml-2" />
      </Button>
    </form>
  );
}
