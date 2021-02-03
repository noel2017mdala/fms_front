import styled from "styled-components";
// import { Link } from "react-router-dom";

export const Activities = styled.div`
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
  // cursor: pointer;
  margin 0em 1.5em;
position: relative;
  .top-bar {
    grid-area: top-bar;
    background: #1aa3ff;
    // background: #008ae6;
    border-radius: 10px 10px 0px 0px;
    color: white;
  }
  .top-bar img{
    width: 25px;
    height: 25px;
    float: right;
    margin: 25px 15px;
    cursor: pointer;
    
  }
  .top-bar > h3 {
    text-align: center;
    margin: 1em 3.5em;
    font-size: 1rem;
    text-transform: uppercase;
  }
  .top-bar ul {
    list-style: none;
    margin: 2em 0em;
  }
  .top-bar li {
    display: inline;
    margin: 1em;
    padding: 10px 0px;;
    cursor: pointer;
  }

  .list {
    grid-area: bottom-bar;
    margin: 0.5em;
  }
  .list .info {
    text-align: center;
  }

    .list .user_activity{
      list-style: none;
    }
    .list .classList{
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
    .list .classList span{
      margin: 0.8em;
    }
    .list .classList:hover{
      transform: scale(1.0025);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
    }
    
  :hover {
    // transform: scale(1.0025);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
  }
`;
