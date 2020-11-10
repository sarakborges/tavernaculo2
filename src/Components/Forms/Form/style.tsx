import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;

  border-radius: ${(props) => props.theme.general.borderRadius};
`;

export const FormSubmit = styled.div`
  margin-top: 40px;
`;
