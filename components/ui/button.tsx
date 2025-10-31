import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap  rounded-[7px] lg:rounded-[13px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-[#4685F0] text-white hover:bg-[#0256E4] active:bg-[#1169FF] disabled:bg-[#4685F099]",
        secondary:
          "bg-[#10B981] text-white hover:bg-[#009A67] active:bg-[#089E6C] disabled:bg-[#10B9817D]",
        primaryOutline:
          "border-2 border-[#4685F0] text-[#4685F0] hover:border-[#0256E4] hover:text-[#0256E4] active:border-[#1169FF] active:text-white disabled:border-[#90B6F6] disabled:text-[#90B6F6]",
        secondaryOutline:
          "border-2 border-[#10B981] text-[#10B981] hover:border-[#009A67] hover:text-[#009A67] active:border-[#089E6C] active:text-white disabled:border-[#8ADDC1] disabled:text-[#8ADDC1]",
        validation:
          "bg-[#FFB82E] text-white hover:bg-[#FDB01B] active:bg-[#FFB321] disabled:bg-[#FFB83280]",
        error:
          "bg-[#F93232] text-white hover:bg-[#F11B1B] active:bg-[#ED1313] disabled:bg-[#F9323280]",
        success:
          "bg-[#439F6E] text-white hover:bg-[#338C5C] active:bg-[#288453] disabled:bg-[#439F6E80]",
        dark: "bg-[#212121] text-white hover:bg-[#212121CC] active:bg-[#212121] disabled:bg-[#21212180]",
      },
      size: {
        default: "h-[43px] lg:h-[63px] px-10 md:text-[18px] text-[14px]",
        sm: "h-[38px] lg:h-[48px] px-7 lg:px-8 md:text-[16px] text-[14px]",
        lg: "h-[72px] px-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
