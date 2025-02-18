import React from "react";
import ToggleColor from "nextmastery/components/@cui/themeToggle/ToggleColor";
import ToggleMode from "nextmastery/components/@cui/themeToggle/ToggleMode";
const Topbar = () => {
  return (
    <div>
      <ToggleColor />
      <ToggleMode />
    </div>
  );
};

export default Topbar;
