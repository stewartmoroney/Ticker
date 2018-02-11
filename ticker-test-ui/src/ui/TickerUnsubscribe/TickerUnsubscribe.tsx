import { connect } from 'react-redux';

import TickerAppState from '../../state/TickerAppState';
import TickerUnsubscribeComponent from './TickerUnsubscribeComponent';

const mapStateToProps = (state: TickerAppState) => {
  return { userName: state.userName};
};

export default connect(mapStateToProps)(TickerUnsubscribeComponent);