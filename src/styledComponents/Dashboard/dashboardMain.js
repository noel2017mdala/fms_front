import styled from "styled-components";
// import { Link } from "react-router-dom";

export const Dashboard = styled.div`
  display: grid;
  height: 140vh;
  grid-template-columns: 0.05fr 1fr;
  grid-template-rows: 0.1fr 1fr 1fr;
  grid-template-areas:
    "sidebar nav"
    "sidebar  balanceStat"
    "sidebar  Activities";
  grid-gap: 0.6rem;
  background: #eee;

  .balance_container {
    grid-area: balanceStat;
    display: flex;
    height: 100%;
  }

  .activities_container {
    margin-top: 2em;
    grid-area: Activities;
    display: flex;
    // background-color: red;
  }
`;
