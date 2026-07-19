export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[var(--radius-md)] focus:bg-accent focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-text-inverse focus:shadow-lg"
    >
      Skip to content
    </a>
  );
}
