import * as React from 'react';

import { IAppAction } from '../../../services/redux/Actions';

interface IProps {
  logon: () => IAppAction;
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
