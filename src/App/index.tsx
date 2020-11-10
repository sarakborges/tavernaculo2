// Dependencies
import React from "react";
import { ThemeProvider } from "styled-components";

// Context
import { AuthProvider } from "Contexts/Auth";

// Components
import Container from "Components/Layout/Container";

// Routes
import Routes from "routes";

// Styles
import "reset.css";
import MainTheme from "Themes/Main";
import { GlobalStyle } from "./style";

// App
const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={MainTheme}>
        <GlobalStyle />

        <Container>
          <Routes />
        </Container>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
