import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MobileNavContainer, MobileNav } from "../../styledComponents";
import { changeSlider } from "../../redux/actions/actionCreator";

const Sidebar = () => {
  const dispatch = useDispatch();
  const select = useSelector((e) => {
    return e;
  });
  console.log(`From sidebar ${select.NavbarReducer}`);
  return (
    <MobileNavContainer>
      <MobileNav to="/">Home</MobileNav>
      <MobileNav to="/about">About</MobileNav>
      <MobileNav to="/contacts">Contacts</MobileNav>
      <MobileNav to="signup">Sign up</MobileNav>
      <p
        onClick={() => {
          dispatch(changeSlider());
        }}
      >
        &times; close
      </p>
      <h3>Powered By NGT</h3>
    </MobileNavContainer>
  );
};

export default Sidebar;
