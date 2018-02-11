import * as React from 'react';

interface Props {
  tickerStatus: string;
  sessionId: string;
  userName: string;
}

export default class TickerStatusComponent extends React.Component<Props> {
  render() {
    return (
      <div>{this.props.tickerStatus} Session - {this.props.sessionId} User - {this.props.userName}</div>
    );
  }
}