'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useStore } from '@/store/zustand';
import { useState } from 'react';

export default function Header() {
  const { data: session } = useSession();
  const store = useStore();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/dashboard">
          <a className="text-xl font-bold text-gray-800">Fitness Tracker</a>
        </Link>
        <div className="flex items-center">
          <button className="text-gray-500 hover:text-gray-800" onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {session ? (
            <div className="ml-4 flex items-center">
              <img
                className="w-8 h-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
              />
              <span className="ml-2 text-gray-800">{session.user.name}</span>
              <Link href="/api/auth/signout">
                <a className="ml-4 text-gray-600 hover:text-gray-800">Sign Out</a>
              </Link>
            </div>
          ) : (
            <Link href="/api/auth/signin">
              <a className="ml-4 text-gray-600 hover:text-gray-800">Sign In</a>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}