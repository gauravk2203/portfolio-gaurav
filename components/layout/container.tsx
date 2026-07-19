import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main";
  narrow?: boolean;
};

export function Container({
  children,
  className,
  as: Comp = "div",
  narrow = false,
}: ContainerProps) {
  return (
    <Comp
      className={cn(
        "mx-auto w-full px-4 sm:px-6 md:px-8",
        narrow ? "max-w-3xl" : "max-w-6xl",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
