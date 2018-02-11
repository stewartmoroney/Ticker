import { connect } from 'react-redux';

import TickerStatusComponent, { TickerStatusState } from './TickerStatusComponent';

const mapStateToProps = (state: TickerStatusState) => {
  return { 
    tickerStatus: state.tickerStatus,
    sessionId: state.sessionId,
    userName: state.userName
  };
};

export default connect(mapStateToProps)(TickerStatusComponent);