import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { aboutPath, contactPath, homePath } from '../lib/path-list';

export default function SiteFooter() {
  return (
    <footer className="bg-background text-foreground border-t border-border mt-auto">
      <div className="container mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {/* Brand / About Column */}
          <div className="space-y-6">
            <Link href={homePath} className="inline-block">
              <Image
                src="/BTP_Logo.png"
                alt="Behar Tak Tak Trading Company - Premium Steel & Iron Ore"
                width={160}
                height={88}
                className="h-14 w-auto object-contain brightness-110 contrast-125 transition-transform hover:scale-105 duration-300"
              />
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Premium steel solutions engineered for strength and sustainability. Serving global construction, infrastructure, energy, and heavy industry since 1998.
            </p>

            <div className="flex items-center gap-5">
              {/* Replace with your actual social icon SVGs or use lucide-react icons */}
              <Link href="https://www.instagram.com/bahartradeco" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <div className="w-8 h-8 rounded-full bg-primary/80 flex items-center justify-center hover:bg-primary/20 hover:border-2 border-foreground transition-colors">
                  {/* Instagram icon - use your SVG or heroicons/lucide */}
                  <Image src="Instagram_Glyph_White.svg" alt="Instagram" width={16} height={16} className="text-primary" />
                </div>
              </Link>

              <div className="flex items-center gap-5">
                {/* Replace with your actual social icon SVGs or use lucide-react icons */}
                <Link href="https://wa.me/+983136284259" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
                  <div className="w-8 h-8 rounded-full bg-primary/80 flex items-center justify-center hover:bg-primary/20 hover:border-2 border-foreground transition-colors">
                    {/* Instagram icon - use your SVG or heroicons/lucide */}
                    <Image src="Digital_Glyph_White.svg" alt="Whatsapp" width={16} height={16} className="text-primary" />
                  </div>
                </Link>

                {/* Add more as needed */}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-primary">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href={aboutPath} className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/history" className="hover:text-primary transition-colors">Our History</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/certifications" className="hover:text-primary transition-colors">Certifications</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-primary">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span>📍</span>
                <span>Main Office: Shariati Street Chehelsotoon building, Isfahan, IRAN</span>
              </li>
              <li className="flex items-start gap-3">
                <span>📞</span>
                <Link href="tel:+984567890" className="sm:hidden hover:text-primary transition-all">
                  +98 456 7890
                </Link>
                <span className="hidden sm:inline hover:text-primary transition-all">+98 456 7890</span>
              </li>
              <li className="flex items-start gap-3">
                <span>📧</span>
                <Link href="mailto:info@bahartrade.com" className="hover:text-primary transition-all">
                  info@bahartrade.com
                </Link>
              </li>
              <li><Link href={contactPath} className="hover:text-primary transition-colors">Get in Touch →</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Bahar tejarat partak company. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center gap-6">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}