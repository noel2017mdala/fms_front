import React from "react";
import OptionsStyle from "../../styles/options";

const Options = () => {
  return (
    <div style={OptionsStyle.body}>
      <ul style={OptionsStyle.ul}>
        <li style={OptionsStyle.li}>Create activity</li>
        <li style={OptionsStyle.li}>Edit activity</li>
        <li style={OptionsStyle.li}>Delete activity</li>
        <li style={OptionsStyle.li}>List all activities</li>
      </ul>
    </div>
  );
};

export default Options;
