import React, { useState } from "react";
import Nav from "./Login/Nav";
import Main from "./Login/Main";
import Footer from "./Login/Footer";
import { Container } from "../styledComponents";

const Login = () => {
  return (
    <Container>
      <Nav />
      <Main />
      <Footer />
    </Container>
  );
};
export default Login;
