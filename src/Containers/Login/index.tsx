// Dependencies
import React, { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

// Constants
import { ROUTES } from "consts";

// Context
import { AuthContext } from "Contexts/Auth";

// APIS
import UserAPI from "Apis/User";

// Components
import Logo from "Components/Layout/Logo";
import Form from "Components/Forms/Form";
import Field from "Components/Forms/Field";
import PasswordField from "Components/Forms/PasswordField";
import CheckButton from "Components/Forms/CheckButton";

// Styles
import {
  FormWrapper,
  FormFlexWrapper,
  LogoWrapper,
  FieldItem,
  Footer,
} from "./style";

// Container Login
const Login = () => {
  // Attributes
  const { state, dispatch } = useContext(AuthContext);
  const { isAuthed } = state;
  const [loginData, setLoginData] = useState<{
    email: string;
    password: string;
    showPass: boolean;
    keepLogin: boolean;
  }>({
    email: "",
    password: "",
    showPass: false,
    keepLogin: false,
  });

  // Functions
  const shoudEnableSubmit = () => {
    if (!!loginData.email && !!loginData.password) {
      return true;
    } else {
      return false;
    }
  };

  const setFormData = (key: string, val: any) => {
    setLoginData((prevState) => {
      return {
        ...prevState,
        [key]: val,
      };
    });
  };

  const doLogin = async () => {
    const { email, password } = loginData;

    if (!!email && !!password) {
      const loginInfo = await UserAPI.getLogin(email, password);

      if (!!loginInfo) {
        const { token, user } = loginInfo;

        dispatch({
          type: "DO_LOGIN",
          data: {
            isAuthed: true,
            token: token,
            user: user,
          },
        });

        window.sessionStorage.setItem(
          "loginInfo",
          JSON.stringify({
            token: token,
            user: user,
          })
        );

        if (!!loginData.keepLogin) {
          window.localStorage.setItem(
            "loginInfo",
            JSON.stringify({
              token: token,
              user: user,
            })
          );
        }
      }
    }
  };

  // DOM
  return (
    <>
      {typeof isAuthed !== "undefined" && isAuthed === true ? (
        <Redirect to={ROUTES.HOME} />
      ) : (
        <FormWrapper>
          <FormFlexWrapper>
            <Form onSubmit={doLogin} shouldEnableSubmit={shoudEnableSubmit()}>
              <LogoWrapper>
                <Logo />
              </LogoWrapper>

              <FieldItem>
                <Field
                  name='email'
                  placeholder='Aquele mesmo email do cadastro'
                  value={loginData.email}
                  icon={faEnvelope}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFormData("email", e.target.value);
                  }}
                />
              </FieldItem>

              <FieldItem>
                <PasswordField
                  value={loginData.password}
                  showPass={loginData.showPass}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFormData("password", e.target.value);
                  }}
                  onTogglePass={() => {
                    setFormData("showPass", !loginData.showPass);
                  }}
                />
              </FieldItem>

              <FieldItem>
                <CheckButton
                  checked={!!loginData.keepLogin}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setLoginData((prevState) => {
                      return {
                        ...prevState,
                        keepLogin: e.target.checked,
                      };
                    });
                  }}
                >
                  Quero continuar logade
                </CheckButton>
              </FieldItem>
            </Form>

            <Footer>
              Você ainda não tem uma conta?! Rápido!{" "}
              <Link to={ROUTES.REGISTER}>Cadastre-se!</Link>
            </Footer>
          </FormFlexWrapper>
        </FormWrapper>
      )}
    </>
  );
};

export default Login;
