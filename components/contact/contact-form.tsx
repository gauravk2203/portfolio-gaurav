"use client";

import { useState, useTransition } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { submitContact } from "@/lib/actions/contact";

type FieldErrors = Partial<
  Record<"name" | "email" | "message" | "company" | "budget", string>
>;

export function ContactForm() {
  const [pending, startTransition] = useTransition();
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setFormError(null);
    setSuccess(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const budget = String(data.get("budget") ?? "").trim();

    const next: FieldErrors = {};
    if (!name) next.name = "Please enter your name.";
    if (!email) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email address.";
    if (!message || message.length < 12)
      next.message = "Share a bit more context (at least a sentence).";

    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }

    startTransition(async () => {
      const result = await submitContact({
        name,
        email,
        message,
        company,
        budget,
      });
      if (result.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setFormError(
          result.error ?? "Something went wrong. Please try email instead.",
        );
      }
    });
  }

  if (success) {
    return (
      <div
        className="flex flex-col items-start rounded-[var(--radius-xl)] border border-success/30 bg-success/10 p-8"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="h-8 w-8 text-success" aria-hidden />
        <h3 className="mt-4 text-xl text-text-primary">Message received.</h3>
        <p className="mt-2 text-sm text-text-secondary">
          Thank you — I typically reply within two business days. If it is
          urgent, email me directly.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => setSuccess(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-[var(--radius-xl)] border border-border-default bg-surface-1 p-6 md:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          error={errors.name}
          required
        >
          <Input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Ada Lovelace"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </Field>
        <Field id="email" label="Email" error={errors.email} required>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="ada@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="company" label="Company" error={errors.company}>
          <Input
            id="company"
            name="company"
            autoComplete="organization"
            placeholder="Optional"
          />
        </Field>
        <Field id="budget" label="Budget range" error={errors.budget}>
          <Input
            id="budget"
            name="budget"
            placeholder="Optional — e.g. project / retainer"
          />
        </Field>
      </div>

      <Field id="message" label="How can I help?" error={errors.message} required>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about the product, timeline, and what success looks like."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
      </Field>

      {formError ? (
        <p
          className="rounded-[var(--radius-md)] border border-danger/30 bg-danger/10 px-3 py-2 text-sm text-danger"
          role="alert"
        >
          {formError}
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
        {pending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label}
        {required ? (
          <span className="text-accent" aria-hidden>
            {" "}
            *
          </span>
        ) : null}
      </Label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-xs text-danger" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
