import * as React from 'react';

import Services from '../../services/Services';

interface Props {
  userName: string;
  logon: (userName: string) => void;
}

export default class TickerLogonComponent extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
   
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.logon(e.target.value);
  }
 
  handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    Services.subscribeService().subscribe(this.props.userName);
  }

  render() {
    return (
  <div>
    <input onChange={this.handleChange} value={this.props.userName}/>
    <button onClick={this.handleSubmit}>logon</button>
  </div>
    );
  }
}