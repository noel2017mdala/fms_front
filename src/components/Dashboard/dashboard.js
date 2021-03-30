import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import Activities from "./Activities";
import Project from "./Projects";
import Sidebar from "./sideBar";
import UserInfo from "./userInfo";
import BalanceStats from "./balanceStats";
import Announcements from "./Announcements";
import DashboardSideBar from "./dashboardSidebar";
import Nav from "./Nav";
import { Dashboard as Dash } from "../../styledComponents/Dashboard/dashboardMain";

const Dashboard = () => {
  const select = useSelector((e) => {
    return e.ToggleSidebar;
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const cookies = new Cookies();

  return (
    <Router>
      {!cookies.get("auth_token") && !cookies.get("user_info")
        ? history.push("/")
        : ""}
      <Dash>
        <Nav />
        <Sidebar />
        {select ? <DashboardSideBar /> : null}
        <div className="grid_container">
          <BalanceStats />
          <Announcements />
          <Activities />
          <Project />
        </div>
      </Dash>
    </Router>
  );
};

export default Dashboard;

/*
<Sidebar />
        <Nav />
        <div className="balance_container">
          <BalanceStats />
          <Announcements />
        </div>
        <div className="activities_container">
          <Activities />
          <Project />
        </div>
*/
