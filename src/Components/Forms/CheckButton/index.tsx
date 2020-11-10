// Dependencies
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

// Styles
import { CheckButtonWrapper, CheckButtonBox, CheckButtonLabel } from "./style";

// Component Field
const CheckButton = ({
  children,
  type,
  checked,
  onChange,
}: {
  children?: string;
  type?: string;
  checked: boolean;
  onChange?: any; // TODO encontrar tipagem que não dê erro
}) => {
  return (
    <CheckButtonWrapper>
      <label>
        <input
          type='checkbox'
          checked={checked}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.persist();

            onChange(e);
          }}
        />
        <CheckButtonBox checked={checked}>
          <FontAwesomeIcon icon={faCheck} />
        </CheckButtonBox>

        {children && <CheckButtonLabel>{children}</CheckButtonLabel>}
      </label>
    </CheckButtonWrapper>
  );
};

export default CheckButton;
