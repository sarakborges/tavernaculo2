import styled from "styled-components";

interface IFieldWrapper {
  iconPosition: string;
  error?: boolean;
}
export const FieldWrapper = styled.div<IFieldWrapper>`
  position: relative;

  display: grid;
  grid-template: ${(props) =>
    props.iconPosition === "left"
      ? "'icon text' / 50px 1fr"
      : "'text icon' / 1fr 50px"};

  width: 100%;

  color: ${(props) =>
    props.error
      ? props.theme.field.error.fontColor
      : props.theme.field.iconLabel.fontColor};

  border-bottom: 2px solid
    ${(props) =>
      props.error
        ? props.theme.field.error.borderColor
        : props.theme.field.borderColor};

  transition: background-color 0.3s, border-color 0.3s;
`;

export const FieldStyle = styled.input`
  grid-area: text;

  height: 50px;
  padding-right: 15px;

  color: ${(props) => props.theme.field.fontColor};
  font-size: ${(props) => props.theme.field.fontSize};
  font-family: ${(props) => props.theme.general.fontName};

  border: none;
  background-color: transparent;

  transition: background-color 0.3s;

  &:focus {
    background-color: ${(props) => props.theme.field.focus.bgColor};
  }
`;

export const FieldTextAreaStyle = styled.textarea`
  min-height: 150px;
  max-height: 400px;
  padding: 10px 15px;

  color: ${(props) => props.theme.field.fontColor};
  font-size: ${(props) => props.theme.field.fontSize};
  font-family: ${(props) => props.theme.general.fontName};

  border: 2px solid transparent;
  border-radius: ${(props) => props.theme.general.borderRadius};
  border-radius: ${(props) => props.theme.field.bgColor};

  transition: border-color 0.3s;

  &:focus {
    border-color: ${(props) => props.theme.field.bgColor};
  }
`;

interface ILabel {
  shouldBeVisible: boolean;
}
export const Label = styled.label<ILabel>`
  position: absolute;
  left: ${(props) =>
    !props.shouldBeVisible
      ? props.theme.field.iconLabel.size
      : props.theme.field.label.focus.left};
  top: ${(props) =>
    !props.shouldBeVisible
      ? props.theme.field.label.top
      : props.theme.field.label.focus.top};
  z-index: 2;

  color: ${(props) =>
    !props.shouldBeVisible
      ? props.theme.field.label.fontColor
      : props.theme.field.label.focus.fontColor};
  font-size: ${(props) =>
    !props.shouldBeVisible
      ? props.theme.field.fontSize
      : props.theme.field.label.focus.fontSize};
  font-family: ${(props) => props.theme.general.fontName};
  line-height: ${(props) =>
    !props.shouldBeVisible
      ? props.theme.field.label.size
      : props.theme.field.label.focus.fontSize};

  transition: font-size 0.3s, line-height 0.3s, color 0.3s, left 0.3s, top 0.3s;

  ${FieldStyle}:focus ~ & {
    top: ${(props) => props.theme.field.label.focus.top};
    left: ${(props) => props.theme.field.label.focus.left};

    line-height: ${(props) => props.theme.field.label.focus.fontSize};
    font-size: ${(props) => props.theme.field.label.focus.fontSize};
    color: ${(props) => props.theme.field.label.focus.fontColor};
  }
`;

export const IconLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  grid-area: icon;

  width: ${(props) => props.theme.field.iconLabel.size};
  height: ${(props) => props.theme.field.iconLabel.size};

  font-size: 20px;
  color: inherit;

  transition: color 0.3s, background-color 0.3s;

  ${FieldStyle}:focus + & {
    background-color: ${(props) => props.theme.field.focus.bgColor};
  }
`;
