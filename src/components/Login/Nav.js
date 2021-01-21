import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Nav as Navigation, StyledLink } from "../../styledComponents";
import Image from "../../images/white_menu.png";
import { changeSlider } from "../../redux/actions/actionCreator";

import Sidebar from "./Sidebar";

const Nav = () => {
  const dispatch = useDispatch();
  const select = useSelector((e) => {
    return e;
  });

  const callSlider = () => {
    dispatch(changeSlider());
  };
  console.log(`from nav ${select.NavbarReducer}`);
  return (
    <Navigation>
      <div>
        <h1>Countfy</h1>
        {!select.NavbarReducer ? "" : <Sidebar />}

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
          callSlider();
        }}
      />
    </Navigation>
  );
};

export default Nav;
