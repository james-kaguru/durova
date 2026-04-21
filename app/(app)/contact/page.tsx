import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "./ContactForm";

export const metadata = {
  title: "Contact Us | Durova",
  description: "Get in touch with Durova. We're here to help coordinate for a safer Kenya.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-primary text-primary-foreground">
        <div className="custom-container py-16 lg:py-24">
          <p className="text-xs uppercase tracking-widest opacity-60 mb-6">
            [CONTACT]
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold uppercase leading-tight max-w-4xl">
            Get in Touch
          </h1>
          <p className="mt-8 text-primary-foreground/70 max-w-2xl leading-relaxed">
            Have questions or want to partner with us? We&apos;re here to help
            and coordinate for a safer Kenya.
          </p>
        </div>
      </section>

      {/* ── FORM ─────────────────────────────────────────────────────── */}
      <section className="py-24">
      <div className="custom-container">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 border bg-background">
                <Mail className="size-5 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">info@durova.tech</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 border bg-background">
                <Phone className="size-5 text-primary" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+254 700 020 979</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 border bg-background">
                <MapPin className="size-5 text-primary" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
      </section>
    </main>
  );
}
