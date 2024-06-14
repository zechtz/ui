import { FC, ReactNode } from 'react';

export interface IconButtonProps {
  children: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'warn' | 'error';
}

const variantClasses = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600',
  secondary: 'bg-gray-500 text-white hover:bg-gray-600',
  warn: 'bg-yellow-500 text-white hover:bg-yellow-600',
  error: 'bg-red-500 text-white hover:bg-red-600',
};

const IconButton: FC<IconButtonProps> = ({
  children,
  startIcon,
  endIcon,
  onClick,
  variant = 'primary',
}) => {
  return (
    <button
      className={`inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${variant} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
};

export default IconButton;

