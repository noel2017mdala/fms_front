const LoginValidator = (state = false, action) => {
  switch (action.type) {
    case "SUBMIT":
      return (state = true);
    case "END_SUBMIT":
      return (state = false);

    case "LOGIN_TOKEN":
      return (state = true);

    default:
      return state;
  }
};

export default LoginValidator;
