import styled, { withTheme } from 'styled-components';
import * as React from 'react';

import Grid from '../components/DataGrid/Grid';
import TickerBody from '../components/TickerBody';
import TickerHeader from '../components/TickerHeader';
import TickerLogon from '../components/TickerLogon';
import TickerStatus from '../components/TickerStatus';
import TickerUnsubscribe from '../components/TickerUnsubscribe';
import { Theme } from '../shared';

interface IProps {
  theme: Theme
}

const MainBody = styled.div`
  background-color: ${props  => props.theme.bodyBackground};
  color: ${props  => props.theme.bodyText};
`;

class Shell extends React.Component<IProps> {
  public render() {
    return (
      <MainBody>
        <TickerHeader />
        <TickerLogon />
        <TickerBody />
        <TickerUnsubscribe />
        <Grid />
        <TickerStatus />
      </MainBody>
    );
  }
}


export default withTheme(Shell)