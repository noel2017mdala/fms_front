import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard/dashboard";
import Login from "./Login/Login";

const Routes = () => {
  return (
    <Router>
      <div>
        <Route>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />
          </Switch>
        </Route>
      </div>
    </Router>
  );
};

export default Routes;
