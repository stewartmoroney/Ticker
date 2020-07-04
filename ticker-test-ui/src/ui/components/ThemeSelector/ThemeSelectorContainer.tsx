import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";

import { toggleTheme } from "../../../services/redux/actions";
import ThemeSelector from "./ThemeSelector";

const ThemeSelectorContainer: FC = () => {
  const dispatch = useDispatch();
  const toggle = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);
  return <ThemeSelector toggle={toggle} />;
};

export default ThemeSelectorContainer;
