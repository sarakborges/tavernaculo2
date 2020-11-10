// Dependencies
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

// Components
import Field from "../Field";

// Styles
import { PasswordFieldWrapper, TogglePassword } from "./style";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

// Component Field
const PasswordField = ({
  value,
  showPass,
  error,
  onChange,
  onTogglePass,
}: {
  value?: string;
  showPass: boolean;
  error?: boolean;
  onTogglePass?: any; // TODO encontrar tipagem que não dê erro
  onChange?: any; // TODO encontrar tipagem que não dê erro
}) => {
  return (
    <PasswordFieldWrapper>
      <Field
        type={!!showPass ? "text" : "password"}
        name='pass'
        placeholder='Sua senha super secreta'
        error={error || false}
        value={value}
        icon={faLock}
        onChange={onChange}
      />

      <TogglePassword onClick={onTogglePass}>
        <FontAwesomeIcon icon={!!showPass ? faEyeSlash : faEye} />
      </TogglePassword>
    </PasswordFieldWrapper>
  );
};

export default PasswordField;
