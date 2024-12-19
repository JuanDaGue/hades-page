import { useState } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';

export function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-zinc-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-2xl">
            <Logo/>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            ☰
            </button>
        </div>
        {isOpen && (
            <ul className="mt-4 space-y-2">
            <li>
                <Link href="/" legacyBehavior>
                <a className="text-white block">Home</a>
                </Link>
            </li>
            <li>
                <Link href="/lyrics" legacyBehavior>
                <a className="text-white block">Lyrics</a>
                </Link>
            </li>
            <li>
                <Link href="/events" legacyBehavior>
                <a className="text-white block">Events</a>
                </Link>
            </li>
            <li>
                <Link href="/instruments" legacyBehavior>
                <a className="text-white block">Instruments</a>
                </Link>
            </li>
            <li>
                <Link href="/songs" legacyBehavior>
                <a className="text-white block">Songs</a>
                </Link>
            </li>
            <li>
                <Link href="/login" legacyBehavior>
                <a className="text-white block">Login</a>
                </Link>
            </li>
            </ul>
        )}
        </nav>
    );
}
