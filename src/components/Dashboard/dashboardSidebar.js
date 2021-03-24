import React from "react";
import { useDispatch } from "react-redux";
import { DashSidebar } from "../../styledComponents/Dashboard/dashboardSidebar";
import { ToggleSidebarAction } from "../../redux/actions/dashboard/toggleSidebar";
const DashboardSideBar = () => {
  const dispatch = useDispatch();

  return (
    <DashSidebar className="sidebarMenu">
      <div className="sidebar">
        <ul className="sidebar-container">
          <label
            onClick={() => {
              dispatch(ToggleSidebarAction());
            }}
            className="closeSideBar"
          >
            &#10799;
          </label>
          <li>
            <a href="/">Profile</a>
          </li>
          <li>
            <a href="/">Graphs</a>
          </li>
          <li>
            <a href="/">Notifications</a>
          </li>
          <li>
            <a href="/">settings</a>
          </li>
          <li>
            <a href="/">Log out</a>
          </li>
        </ul>
      </div>
    </DashSidebar>
  );
};

export default DashboardSideBar;
