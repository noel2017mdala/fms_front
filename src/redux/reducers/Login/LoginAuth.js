const LoginAuth = (status = false, action) => {
  switch (action.type) {
    case "LOGIN_TOKEN":
      return (status = true);
    default:
      return status;
  }
};

export default LoginAuth;
