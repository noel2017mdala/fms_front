import React from "react";
import { Container, Main, Nav, Footer, StyledLink } from "../styledComponents";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useHistory,
} from "react-router-dom";
import Login from "./Login";
import SignUp from "./Signup";
import Cookies from "universal-cookie";

function Landing() {
  const cookies = new Cookies();
  const history = useHistory();
  return (
    <Container>
      {cookies.get("login") ? history.push("/dashboard") : ""}
      <Router>
        <Route>
          <Nav>
            <h1>Countyfy</h1>
            <ul>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/about">About</StyledLink>
              <StyledLink to="/contacts">Contacts</StyledLink>
              <StyledLink to="signup">Sign up</StyledLink>
            </ul>
          </Nav>
          <Main>
            <div>
              <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/signup" exact component={SignUp} />
              </Switch>
            </div>
          </Main>
        </Route>
      </Router>
      <Footer>Footer</Footer>
    </Container>
  );
}

export default Landing;
