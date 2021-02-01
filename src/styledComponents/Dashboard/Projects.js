import styled from "styled-components";
//import { Link } from "react-router-dom";

export const Projects = styled.div`
  //  background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
  border: 1px solid #666;
  grid:area: Projects;
  padding-bottom: 1em;

  .projectContainer{
    width: 100%;
    height: 100%;
  }
  .projectContainer img{
    display: block;
    height: 30px;
    width: 30px;
    float: right;

  }
  .projectContainer > h3{
    text-align: center;
    font-size: 1rem;
    text-transform: uppercase;
    margin-bottom: 3em;
  }
  .projectListing{
    //background-color: red;
    display: block;
    width: 100%;
    height: 10%;
  }
  .projectListing .content{
    display: block;
    margin 1em;
    padding: 1.4em;
    background-color: black;
    // color: #666;
    color: #999;
    // width: 100%;
    font-size: 1.2rem;
    border-radius: .5rem;
  }
  .projectListing .content:hover{
    
  }
  .content p{
    display: inline;
    padding: 0 .7em;
    letter-spacing
  }
  .content span{
    word-spacing: 0.5rem;
  }

  .projectListing .info{
    margin-top: 6em;
    text-align: center;
    font-size: 1rem;
    text-transform: uppercase;
  }
`;
