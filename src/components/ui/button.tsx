import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 motion-reduce:transition-none",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-b from-primary-bright to-primary text-primary-foreground shadow-[0_10px_28px_-14px_var(--primary)] hover:-translate-y-0.5 hover:shadow-[0_16px_38px_-14px_var(--primary)] motion-reduce:hover:translate-y-0",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-border-strong bg-transparent text-foreground hover:border-primary/70 hover:bg-primary/10 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0",
        secondary: "bg-secondary text-secondary-foreground hover:bg-elevated",
        ghost: "hover:bg-elevated hover:text-foreground",
        link: "text-primary-bright underline-offset-4 hover:underline",
        editorial:
          "bg-gradient-to-b from-primary-bright to-primary text-primary-foreground shadow-[0_10px_28px_-14px_var(--primary)] hover:-translate-y-0.5 motion-reduce:hover:translate-y-0",
        editorialOutline:
          "border border-border-strong bg-transparent hover:border-primary/70 hover:bg-primary/10",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-12 rounded-lg px-7",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
