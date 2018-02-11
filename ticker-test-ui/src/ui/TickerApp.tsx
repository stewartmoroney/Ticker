import * as React from 'react';
import Services from '../services/Services';

import TickerHeader from './TickerHeader/TickerHeader';
import TickerStatus from './TickerStatus/TickerStatus';
import TickerBody from './TickerBody';
import TickerLogon from './TickerLogon';
import TickerUnsubscribe from './TickerUnsubscribe/TickerUnsubscribe';
import Grid from './Grid';

export default class TickerApp extends React.Component<{ }, { }> {

  constructor(props: any) {
    super(props);
    Services.bootstrap();
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