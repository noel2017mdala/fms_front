import styled from "styled-components";
// import { Link } from "react-router-dom";

export const Sidebar = styled.div`
  grid-area: sidebar;
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

  .image-container {
    display: flex;
    flex-direction: column;
  }
  .image-container img{
    width 1.5em;
    display: block;
    margin: 3em auto;
    cursor: pointer;
  }

  .
`;
