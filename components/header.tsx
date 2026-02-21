import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ThemeButton from './theme-toggle-btn'

export const SiteHeader = () => {
  return (
    <header className="
  bg-background text-foreground shadow-md
  w-full p-4 z-50
  flex items-center justify-around sticky top-0 
">
      <div>
        <Link href="/">
          <Image
            src="/BTP_Logo.png"
            alt="Logo of the company"
            width={122}
            height={67}
            priority                // good for header logo
          />
        </Link>
      </div>

      <div className="flex items-center space-x-6">
        <nav className="hidden md:flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact-us">Contact us</Link>
        </nav>
        <ThemeButton />
      </div>
    </header>
  )
}
