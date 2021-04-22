import styled from "styled-components";
// import { Link } from "react-router-dom";
const media = {
  tablet: `@media(min-width: 40em) and (max-width: 75em)`,
  mobile_landscape: `@media (max-width: 40em) and (orientation: landscape)`,
  bigScreen: `@media (min-width: 75em)`,
};
export const BalanceStats = styled.div`
  background-color: white;

  margin-top: 1em;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  .chartContainer {
    height: 40vh;
    margin-left: 0;
    margin-top: 1em;
    margin-bottom: 2em;
    width: 100%;
  }
  .chartContainer > p {
    text-align: center;
  }

  ${media.bigScreen} {
    // height: 50vh;
    // width: 50%;
    // margin: 1em;
    // display: none;
    margin: 1em 2em;
    width: 50%;
  }

  ${media.tablet} {
    width: 50%;
    height: 55vh;
    margin: 1em;
  }
`;
