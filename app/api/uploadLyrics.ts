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
        } catch (error) {
        res.status(500).json({ error: 'Error creating song' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
