import * as React from 'react';

import { IAppAction } from '../../../services/redux/Actions';

interface IProps {
  unsubscribe: () => IAppAction;
}

export default class TickerUnsubscribeComponent extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public render() {
    return <button onClick={this.handleSubmit}>Ticker Unsubscribe</button>;
  }

  private handleSubmit() {
    this.props.unsubscribe();
  }
}
