import type { Metadata } from "next";
import { PensionCalculator } from "@/components/pension-calculator";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Pension Calculator",
  description:
    "Estimate your teacher pension benefits with our free calculator. Enter your salary, years of service, and retirement age to see projected income.",
};

export default function CalculatorPage() {
  return (
    <>
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
            Pension Calculator
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Get a quick estimate of your projected pension benefits based on your
            salary, years of service, and retirement goals.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <PensionCalculator />
        </div>
      </section>

      <CtaSection
        title="Want a Personalized Analysis?"
        description="Our advisors can model your exact pension plan, including cost-of-living adjustments, survivor options, and early retirement penalties."
        buttonText="Schedule Free Consultation"
        buttonHref="/contact"
      />
    </>
  );
}
