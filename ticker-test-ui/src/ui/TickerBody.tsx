import * as React from 'react';
import { connect } from 'react-redux';

interface Props {
  value: string;
}

const mapStateToProps = (state: any) => {
  return { value: state.tickerValue };
};

class TickerBody extends React.Component <Props> {

  render() {
    return (
      <div>{this.props.value}</div>
    );
  }
}

export default connect(mapStateToProps)(TickerBody);