import type { Metadata } from "next";
import {
  Building2,
  GraduationCap,
  BarChart3,
  Shield,
  CheckCircle,
  Mail,
  Phone,
  Users,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "For Districts",
  description:
    "Teacher's Pension provides no-cost financial wellness education and a vendor-neutral 403(b)/457 platform for school districts. Consult with our team of retired superintendents.",
};

const districtBenefits = [
  {
    icon: GraduationCap,
    title: "No-Cost Retirement Education",
    description:
      "We provide timely, high-quality, product-neutral retirement education so that all district employees — certificated, classified, confidential, and administrative — can make informed decisions regarding their retirement.",
  },
  {
    icon: BarChart3,
    title: "TPX: Vendor-Neutral Platform",
    description:
      "The Teacher's Pension Exchange (TPX) enhances your district's 403(b)/457 vendor options through a vendor-neutral platform, offering employees a variety of educational resources and investment options to choose from.",
  },
  {
    icon: Users,
    title: "Consulting by Retired Educators",
    description:
      "Our team of retired superintendents consults with district and county offices to promote financial wellness for employees. We understand your challenges because we've lived them.",
  },
  {
    icon: Shield,
    title: "Employee Wellness & Retention",
    description:
      "Financial stress affects employee performance and retention. By providing quality retirement education, you create an environment that advocates for dignified retirement for all district employees.",
  },
];

const whatWeDo = [
  "Deliver on-site and virtual retirement education workshops at no cost to the district",
  "Provide a vendor-neutral 403(b)/457 platform (TPX) with diverse investment options",
  "Consult with district leadership on financial wellness program design",
  "Offer individualized retirement planning sessions for all employee classifications",
  "Help employees understand their pension, Social Security, and supplemental plan options",
  "Support enrollment and ongoing education throughout the school year",
];

export default function DistrictsPage() {
  return (
    <>
      <section className="bg-primary py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
            For School Districts
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            We support districts in creating an environment that advocates for
            dignified retirement for all employees — through no-cost, unbiased
            retirement education.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <SectionHeading
            title="A Partner for Your District"
            align="left"
          />
          <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
            <p>
              Teacher&apos;s Pension is a consulting firm and education provider
              that works with school districts to deliver financial wellness
              education to every employee — at no cost to the district or its
              employees.
            </p>
            <p>
              Unlike traditional vendors who lead with product sales,
              Teacher&apos;s Pension leads with education. We work with many
              sub-vendors and investment providers to help employees plan and
              prepare for retirement through the power of knowledge — not a
              sales pitch.
            </p>
            <p>
              Our team includes retired superintendents who understand district
              operations, employee needs, and the complexities of public
              education retirement systems from the inside.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits cards */}
      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            title="How We Help Districts"
            subtitle="Comprehensive financial wellness support designed for the unique needs of public education."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {districtBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <Card key={benefit.title}>
                  <CardContent className="pt-2">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* TPX Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-foreground">
                    Teacher&apos;s Pension Exchange
                  </h2>
                  <p className="text-sm font-medium text-primary">TPX</p>
                </div>
              </div>
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  TPX is a vendor-neutral platform designed to meet individuals&apos;
                  unique retirement needs. It enhances your district&apos;s
                  403(b)/457 vendor options by providing employees with a variety
                  of educational resources and investment options from which to
                  choose.
                </p>
                <p>
                  Rather than being tied to a single carrier or product, TPX gives
                  your employees access to multiple providers — ensuring they find
                  the right fit for their individual situation.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>tpx@tpensions.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>888-498-6870</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">
                What We Deliver
              </h3>
              <ul className="space-y-4">
                {whatWeDo.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* District CTA */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <Building2 className="mx-auto h-10 w-10 text-primary mb-6" />
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Bring Financial Wellness to Your District
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
            Whether you are a superintendent, HR director, or benefits
            coordinator, we would love to discuss how Teacher&apos;s Pension can
            support your employees.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className={buttonVariants({ size: "lg" })}
            >
              Schedule a District Consultation
            </Link>
            <div className="text-sm text-muted-foreground">
              Or call us at <span className="font-semibold text-foreground">1-800-474-1440</span>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Education First, Always"
        description="We believe every district employee deserves a dignified retirement. Let us help make that a reality."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
