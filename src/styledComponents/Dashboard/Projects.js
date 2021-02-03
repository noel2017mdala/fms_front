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
  :hover {
    // transform: scale(1.0025);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
  }
`;
