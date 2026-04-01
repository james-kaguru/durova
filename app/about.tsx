import { TypographyH2, TypographyP } from "@/components/typography";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 border-b">
      <div className="custom-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <TypographyH2 >
              Born from Resilience
            </TypographyH2>
            <div className="text-justify">
              <TypographyP>
                Durova was founded following the devastating flood disasters that recently impacted communities across Kenya. Witnessing the challenges in detection and response, our team came together with a singular purpose: to leverage technology for human safety.
              </TypographyP>
              <TypographyP>
                Our mission is to provide an integrated platform that not only detects potential flood risks but also ensures that alerts reach the most vulnerable in time, and that emergency coordination is seamless and effective.
              </TypographyP>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { name: "James Kaguru", role: "Co-Founder" },
              { name: "Patrick Nyangoto", role: "Co-Founder" },
              { name: "Kevin Tuei", role: "Co-Founder" },
            ].map((member) => (
              <Card key={member.name} className="border bg-muted/30">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="size-12 bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                    <User className="size-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-sm">{member.name}</h3>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
