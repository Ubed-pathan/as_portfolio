'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);
  return (
  <nav className="fixed top-0 inset-x-0 z-50 bg-surface/90 dark:bg-surface/70 backdrop-blur shadow-soft border-b border-surface-alt/60 dark:border-surface-alt/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-semibold tracking-wide text-lg text-accent">AS Furniture</Link>
          <button aria-label="Toggle Menu" className="sm:hidden text-softpink focus:outline-none" onClick={() => setOpen(o => !o)}>
            <div className={classNames('space-y-1', open && 'transform rotate-90 transition')}>☰</div>
          </button>
          <div className="hidden sm:flex items-center space-x-8">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="text-text/80 hover:text-accent transition-colors font-medium">
                {l.label}
              </a>
            ))}
            <button onClick={() => setDark(d => !d)} aria-label="Toggle theme" className="text-sm px-3 py-1 rounded-md bg-surfaceAlt hover:bg-accent/10 text-accent border border-accent/20 transition">
              {dark ? 'Light' : 'Dark'}
            </button>
          </div>
        </div>
        {open && (
          <div className="sm:hidden pb-4 flex flex-col space-y-2 animate-fade-in">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="text-text/80 hover:text-accent rounded px-2 py-1" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <button onClick={() => { setDark(d => !d); setOpen(false); }} className="text-text/80 hover:text-accent rounded px-2 py-1 text-left">{dark ? 'Light Mode' : 'Dark Mode'}</button>
          </div>
        )}
      </div>
    </nav>
  );
}
