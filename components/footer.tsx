import React from 'react'
import Image from 'next/image'

export default function SiteFooter() {
  return (
    <footer className="bg-footerBg text-footerFg flex justify-around text-center p-10">
      <div className="p-2 text-left w-lg space-y-1">
        <h2>Sample site</h2>
        <p>Company site</p>
        <br />
        <p>Find your way across the world</p>
        <div className="flex flex-row justify-items-end space-x-7">
          <div>
            <a href="https://instagram.com">
              <Image src="Instagram_Glyph_Gradient.svg" alt="Icon of instagram" width={30} height={30}></Image>
            </a>
          </div>
          <div>Logo2</div>
          <div>Logo3</div>
          <div>Logo4</div>
          <div>Logo5</div>
        </div>
      </div>
      <div className="p-2">
        section1
      </div>
      <div className="p-2">
        section1
      </div>
    </footer>

  )
}
