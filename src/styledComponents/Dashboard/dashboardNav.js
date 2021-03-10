import styled from "styled-components";
// import { Link } from "react-router-dom";

export const Nav = styled.div`
  background-color: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  grid-area: nav;
`;

export const LeftSection = styled.div`
  .container {
    margin-left: 1em;
  }
  .container > h4 {
    font-weight: normal;
    font-size: 1.3em;
    // text-transform: uppercase;
    margin: 0.2em 0;
    letter-spacing: 0.1em;
    font-family: sans;
  }
  .container > p {
    font-family: sans;
    margin-bottom: 0.2em;
  }
`;

export const RightSection = styled.div`
  margin-left: auto;
  margin-right: 4em;

  img {
    display: block;
    width: 1.5em;
    margin: 1em 1.5em;
    cursor: pointer;
  }
  .image-container {
    display: flex;
  }
`;
