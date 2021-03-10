import React from "react";
import ReactTooltip from "react-tooltip";
import {
  Nav as Navigation,
  LeftSection,
  RightSection,
} from "../../styledComponents/Dashboard/dashboardNav";
import bell from "../../images/bell.png";
import Messages from "../../images/mail.png";

const Nav = () => {
  return (
    <Navigation>
      <LeftSection>
        <div className="container">
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
