// Dependencies
import React, { useContext } from "react";

// Contexts
import { AuthContext } from "Contexts/Auth";

// Components
import Button from "Components/Forms/Button";

// Styles
// import {} from "./style";

// Component Logout
const Logout = () => {
  // Attributes
  const { dispatch } = useContext(AuthContext);

  // Functions
  const doLogout = async () => {
    dispatch({
      type: "DO_LOGIN",
      data: {
        isAuthed: false,
        token: undefined,
        user: undefined,
      },
    });

    window.localStorage.removeItem("loginInfo");
  };

  // DOM
  return <Button onClick={doLogout}>Logout</Button>;
};

export default Logout;
