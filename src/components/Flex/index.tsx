import { FC, ReactNode } from "react";

interface FlexProps {
  children: ReactNode;
  direction?: string | { [key: string]: string };
  justify?: string | { [key: string]: string };
  align?: string | { [key: string]: string };
  gap?: string | { [key: string]: string };
}

const generateResponsiveClasses = (
  baseClass: string,
  value: string | { [key: string]: string },
) => {
  if (typeof value === "string") {
    return `${baseClass}-${value}`;
  }

  const result = Object.entries(value)
    .map(([breakpoint, val]) => `${breakpoint}:${baseClass}-${val}`)
    .join(" ");
  console.log("result", result);
  return result;
};

const Flex: FC<FlexProps> = ({
  children,
  direction = "row",
  justify = "start",
  align = "start",
  gap = "4",
}) => {
  const flexDirection = generateResponsiveClasses("flex", direction);
  const justifyContent = generateResponsiveClasses("justify", justify);
  const alignItems = generateResponsiveClasses("items", align);
  const flexGap = generateResponsiveClasses("gap", gap);

  return (
    <div
      className={`flex ${flexDirection} ${justifyContent} ${alignItems} ${flexGap}`}
    >
      {children}
    </div>
  );
};

export default Flex;
