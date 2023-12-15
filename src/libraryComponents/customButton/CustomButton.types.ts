import { ButtonProps } from "react-bootstrap/Button";

export interface CustomButtonProps extends ButtonProps {
  customStyle?: React.CSSProperties;
  className?: string;
}
