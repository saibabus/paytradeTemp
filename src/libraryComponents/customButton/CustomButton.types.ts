import { ReactNode } from "react";
import ReactBootstrap from "react-bootstrap";

export interface IButton extends ReactBootstrap.ButtonProps {
  customStyle?: any;
  className?: string;
}
