'use client'
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-600">Artistly</Link>
        <nav className="space-x-6 text-gray-700 text-sm">
          <Link href="/artists">Artists</Link>
          <Link href="/onboard">Onboard Artist</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>
      </div>
    </header>
  );
}
