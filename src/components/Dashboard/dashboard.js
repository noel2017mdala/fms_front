import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import Activities from "./Activities";
import Project from "./Projects";
import Sidebar from "./sideBar";
import UserInfo from "./userInfo";
import CreateTransaction from "./Modals/CreateTransactionModal";
import ListTransactions from "./Modals/listTransactionModal";
import ViewProjects from "./Modals/ViewProjectsModal";
import CreateProject from "./Modals/createProjectModal";
import BalanceStats from "./balanceStats";
import Announcements from "./Announcements";
import DashboardSideBar from "./dashboardSidebar";

import Nav from "./Nav";
import { Dashboard as Dash } from "../../styledComponents/Dashboard/dashboardMain";

const Dashboard = () => {
  const select = useSelector((e) => {
    return e;
  });

  const history = useHistory();
  const cookies = new Cookies();

  //console.log(select);
  return (
    <Router>
      {!cookies.get("auth_token") && !cookies.get("user_info")
        ? history.push("/")
        : ""}
      {select.modalReducer.activitiesModal ? <CreateTransaction /> : null}
      {select.modalReducer.activitiesList ? <ListTransactions /> : null}

      {select.modalReducer.projectList ? <ViewProjects /> : null}
      {select.modalReducer.projectsModal ? <CreateProject /> : null}
      <Dash>
        <Nav />
        <Sidebar />
        {select.ToggleSidebar ? <DashboardSideBar /> : null}
        <div className="grid_container">
          <BalanceStats />
          <Announcements />
        </div>
        <div className="grid_Second_container">
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
