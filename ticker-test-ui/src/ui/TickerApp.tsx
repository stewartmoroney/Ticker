import * as React from 'react';

import Grid from './Grid';
import TickerBody from './TickerBody/TickerBody';
import TickerHeader from './TickerHeader/TickerHeader';
import TickerLogon from './TickerLogon/TickerLogon';
import TickerStatus from './TickerStatus/TickerStatus';
import TickerUnsubscribe from './TickerUnsubscribe/TickerUnsubscribe';

export default class TickerApp extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <TickerHeader />
        <TickerLogon />
        <TickerStatus />
        <TickerBody />
        <TickerUnsubscribe />
        <Grid />
      </div>
    );
  }
}
