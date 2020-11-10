import styled from "styled-components";

export const CheckButtonWrapper = styled.div`
  > label {
    display: inline-flex;
    align-items: center;

    > input {
      display: none;
    }
  }
`;

export const CheckButtonBox = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;

  background-color: ${(props) => props.theme.check.boxColor};
  border-radius: ${(props) => props.theme.check.borderRadius};

  color: ${(props) => props.theme.check.fontColor};

  > * {
    height: 20px;
    width: 20px;

    opacity: ${(props) => (!!props.checked ? 1 : 0)};

    transition: opacity 0.3s;
  }
`;

export const CheckButtonLabel = styled.div`
  padding-left: 10px;
`;
