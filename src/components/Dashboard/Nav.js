import React from "react";
import { useDispatch } from "react-redux";
import ReactTooltip from "react-tooltip";
import { ToggleSidebarAction } from "../../redux/actions/dashboard/toggleSidebar";
import {
  Nav as Navigation,
  LeftSection,
  RightSection,
} from "../../styledComponents/Dashboard/dashboardNav";
import bell from "../../images/bell.png";
import Messages from "../../images/mail.png";

const Nav = () => {
  const dispatch = useDispatch();
  return (
    <Navigation className="nav_bar">
      <LeftSection>
        <div className="container">
          <label
            className="hubBurger"
            onClick={() => {
              dispatch(ToggleSidebarAction());
            }}
          >
            &#9776;
          </label>
          <h4>Dashboard</h4>
          <p>Easy way to manage your Finances</p>
        </div>
      </LeftSection>
      <RightSection>
        <div className="image-container">
          <img src={bell} alt="bell" />
          <img src={Messages} alt="Messages" />
        </div>
      </RightSection>
    </Navigation>
  );
};

export default Nav;
