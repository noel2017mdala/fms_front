import styled from "styled-components";
import transaction from "../../images/paymentpass.jpg";
// import { Link } from "react-router-dom";
const media = {
  mobile_landscape: `@media (max-width: 40em) and (orientation: landscape)`,
  tablet: `@media(min-width: 40em) and (max-width: 75em)`,
  bigScreen: `@media (min-width: 50em)`,
};
export const Activities = styled.div`
  background-color: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  margin-top: 2em;
  width: 100%;
  height: 60vh;
  position: relative;
  padding-bottom: 1em;

  .top-bar {
    // margin-top: 2em;
    // background: #008ae6;
    color: white;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${transaction});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }
  .top-bar > h3 {
    text-align: center;
    margin-bottom: 0.5em;
    text-transform: uppercase;
    padding-top: 2em;
  }
  .top-bar > ul {
    list-style: none;
    text-align: center;
  }
  .top-bar > ul > li {
    display: inline-block;
    margin: 0.9em;
    padding-bottom: 0.6em;
    font-size: 1.1em;
    cursor: pointer;
  }

  .activities_image {
    height: 1.9em;
    position: absolute;
    right: 0.5em;
    top: 1.1em;
  }

  .list > ul {
    list-style: none;
    margin-top: 1em;
  }

  .list h3 {
    text-align: center;
  }

  .list > ul > li {
    // background-color: black;
    color: black;
    padding: 1.3em 0.4em;
    margin: 1.5em 0.8em;
    border-radius: 0.5em;
    cursor: pointer;
    transition: 0.5s ease;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    text-align: center;
  }

  ${media.bigScreen} {
    max-height: 120%;
    width: 45%;
    margin: 1em 2em;

    .top-bar > h3 {
      font-size: 1.2em;
      margin: 0;
    }

    .top-bar > ul > li {
      display: inline-block;
      margin: 0.5em;
      padding-bottom: 0.3em;
      font-size: 1.4em;
      cursor: pointer;
    }
  }

  ${media.tablet} {
    width: 50%;
    margin: 1em;
    height: 90%;
    // max-height: 95%;
    //height: 97vh;

    .top-bar > h3 {
      text-align: center;
      margin-bottom: 0.5em;
      text-transform: uppercase;
      //padding-top: 2em;
      font-size: 1em;
    }

    .top-bar > ul {
      list-style: none;
      text-align: center;
    }
    .top-bar > ul > li {
      display: inline-block;
      margin: 0.5em;
      padding-bottom: 0.5em;
      font-size: 0.8em;
      cursor: pointer;
    }
  }
`;
