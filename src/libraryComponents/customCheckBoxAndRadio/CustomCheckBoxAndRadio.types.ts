import React from "react";
import { FormCheckProps } from "react-bootstrap";
export interface CustomCheckBoxAndRadioProps extends FormCheckProps {
  customStyles?: React.CSSProperties;
  className?: string;
  onChange: () => void;
  label: string;
  checked: boolean;
}
