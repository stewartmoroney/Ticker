import * as React from 'react';

export interface TickerStatusState {
  tickerStatus: string;
  sessionId: string;
  userName: string
}

export default class TickerStatusComponent extends React.Component<TickerStatusState> {
  render() {
    return (
      <div>{this.props.tickerStatus} Session - {this.props.sessionId} User - {this.props.userName}</div>
    );
  }
};