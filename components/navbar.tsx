import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Teacher's Pension"
            width={196}
            height={60}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={buttonVariants({ size: "lg" }) + " ml-4"}
          >
            Free Consultation
          </Link>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
