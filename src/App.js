import React from "react";
// import Routes from "./components/Routes";
import {
  Wrapper,
  Nav,
  NavHeader,
  NavUl,
  Navli,
  Container,
} from "./styledComponents";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="container">
      <Wrapper>
        <Router>
          <Route>
            <Nav>
              <NavHeader>Countfy</NavHeader>

              <NavUl>
                <Navli>
                  <Link to="/">Home</Link>
                </Navli>
                <Navli>
                  <Link to="/about">About</Link>
                </Navli>
                <Navli>
                  <Link to="/contacts">Contacts</Link>
                </Navli>
                <Navli>
                  <Link to="/signup">Sign up</Link>
                </Navli>
              </NavUl>
            </Nav>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/signup" exact component={Signup} />
            </Switch>
          </Route>
        </Router>
      </Wrapper>
    </div>
  );
}

export default App;
