import React from "react";
import { Form } from "react-bootstrap";

import { CustomCheckBoxAndRadioProps } from "./CustomCheckBoxAndRadio.types";

const CustomCheckBoxAndRadio: React.FC<CustomCheckBoxAndRadioProps> = (
  props
) => {
  const { label, checked, onChange, className, customStyles, ...rest } = props;
  return (
    <Form.Check
      type="checkbox"
      label={label}
      checked={checked}
      onChange={onChange}
      className={`${className}`}
      style={customStyles}
      {...rest}
    />
  );
};

export default CustomCheckBoxAndRadio;
