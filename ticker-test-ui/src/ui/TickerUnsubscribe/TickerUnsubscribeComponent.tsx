import * as React from 'react';

import TickAction from './../../services/redux/TickAction';

interface Props {
  unsubscribe: () => TickAction;
} 

export default class TickerUnsubscribeComponent extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.unsubscribe();
  }
  render() {
    return (
      <button onClick={this.handleSubmit}>Ticker Unsubscribe</button>
    );
  }
}