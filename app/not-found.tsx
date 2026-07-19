import Link from "next/link";
import { Monogram } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center pb-20 pt-[calc(var(--header-height)+2rem)]">
      <Container className="text-center">
        <div className="mx-auto flex max-w-md flex-col items-center">
          <Monogram className="text-text-primary" />
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            404
          </p>
          <h1 className="text-display mt-3 text-3xl text-text-primary md:text-4xl">
            Page not found
          </h1>
          <p className="mt-4 text-text-secondary">
            That route does not exist. Head home or open Work to browse
            projects.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild>
              <Link href="/">Return home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/projects">View work</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
