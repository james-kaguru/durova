import {
  TypographyH2,
  TypographyP,
  TypographyH3,
} from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Radio, Bell, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Services() {
  const services = [
    {
      title: "Advanced Flood Detection",
      description:
        "Utilizing IoT sensors and AI-driven predictive modeling to monitor water levels and detect potential flood risks with high accuracy.",
      icon: Radio,
      image:
        "https://durova.s3.eu-central-1.amazonaws.com/web-assets/flood-detection.svg",
    },
    {
      title: "Real-time Community Alerts",
      description:
        "A robust alerting system that delivers instantaneous notifications via SMS, app, and local siren networks to ensure everyone is informed.",
      icon: Bell,
      image:
        "https://durova.s3.eu-central-1.amazonaws.com/web-assets/realtime-alerts.svg",
    },
    {
      title: "Emergency Coordination",
      description:
        "A centralized platform for rescue teams and community leaders to coordinate response efforts, resource allocation, and evacuation paths.",
      icon: MapPin,
      image:
        "https://durova.s3.eu-central-1.amazonaws.com/web-assets/project-management.svg",
    },
  ];

  return (
    <section id="services" className="py-12 border-b">
      <div className="custom-container">
        <div className="text-center mb-8">
          <TypographyH2 className="text-primary uppercase">
            Our Technology
          </TypographyH2>
          <p className="leading-7 text-muted-foreground mt-3 max-w-[600px] mx-auto">
            Comprehensive solutions designed to protect lives and property
            through innovative technology and coordination.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="border bg-background transition-shadow hover:shadow-lg "
            >
              <div className="border-b bg-muted/80">
                <Image
                  src={service.image}
                  width={400}
                  height={400}
                  alt=""
                  unoptimized={true}
                  className="h-[400px] w-full object-center object-contain"
                />
              </div>
              <div className="p-6 bg-background">
                <p className="text-lg font-semibold tracking-tight mb-3 text-primary uppercase">
                  {service.title}
                </p>
                <p className="leading-7 text-justify text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row justify-center py-6">
          <Link href="/technology" className="min-w-[200px] px-3 uppercase flex gap-3 items-center border border-primary bg-primary h-12 text-primary-foreground">
            Explore Technology
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
