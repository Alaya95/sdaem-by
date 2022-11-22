import { FC } from "react";
import styles from "./Button.module.scss";
import { ButtonProps } from "./ButtonTypes";
import cn from "classnames";

export const Button: FC<ButtonProps> = ({
  children,
  className,
  colors = "inherit",
  variants = "outlined",
  size = "medium",
  ...otherProps
}) => {
  return (
    <button
      className={cn(
        styles.base, styles[colors],
        styles[size], styles[variants],
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};
