import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schedule a free consultation with our pension specialists. We are here to help you plan a secure retirement.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(555) 123-4567",
    detail: "Mon-Fri, 8am-6pm",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@teacherspension.com",
    detail: "We respond within 1 business day",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "123 Education Blvd, Suite 200",
    detail: "By appointment only",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Monday - Friday",
    detail: "8:00 AM - 6:00 PM EST",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Ready to take the next step? Reach out for a free, no-obligation
            consultation with one of our pension specialists.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
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
    </>
  );
}
