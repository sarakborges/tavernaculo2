// Dependencies
import React from "react";

// Styles
import { ButtonStyle } from "./style";

// Component Button
const Button = ({
  children,
  type,
  disabled,
  square,
  transparent,
  onClick,
}: {
  children: any;
  type?: "button" | "submit";
  disabled?: boolean;
  square?: boolean;
  transparent?: boolean;
  onClick?: any;
}) => {
  return (
    <>
      <ButtonStyle
        type={type || "button"}
        disabled={!!disabled}
        square={square}
        transparent={transparent}
        onClick={onClick}
      >
        {children}
      </ButtonStyle>
    </>
  );
};

export default Button;
