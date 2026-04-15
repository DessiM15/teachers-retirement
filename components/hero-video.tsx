import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#2d1215] to-[#1a1a1a] -mt-20 pt-20">
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 py-24 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
          {/* Left content -- 60% */}
          <div className="lg:col-span-3 animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 font-sans">
              Teacher Retirement Planning
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.15]">
              When You Retire, Do You Want to Travel the County, the State, the
              Country — or the World?
            </h1>

            {/* Accent rule */}
            <div className="mt-6 h-[3px] w-[60px] bg-primary rounded-full" />

            <p
              className="mt-6 max-w-lg text-lg text-white/70 font-sans animate-fade-up"
              style={{ animationDelay: "150ms" }}
            >
              We help Texas educators understand their pension, maximize their
              benefits, and retire with clarity and confidence.
            </p>

            <div
              className="mt-10 flex flex-col items-start gap-4 sm:flex-row animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <Link
                href="/contact"
                className={
                  buttonVariants({ size: "lg" }) +
                  " text-base px-8 py-4 h-auto"
                }
              >
                Get My Free Retirement Review &rarr;
              </Link>
            </div>

            <p
              className="mt-4 text-sm text-white/50 font-sans animate-fade-up"
              style={{ animationDelay: "450ms" }}
            >
              No cost. No pressure. Just clarity.
            </p>
          </div>

          {/* Right image -- 40% */}
          <div
            className="lg:col-span-2 flex flex-col items-center animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative rounded-2xl border-2 border-primary/40 overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-teachers.jpg"
                alt="Teachers together in a classroom"
                width={480}
                height={600}
                className="object-cover w-full h-auto"
                priority
              />
            </div>
            <span className="mt-4 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/20 font-sans">
              Licensed Independent Agent | Texas
            </span>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
            fill="#faf9f6"
          />
        </svg>
      </div>
    </section>
  );
}
