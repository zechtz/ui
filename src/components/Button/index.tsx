import { ComponentProps, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utils";

const buttonStyles = cva(
  [
    "w-full",
    "rounded-md",
    "font-normal",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border",
        ghost: "transition-colors duration-300",
      },
      size: {
        sm: "px-4 py-1 text-sm font-semibold",
        md: "px-4 py-2 text-base font-semibold",
        lg: "px-6 py-3 text-lg font-semibold",
      },
      colorscheme: {
        primary: "bg-primary-500 text-white",
        secondary: "bg-gray-500 text-white",
        danger: "bg-red-500 text-white",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorscheme: "primary",
        className: "bg-primary-500 hover:bg-primary-600",
      },
      {
        variant: "outline",
        colorscheme: "primary",
        className:
          "text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100",
      },
      {
        variant: "ghost",
        colorscheme: "primary",
        className: "text-primary-600 bg-transparent hover:bg-primary-100",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorscheme: "primary",
    },
  },
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, colorscheme, className, ref, ...props }) => {
    return (
      <button
        className={cn(buttonStyles({ variant, size, colorscheme, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

export default Button;
