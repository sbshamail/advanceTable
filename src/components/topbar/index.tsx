import React from 'react';
import ToggleColor from 'nextmastery/components/@cui/themeToggle/ToggleColor';
import ToggleMode from 'nextmastery/components/@cui/themeToggle/ToggleMode';
import { Shadow } from 'nextmastery';
const Topbar = () => {
  return (
    <Shadow>
      <ToggleColor />
      <ToggleMode />
    </Shadow>
  );
};

export default Topbar;
