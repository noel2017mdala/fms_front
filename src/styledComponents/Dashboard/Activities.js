import styled from "styled-components";
// import { Link } from "react-router-dom";

export const Activities = styled.div`
  background-color: white;
  margin-left: 2em;
  width: 50%;
  flex: 2;
  .top-bar > h3 {
    text-align: center;
    font-weight: normal;
    margin-top: 1em;
  }
  .top-bar {
    position: relative;
    font-size: 1.2em;
  }

  .top-bar > img {
    position: absolute;
    right: 0;
    height: 30px;
    margin-right: 1em;
    cursor: pointer;
  }
  .top-bar > ul {
    list-style: none;
    margin-top: 1em;
    text-align: center;
  }
  .top-bar > ul > li {
    display: inline;
    padding: 1em 2em;
    cursor: pointer;
  }
`;
