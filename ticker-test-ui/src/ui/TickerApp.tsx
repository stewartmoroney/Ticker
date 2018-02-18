import * as React from 'react';

import TickerHeader from './TickerHeader/TickerHeader';
import TickerStatus from './TickerStatus/TickerStatus';
import TickerBody from './TickerBody/TickerBody';
import TickerLogon from './TickerLogon/TickerLogon';
import TickerUnsubscribe from './TickerUnsubscribe/TickerUnsubscribe';
import Grid from './Grid';

export default class TickerApp extends React.Component<{ }, { }> {

  constructor(props: { }) {
    super(props);
  }
                  
  render() {
    return (
      <div>
        <TickerHeader/>
        <TickerLogon/>
        <TickerStatus/>
        <TickerBody/>
        <TickerUnsubscribe/>
        <Grid/>
      </div>
    );
  }
}