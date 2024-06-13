import { VariantProps, cva } from "class-variance-authority";
import { ComponentPropsWithRef, ElementType, forwardRef } from "react";

const typographyStyles = cva("w-full", {
  variants: {
    tag: {
      span: "text-base",
      h1: "text-3xl",
      h2: "text-2xl",
      h3: "text-xl",
      h4: "text-lg",
      h5: "text-md",
      p: "text-base",
    },
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
  },
  defaultVariants: {
    emphasis: "low",
    size: "base",
    weight: "normal",
    align: "left",
    italic: false,
    underline: false,
  },
});

type TypographyProps = ComponentPropsWithRef<"span"> &
  VariantProps<typeof typographyStyles> & {
    as?: ElementType;
  };

export const Typography = forwardRef<HTMLSpanElement, TypographyProps>(
  ({ as: Component = "span", className, ...props }, ref) => {
    const classes = typographyStyles(props);
    return (
      <Component className={`${classes} ${className}`} {...props} ref={ref} />
    );
  },
);
