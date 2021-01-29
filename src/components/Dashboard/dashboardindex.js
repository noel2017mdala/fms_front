import React from "react";
import Cookies from "universal-cookie";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import Activities from "./Activities";
import Project from "./Projects";

const style = {
  display: "inline",
  float: "left",
  margin: "10px",
};

const Dashboard = () => {
  const history = useHistory();
  const cookies = new Cookies();

  return (
    <Router>
      <div>
        {!cookies.get("login") ? history.push("/") : ""}
        <div style={style}>
          <Activities token={cookies.get("login")} />
        </div>
        <div style={style}>
          <Project token={cookies.get("login")} />
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
