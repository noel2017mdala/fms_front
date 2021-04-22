import { React } from "react";
import { useDispatch } from "react-redux";
import { Header, StyledLink } from "../../styledComponents";
import { TOGGLE_LOGIN_MODAL } from "../../redux/actions/dashboard/Modal";
import Image from "../../images/white_menu.png";
import Sidebar from "./Sidebar";

const Nav = (props) => {
  const dispatch = useDispatch();
  return (
    <Header>
      <nav>
        <h1>
          <a href="/">Countfy</a>
        </h1>
        {!props.state ? "" : <Sidebar state={props} />}

        <ul className="nav-container">
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/contacts">Contacts</StyledLink>
          <StyledLink
            onClick={(e) => {
              e.preventDefault();
              dispatch(TOGGLE_LOGIN_MODAL());
            }}
            to="/signup"
            className="signup"
          >
            Sign up
          </StyledLink>
        </ul>
      </nav>
      {/* <img
        src={Image}
        alt="menu"
        onClick={() => {
          props.Slider();
        }}
      /> */}
    </Header>
  );
};

export default Nav;
