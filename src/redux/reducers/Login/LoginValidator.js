const LoginValidator = (state = false, action) => {
  switch (action.type) {
    case "SUBMIT":
      return (state = true);
    case "END_SUBMIT":
      return (state = false);
    default:
      return state;
  }
};

export default LoginValidator;
