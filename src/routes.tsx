// Dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Constants
import { ROUTES } from "consts";

// Components
import ProtectedRoute from "Components/ProtectedRoute";

// Containers
import Login from "Containers/Login";
import Register from "Containers/Register";
import Home from "Containers/Home";

const Routes = () => (
  <Router>
    <Switch>
      <ProtectedRoute path={ROUTES.HOME} component={Home} exact />

      <Route path={ROUTES.LOGIN} component={Login} exact />
      <Route path={ROUTES.REGISTER} component={Register} exact />
    </Switch>
  </Router>
);

export default Routes;
