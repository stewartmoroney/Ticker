import { connect } from 'react-redux';

import TickerAppState from '../../state/TickerAppState';
import TickerStatusComponent from './TickerStatusComponent';

const mapStateToProps = (state: TickerAppState) => {
  return { 
    tickerStatus: state.tickerStatus,
    sessionId: state.sessionId,
    userName: state.userName
  };
};

export default connect(mapStateToProps)(TickerStatusComponent);