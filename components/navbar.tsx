"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Teacher's Pension"
            width={196}
            height={60}
            className="h-12 w-auto"
            priority
          />
          <div className="hidden sm:block">
            <span className={`block text-xs tracking-wide font-sans transition-colors duration-300 ${
              scrolled ? "text-muted-foreground" : "text-white"
            }`}>
              Retirement & Insurance Specialist
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-foreground/80 hover:text-foreground hover:bg-muted"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact#lead-form"
            className={buttonVariants({ size: "lg" }) + " ml-4"}
          >
            Book Your Free Review
          </Link>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
