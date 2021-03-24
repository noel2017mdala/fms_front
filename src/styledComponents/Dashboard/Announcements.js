import styled from "styled-components";
// import { Link } from "react-router-dom";
const media = {
  mobile: `@media(max-width: 40em)`,
  mobile_landscape: `@media (max-width: 40em) and (orientation: landscape)`,
  tablet: `@media(min-width: 40em) and (max-width: 70em)`,
};

export const Announcements = styled.div`
  // background-color: black;
  width: 100%;
  height: 50vh;
  color: black;
  font-size: 0.9em;
  text-align: center;
  margin-top: 1em;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);

  ${media.mobile_landscape} {
    width: 90%;
    margin: 0 auto;
    margin-top: 2em;
    height: 60vh;
  }
`;
