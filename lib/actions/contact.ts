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

  if (message.length < 12) {
    return { ok: false, error: "Please share a bit more detail in your message." };
  }

  const resendKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim() || siteConfig.email;
  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    "Portfolio <onboarding@resend.dev>";

  // Production: require Resend — never fake success without delivery
  if (!resendKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return {
      ok: false,
      error: `Message service is not configured. Please email me at ${siteConfig.email}.`,
    };
  }

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
          payload.company?.trim() ? `Company: ${payload.company.trim()}` : null,
          payload.budget?.trim() ? `Budget: ${payload.budget.trim()}` : null,
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
        error: `Could not send message. Please email me at ${siteConfig.email}.`,
      };
    }

    return { ok: true };
  } catch (err) {
    console.error("[contact] Resend exception", err);
    return {
      ok: false,
      error: `Could not send message. Please email me at ${siteConfig.email}.`,
    };
  }
}
