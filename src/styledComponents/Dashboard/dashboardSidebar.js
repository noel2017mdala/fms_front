import styled from "styled-components";
const media = {
  mobile_landscape: `@media (max-width: 40em) and (orientation: landscape)`,
};
export const DashSidebar = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  width: 60%;
  height: 100%;
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

  ${media.mobile_landscape} {
    width: 40%;
    height: 120%;
  }
`;
