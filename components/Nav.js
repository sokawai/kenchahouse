import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background-light dark:bg-background-dark border-b border-stone-200 dark:border-stone-800 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo3.png"
            alt="Kencha House Logo"
            width={112}
            height={112}
            className="h-16 md:h-28 w-auto"
            priority
          />
        </Link>

        {/* Hamburger button - mobile only */}
        <button
          className="md:hidden p-2 text-stone-600 hover:text-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-8 lg:gap-10 px-6">
          <Link className="text-sm uppercase tracking-[0.18em] text-stone-600 hover:text-primary transition-colors" href="/play">Play</Link>
          <Link className="text-sm uppercase tracking-[0.18em] text-stone-600 hover:text-primary transition-colors" href="/parties">Parties</Link>
          <Link className="text-sm uppercase tracking-[0.18em] text-stone-600 hover:text-primary transition-colors" href="/studio">Studio</Link>
          <Link className="text-sm uppercase tracking-[0.18em] text-stone-600 hover:text-primary transition-colors" href="/about">About</Link>
        </div>

        {/* Desktop Visit Us Button */}
        <div className="hidden md:flex flex-shrink-0 items-center">
          <a
            href="https://kenchahouse.youcanbook.me/"
            className="bg-primary text-white px-7 py-3 text-sm font-medium uppercase tracking-[0.15em] hover:opacity-90 transition-opacity"
          >
            Visit Us
          </a>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background-light dark:bg-background-dark border-t border-stone-200 dark:border-stone-800">
          <div className="px-4 py-4 space-y-4">
            <Link className="block text-[11px] uppercase tracking-[0.15em] text-stone-600 hover:text-primary transition-colors" href="/play" onClick={() => setMobileOpen(false)}>Play</Link>
            <Link className="block text-[11px] uppercase tracking-[0.15em] text-stone-600 hover:text-primary transition-colors" href="/parties" onClick={() => setMobileOpen(false)}>Parties</Link>
            <Link className="block text-[11px] uppercase tracking-[0.15em] text-stone-600 hover:text-primary transition-colors" href="/studio" onClick={() => setMobileOpen(false)}>Studio</Link>
            <Link className="block text-[11px] uppercase tracking-[0.15em] text-stone-600 hover:text-primary transition-colors" href="/about" onClick={() => setMobileOpen(false)}>About</Link>
            <a
              href="https://kenchahouse.youcanbook.me/"
              className="block w-full bg-primary text-white px-3 py-2 text-[10px] uppercase tracking-[0.2em] hover:opacity-90 transition-opacity text-center"
            >
              Visit Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
