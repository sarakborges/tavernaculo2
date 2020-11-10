// Dependencies
import React, { FC, useContext } from "react";
import { Route, Redirect } from "react-router-dom";

// Constants
import { ROUTES } from "consts";

// Context
import { AppProvider } from "Contexts/App";
import { AuthContext } from "Contexts/Auth";

// Styles
const ProtectedRoute = ({
  component,
  path,
  exact,
  ...rest
}: {
  component: FC;
  path: string;
  exact: boolean;
}) => {
  const { state } = useContext(AuthContext);
  const { isAuthed } = state;

  return (
    <>
      {typeof isAuthed !== "undefined" && isAuthed === true ? (
        <AppProvider>
          <Route path={path} component={component} exact={exact} {...rest} />
        </AppProvider>
      ) : (
        <Redirect to={ROUTES.LOGIN} />
      )}
    </>
  );
};

export default ProtectedRoute;
