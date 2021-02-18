import styled from "styled-components";
// import { Link } from "react-router-dom";

export const Nav = styled.div`
  background: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  grid-area: nav;
  display: flex;
`;

export const LeftSection = styled.div`
  float: left;
  width: 60%;
  height: 100%;

  h4 {
    font-size: 0.9em;
    font-weight: normal;
    margin-left: 1em;
    letter-spacing: 5px;
  }
  p {
    font-size: 0.8em;
    margin-left: 1em;
  }
`;

export const RightSection = styled.div`
  // background-color: black;
  float: left;
  width: 40%;
  height: 100%;
  // color: #fff;

  img {
    height: 1.5em;
    margin-top: 2em;
    margin-left: 14em;
  }
  img:hover {
    cursor: pointer;
  }
`;
