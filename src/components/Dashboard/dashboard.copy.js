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
      {!cookies.get("auth_token") && !cookies.get("user_info")
        ? history.push("/")
        : ""}
      <Dash>
        <Sidebar />
        <Nav />
        <div className="container-sbr">
          <div className="flex-container">
            <BalanceStats />
          </div>
        </div>
      </Dash>
      {/* <UserInfo /> */}
      {/* <BalanceStats /> */}
      {/* <Anouncements /> */}
      {/* <Activities token={cookies.get("login")} /> */}
      {/* <Activities token={cookies.get("auth_token")} /> */}
      {/* <Project token={cookies.get("auth_token")} /> */}
    </Router>
  );
};

export default Dashboard;
