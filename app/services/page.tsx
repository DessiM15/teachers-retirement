import type { Metadata } from "next";
import {
  PiggyBank,
  BarChart3,
  Shield,
  FileText,
  TrendingUp,
  Clock,
  DollarSign,
  Target,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Retirement planning, pension analysis, life insurance, and financial planning services for educators. Supplement your pension and bridge the income gap.",
};

const services = [
  {
    id: "retirement-planning",
    icon: PiggyBank,
    title: "Retirement Planning",
    subtitle: "Bridge your retirement income gap",
    description:
      "There are many retirement plan types and strategies to help supplement your Pension and Social Security. The question is: which plan and strategy is right for you to bridge your Retirement Income Gap?",
    details: [
      {
        icon: FileText,
        title: "403(b) Plans",
        text: "A tax-sheltered annuity plan offered by public schools and tax-exempt organizations. Advantages include faster vesting and the ability to make additional catch-up contributions.",
      },
      {
        icon: DollarSign,
        title: "457 Plans",
        text: "A tax-advantaged, deferred compensation retirement plan offered by state and local governments. Unlike 401(k) plans, there is no 10% early withdrawal penalty before age 59½.",
      },
      {
        icon: TrendingUp,
        title: "Investment Strategy",
        text: "Your time horizon matters — whether you are 2 years or 30 years from retirement will significantly impact your decision on the right investment vehicle, risk tolerance, and strategy.",
      },
    ],
  },
  {
    id: "pension-analysis",
    icon: BarChart3,
    title: "Pension Analysis",
    subtitle: "Understand what your pension is really worth",
    description:
      "Your pension is likely the most valuable financial asset you have. We provide a detailed analysis of your projected pension income, helping you understand your benefit options, survivor elections, and how your service years and salary history affect your final calculation.",
    details: [
      {
        icon: Target,
        title: "Benefit Projections",
        text: "Detailed modeling of your projected pension income based on your unique service history, salary, and retirement date options.",
      },
      {
        icon: Clock,
        title: "Retirement Timing",
        text: "Analysis of how working additional years or retiring early impacts your monthly benefit — so you can choose the date that works for your life.",
      },
      {
        icon: DollarSign,
        title: "Income Gap Analysis",
        text: "Your pension alone may replace only 50-60% of your working salary. We identify the gap and build a strategy to fill it.",
      },
    ],
  },
  {
    id: "life-insurance",
    icon: Shield,
    title: "Life Insurance & Asset Protection",
    subtitle: "Protect your retirement while it grows",
    description:
      "Part of comprehensive financial planning is to ensure that you are properly protected while your retirement assets are growing. One of the main reasons individuals cannot afford to retire, other than proper savings, is medical expenses and liquidating assets due to unexpected life events.",
    details: [
      {
        icon: Shield,
        title: "Term Life Insurance",
        text: "A type of life insurance that guarantees payment of a stated death benefit if the covered person dies during a specified term. Affordable protection for your family's future.",
      },
      {
        icon: FileText,
        title: "Asset Protection",
        text: "Safeguard your retirement accounts and home equity through proper insurance coverage during the accumulation phase of your retirement planning.",
      },
      {
        icon: TrendingUp,
        title: "Personalized Plans",
        text: "Our financial professionals help you personalize a life insurance plan that safeguards your family's future and empowers you to enjoy life more today.",
      },
    ],
  },
  {
    id: "financial-planning",
    icon: Target,
    title: "Build a Financial Plan",
    subtitle: "See the full picture, not just the pieces",
    description:
      "Pension, Social Security, supplemental insurance, 403(b) plans — these pieces need to work together. Most educators have never seen them side by side. We build a comprehensive financial plan that coordinates all your retirement income sources into one clear strategy.",
    details: [
      {
        icon: BarChart3,
        title: "Comprehensive Analysis",
        text: "We look at your pension, Social Security, savings, insurance, and expenses to build a complete picture of your retirement readiness.",
      },
      {
        icon: DollarSign,
        title: "Tax Strategy",
        text: "Tax-efficient withdrawal strategies to help you keep more of your retirement income and minimize your overall tax burden.",
      },
      {
        icon: Clock,
        title: "Spousal Coordination",
        text: "If both spouses work in education, coordinating pension elections and survivor benefits can maximize your combined household income in retirement.",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Comprehensive retirement planning and financial wellness education
            designed specifically for educators — at no cost to you.
          </p>
        </div>
      </section>

      {services.map((service, index) => {
        const Icon = service.icon;
        const isAlt = index % 2 === 1;
        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 sm:py-28 scroll-mt-24 ${isAlt ? "bg-muted" : ""}`}
          >
            <div className="mx-auto max-w-6xl px-4 lg:px-8">
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                      {service.title}
                    </h2>
                    <p className="text-sm font-medium text-primary">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
                  {service.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {service.details.map((detail) => {
                  const DetailIcon = detail.icon;
                  return (
                    <Card key={detail.title}>
                      <CardContent className="pt-2">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <DetailIcon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="mb-2 text-base font-semibold text-foreground">
                          {detail.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {detail.text}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* Quick links */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <SectionHeading
            title="Not Sure Where to Start?"
            subtitle="Try our free pension calculator to get a quick estimate of your retirement income, or reach out for a personal consultation."
          />
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/calculator"
              className={buttonVariants({ size: "lg" })}
            >
              Try the Calculator
            </Link>
            <Link
              href="/contact"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <CtaSection
        title="Your Retirement Deserves a Plan"
        description="Let us help you understand your options and build a strategy that works for your life."
        buttonText="Schedule a Free Review"
        buttonHref="/contact"
      />
    </>
  );
}
