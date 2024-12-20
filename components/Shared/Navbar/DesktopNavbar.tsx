"use client";
import Link from 'next/link';
import { FaBell, FaSearch, FaUser } from 'react-icons/fa';
import { Logo } from './Logo';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/lib/utils';
import { SelectorProfile } from "@/components/Shared/SelectorProfile";
import { NavbarDesktopProps } from "./NavbarDesktop.types";

export function DesktopNavbar(props: NavbarDesktopProps) {
  const scrollPosition = useScrollPosition(); // Invoke the hook to get the scroll position
  const { users } = props;

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
              <Link href="/" legacyBehavior>
                <a className="text-white">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/lyrics" legacyBehavior>
                <a className="text-white">Lyrics</a>
              </Link>
            </li>
            <li>
              <Link href="/events" legacyBehavior>
                <a className="text-white">Events</a>
              </Link>
            </li>
            <li>
              <Link href="/instruments" legacyBehavior>
                <a className="text-white">Instruments</a>
              </Link>
            </li>
            <li>
              <Link href="/songs" legacyBehavior>
                <a className="text-white">Songs</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <FaSearch className="text-white cursor-pointer" />
          <FaBell className="text-white cursor-pointer" />
          {/* <FaUser className="text-white cursor-pointer" /> */}
          <SelectorProfile users={users} />
        </div>
      </div>
    </nav>
  );
}
