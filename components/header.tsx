import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const SiteHeader = () => {
  return (
    <header className="bg-footerBg text-footerFg p-4 flex align-middle justify-around sticky top-0 right-0 left-0 text-xl">
      <div>
        <Link href="/">
          <Image src="/BTP_Logo.png" alt="Logo of the company" width={122} height={67} />
        </Link>
      </div>
      <div className="flex items-center">
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">about</Link>
          <Link href="/contact-us">contact us</Link>
        </nav>
      </div>
    </header>

  )
}
