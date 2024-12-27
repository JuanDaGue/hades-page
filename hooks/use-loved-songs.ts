import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// import { Song } from "@prisma/client";
import { Song } from "@/components/Shared/BlockSongs/CarouselSong/CarouselSong.types";
import { toast } from "./use-toast";
import { useCurrentNetflixUser } from "./use-current-user";

interface UseAddFilmMyList {
 lovedSongsByUser: { [userId: string]: Song[] };
  addLovedFilm: (data: Song) => void;
  removeLovedItem: (id: string) => void;
}

export const useLovedSongs = create(
  persist<UseAddFilmMyList>(
    (set, get) => ({
    lovedSongsByUser: {},

      addLovedFilm: (data: Song) => {
        const { currentUser } = useCurrentNetflixUser.getState(); // Get the current user

        if (!currentUser) {
          return toast({
            title: "Ningún usuario seleccionado 🙋‍♂️",
          });
        }

        const currentLovedItems = get().lovedSongsByUser[currentUser.id] || [];
        const existingItem = currentLovedItems.find(
          (item: Song) => item.id === data.id
        );

        if (existingItem) {
          return toast({
            title: "La película ya está en tu lista 😊",
            variant: "destructive",
          });
        }

        set({
        lovedSongsByUser: {
            ...get().lovedSongsByUser,
            [currentUser.id]: [...currentLovedItems, data],
          },
        });

        toast({
          title: "Película añadida a tu lista 🚀",
        });
      },

      removeLovedItem: (id: string) => {
        const { currentUser } = useCurrentNetflixUser.getState();

        if (!currentUser) {
          return toast({
            title: "Ningún usuario seleccionado 🙋‍♂️",
            variant: "destructive",
          });
        }

        const currentLovedItems = get().lovedSongsByUser[currentUser.id] || [];

        set({
         lovedSongsByUser: {
            ...get().lovedSongsByUser,
            [currentUser.id]: currentLovedItems.filter(
              (item) => item.id !== id
            ),
          },
        });

        toast({
          title: "La película ha sido eliminada de tu lista 😢",
        });
      },
    }),
    {
      name: "add-loved-films-by-user",
      storage: createJSONStorage(() => localStorage),
    }
  )
);