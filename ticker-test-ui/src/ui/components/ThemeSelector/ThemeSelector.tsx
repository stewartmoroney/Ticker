import { useCallback } from "react";
import { FaLightbulb } from "react-icons/fa";

import {
  flipTheme,
  switchTheme,
  useTheme
} from "../../../services/themeService";

const ThemeSelector = () => {
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
