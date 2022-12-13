import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The color of component. default value = 'primary'
   * @default 'primary'
   */
  colors?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  /**
   * variants button styles
   * @default 'text'
   */
  variants?: "text" | "outlined" | "contained";
  /**
   * The size of component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size?: "small" | "medium" | "large" | "fullWidth";
  className?: string;
}
