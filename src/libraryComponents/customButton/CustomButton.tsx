import React from "react";
import Button from "react-bootstrap/Button";
import { IButton } from "./CustomButton.types";

const CustomButton = ({
  children,
  onClick,
  customStyle = {},
  className = "",
  ...rest
}: IButton) => {
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
