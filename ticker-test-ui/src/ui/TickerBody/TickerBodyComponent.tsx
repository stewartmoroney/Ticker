import * as React from 'react';

interface Props {
  value: string;
}

export default class TickerBodyComponent extends React.Component <Props> {

  render() {
    return (
      <div>{this.props.value}</div>
    );
  }
}