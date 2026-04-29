import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  href?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "outline";
  className?: string;
  showIcon?: boolean;
};

export function CTAButton({
  children,
  href = "#contato",
  size = "md",
  variant = "primary",
  className,
  showIcon = true,
}: Props) {
  const sizes = {
    sm: "h-10 px-5 text-sm",
    md: "h-12 px-7 text-sm",
    lg: "h-14 px-9 text-base",
  };

  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const variants = {
    primary:
      "bg-gradient-button text-primary-foreground shadow-button hover:scale-[1.02] hover:shadow-glow",
    outline:
      "border border-primary/60 bg-background/40 text-foreground backdrop-blur hover:border-primary hover:bg-primary/10",
  };

  return (
    <a href={href} className={cn(base, sizes[size], variants[variant], className)}>
      <span>{children}</span>
      {showIcon && (
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </a>
  );
}
