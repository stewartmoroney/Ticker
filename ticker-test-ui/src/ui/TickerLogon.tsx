import * as React from 'react';
import { connect } from 'react-redux';

import { InstancePerDependency } from 'eye-oh-see';

import Services from '../services/Services';

import { logon } from '../services/redux/Actions';

interface Props {
  userName: string;
  logon: any;
}

const mapDispatchToProps = (dispatch: any) => {
  return {
     logon: (userName: string) => dispatch(logon(userName))
  };
};

const mapStateToProps = (state: any) => {
  return {
    userName: state.userName 
   };
};

class TickerLogon extends React.Component<Props, {}> {
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

export default connect(mapStateToProps, mapDispatchToProps)(TickerLogon);