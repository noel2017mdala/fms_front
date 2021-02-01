import styled from "styled-components";
// import { Link } from "react-router-dom";

export const Activities = styled.div`
  // background-color: purple;
  grid-area: Activities;
  border: 1px solid black;

  .container {
    font-size: 1rem;
    color: black;
  }
  .container img {
    display: block;
    height: 30px;
    width: 30px;
    float: right;
    // padding-left: 1em;
  }
  .container .content > h3 {
    text-align: center;
    font-size: 1rem;
    text-transform: uppercase;
  }
  .container ul {
    list-style: none;
  }

  .container ul li {
    display: inline;
    margin: 1.5em;
  }

  div .list .info {
    margin-top: 4em;
    text-align: center;
    font-size: 1rem;
    text-transform: uppercase;
  }
`;
