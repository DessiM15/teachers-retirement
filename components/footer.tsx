import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Phone } from "lucide-react";

const { agent } = SITE_CONFIG;

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Image
              src="/images/logo.png"
              alt="Teacher's Pension"
              width={160}
              height={48}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-background/70 max-w-xs">
              {SITE_CONFIG.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background mb-4">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background mb-4">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium text-background">
                {agent.name}
              </p>
              <p className="text-xs text-background/60">
                {agent.title} | License No. {agent.license}
              </p>
              <div className="flex items-center gap-2 text-sm text-background/70">
                <Phone className="h-4 w-4 text-primary" />
                <span>Direct: {agent.directPhone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-background/70">
                <Phone className="h-4 w-4 text-primary" />
                <span>Office: {agent.officePhone}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8 text-center">
          <p className="text-xs text-background/50">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved. This site provides general information and does not
            constitute financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
