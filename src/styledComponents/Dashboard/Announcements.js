import styled from "styled-components";
// import { Link } from "react-router-dom";

export const Announcements = styled.div`
  grid-area: Announcements;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 1fr;
  grid-template-areas:
    "notify"
    "main-content";
  border-radius: 15px 15px 0px 0px;
  background: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  transition: 0.5s ease;
  cursor: pointer;
  margin 0em 2em;
  text-align: center;

  .announcements-bar{
    grid-area: notify;
    background:  #0000ff;
    // background: #1aa3ff;
    color: #fff;
    border-radius: 15px 15px 0px 0px;
  }

  .announcements{
    grid-area: main-content;
  }
  .announcements img{
    display:block;
    width: 40px;
    height: 50px;
    margin: 0 auto;
  }
`;
