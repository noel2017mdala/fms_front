import styled from "styled-components";
import transaction from "../../images/paymentpass.jpg";
// import { Link } from "react-router-dom";
const media = {
  mobile: `@media(max-width: 40em)`,
  mobile_landscape: `@media (max-width: 40em) and (orientation: landscape)`,
  tablet: `@media(min-width: 40em) and (max-width: 70em)`,
};
export const Activities = styled.div`
  background-color: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  margin-top: 2em;
  width: 100%;
  height: 60vh;
  position: relative;

  .top-bar {
    // margin-top: 2em;
    // background: #008ae6;
    border-radius: 10px 10px 0px 0px;
    color: white;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${transaction});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
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
    margin: 0.9em 0.8em;
    border-radius: 0.5em;
    cursor: pointer;
    transition: 0.5s ease;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    text-align: center;
  }

  ${media.mobile_landscape} {
    width: 90%;
    margin: 0 auto;
    margin-top: 2em;
    height: 60vh;
  }
`;
