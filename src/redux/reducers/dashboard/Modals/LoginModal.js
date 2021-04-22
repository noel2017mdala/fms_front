const modal = {
  displayModal: false,
};

const LoginModal = (state = modal, action) => {
  switch (action.type) {
    case "LOGIN_MODAL":
      state = {
        displayModal: !state.displayModal,
      };
      return state;

    default:
      return state;
  }
};

export default LoginModal;
