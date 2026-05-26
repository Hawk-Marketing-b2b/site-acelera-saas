import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ShinyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ShinyButton = forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-95",
          "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-transform before:duration-700 hover:before:translate-x-full",
          className
        )}
        style={{
          background:
            "linear-gradient(135deg, hsl(283, 76%, 54%) 0%, hsl(320, 72%, 49%) 100%)",
          boxShadow: "0 4px 16px -4px hsl(283, 76%, 54%, 0.4)",
        }}
        {...props}
      >
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
      </button>
    );
  }
);

ShinyButton.displayName = "ShinyButton";
export { ShinyButton };
