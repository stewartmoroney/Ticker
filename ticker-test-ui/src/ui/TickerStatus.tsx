import * as React from 'react';
import { connect } from "react-redux";

interface IExampleComponentState {
    tickerStatus: string;
}

interface Props {
   tickerStatus: string;
   sessionId: string;
   userName: string
}

const mapStateToProps = (state: any) => {
  return { tickerStatus: state.tickerStatus,
  		sessionId: state.sessionId,
      userName: state.userName
    };
};

class TickerStatus extends React.Component<Props, IExampleComponentState> {
  render() {
    return (
      <div>{this.props.tickerStatus} Session - {this.props.sessionId} User - {this.props.userName}</div>
    );
  }
}

export default connect(mapStateToProps)(TickerStatus);