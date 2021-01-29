import React from "react";
import { MobileNavContainer, MobileNav } from "../../styledComponents";
const Sidebar = (props) => {
  return (
    <MobileNavContainer>
      <p
        onClick={() => {
          props.state.Slider();
        }}
      >
        &times;
      </p>
      <MobileNav
        to="/"
        onClick={() => {
          props.state.Slider();
        }}
      >
        Home
      </MobileNav>
      <MobileNav
        to="/about"
        onClick={() => {
          props.state.Slider();
        }}
      >
        About
      </MobileNav>
      <MobileNav
        to="/contacts"
        onClick={() => {
          props.state.Slider();
        }}
      >
        Contacts
      </MobileNav>
      <MobileNav
        to="signup"
        onClick={() => {
          props.state.Slider();
        }}
      >
        Sign up
      </MobileNav>

      <h3>Powered By NGT</h3>
    </MobileNavContainer>
  );
};

export default Sidebar;
