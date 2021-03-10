import styled from "styled-components";
// import { Link } from "react-router-dom";

export const Dashboard = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 0.1fr 0.7fr 1fr 1fr;
  grid-template-rows: 0.4fr 2fr 2.7fr;
  grid-template-areas:
    "sidebar nav nav nav"
    "sidebar . balanceStat Announcements"
    "sidebar . Activities Projects";
  grid-gap: 0.6rem;
  background: #eee;

  .container-sbr {
    max-width: 1080px;
    margin: 1em auto;
  }

  .flex-container {
    display: flex;
  }
`;
