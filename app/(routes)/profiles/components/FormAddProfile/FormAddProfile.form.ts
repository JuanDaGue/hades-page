import { z } from "zod";

export const formSchema = z.object({
    profileName: z.string().min(2).max(50),
    avatarUrl: z.enum([
        "/profiles/Profileguitar1.jpg",
        "/profiles/Profileguitarlead.jpg",
        "/profiles/Profilebassplayer.jpg",
        "/profiles/Profiledrums.jpg",
    ]),
});