import {
  Shield,
  Calculator,
  Users,
  TrendingUp,
  Clock,
  Award,
} from "lucide-react";
import { Hero } from "@/components/hero-video";
import { StatsBar } from "@/components/stats-bar";
import { ProblemSection } from "@/components/problem-section";
import { SectionHeading } from "@/components/section-heading";
import { FeatureCard } from "@/components/feature-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { CtaSection } from "@/components/cta-section";

const features = [
  {
    icon: Shield,
    title: "Pension Protection",
    description:
      "We help you understand and maximize your pension benefits so nothing is left on the table.",
  },
  {
    icon: Calculator,
    title: "Benefit Analysis",
    description:
      "Detailed calculations of your projected retirement income based on your unique service history.",
  },
  {
    icon: Users,
    title: "Spousal Planning",
    description:
      "Coordinate benefits between spouses to optimize your combined retirement income.",
  },
  {
    icon: TrendingUp,
    title: "Investment Guidance",
    description:
      "Supplement your pension with smart investment strategies tailored for educators.",
  },
  {
    icon: Clock,
    title: "Early Retirement Options",
    description:
      "Explore whether early retirement is feasible and what trade-offs to consider.",
  },
  {
    icon: Award,
    title: "Certified Expertise",
    description:
      "Our advisors specialize in educator pensions and understand the systems you depend on.",
  },
];

const testimonials = [
  {
    quote:
      "I had no idea I was eligible for additional benefits until the team at Teacher's Pension reviewed my case. They helped me secure thousands more per year in retirement.",
    name: "Sarah M.",
    role: "Retired High School Teacher, 32 Years",
  },
  {
    quote:
      "The pension calculator gave me confidence in my retirement date. Knowing the exact numbers took away so much anxiety about leaving the classroom.",
    name: "James T.",
    role: "Middle School Principal, 28 Years",
  },
  {
    quote:
      "My husband and I both teach, and coordinating our pensions seemed impossible. Teacher's Pension made it straightforward and saved us from costly mistakes.",
    name: "Linda & Robert K.",
    role: "Elementary Educators, Combined 55 Years",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <StatsBar />

      <ProblemSection />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Why Choose Us"
            subtitle="Decades of experience helping educators navigate complex pension systems and retire with confidence."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="What Educators Say"
            subtitle="Hear from teachers and administrators who planned their retirement with our help."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Plan Your Retirement?"
        description="Schedule a free, no-obligation consultation with one of our pension specialists today."
        buttonText="Get Started"
        buttonHref="/contact"
      />
    </>
  );
}
