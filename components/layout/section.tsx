import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  narrow?: boolean;
  eyebrow?: string;
  title?: string;
  description?: string;
  headerAction?: React.ReactNode;
};

export function Section({
  id,
  children,
  className,
  containerClassName,
  narrow,
  eyebrow,
  title,
  description,
  headerAction,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative py-20 md:py-28 lg:py-32", className)}
      aria-labelledby={title ? `${id ?? "section"}-title` : undefined}
    >
      <Container narrow={narrow} className={containerClassName}>
        {(eyebrow || title || description || headerAction) && (
          <div className="mb-12 md:mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              {eyebrow ? (
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  {eyebrow}
                </p>
              ) : null}
              {title ? (
                <h2
                  id={`${id ?? "section"}-title`}
                  className="text-display text-[clamp(1.875rem,3.5vw,2.75rem)] text-text-primary"
                >
                  {title}
                </h2>
              ) : null}
              {description ? (
                <p className="mt-4 text-base text-text-secondary md:text-lg">
                  {description}
                </p>
              ) : null}
            </div>
            {headerAction ? (
              <div className="shrink-0">{headerAction}</div>
            ) : null}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
