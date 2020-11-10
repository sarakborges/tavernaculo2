import styled from "styled-components";

interface IButtonStyle {
  square?: boolean;
  transparent?: boolean;
}
export const ButtonStyle = styled.button<IButtonStyle>`
  display: block;

  border: 2px solid
    ${(props) =>
      !!props.transparent ? "transparent" : props.theme.button.bgColor};
  border-radius: ${(props) =>
    !!props.square ? 0 : props.theme.general.borderRadius};
  background-color: ${(props) =>
    !!props.transparent ? "transparent" : props.theme.button.bgColor};

  width: 100%;
  height: 50px;
  padding: 0;
  margin: 0;

  color: ${(props) => props.theme.button.fontColor};
  font-size: ${(props) => props.theme.button.fontSize};
  font-family: ${(props) => props.theme.general.fontName};

  cursor: pointer;

  transition: color 0.3s, background-color 0.3s;

  &:hover {
    background-color: ${(props) =>
      !!props.transparent ? "transparent" : props.theme.button.hover.bgColor};

    color: ${(props) => props.theme.button.hover.fontColor};
  }

  &:disabled {
    background-color: ${(props) => props.theme.button.disabled.bgColor};
    border-color: ${(props) => props.theme.button.disabled.bgColor};

    color: ${(props) => props.theme.button.disabled.fontColor};

    cursor: default;
  }
`;
