import React from "react";
import { FormControlProps } from "react-bootstrap/FormControl";
export interface CustomInputProps extends FormControlProps {
  customStyles?: React.CSSProperties;
  className?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
}
