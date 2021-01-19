import React from "react";
import { Content, Form, Button } from "../styledComponents";

const Login = () => {
  return (
    <div>
      <Content>
        <p>
          Find out why <span>Countfy</span> is the Leading Financial management
          software and why we receive more that <span>12 million</span> Visitors
          in a single day
        </p>
        <p>
          Countfy Makes tracking and managing of your finances easy, fast and
          secure. get started now
        </p>
        <Form>
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="password" />
          <Button>Log In</Button>
        </Form>
      </Content>
    </div>
  );
};

export default Login;
