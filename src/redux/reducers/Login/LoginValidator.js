const LoginValidator = (state = false, action, status = false) => {
  switch (action.type) {
    case "SUBMIT":
      return (state = true);
    case "END_SUBMIT":
      return (state = false);
    case "LOGIN_TOKEN":
      return (status = true);
    default:
      return state;
  }
};

export default LoginValidator;
