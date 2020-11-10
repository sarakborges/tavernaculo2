// Dependencies
import React from "react";

// Components
import Button from "Components/Forms/Button";

// Styles
import { FormWrapper, FormSubmit } from "./style";

// Container Form
const Form = ({
  children,
  onSubmit,
  shouldEnableSubmit,
}: {
  children: any;
  shouldEnableSubmit: boolean;
  onSubmit: Function;
}) => {
  // DOM
  return (
    <FormWrapper
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {children}

      <FormSubmit>
        <Button type='submit' disabled={!shouldEnableSubmit}>
          Enviar
        </Button>
      </FormSubmit>
    </FormWrapper>
  );
};

export default Form;
