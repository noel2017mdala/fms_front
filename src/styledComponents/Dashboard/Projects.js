import styled from "styled-components";
//import { Link } from "react-router-dom";

export const Projects = styled.div`
position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 1fr;
  grid-template-areas:
    "top-bar"
    "bottom-bar";
  border-radius: 15px 15px 0px 0px;
  background: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  transition: 0.5s ease;
  cursor: pointer;
  margin 0em 2em;
  

  .top {
    grid-area: top-bar;
    background: #e65c00;
    // background: #008ae6;
    border-radius: 10px 10px 0px 0px;
    color: white;
  }
  .top img{
    width: 25px;
    height: 25px;
    float: right;
    margin: 25px 15px;
    cursor: pointer;
    
  }
  .top > h3 {
    text-align: center;
    margin: 3em 4em;
    font-size: 1rem;
    text-transform: uppercase;
  }

  .bottom {
    grid-area: bottom-bar;
    margin: 0.5em;
  }
  .bottom .info {
    text-align: center;
  }
  .bottom .user_projects{
    list-style:none;
  }
  .bottom .projectList{
    padding: 2em 0.4em;
      margin-right: 1.5em;
      box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
      text-align: center;
      font-weight: bold;
      border-radius: 10px;
      font-size: 1em;
      cursor: pointer;
      transition: 0.5s ease;
  }
  .bottom .projectList span{
    margin: 0.8em;
  }
  .bottom .projectList:hover{
    transform: scale(1.0025);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
  }
  :hover {
    // transform: scale(1.0025);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
  }
`;
