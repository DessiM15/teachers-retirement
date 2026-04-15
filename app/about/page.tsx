import type { Metadata } from "next";
import {
  Heart,
  GraduationCap,
  Scale,
  Users,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Teacher's Pension — our mission to educate educators, our family roots in public education, and our commitment to unbiased retirement guidance.",
};

const values = [
  {
    icon: GraduationCap,
    title: "Educating Educators",
    description:
      "For over a decade, we have pursued our mission of providing high-quality, unbiased retirement education to the men and women who work tirelessly to educate our youth.",
  },
  {
    icon: Heart,
    title: "Family-Owned, Education-Rooted",
    description:
      "We are a family-owned business with children in the public school system and family members who are educators and administrators. We know and appreciate the value of educators.",
  },
  {
    icon: Scale,
    title: "Vendor-Neutral Philosophy",
    description:
      "We are an education provider, not a sales organization. We work with many sub-vendors and investment providers to help employees plan and prepare for retirement through the power of education — not another sales pitch.",
  },
  {
    icon: Users,
    title: "Led by Retired Educators",
    description:
      "Our team includes retired superintendents who consult with district and county offices to promote financial wellness for employees. We understand the system because we lived it.",
  },
];

const credentials = [
  "No-cost financial wellness education for all district employees",
  "Product-neutral guidance — we advocate for you, not a carrier",
  "Serve certificated, classified, confidential, and administrative staff",
  "Over a decade of service to school districts nationwide",
  "Consulting team includes retired superintendents and administrators",
  "Committed to helping every employee achieve a dignified retirement",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
            About Teacher&apos;s Pension
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Educating educators — because the people who dedicate their careers
            to our children deserve expert guidance when planning their futures.
          </p>
        </div>
      </section>

      {/* Mission Story */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <SectionHeading title="Our Story" align="left" />
          <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
            <p>
              Teacher&apos;s Pension was founded on a simple belief: the people
              who dedicate their careers to educating our children deserve expert
              guidance when it is time to plan their own futures.
            </p>
            <p>
              We are a family-owned business with children in the public school
              system and family members who are educators and administrators. We
              know firsthand the value that educators bring to our communities —
              and we recognize the need for high-quality financial education for
              both students and employees.
            </p>
            <p>
              For over a decade, Teacher&apos;s Pension has been pursuing our
              mission of &ldquo;educating educators&rdquo; by providing
              high-quality and unbiased retirement education to educators across
              the country. We are a consulting firm and an education provider
              that works with many sub-vendors and investment providers to help
              employees plan and prepare for retirement through the power of
              education — not just another sales pitch.
            </p>
            <p>
              Teacher&apos;s Pension supports districts in creating an
              environment that advocates for dignified retirement for all
              district employees through the delivery of no-cost retirement
              education.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            title="What Drives Us"
            subtitle="Our values shape every interaction, every recommendation, and every plan we build."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title}>
                  <CardContent className="pt-2">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <SectionHeading
            title="Our Commitment"
            subtitle="We hold ourselves to the highest standards of service and integrity."
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
