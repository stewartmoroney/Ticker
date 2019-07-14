import * as React from 'react';

import ITickAction from '../../../services/redux/TickAction';

interface IProps {
  logon: () => ITickAction;
}

export default class TickerLogonComponent extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public render() {
    return (
      <div>
        <button onClick={this.handleSubmit}>logon</button>
      </div>
    );
  }

  private handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    this.props.logon();
  }
}
