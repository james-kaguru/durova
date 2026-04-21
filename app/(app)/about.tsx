import { TypographyH2, TypographyP } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="py-12 border-b bg-muted/80">
      <div className="custom-container">
        <div className="lg:flex lg:flex-row gap-12 mb-12">
          <TypographyH2 className="lg:w-1/2 text-primary text-center lg:text-left uppercase lg:p-0">
            Born from Resilience
          </TypographyH2>

          <div className="items-center lg:w-1/2">
            <TypographyP className="text-justify">
              Durova was founded following the devastating flood disasters that
              recently impacted communities across Kenya. Witnessing the
              challenges in detection and response, our team came together with
              a singular purpose: to leverage technology for human safety.
            </TypographyP>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 border-t border-b border-l *:border-r bg-background">
          {[
            {
              name: "James Kaguru",
              role: "Co-Founder",
              image:
                "https://durova.s3.eu-central-1.amazonaws.com/web-assets/james_kaguru_2.JPG",
            },
            {
              name: "Kevin Tuei",
              role: "Co-Founder",
              image:
                "https://durova.s3.eu-central-1.amazonaws.com/web-assets/kevin_tuei.jpeg",
            },
            {
              name: "Patrick Nyangoto",
              role: "Co-Founder",
              image:
                "https://durova.s3.eu-central-1.amazonaws.com/web-assets/patrick_orangi.jpeg",
            },
          ].map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center "
            >
              <div className="w-full h-[350px]">
                <Image
                  src={member.image}
                  width={350}
                  height={350}
                  alt={member.name}
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-primary tracking-tight uppercase">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row justify-center py-6">
          <Link href="/">
            <Button size="lg" className="w-[200px]">
              Learn More About Us
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
