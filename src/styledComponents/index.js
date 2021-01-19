import React from "react";
import styled from "styled-components";
import image from "../images/micheile-henderson-ZVprbBmT8QA-unsplash.jpg";
export const Container = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../images/micheile-henderson-ZVprbBmT8QA-unsplash.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`;
export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 1400px;
  font-family: sans-serif;
  //   background-image: url(${image});
`;

export const Nav = styled.nav`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 3rem;
  padding: 2% 0px;
`;

export const NavHeader = styled.h1`
  display: inline;
  color: white;
  margin: 0px 1.5%;
  font-size: 25px;
  text-transform: uppercase;
  letter-spacing: 8px;
  font-style: none;
  font-weight: normal;
  cursor: pointer;
`;

export const NavUl = styled.ul`
  float: right;
  margin: 1%;
`;

export const Navli = styled.li`
  list-style: none;
  display: inline;
  margin: 12px;
`;
export const Content = styled.div`
  //   background-color: red;
  width: 50%;
  display: block;
  margin: 0px auto;
  margin-top: 4%;
  font-size: 25px;
`;

export const Form = styled.div`
//   background-color: black;
  display: block;
  padding: 12px;
  margin 0px auto;
`;

export const Email = styled.input`
  padding: 12px;
`;

export const Button = styled.button`
  display: block;
  background-color: black;
  color: white;
  border: none;
  margin-top: 4%;
  padding: 10px 10%;
  font-size: 20px;
  border-radius: 5px;
`;
