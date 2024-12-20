"use client";
import axios from 'axios';
import { useEffect, useState } from 'react';


    type NewsArticle = {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    };

    export default function EventsPage() {
    const [news, setNews] = useState<NewsArticle[]>([]);
    const [festivals, setFestivals] = useState<NewsArticle[]>([]);

    useEffect(() => {
        async function fetchNews() {
        try {
            const response = await axios.get('https://newsapi.org/v2/everything', {
            params: {
                q: 'metal music',
                apiKey: 'YOUR_API_KEY',
            },
            });
            setNews(response.data.articles);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
        }

        async function fetchFestivals() {
        try {
            const response = await axios.get('https://newsapi.org/v2/everything', {
            params: {
                q: 'metal festival',
                apiKey: '08f801a84b1044c497d6b32148204a53',
            },
            });
            setFestivals(response.data.articles);
        } catch (error) {
            console.error('Error fetching festivals:', error);
        }
        }

        fetchNews();
        fetchFestivals();
    }, []);

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-2xl font-semibold mb-8">Events</h1>
            <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Latest News in the Metal World</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.map((article, index) => (
                <div key={index} className="bg-zinc-800 p-4 rounded-lg">
                    <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                    <h3 className="text-lg font-semibold">{article.title}</h3>
                    <p className="text-sm">{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Read more
                    </a>
                </div>
                ))}
            </div>
            </section>
            <section>
            <h2 className="text-xl font-semibold mb-4">Upcoming Metal Festivals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {festivals.map((article, index) => (
                <div key={index} className="bg-zinc-800 p-4 rounded-lg">
                    <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                    <h3 className="text-lg font-semibold">{article.title}</h3>
                    <p className="text-sm">{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Read more
                    </a>
                </div>
                ))}
            </div>
            </section>
        </div>
    );
}
