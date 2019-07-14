import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming';
import * as React from 'react';

import Grid from './components/DataGrid/Grid';
import TickerBody from './components/TickerBody/TickerBody';
import TickerHeader from './components/TickerHeader/TickerHeader';
import TickerLogon from './components/TickerLogon/TickerLogon';
import TickerStatus from './components/TickerStatus/TickerStatus';
import TickerUnsubscribe from './components/TickerUnsubscribe/TickerUnsubscribe';
import { Theme } from './shared';

interface IProps {
  theme: Theme
}

const MainBody = styled.div`
  background-color: ${props  => props.theme.bodyBackground};
  color: ${props  => props.theme.bodyText};
`;

class TickerApp extends React.Component<IProps> {
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


export default withTheme(TickerApp)