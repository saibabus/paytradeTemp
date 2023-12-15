import React from "react";
import FormControl from "react-bootstrap/FormControl";
import { CustomInputProps } from "./CustomInput.types";

const CustomInput: React.FC<CustomInputProps> = ({ ...rest }) => {
  return <FormControl {...rest} />;
};
export default CustomInput;
