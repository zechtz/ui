import { FC, ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  columns?: number;
  gap?: string;
}

const Grid: FC<GridProps> = ({ children, columns = 3, gap = "4" }) => {
  const gridColumns = `grid-cols-${columns}`;
  const gridGap = `gap-${gap}`;

  return <div className={`grid ${gridColumns} ${gridGap}`}>{children}</div>;
};

export default Grid;
