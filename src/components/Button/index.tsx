import { FC, ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: () => void;
  color?: 'primary' | 'secondary' | 'warn' | 'error';
  variant?: 'solid' | 'outline' | 'ghost';
}

const colorClasses = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600 border-blue-500',
  secondary: 'bg-gray-500 text-white hover:bg-gray-600 border-gray-500',
  warn: 'bg-yellow-500 text-white hover:bg-yellow-600 border-yellow-500',
  error: 'bg-red-500 text-white hover:bg-red-600 border-red-500',
};

const variantClasses = {
  solid: '',
  outline: 'bg-transparent text-current hover:bg-gray-200',
  ghost: 'bg-transparent text-current hover:bg-gray-100 border-none',
};

const Button: FC<ButtonProps> = ({
  children,
  startIcon,
  endIcon,
  onClick,
  color = 'primary',
  variant = 'solid',
}) => {
  const baseClasses = 'inline-flex items-center px-4 py-2 border shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';
  const colorClass = variant === 'solid' ? colorClasses[color] : colorClasses[color].replace('bg-', 'border-').replace('text-white', 'text-current');
  const variantClass = variantClasses[variant];

  return (
    <button
      className={`${baseClasses} ${colorClass} ${variantClass}`}
      onClick={onClick}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
};

export default Button;

