import type { Metadata } from "next";
import { Phone, Globe, Award, Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schedule a free consultation with our pension specialists. We are here to help you plan a secure retirement.",
};

const { agent, locations } = SITE_CONFIG;

const contactInfo = [
  {
    icon: Phone,
    label: "Toll-Free",
    value: SITE_CONFIG.phone,
    detail: "Mon-Fri, 8am-6pm",
  },
  {
    icon: Phone,
    label: "Direct",
    value: agent.directPhone,
    detail: "Call or text Rigoberto directly",
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    detail: "We respond within 24 hours",
  },
  {
    icon: Globe,
    label: "Website",
    value: "tpensions.com",
    detail: "Learn more about our services",
  },
  {
    icon: Award,
    label: "License",
    value: `No. ${agent.license}`,
    detail: `${agent.name} — ${agent.title}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Ready to take the next step? Reach out for a free, no-obligation
            consultation with {agent.name}.
          </p>
        </div>
      </section>

      <section id="lead-form" className="py-20 sm:py-28 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            <div className="lg:col-span-2 space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.label}>
                    <CardContent className="flex items-start gap-4 pt-2">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {item.label}
                        </p>
                        <p className="text-sm text-foreground">{item.value}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.detail}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Locations
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Serving educators across multiple states with local offices.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((location) => (
              <Card key={location.name}>
                <CardContent className="pt-2">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {location.name}
                  </h3>
                  {"address" in location && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {location.address}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground">
                    {location.city}, {location.state}{" "}
                    {"zip" in location && location.zip}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
