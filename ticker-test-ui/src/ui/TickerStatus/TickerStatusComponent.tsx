import * as React from 'react';

interface IProps {
  sessionId: string;
  tickerStatus: string;
}

export default class TickerStatusComponent extends React.Component<IProps> {
  public render() {
    return (
      <div>
        {this.props.tickerStatus} - Session - {this.props.sessionId}
      </div>
    );
  }
}
