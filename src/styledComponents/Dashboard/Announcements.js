import styled from "styled-components";
// import { Link } from "react-router-dom";
const media = {
  bigScreen: `@media (min-width: 50em)`,
  mobile_landscape: `@media (max-width: 40em) and (orientation: landscape)`,
  tablet: `@media(min-width: 40em) and (max-width: 75em)`,
};

export const Announcements = styled.div`
  background-color: white;
  width: 100%;
  height: 50vh;
  color: black;
  font-size: 0.9em;
  text-align: center;
  margin-top: 1em;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);

  // ${media.mobile_landscape} {
  //   width: 75%;
  //   margin: 0 auto;
  //   margin-top: 2em;
  //   height: 60vh;
  // }

  ${media.bigScreen} {
    height: 50vh;
    width: 50%;
    margin: 1em 2em;
  }

  ${media.tablet} {
    width: 50%;
    height: 55vh;
    margin: 1em;
    margin-right: 2em;
  }
`;
