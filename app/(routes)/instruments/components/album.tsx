import React from 'react';

    type AlbumProps = {
    title: string;
    images: string[];
    links: string[];
    };

    const Album: React.FC<AlbumProps> = ({ title, images, links }) => {
    return (
        <div className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
            <div
                key={index}
                className="w-full h-64 overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
                {links[index] ? (
                <a href={links[index]} target="_blank" rel="noopener noreferrer">
                    <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="object-cover w-full h-full"
                    />
                </a>
                ) : (
                <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="object-cover w-full h-full"
                />
                )}
            </div>
            ))}
        </div>
        </div>
    );
};

export default Album;
