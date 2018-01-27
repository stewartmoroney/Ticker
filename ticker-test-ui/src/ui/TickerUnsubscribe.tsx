import * as React from 'react';
import { connect } from 'react-redux';

import Services from '../services/Services';

interface Props {
  userName: string;
} 

const mapStateToProps = (state: any) => {
  return { userName: state.userName};
};

class TickerUnsubscribe extends React.Component<Props, {}> {
  constructor(props: any) {
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

export default connect(mapStateToProps)(TickerUnsubscribe);