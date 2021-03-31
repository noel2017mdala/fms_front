import styled from "styled-components";

export const Projects = styled.div`
  // position: absolute;
  // background: #555;
  // border-radius: 5px;
  // color: #fff;
  // width: 50%;
  // height: 60%;
  // left: 10.5em;
  // top: 2em;
  // z-index: 1;
  // .contain ul {
  //   list-style: none;
  // }
  // .contain li {
  //   padding: 10px 0px;
  //   margin: 1.5em 0em;
  //   cursor: pointer;
  // }

  position: absolute;
  border-radius: 5px 5px 0px 0px;
  background: #454545;
  color: black;
  width: 50%;
  height: 50%;
  right: 2.5em;
  top: 1em;

  :before {
    position: absolute;
    top: 10%;
    right: -5px;
    content: "";
    width: 0;
    height: 0;
    margin: -10px -4px 0;
    border-left: solid 1em #454545;
    border-bottom: solid 1em transparent;
    border-top: solid 1em transparent;
  }

  .contain ul {
    list-style: none;
  }
  .contain li {
    margin: 1.5em 0em;
    text-align: center;
    cursor: pointer;
    color: white;
    font-size: 1.2rem;
  }
`;
