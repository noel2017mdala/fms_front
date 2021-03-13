import React from "react";
import { Announcements as Notifications } from "../../styledComponents/Dashboard/Announcements";
import meghaphone from "../../images/Megaphone-512.webp";
const Announcements = () => {
  return (
    <Notifications>
      <div className="announcements-bar">
        <h3>Notifications</h3>
      </div>
      <div className="announcements">
        <h3> No Notifications made</h3>
      </div>
    </Notifications>
  );
};

export default Announcements;
