import styled from "styled-components";
import { Link } from "react-router-dom";
import image from "../images/william-iven-jrh5lAq-mIs-unsplash.jpg";

const media = {
  mobile: "@media(max-width: 550px)",
};
export const Container = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 0.25fr 2fr 0.4fr;

  ${media.mobile} {
    background-image: none;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 0.6fr;
  }
`;

//navbar links
export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 12px;
  font-size: 20px;
  ${media.mobile} {
    display: none;
  }
`;

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

  img {
    display: none;
  }

  ${media.mobile} {
    background-color: black;
    h1 {
      display: inline-block;
      font-size: 20px;
    }
    img {
      display: block;
      position: absolute;
      top: 14px;
      right: 0px;
      height: 25px;
      width: 20px;
      padding-right: 20px;
    }
  }
`;

/*
side bar menu for mobile devices
*/
export const MobileNavContainer = styled.div`
  ${media.mobile} {
    background-color: #222;
    position: fixed;
    top: 0px;
    right: 0px;
    height: 100%;
    width: 250px;
    z-index: 1;
    // padding-top: 100px;
    overflow-x: hidden;

    p {
      // display: inline-block;
      // text-transform: uppercase;
      margin: 30px;
      // color: #999;
      color: white;
      cursor: pointer;
      font-size: 40px;
    }

    h3 {
      display: none;
      position: absolute;
      bottom: 1px;
      left: 45px;
      color: white;
      cursor: poiter;
    }
  }
`;
export const MobileNav = styled(Link)`
  ${media.mobile} {
    display: block;
    color: #999;
    text-decoration: none;
    padding: 20px 10px;
    margin: 25px;
  }
`;

/*
main content area which contains the login form
and the sign up page
*/
export const Main = styled.main`
  //   background-color: green;

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

  .email {
    display: inline;
    margin-left: 25%;
    padding: 10px;
  }
  .password {
    display: inline;
    margin-left: 3%;
    padding: 10px;
  }
  button {
    width: 30%;
    display: block;
    margin: 5% auto;
    padding: 15px 0px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 2px;
    font-size: 18px;
  }

  ${media.mobile} {
    // background-color: black;
    margin: 2px 0px;
    div {
      width: 100%;
    }
    .first {
      display: none;
    }
    .second {
      font-size: 25px;
      color: black;
      text-align: center;
      font-family: sans;
    }

    .email,
    .password {
      display: block;
      margin: 15px auto;
      padding: 15px 23px;
    }

    button {
      display: block;
      margin: 10px auto;
      width: 50%;
    }
  }
`;

//Footer Page
export const Footer = styled.footer`
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
  // color: white;
  // background-color: black;
  width: 100%;

  ${media.mobile} {
    color: white;
    text-align: center;
  }
`;
