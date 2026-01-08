'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { GamingBorder } from './GamingBorder';

const navItems = [
  { label: 'Profile', href: '#profile' },
  { label: 'Articles', href: '#articles' },
];

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="relative bg-background-card">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="flex items-end gap-2">
              <span className="text-lg font-bold text-primary leading-none">
                ToMY F.
              </span>
              <span className="text-sm font-bold text-foreground-muted leading-none">Portfolio</span>
            </Link>

            <nav className="flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-bold text-foreground-muted hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
        <GamingBorder position="bottom" />
      </div>
    </div>
  );
}
