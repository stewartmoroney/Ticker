import * as React from 'react';
import { connect } from 'react-redux';

import TickerUnsubscribeComponent from './TickerUnsubscribeComponent';

interface Props {
  userName: string;
} 

const mapStateToProps = (state: Props) => {
  return { userName: state.userName};
};

export default connect(mapStateToProps)(TickerUnsubscribeComponent);