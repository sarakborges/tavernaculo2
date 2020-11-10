import styled from "styled-components";

export const PasswordFieldWrapper = styled.div`
  position: relative;

  input {
    padding-right: 50px;
  }
`;

export const TogglePassword = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  height: ${(props) => props.theme.field.iconLabel.size};
  width: ${(props) => props.theme.field.iconLabel.size};

  font-size: ${(props) => props.theme.field.fontColor};
  font-family: ${(props) => props.theme.field.fontName};

  cursor: pointer;
`;
