import styled from "styled-components";
//import { Link } from "react-router-dom";
import transaction from "../../images/payment.jpg";
const media = {
  bigScreen: `@media (min-width: 50em)`,
  mobile_landscape: `@media (max-width: 40em) and (orientation: landscape)`,
  tablet: `@media(min-width: 40em) and (max-width: 70em)`,
};

export const Projects = styled.div`
  background: white;
  // flex: 1.5;
  // margin: 0 2em;
  // cursor: pointer;
  // text-align: center;

  // background-color: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  margin-top: 4em;
  width: 100%;
  height: 60vh;
  position: relative;
  padding-bottom: 1em;

  .project_container {
    //border-radius: 10px 10px 0px 0px;
    color: white;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${transaction});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 1em 0;
  }

  .project_container h3 {
    text-align: center;
    margin-bottom: 0.5em;
    text-transform: uppercase;
    padding-top: 2em;
  }

  .projects_image {
    height: 1.9em;
    position: absolute;
    right: 0.5em;
    top: 1.1em;
  }

  .project_items ul {
    list-style: none;
    margin-top: 1em;
  }

  .project_items .info {
    text-align: center;
    margin-top: 2em;
  }

  .project_items > ul > li {
    // background-color: black;
    color: black;
    padding: 1.3em 0.4em;
    margin: 1em 0.8em;
    border-radius: 0.5em;
    cursor: pointer;
    transition: 0.5s ease;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    text-align: center;
  }

  // ${media.mobile_landscape} {
  //   width: 75%;
  //   margin: 0 auto;
  //   margin-top: 2em;
  //   min-height: 110vh;
  // }

  ${media.bigScreen} {
    max-height: 89%;
    width: 45%;
    margin: 1em 2em;

    .project_container h3 {
    }
  }

  ${media.tablet} {
    width: 50%;
    margin: 1em;
    max-height: 95%;
  }
`;
