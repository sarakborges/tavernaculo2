// Dependencies
import React, { useState } from "react";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

// Constants
import { ROUTES } from "consts";

// Components
import Form from "Components/Forms/Form";
import Logo from "Components/Layout/Logo";
import Field from "Components/Forms/Field";
import PasswordField from "Components/Forms/PasswordField";

// Styles
import {
  FormWrapper,
  FormFlexWrapper,
  LogoWrapper,
  FieldItem,
  Footer,
} from "./style";
import { Link } from "react-router-dom";

// Container Register
const Register = () => {
  // Attributes
  const [registerData, setRegisterData] = useState<{
    id: string;
    email: string;
    name: string;
    password: string;
    showPass: boolean;
  }>({
    id: "",
    email: "",
    name: "",
    password: "",
    showPass: false,
  });

  // Functions
  const shoudEnableSubmit = () => {
    const { email, password, name } = registerData;

    if (!!email && !!password && !!name) {
      return true;
    } else {
      return false;
    }
  };

  const setFormData = (key: string, val: any) => {
    setRegisterData((prevState) => {
      return {
        ...prevState,
        [key]: val,
      };
    });
  };

  const doRegister = () => {};

  // DOM
  return (
    <FormWrapper>
      <FormFlexWrapper>
        <Form onSubmit={doRegister} shouldEnableSubmit={shoudEnableSubmit()}>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>

          <FieldItem>
            <Field
              placeholder='Seu incrível email'
              name='email'
              icon={faEnvelope}
              value={registerData.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormData("email", e.target.value);
              }}
            />
          </FieldItem>

          <FieldItem>
            <PasswordField
              value={registerData.password}
              showPass={registerData.showPass}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormData("password", e.target.value);
              }}
              onTogglePass={() => {
                setFormData("showPass", !registerData.showPass);
              }}
            />
          </FieldItem>

          <FieldItem>
            <Field
              placeholder='Como deseja ser conhecide'
              name='name'
              icon={faUserAlt}
              value={registerData.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormData("name", e.target.value);
              }}
            />
          </FieldItem>
        </Form>

        <Footer>
          Você possui uma conta? Ufa! <Link to={ROUTES.LOGIN}>Faça login!</Link>
        </Footer>
      </FormFlexWrapper>
    </FormWrapper>
  );
};

export default Register;
