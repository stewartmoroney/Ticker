import React, { FC, useCallback } from "react";
import { FaLightbulb } from "react-icons/fa";

interface IProps {
  toggle: () => void;
}

const ThemeSelector: FC<IProps> = ({ toggle }) => {
  const handleToggle = useCallback(() => {
    toggle();
  }, [toggle]);
  return (
    <div>
      <FaLightbulb onClick={handleToggle} />
    </div>
  );
};

export default ThemeSelector;
