import styled, { withTheme } from 'styled-components';
import * as React from 'react';

import Grid from '../components/DataGrid/Grid';
import InstrumentSelector from '../components/InstrumentSelector';
import TickerBody from '../components/TickerBody';
import TickerHeader from '../components/TickerHeader';
import TickerStatus from '../components/TickerStatus';
import TickerUnsubscribe from '../components/TickerUnsubscribe';
import { Theme } from '../shared';

interface IProps {
  theme: Theme
}

const MainBody = styled.div`
  background-color: ${props  => props.theme.body.background};
  width: 420px;
  display: flex;
`;

const MainPanel = styled.div`
  width: 400px;
  background-color: ${props  => props.theme.panel.background};
  color: ${props  => props.theme.bodyText};
  margin: 15px;
`;

class Shell extends React.Component<IProps> {
  public render() {
    return (
      <MainBody>
        <MainPanel>
          <TickerHeader />
          <TickerBody />
          <TickerUnsubscribe />
          <InstrumentSelector/>
          <Grid />
          <TickerStatus />
        </MainPanel>
      </MainBody>
    );
  }
}

export default withTheme(Shell)