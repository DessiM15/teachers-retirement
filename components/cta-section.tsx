import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  className?: string;
}

export function CtaSection({
  title,
  description,
  buttonText,
  buttonHref,
  className,
}: CtaSectionProps) {
  return (
    <section className={cn("bg-primary py-16 sm:py-20", className)}>
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80">
          {description}
        </p>
        <div className="mt-8">
          <Link
            href={buttonHref}
            className={buttonVariants({
              variant: "outline",
              size: "lg",
            }) + " border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary"}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
