import { createGlobalStyle } from "styled-components";

import MainTheme from "Themes/Main";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${MainTheme.body.bgColor};

    font-family: ${MainTheme.general.fontName};
    font-size: ${MainTheme.body.fontSize};
    color: ${MainTheme.body.fontColor};
  }

  a{
    color: ${MainTheme.body.linkColor};
  }
`;
