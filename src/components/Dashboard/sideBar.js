import React from "react";
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
  return (
    <SideNav>
      <ImageNav>
        <img src={avatar} />
      </ImageNav>
      <BottomNav>
        <div className="image-container">
          <img src={home} />
          <img src={chart} />
          <img src={settings} />
        </div>
      </BottomNav>
    </SideNav>
  );
};

export default Sidebar;
