import React, { FC, ReactNode } from "react";
import styles from "./grid.module.scss";
import cn from "classnames";

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Spacing = "sm" | "md" | "lg";

type JustifyContent = "flex-start" | "center" | "flex-end" | "space-between";
type AlignItems = "flex-start" | "center" | "flex-end";

const Grid: FC<
  {
    children: ReactNode;
    container?: boolean;
    item?: boolean;
    xs?: Cols;
    sm?: Cols;
    md?: Cols;
    lg?: Cols;
    spacing?: Spacing;
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
  } & React.HTMLAttributes<HTMLDivElement>
> = ({
  children,
  container,
  item,
  xs,
  sm,
  md,
  lg,
  spacing,
  justifyContent,
  alignItems,
  ...props
}) => {
  const classNames = cn({
    [styles.grid_container]: container,
    [styles.grid_item]: item,
    [styles[`grid_xs_${xs}`]]: xs,
    [styles[`grid_sm_${sm}`]]: sm,
    [styles[`grid_md_${md}`]]: md,
    [styles[`grid_lg_${lg}`]]: lg,
    [styles[`grid_spacing_${spacing}`]]: spacing,
    [styles[`grid_justifyContent_${justifyContent}`]]: justifyContent,
    [styles[`grid_alignItems_${alignItems}`]]: alignItems,
  });

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

export default Grid;