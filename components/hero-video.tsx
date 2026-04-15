import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

interface HeroVideoProps {
  heading: string;
  subheading: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  videoSrc?: string;
}

export function HeroVideo({
  heading,
  subheading,
  primaryCta,
  secondaryCta,
  videoSrc,
}: HeroVideoProps) {
  return (
    <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-foreground">
      {videoSrc && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {heading}
        </h1>
        <p className="mt-6 text-lg text-white/80 sm:text-xl max-w-2xl mx-auto">
          {subheading}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href={primaryCta.href}
            className={buttonVariants({ size: "lg" }) + " text-base px-6 py-3 h-auto"}
          >
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className={buttonVariants({ variant: "outline", size: "lg" }) + " text-base px-6 py-3 h-auto border-white text-white bg-transparent hover:bg-white hover:text-foreground"}
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
