import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils'; // assuming you have shadcn cn helper
import ThemeDropDownButton, { ThemeToggleButton } from './theme-toggle-btn';
import { aboutPath, contactPath, homePath } from '../lib/path-list';

export const SiteHeader = () => {
  return (
    <header
      className={cn(
        'bg-background/75 backdrop-blur-md',
        'border-b border-border',
        'text-foreground',
        'shadow-sm', // subtle lift
        'w-full z-50',
        'sticky top-0',
        'transition-all duration-300'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={homePath} className="block">
              <Image
                src="/BTP_Logo.png"
                alt="Behar Tak Tak Trading Company - Premium Steel & Iron Ore"
                width={140} // slightly larger for better visibility
                height={77}
                priority
                className="h-12 sm:h-14 w-auto object-contain transition-transform hover:scale-105 duration-300"
              />
            </Link>
          </div>

          {/* Navigation + Theme Toggle */}
          <div className="flex items-center gap-6 sm:gap-8">
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9">
              {[
                { href: homePath, label: 'Home' },
                { href: aboutPath, label: 'About' },
                { href: contactPath, label: 'Contact' },
                // Add more pages if needed, e.g. /products, /projects
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-base font-medium transition-colors duration-200',
                    'hover:text-primary',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Theme Toggle */}
            <ThemeToggleButton />

            {/* Optional: Mobile menu button (add logic later if needed) */}
            {/* <button className="md:hidden text-foreground p-2">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
};