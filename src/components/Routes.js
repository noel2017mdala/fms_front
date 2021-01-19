import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../components/dashboard";
import Login from "../components/Login";

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
