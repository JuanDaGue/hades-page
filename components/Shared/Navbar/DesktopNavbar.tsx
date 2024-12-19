"use client";
import Link from 'next/link';
import { FaBell, FaSearch, FaUser } from 'react-icons/fa';
import { Logo } from './Logo';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/lib/utils';

export function DesktopNavbar() {
  const scrollPosition = useScrollPosition(); // Invoke the hook to get the scroll position

  return (
    <nav
      className={cn(
        "z-30 p-4 shadow-lg transition-all duration-300",
        scrollPosition > 20 ? "bg-black" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-white text-2xl mr-10">
            <Logo />
          </div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/lyrics" className="text-white">
                Lyrics
              </Link>
            </li>
            <li>
              <Link href="/events" className="text-white">
                Events
              </Link>
            </li>
            <li>
              <Link href="/instruments" className="text-white">
                Instruments
              </Link>
            </li>
            <li>
              <Link href="/songs" className="text-white">
                Songs
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <FaSearch className="text-white cursor-pointer" />
          <FaBell className="text-white cursor-pointer" />
          <FaUser className="text-white cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
