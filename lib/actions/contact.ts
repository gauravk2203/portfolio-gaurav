"use server";

import { siteConfig } from "@/content/site";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  company?: string;
  budget?: string;
};

export async function submitContact(
  payload: ContactPayload,
): Promise<{ ok: boolean; error?: string }> {
  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim();

  if (!name || !email || !message) {
    return { ok: false, error: "Missing required fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Invalid email address." };
  }

  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

  if (resendKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: email,
          subject: `Portfolio inquiry from ${name}`,
          text: [
            `Name: ${name}`,
            `Email: ${email}`,
            payload.company ? `Company: ${payload.company}` : null,
            payload.budget ? `Budget: ${payload.budget}` : null,
            "",
            message,
          ]
            .filter(Boolean)
            .join("\n"),
        }),
      });

      if (!res.ok) {
        const body = await res.text();
        console.error("[contact] Resend error", res.status, body);
        return {
          ok: false,
          error: "Could not send message. Please email me directly.",
        };
      }

      return { ok: true };
    } catch (err) {
      console.error("[contact] Resend exception", err);
      return {
        ok: false,
        error: "Could not send message. Please email me directly.",
      };
    }
  }

  // Demo / local: accept after validation
  await new Promise((r) => setTimeout(r, 500));

  if (process.env.NODE_ENV === "development") {
    console.info("[contact] (no RESEND_API_KEY — simulated)", {
      name,
      email,
      company: payload.company,
      budget: payload.budget,
      message: message.slice(0, 120),
    });
  }

  return { ok: true };
}
