// Dependencies
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

// Styles
import {
  FieldWrapper,
  Label,
  IconLabel,
  FieldStyle,
  FieldTextAreaStyle,
} from "./style";

// Component Field
const Field = ({
  placeholder,
  value,
  error,
  displayLabel,
  type,
  name,
  icon,
  iconPosition,
  onChange,
}: {
  placeholder?: string;
  value?: string;
  error?: boolean;
  displayLabel?: boolean;
  type?: string;
  name?: string;
  options?: Array<{
    label: string;
    value: string;
  }>;
  icon?: IconProp;
  iconPosition?: string;
  onChange?: any; // TODO encontrar tipagem que não dê erro
}) => {
  return (
    <FieldWrapper
      iconPosition={!!iconPosition ? iconPosition : "left"}
      error={error || false}
    >
      {type !== "select" && type !== "textarea" && (
        <>
          <FieldStyle
            id={name}
            type={type || "text"}
            placeholder={!!displayLabel ? "" : placeholder || "Digite aqui"}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.persist();
              onChange(e);
            }}
          />

          {name && icon && (
            <IconLabel htmlFor={name}>
              <FontAwesomeIcon icon={icon} />
            </IconLabel>
          )}

          {!!displayLabel && (
            <Label htmlFor={name} shouldBeVisible={!!value}>
              {placeholder}
            </Label>
          )}
        </>
      )}

      {type === "textarea" && (
        <FieldTextAreaStyle
          id={name}
          placeholder={placeholder || "Digite aqui"}
          value={value}
          onChange={onChange}
        />
      )}
    </FieldWrapper>
  );
};

export default Field;
