import React, { FC, useCallback } from "react";
import { FaLightbulb } from "react-icons/fa";

import {
  flipTheme,
  switchTheme,
  useTheme
} from "../../../services/themeService";

const ThemeSelector: FC = () => {
  const themeName = useTheme();

  const handleToggle = useCallback(() => {
    switchTheme(flipTheme(themeName));
  }, [themeName]);
  return (
    <div>
      <FaLightbulb onClick={handleToggle} />
    </div>
  );
};

export default ThemeSelector;
