import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/lib/constants';

const FOOTER_LINKS = {
  product: [
    { href: ROUTES.TRACKS, label: 'Tracks' },
    { href: ROUTES.CERTIFICATIONS, label: 'Certifications' },
    { href: ROUTES.FOUNDERS, label: 'About' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href={ROUTES.HOME}
              className="flex items-center gap-3"
            >
              <Image
                src="/logo-white.png"
                alt="AI Trade School"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold tracking-wide uppercase font-[family-name:var(--font-playfair)]">
                AI Trade School
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              Professional AI training for the new economy. Learn to operate,
              build, and lead with artificial intelligence.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AI Trade School. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
