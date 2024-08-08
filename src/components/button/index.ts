import Button from "./button";

export interface ButtonProps {
  variant?: "contained" | "text" | "outlined";
  type?: "submit" | "reset" | "button";
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  fullRounded?: boolean;
  className?: string;
  icon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export default Button;
