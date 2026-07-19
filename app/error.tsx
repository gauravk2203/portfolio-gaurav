"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center pb-20 pt-[calc(var(--header-height)+2rem)]">
      <Container className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-danger">
          Error
        </p>
        <h1 className="text-display mt-3 text-3xl text-text-primary">
          Something slipped the system.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-text-secondary">
          An unexpected error occurred. You can try again, or return home and
          resume from a known-good path.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button type="button" onClick={reset}>
            Try again
          </Button>
          <Button asChild variant="outline">
            <a href="/">Home</a>
          </Button>
        </div>
      </Container>
    </div>
  );
}
