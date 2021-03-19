import React, { useState } from "react";
import avatar from "../../images/img_avatar.png";
import home from "../../images/home.png";
import chart from "../../images/chart.png";
import settings from "../../images/settings.png";
import logOut from "../../images/logout.png";
import {
  Sidebar as SideNav,
  ImageNav,
  BottomNav,
} from "../../styledComponents/Dashboard/dashbordSideBar";
const Sidebar = () => {
  const stye = {
    // borderRight: "2.5px solid 	#008b8b",
  };

  const [state, setState] = useState({
    home: true,
    chart: false,
    settings: false,
  });

  return (
    <SideNav className="side_bar">
      <ImageNav>
        <img src={avatar} alt="avatar" />
      </ImageNav>
      <BottomNav>
        <div className="image-container">
          <img
            style={state.home ? stye : null}
            src={home}
            alt="home"
            onClick={() => {
              setState((prevState) => ({
                ...prevState,
                home: true,
                chart: false,
                settings: false,
              }));
            }}
          />
          <img
            style={state.chart ? stye : null}
            src={chart}
            alt="chart"
            onClick={() => {
              setState((prevState) => ({
                ...prevState,
                home: false,
                chart: true,
                settings: false,
              }));
            }}
          />
          <img
            style={state.settings ? stye : null}
            src={settings}
            alt="settings"
            onClick={() => {
              setState((prevState) => ({
                ...prevState,
                home: false,
                chart: false,
                settings: true,
              }));
            }}
          />

          <img
            className="logOut"
            style={state.settings ? stye : null}
            src={logOut}
            alt="logout"
          />
        </div>
      </BottomNav>
    </SideNav>
  );
};

export default Sidebar;
