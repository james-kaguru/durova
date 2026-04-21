import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "./contact/ContactForm";

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
                  <p className=" text-muted-foreground">info@durova.tech</p>
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

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
