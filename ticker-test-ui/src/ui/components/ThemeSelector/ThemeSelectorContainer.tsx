import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { withTheme } from 'styled-components';
import { toggleTheme } from '../../../services/redux/actions/ThemeActions';
import ThemeSelector from './ThemeSelector';
import { IThemeProps } from '../../shared';

const ThemeSelectorContainer: FC<IThemeProps> = (props) => {
    const dispatch = useDispatch();
    const toggle = useCallback(() => {
      dispatch(toggleTheme());
    }, [dispatch]);
  return <ThemeSelector toggle={toggle}/>;
};

export default withTheme(ThemeSelectorContainer);
