import { forwardRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia, coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentPropsWithRef, ElementType } from "react";

const codeStyles = cva("font-mono p-2 rounded", {
  variants: {
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    color: {
      light: "text-gray-700 bg-gray-50",
      dark: "text-gray-100 bg-gray-800",
    },
  },
  defaultVariants: {
    size: "base",
    color: "dark",
  },
});

type CodeProps = ComponentPropsWithRef<"code"> &
  VariantProps<typeof codeStyles> & {
    as?: ElementType;
    language?: string;
    showLineNumbers?: boolean;
  };

export const Code = forwardRef<HTMLElement, CodeProps>(
  (
    {
      as: Component = "code",
      className,
      language = "javascript",
      showLineNumbers = true,
      color = "dark",
      ...props
    },
    ref,
  ) => {
    const classes = codeStyles({ color, ...props });
    const theme = color === "dark" ? okaidia : coy;

    return (
      <SyntaxHighlighter
        language={language}
        style={theme}
        showLineNumbers={showLineNumbers}
        className={`${classes} ${className}`}
        ref={ref}
      >
        {props.children}
      </SyntaxHighlighter>
    );
  },
);
