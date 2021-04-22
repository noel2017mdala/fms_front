import React, { Component } from "react";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import LoginModal from "../Dashboard/Modals/loginModal";
import { Container } from "../../styledComponents";
import { useSelector } from "react-redux";

const Login = () => {
  const select = useSelector((e) => {
    return e;
  });

  return (
    <Container>
      <Nav />
      <Main />
      <Footer />

      {select.LoginModal.displayModal ? <LoginModal /> : null}
    </Container>
  );
};

export default Login;
