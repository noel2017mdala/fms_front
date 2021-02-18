import React from "react";
import Cookies from "universal-cookie";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import Activities from "./Activities";
import Project from "./Projects";
import Sidebar from "./sideBar";
import UserInfo from "./userInfo";
import BalanceStats from "./balanceStats";
import Anouncements from "./Announcements";
import Nav from "./Nav";
import { Dashboard as Dash } from "../../styledComponents/Dashboard/dashboardMain";

// const style = {
//   display: "inline",
//   float: "left",
//   margin: "10px",
// };

const Dashboard = () => {
  const history = useHistory();
  const cookies = new Cookies();

  return (
    <Router>
      {!cookies.get("login") ? history.push("/") : ""}
      <Dash>
        <Sidebar />
        <Nav />
        <UserInfo />
        <BalanceStats />
        <Anouncements />
        <Activities token={cookies.get("login")} />
        <Project token={cookies.get("login")} />
      </Dash>
    </Router>
  );
};

export default Dashboard;
