import React, { useState } from "react";
import avatar from "../../images/img_avatar.png";
import home from "../../images/home.png";
import chart from "../../images/chart.png";
import settings from "../../images/settings.png";
import {
  Sidebar as SideNav,
  ImageNav,
  BottomNav,
} from "../../styledComponents/Dashboard/dashbordSideBar";
const Sidebar = () => {
  const stye = {
    borderRight: "2.5px solid black",
    // borderRadius: "2px",
  };

  const [state, setState] = useState({
    home: true,
    chart: false,
    settings: false,
  });

  return (
    <SideNav>
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
        </div>
      </BottomNav>
    </SideNav>
  );
};

export default Sidebar;
