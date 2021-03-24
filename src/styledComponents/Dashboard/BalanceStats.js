import styled from "styled-components";
// import { Link } from "react-router-dom";
const media = {
  tablet: `@media(min-width: 40em) and (max-width: 70em)`,
  mobile_landscape: `@media (max-width: 40em) and (orientation: landscape)`,
  bigScreen: `(min-width: 50em)`,
};
export const BalanceStats = styled.div`
  // .chartContainer {
  //   height: 50vh;
  //   margin: 2em;
  //   // margin-top: 2em;
  //   width: 35em;
  //   box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  // }

  margin-top: 0;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  .chartContainer {
    height: 40vh;
    margin-left: 0;
    margin-top: 1em;
    margin-bottom: 2em;
    width: 100% !important;
  }
  .chartContainer > p {
    text-align: center;
  }

  ${media.mobile_landscape} {
    width: 90%;
    margin: 0 auto;
    margin-top: 2em;

    .chartContainer {
      height: 60vh;
    }
  }
`;
