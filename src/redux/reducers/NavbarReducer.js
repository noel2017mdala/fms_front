import { CHANGE_NAV } from "../actions/actionCreator";

let NavbarReducer = (state = false, action) => {
  if (action.type === CHANGE_NAV) {
    return {
      state: !state,
    };
  }
  return state;
};

export default NavbarReducer;
