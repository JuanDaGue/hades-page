"use client";
import Link from 'next/link';
import { FaBell, FaSearch } from 'react-icons/fa';
import { Logo } from '../Logo';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/lib/utils';
import { SelectorProfile } from "@/components/Shared/SelectorProfile";
import { NavbarDesktopProps } from "./NavbarDesktop.types";

export function DesktopNavbar(props: NavbarDesktopProps) {
  const scrollPosition = useScrollPosition();

  const { users } = props;

  return (
    <div
      className={cn(
         "z-30 left-0 right-0 top-0 h-16 fixed w-full transition-all duration-300",
        scrollPosition > 20 ? "bg-black" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-[4%] h-full">
        <div className="flex items-center">
          <div className="text-white text-2xl mr-10">
            <Logo />
          </div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" legacyBehavior >
              <a className="text-rose-600 hover:text-red-800 transition-all duration-300 first-letter:text-3xl">
                HADES
              </a>

              </Link>
            </li>
            <li>
              <Link href="/lyrics" legacyBehavior>
                <a className="text-white hover:text-rose-600 transition-all duration-300">Lyrics</a>
              </Link>
            </li>
            <li>
              <Link href="/events" legacyBehavior>
                <a className="text-white hover:text-rose-600 transition-all duration-300">Events</a>
              </Link>
            </li>
            <li>
              <Link href="/instruments" legacyBehavior>
                <a className="text-white hover:text-rose-600 transition-all duration-300">Instruments</a>
              </Link>
            </li>
            <li>
              <Link href="/songs" legacyBehavior>
                <a className="text-white hover:text-rose-600 transition-all duration-300">Songs</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <FaSearch className="text-white cursor-pointer  hover:text-rose-600 transition-all duration-30" />
          <FaBell className="text-white cursor-pointer  hover:text-rose-600 transition-all duration-30" />
          {/* <FaUser className="text-white cursor-pointer" /> */}
          <div className="flex gap-2 items-center cursor-pointer">
            <SelectorProfile users={users} />
          </div>
        </div>
      </div>
    </div>
  );
}
