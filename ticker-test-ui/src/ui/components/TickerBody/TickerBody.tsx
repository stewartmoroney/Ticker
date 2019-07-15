import * as React from 'react';

interface IProps {
  value: string;
}

export default class TickerBody extends React.Component<IProps> {
  public render() {
    return <div>{this.props.value}</div>;
  }
}
