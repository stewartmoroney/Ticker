import * as React from 'react';

import Services from '../../services/Services';

interface Props {
  userName: string;
} 

export default class TickerUnsubscribeComponent extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    Services.subscribeService().unsubscribe(this.props.userName);
  }
  render() {
    return (
      <button onClick={this.handleSubmit}>Ticker Unsubscribe</button>
    );
  }
}