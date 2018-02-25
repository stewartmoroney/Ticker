import * as React from 'react';

import TickAction from './../../services/redux/TickAction';

interface Props {
  logon: () => TickAction;
}

export default class TickerLogonComponent extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    this.props.logon();
  }

  render() {
    return (
  <div>
    <button onClick={this.handleSubmit}>logon</button>
  </div>
    );
  }
}