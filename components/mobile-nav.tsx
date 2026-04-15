"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/button";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center justify-center rounded-lg p-2 text-foreground hover:bg-muted"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full z-50 border-b bg-background shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={buttonVariants({ size: "lg" }) + " mt-2"}
            >
              Free Consultation
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
