import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

const Button = ({ ...props }: ButtonProps) => {
  return (
    <button {...props} className="text-blue-500">
      Button
    </button>
  );
};

export default Button;
