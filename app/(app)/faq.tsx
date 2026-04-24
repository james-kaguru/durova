import { TypographyH2, TypographyP } from "@/components/typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  const faqs = [
    {
      question: "How does Durova detect floods early?",
      answer:
        "We deploy a network of solar-powered IoT water level sensors along river basins and in flood-prone urban areas. These sensors stream data to our AI backend, which analyzes trends and issues alerts before water levels become critical.",
    },
    {
      question: "Who can receive flood alerts?",
      answer:
        "Our system is designed for both individuals and organizations. Residents can sign up for SMS and app-based alerts, while government agencies and NGOs use our coordination dashboard for broader disaster management.",
    },
    {
      question: "How can community leaders get involved?",
      answer:
        "Community leaders can partner with us to become 'Durova Hubs'. We provide training and specialized access to our coordination tools to help local leaders manage evacuations and resource distribution effectively.",
    },
  ];

  return (
    <section id="faq" className="py-12 border-b bg-muted/80">
      <div className="custom-container">
        <div className="text-center">
          <TypographyH2 className="text-primary uppercase">
            Frequently Asked Questions
          </TypographyH2>
          <TypographyP>
            Learn more about our technology and how we are working to protect
            communities.
          </TypographyP>
        </div>

        <Accordion type="single" collapsible={true} className="w-full mt-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b px-0"
            >
              <AccordionTrigger className="text-base text-left py-6 text-primary underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
