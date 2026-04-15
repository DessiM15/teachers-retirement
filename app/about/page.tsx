import type { Metadata } from "next";
import {
  BookOpen,
  PiggyBank,
  ClipboardCheck,
  Users,
  Receipt,
  Timer,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "About & Services",
  description:
    "Learn about our mission and the pension consulting services we provide to educators.",
};

const services = [
  {
    icon: BookOpen,
    title: "Pension Consulting",
    description:
      "One-on-one guidance through your pension plan's rules, options, and deadlines so you can make informed decisions.",
  },
  {
    icon: PiggyBank,
    title: "Retirement Planning",
    description:
      "Comprehensive retirement plans that integrate your pension with Social Security, savings, and other income sources.",
  },
  {
    icon: ClipboardCheck,
    title: "Benefits Review",
    description:
      "A thorough review of all available benefits including health insurance, sick leave buyback, and supplemental plans.",
  },
  {
    icon: Users,
    title: "Spousal Planning",
    description:
      "Coordinate pension elections and survivor benefits between spouses to maximize household income in retirement.",
  },
  {
    icon: Receipt,
    title: "Tax Strategy",
    description:
      "Tax-efficient withdrawal strategies to keep more of your retirement income and minimize your tax burden.",
  },
  {
    icon: Timer,
    title: "Early Retirement Analysis",
    description:
      "Detailed projections showing the financial impact of retiring early versus working additional years.",
  },
];

const credentials = [
  "Advisors who specialize exclusively in educator pension systems",
  "Deep knowledge of state and district-specific retirement plans",
  "Over 15 years of combined experience serving educators",
  "Fiduciary standard -- we always act in your best interest",
  "No commissions on product sales -- fee-only advisory model",
  "Ongoing support through your entire transition to retirement",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
            About & Services
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Dedicated to helping educators retire with confidence and financial
            security.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading
            title="Our Mission"
            align="left"
          />
          <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
            <p>
              Teacher&apos;s Pension was founded on a simple belief: the people
              who dedicate their careers to educating our children deserve expert
              guidance when it is time to plan their own futures.
            </p>
            <p>
              Educator pension systems are complex. Rules vary by state and
              district, formulas change over time, and the decisions you make at
              retirement are often irrevocable. A single misstep can cost
              thousands of dollars a year in lost benefits.
            </p>
            <p>
              We exist to make sure that does not happen. Our team works
              exclusively with educators -- teachers, administrators, counselors,
              and support staff -- to analyze pension options, model retirement
              scenarios, and build plans that align with each client&apos;s goals.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive pension and retirement services built for educators at every stage of their career."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title}>
                  <CardContent className="pt-2">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading
            title="Why Trust Us"
            subtitle="We hold ourselves to the highest standards of professionalism and client care."
          />
          <ul className="space-y-4">
            {credentials.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-base text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection
        title="Let Us Help You Plan"
        description="Schedule a free consultation and take the first step toward a secure retirement."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
