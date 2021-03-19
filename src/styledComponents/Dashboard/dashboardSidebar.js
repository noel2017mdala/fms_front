import styled from "styled-components";

export const DashSidebar = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  width: 80%;
  height: 100%;
  position: sticky;
  position: relative;
  .sidebar-container {
    // padding-top: 3em;
  }
  .sidebar-container > li {
    list-style: none;
    padding: 2em;
  }
  .sidebar-container > li > a {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
  }
  .sidebar-container > .closeSideBar {
    position: absolute;
    right: 0.5em;
    font-size: 2em;
    color: white;
  }
`;
