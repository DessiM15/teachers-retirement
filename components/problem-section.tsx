"use client";

import { HelpCircle, DollarSign, Clock, Layers } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const cards = [
  {
    icon: HelpCircle,
    title: "TRS Is Confusing",
    description:
      "Most teachers don't fully understand their TRS benefits, retirement tiers, or how their pension is actually calculated. The system wasn't designed to be simple.",
  },
  {
    icon: DollarSign,
    title: "Healthcare Costs Add Up",
    description:
      "TRS-Care doesn't cover everything. Without a plan, out-of-pocket medical costs can eat into your retirement income faster than you expect.",
  },
  {
    icon: Clock,
    title: "The Income Gap Is Real",
    description:
      "Your pension alone may replace only 50-60% of your working salary. That gap between what you earn and what you'll receive needs a strategy.",
  },
  {
    icon: Layers,
    title: "You Need the Full Picture",
    description:
      "Pension, Social Security, supplemental insurance, 403(b) plans -- these pieces need to work together. Most teachers have never seen them side by side.",
  },
];

export function ProblemSection() {
  useScrollReveal();

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 font-sans">
            The Reality
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Your Pension Is More Complicated Than They Told You
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base text-muted-foreground leading-relaxed">
            You&apos;ve spent decades in the classroom. But when it comes to
            retirement, most educators are left to figure things out on their
            own. Here&apos;s what we hear every day.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="reveal rounded-xl bg-muted border-l-4 border-primary p-6"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2 font-heading">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
