import styled from "styled-components";
// import { Link } from "react-router-dom";
const media = {
  mobile: `@media(max-width: 40em)`,
  tablet: `@media(min-width: 40em) and (max-width: 75em)`,
  bigScreen: `@media (min-width: 75em)`,
};
export const Dashboard = styled.div`
  background-color: #eee;
  display: grid;
  grid-template-columns: 0.05fr 1fr;
  grid-template-rows: 0.1fr 1fr;
  grid-template-areas:
    "sidebar nav"
    "sidebar container"
    "sidebar  grid_Second_container";
  grid-gap: 0.6rem;
  // background-color: #eee;

  .hubBurger {
    display: none;
  }
  .sidebarMenu {
    display: none;
  }
  .grid_container {
    grid-area: container;
    display: flex;
  }

  .grid_Second_container {
    grid-area: grid_Second_container;
    display: flex;
    // margin-left: 5em;
  }

  //mobile devices query
  ${media.mobile} {
    display: block;
    .nav_bar {
      padding: 1em 0;
    }
    .sidebar_menu {
    }
    .container .hubBurger {
      font-size: 1.3em;
    }
    .container > h4 {
      padding-top: 0.8em;
      padding-left: 1em;
      font-size: 1.2em;
      display: inline;
    }

    .nav_bar p {
      display: none;
    }

    .side_bar {
      display: none;
    }

    .image-container {
      display: none;
    }
    .hubBurger {
      display: inline;
    }

    .sidebarMenu {
      display: block;
    }
    .grid_container {
      grid-area: container;
      display: flex;
      flex-direction: column;
    }

    .grid_Second_container {
      grid-area: grid_Second_container;
      display: flex;
      flex-direction: column;
    }
  }

  ${media.tablet} {
    .grid_container {
      grid-area: container;
      display: flex;
      flex-direction: row;
      margin: 0;
    }

    .grid_Second_container {
      grid-area: grid_Second_container;
      display: flex;
      flex-direction: row;
    }

    ${media.bigScreen} {
    }
  }
`;
