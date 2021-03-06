import styled from "styled-components";
import { Link } from "react-router-dom";
import image from "../images/micheile-henderson-ZVprbBmT8QA-unsplash.jpg";

const media = {
  mobile: "@media(max-width: 550px)",
};

export const Container = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)),
    url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;

//navbar links
export const StyledLink = styled(Link)`
  display: inline;
  color: white;
  text-decoration: none;
  margin: 0.5em 1em;
`;

export const Header = styled.header`
  nav {
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 1.5em 0;
  }

  nav h1 {
    display: inline;
    margin-left: 1.5em;
    font-size: 1.5rem;
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 0.5em;
  }
  nav h1 a {
    text-decoration: none;
    color: white;
    cursor: pointer;
  }

  nav .nav-container {
    list-style: none;
    float: right;
    margin-right: 2em;
  }
  nav .nav-container .signup {
    border: 1px solid white;
    padding: 0.5em 0.8em;
    border-radius: 0.5em;
  }
`;

/*
side bar menu for mobile devices
*/
export const MobileNavContainer = styled.div``;
export const MobileNav = styled(Link)``;

/*
main content area which contains the login form
and the sign up page
*/
export const Main = styled.main`
  .container {
    max-width: 1080px;
    margin: 0 auto;
  }

  .form {
    display: flex;
    flex-direction: column;
    margin-top: 6em;
  }

  .company-profile {
    color: white;
    font-size: 1.8em;
    text-align: justify;
  }

  .login-form {
    margin: 0 auto;
    margin-top: 3em;
  }

  .login-form input {
    padding: 0.8em;
    margin: 0em 1em;
  }

  .login-form button {
    display: block;
    width: 70%;
    padding: 1em 1.5em;
    font-size: 1em;
    margin: 1.4em auto;
    border: 1px solid black;
    border-radius: 0.3em;
    background-color: black;
    color: white;
    cursor: pointer;
    text-transform: uppercase;
  }
`;

//Footer Page
export const Footer = styled.footer``;
