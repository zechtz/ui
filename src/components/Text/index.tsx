import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const textStypes = cva("w-full", {
  variants: {
    emphasis: {
      low: "text-gray-600 font-light",
    },
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
    },
    weight: {
      thin: "font-thin",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-black",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    italic: {
      true: "italic",
    },
    underline: {
      true: "underline underline-offset-2",
    },
    defaultVariants: {
      emphasis: "low",
      size: "base",
      weight: "normal",
      align: "left",
      italic: false,
      underline: false,
    },
  },
});

type TextProps = ComponentProps<"span"> & VariantProps<typeof textStypes>;

export const Text = forwardRef<HTMLSpanElement, TextProps>(
  ({ ...props }, ref) => {
    return <span {...props} ref={ref} />;
  },
);
