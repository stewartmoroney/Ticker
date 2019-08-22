import React, { FC } from 'react';
import styled, { ThemeProvider, withTheme } from 'styled-components';

import Grid from '../components/DataGrid';
import InstrumentSelector from '../components/InstrumentSelector';
import TickerBody from '../components/TickerBody';
import AppHeader from '../components/TickerHeader';
import AppStatusBar from '../components/AppStatusBar';
import TickerUnsubscribe from '../components/TickerUnsubscribe';
import { IThemeProps } from '../shared';
import { useSelector } from 'react-redux';
import { GlobalState } from '../../services/epics/Epics';

import { getTheme } from './../shared';

const MainBody = styled.div`
  background-color: ${props  => props.theme.body.background};
  width: 410px;
  display: flex;
`;

const MainPanel = styled.div`
  width: 400px;
  background-color: ${props  => props.theme.panel.background};
  color: ${props  => props.theme.bodyText};
  margin: 5px;
`;

const Shell: FC<IThemeProps> = (props) => {
  const themeName = useSelector((state: GlobalState) => {
    return state.system.themeName;
  });

  return <ThemeProvider theme={getTheme(themeName)}>
    <MainBody>
        <MainPanel>
          <AppHeader />
          <TickerBody />
          <InstrumentSelector/>
          <Grid />
          <TickerUnsubscribe />
          <AppStatusBar />
        </MainPanel>
      </MainBody>
</ThemeProvider>
}

export default withTheme(Shell)
