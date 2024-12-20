import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { title, artist, album, genre, releaseDate, duration, lyrics, mainIdea, description } = req.body;

        try {
            const newSong = await prisma.song.create({
                data: {
                    title,
                    artist,
                    album,
                    genre,
                    releaseDate: new Date(releaseDate),
                    duration,
                    lyrics,
                    mainIdea,
                    description,
                },
            });
            res.status(200).json(newSong);
        } catch (error: unknown) {  // Usar `unknown` en lugar de `any`
            if (error instanceof Error) {  // Verificar si `error` es una instancia de `Error`
                console.error('Error creating song:', error.message);
                res.status(500).json({ error: error.message });
            } else {
                console.error('Unexpected error', error);
                res.status(500).json({ error: 'An unexpected error occurred' });
            }
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
