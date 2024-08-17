'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useStore } from '@/store/zustand';
import { useState } from 'react';

export default function Sidebar() {
  const { data: session } = useSession();
  const store = useStore();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-gray-800 text-gray-100 transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">Fitness Tracker</h1>
        <button className="text-gray-500 hover:text-white" onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="mt-4">
        <ul>
          <li>
            <Link href="/dashboard">
              <a className="flex items-center p-2 rounded-md hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 001 1h3m-6 4a1 1 0 001-1v-3a1 1 0 00-1-1H7a1 1 0 00-1 1v3a1 1 0 001 1h2" />
                </svg>
                Dashboard
              </a>
            </Link>
          </li>
          <li>
            <Link href="/goals">
              <a className="flex items-center p-2 rounded-md hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 14v5l-7-2m0 0l-7 2m7-2v-5M2 10h16v4H2v-4" />
                </svg>
                Goals
              </a>
            </Link>
          </li>
          <li>
            <Link href="/social-feed">
              <a className="flex items-center p-2 rounded-md hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Social Feed
              </a>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <a className="flex items-center p-2 rounded-md hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Profile
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}