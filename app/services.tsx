import { TypographyH2, TypographyP, TypographyH3 } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Radio, Bell, MapPin, ArrowRight } from "lucide-react";
import Image from 'next/image'
import Link from "next/link";

export function Services() {
  const services = [
    {
      title: "Advanced Flood Detection",
      description: "Utilizing IoT sensors and AI-driven predictive modeling to monitor water levels and detect potential flood risks with high accuracy.",
      icon: Radio,
      image: "https://dev-shrift.s3.eu-central-1.amazonaws.com/thijs-Iz8gKvHINhk-unsplash.jpg"
    },
    {
      title: "Real-time Community Alerts",
      description: "A robust alerting system that delivers instantaneous notifications via SMS, app, and local siren networks to ensure everyone is informed.",
      icon: Bell,
      image: "https://dev-shrift.s3.eu-central-1.amazonaws.com/thijs-Iz8gKvHINhk-unsplash.jpg"

    },
    {
      title: "Emergency Coordination",
      description: "A centralized platform for rescue teams and community leaders to coordinate response efforts, resource allocation, and evacuation paths.",
      icon: MapPin,
      image: "https://dev-shrift.s3.eu-central-1.amazonaws.com/thijs-Iz8gKvHINhk-unsplash.jpg"
    },
  ];

  return (
    <section id="services" className="py-12 border-b bg-muted/30 border-t">
      <div className="custom-container">
        <div className="text-center mb-8">
          <TypographyH2 className="">Our Technology</TypographyH2>
          <p className="leading-7 text-muted-foreground mt-3 max-w-[600px] mx-auto">
            Comprehensive solutions designed to protect lives and property through innovative technology and coordination.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="border bg-background transition-shadow hover:shadow-lg">
              <div>
                <Image src={service.image} width={400} height={400} alt="" className="h-[400px] w-full object-center object-cover" />
              </div>
              <div className="p-6">
                <p className="text-lg font-semibold tracking-tight mb-3">{service.title}</p>
                <p className="leading-7 text-justify text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row justify-center py-6">
          <Link href="/">
            <Button size="lg" className="w-[200px]">
              Explore Technology
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
