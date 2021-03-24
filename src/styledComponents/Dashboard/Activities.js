import styled from "styled-components";
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
  height: 50vh;
  position: relative;

  .top-bar {
    margin-top: 2em;
  }
  h3 {
    text-align: center;
    margin-bottom: 0.5em;
  }
  ul {
    list-style: none;
    text-align: center;
  }
  ul > li {
    display: inline-block;
    margin: 0.9em;
    padding-bottom: 0.6em;
  }

  img {
    height: 1.9em;
    position: absolute;
    right: 1em;
    top: 1.5em;
  }
  ${media.mobile_landscape} {
    width: 90%;
    margin: 0 auto;
    margin-top: 2em;
    height: 60vh;
  }
`;
