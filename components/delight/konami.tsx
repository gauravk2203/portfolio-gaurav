"use client";

import { useEffect, useState } from "react";

const SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function KonamiListener() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let index = 0;

    const onKey = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const expected = SEQUENCE[index];
      const match =
        key === expected ||
        key === expected?.toLowerCase() ||
        (expected === "b" && key === "b") ||
        (expected === "a" && key === "a");

      if (match) {
        index += 1;
        if (index === SEQUENCE.length) {
          setActive(true);
          document.documentElement.dataset.audit = "true";
          index = 0;
          window.setTimeout(() => {
            setActive(false);
            delete document.documentElement.dataset.audit;
          }, 8000);
        }
      } else {
        index = 0;
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!active) return;
    const style = document.createElement("style");
    style.id = "audit-mode";
    style.textContent = `
      html[data-audit="true"] {
        --accent: #7a9ead !important;
        --accent-hover: #92b6c4 !important;
      }
      html[data-audit="true"] body::after {
        content: "AUDIT MODE · LEDGER OPEN";
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        z-index: 10000;
        font-family: var(--font-mono);
        font-size: 10px;
        letter-spacing: 0.16em;
        color: var(--secondary);
        border: 1px solid var(--border-default);
        background: var(--surface-1);
        padding: 0.5rem 0.75rem;
        border-radius: 999px;
        pointer-events: none;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.getElementById("audit-mode")?.remove();
    };
  }, [active]);

  return null;
}
