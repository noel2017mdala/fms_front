import { React } from "react";
import { Nav as Navigation, StyledLink } from "../../styledComponents";
import Image from "../../images/white_menu.png";

import Sidebar from "./Sidebar";

const Nav = (props) => {
  return (
    <Navigation>
      <div>
        <h1>Countfy</h1>
        {!props.state ? "" : <Sidebar state={props} />}

        <ul>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/contacts">Contacts</StyledLink>
          <StyledLink to="signup">Sign up</StyledLink>
        </ul>
      </div>
      <img
        src={Image}
        alt="menu"
        onClick={() => {
          props.Slider();
        }}
      />
    </Navigation>
  );
};

export default Nav;
