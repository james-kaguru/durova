import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  TypographyH2,
  TypographyP,
  TypographyH3,
} from "@/components/typography";

export function Contact() {
  return (
    <section id="contact" className="py-24 border-b">
      <div className="custom-container">
        <h2 className="text-primary scroll-m-20 pb-2  text-3xl font-semibold tracking-tight first:mt-0 uppercase">
          Get in Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <p className="max-w-[500px] leading-7 text-muted-foreground">
              Have questions or want to partner with us? We&apos;re here to help
              and coordinate for a safer Kenya.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 border bg-background">
                <Mail className="size-5 text-primary" />
                <div>
                  <p className=" font-medium">Email</p>
                  <p className=" text-muted-foreground">info@durova.ai</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 border bg-background">
                <Phone className="size-5 text-primary" />
                <div>
                  <p className=" font-medium">Phone</p>
                  <p className=" text-muted-foreground">+254 700 020 979</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 border bg-background">
                <MapPin className="size-5 text-primary" />
                <div>
                  <p className=" font-medium">Location</p>
                  <p className=" text-muted-foreground">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <FieldGroup>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel>First Name</FieldLabel>
                  <Input placeholder="James" />
                </Field>
                <Field>
                  <FieldLabel>Last Name</FieldLabel>
                  <Input placeholder="Kaguru" />
                </Field>
              </div>
              <Field>
                <FieldLabel>Email</FieldLabel>
                <Input type="email" placeholder="james@example.com" />
              </Field>
              <Field>
                <FieldLabel>Message</FieldLabel>
                <Textarea
                  placeholder="How can we help?"
                  className="min-h-[120px]"
                />
              </Field>
            </FieldGroup>
            <Button size="lg" className="w-full h-10">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
