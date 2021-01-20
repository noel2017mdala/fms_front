// import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import image from "../images/micheile-henderson-ZVprbBmT8QA-unsplash.jpg";

//grid container
export const Container = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.25fr 2fr 0.5fr;
`;

//navigatin bar
export const Nav = styled.nav`
  background-color: rgba(0, 0, 0, 0.3);

  h1 {
    color: white;
    text-transform: uppercase;
    letter-spacing: 7px;
    font-weight: normal;
    line-heiht: 12px;
    margin-left: 15px;
    font-size: 25px;
    cursor: pointer;
  }
  ul {
    float: right;
    margin-right: 12px;
    margin-top: -40px;
  }
`;
//navbar links
export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 12px;
  font-size: 20px;
`;

/*
main content area which contains the login form
*/
export const Main = styled.main`
  // background-color: green;
  div {
    // background-color: red;
    padding-top: 2%;
    display: block;
    width: 70%;
    height: 100%;
    margin: 0px auto;
    font-size: 25px;
    text-align: justfy;
    color: white;
  }
  .first {
    font-size: 30px;
    text-align: left;
  }
  input {
    margin-left: 10%;
    padding: 5px;
  }

  button {
    width: 50%;
    display: block;
    margin: 5% auto;
    padding: 15px 0px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 2px;
    font-size: 18px;
  }
`;

//landing page footer
export const Footer = styled.footer`
  background-color: black;
`;
