import React from "react";
import Button from "react-bootstrap/Button";
import { CustomButtonProps } from "./CustomButton.types";

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const { onClick, className, customStyle, children, ...rest } = props;
  const baseClass = "custom-button";
  return (
    <Button
      onClick={onClick}
      className={`${baseClass} ${className}`}
      style={customStyle}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
