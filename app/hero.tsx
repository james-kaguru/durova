import { TypographyH1 } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldAlert } from "lucide-react";
import Image from 'next/image'
export function Hero() {
  return (
    <section className="custom-container flex lg:flex-row flex-col border-b gap-12 py-6 lg:py-12">
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start justify-center">
        <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium mb-8 w-fit">
          <ShieldAlert className="size-4" />
          <span>Next-Gen Flood Protection</span>
        </div>
        <h1 className="font-semibold max-w-[900px] text-center lg:text-left text-4xl md:text-6xl lg:text-5xl mb-3 text-primary">
          Technology Driven Flood Detection and Coordination
        </h1>
        <p className="text-muted-foreground text-base mb-8 max-w-[700px] lg:text-left text-justify">
          Empowering communities in Kenya with real-time alerting and advanced coordination technology to mitigate the impact of flood disasters.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="w-[200px]">
            Explore Solution
            <ArrowRight className="ml-2 size-4" />
          </Button>
          <Button variant="outline" size="lg" className="w-[200px]">
            Learn More
          </Button>
        </div>
      </div>

      <div className="lg:w-1/2">
        <Image src={"https://dev-shrift.s3.eu-central-1.amazonaws.com/thijs-Iz8gKvHINhk-unsplash.jpg"} width={500} height={500} className="w-full h-[400px] lg:h-[750px] object-center object-cover" alt="water dam" />
      </div>
    </section>
  );
}
