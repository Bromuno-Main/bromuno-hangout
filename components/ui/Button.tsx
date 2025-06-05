import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap  px-3 rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 ",
  {
    variants: {
      variant: {
        default: "bg-[#F1F1F1] text-black hover:text-white",
        dsn: "bg-[#EDD3FF] text-black text-sm hover:text-[#EDD3FF] ",
        dev: "bg-[#FFE9D3] text-black text-sm hover:text-[#FFE9D3] ",
        ghost: "border border-[#D9D9D9] text-black hover:bg-black hover:text-white ",
        link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
        outline: "border border-neutral-300 bg-transparent text-black hover:bg-neutral-100",
      },
      size: {
        default: "h-[40px]  px-6 py-3",
        sm: " gap-[6px] rounded-[24px] h-[22px] py-[2px] px-2",
        lg: " px-[10px] py-1 text-sm rounded-[32px] h-[28px] w-[69px]",
        icon: "h-10 rounded-full w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
