import React from "react";
import {
  Nav as Navigation,
  LeftSection,
  RightSection,
} from "../../styledComponents/Dashboard/dashboardNav";
import bell from "../../images/bell.png";

const Nav = () => {
  return (
    <Navigation>
      <LeftSection>
        <h4>Dashboard</h4>
        <p>Easy way to manage your Finances</p>
      </LeftSection>
      <RightSection>
        <img src={bell} alt="bell" />
      </RightSection>
    </Navigation>
  );
};

export default Nav;
