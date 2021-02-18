import styled from "styled-components";
// import { Link } from "react-router-dom";

export const Sidebar = styled.div`
  display: grid;
  // background: red;
  grid-area: sidebar;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 1fr;
  grid-template-areas:
    "image"
    "bottom-bar";
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  background: white;
`;

export const ImageNav = styled.div`
  grig-area: image;
  img {
    display: block;
    width: 100%;
  }
`;

export const BottomNav = styled.div`
  background: #fffafa;

  .image-container img {
    display: block;
    width: 35%;
    margin: 4em 0.6em;
    cursor: pointer;
    padding: 0em 0.5em;
  }
`;
