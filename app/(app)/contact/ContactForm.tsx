"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/form-submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message || "Something went wrong. Please try again.");
      }

      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <FieldGroup>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field>
            <FieldLabel>First Name</FieldLabel>
            <Input name="firstName" placeholder="James" required />
          </Field>
          <Field>
            <FieldLabel>Last Name</FieldLabel>
            <Input name="lastName" placeholder="Kaguru" required />
          </Field>
        </div>
        <Field>
          <FieldLabel>Email</FieldLabel>
          <Input name="email" type="email" placeholder="james@example.com" required />
        </Field>
        <Field>
          <FieldLabel>Message</FieldLabel>
          <Textarea
            name="message"
            placeholder="How can we help?"
            className="min-h-[120px]"
            required
          />
        </Field>
      </FieldGroup>

      {state === "success" && (
        <p className="text-sm text-primary font-medium">
          Message sent! We&apos;ll be in touch soon.
        </p>
      )}

      {state === "error" && (
        <p className="text-sm text-destructive font-medium">{errorMessage}</p>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full h-10"
        disabled={state === "submitting"}
      >
        {state === "submitting" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
