import React, { Component } from "react";
import Nav from "./Login/Nav";
import Main from "./Login/Main";
import Footer from "./Login/Footer";
import { Container } from "../styledComponents";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  Slider = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    return (
      <Container>
        <Nav state={this.state.active} Slider={this.Slider} />
        <Main />
        <Footer />
      </Container>
    );
  }
}

export default Login;
