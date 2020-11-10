// Dependencies
import React from "react";

// Assets
import Logo from "Assets/logo_white.png";

// Styles
import { LogoWrapper, LogoText } from "./style";

// Container Login
const Login = () => {
  // DOM
  return (
    <LogoWrapper>
      <img src={Logo} alt='Logo do Tavernáculo' />
      <LogoText>Tavernáculo</LogoText>
    </LogoWrapper>
  );
};

export default Login;
