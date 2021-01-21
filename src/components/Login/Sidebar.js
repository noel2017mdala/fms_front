import React from "react";
import { MobileNavContainer, MobileNav } from "../../styledComponents";
const Sidebar = (props) => {
  return (
    <MobileNavContainer>
      <MobileNav to="/">Home</MobileNav>
      <MobileNav to="/about">About</MobileNav>
      <MobileNav to="/contacts">Contacts</MobileNav>
      <MobileNav to="signup">Sign up</MobileNav>
      <p
        onClick={() => {
          props.state.Slider();
        }}
      >
        &times; close
      </p>
      <h3>Powered By NGT</h3>
    </MobileNavContainer>
  );
};

export default Sidebar;
