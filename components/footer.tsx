import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Phone } from "lucide-react";

const { agent } = SITE_CONFIG;

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/images/logo.png"
              alt="Teacher's Pension"
              width={200}
              height={60}
              className="h-12 w-auto mb-5"
            />
            <p className="text-base text-background/70 max-w-xs leading-relaxed">
              {SITE_CONFIG.description}
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold uppercase tracking-wider text-background mb-5">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base text-background/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-base font-semibold uppercase tracking-wider text-background mb-5">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <p className="text-lg font-semibold text-background">
                {agent.name}
              </p>
              <p className="text-sm text-background/70">
                {agent.title} | License No. {agent.license}
              </p>
              <div className="flex items-center gap-2.5 text-base text-background/80">
                <Phone className="h-4 w-4 text-primary" />
                <span>Direct: {agent.directPhone}</span>
              </div>
              <div className="flex items-center gap-2.5 text-base text-background/80">
                <Phone className="h-4 w-4 text-primary" />
                <span>Office: {agent.officePhone}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8 text-center">
          <p className="text-sm text-background/50">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved. This site provides general information and does not
            constitute financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
