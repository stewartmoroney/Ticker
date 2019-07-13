import { connect } from 'react-redux';

import { GlobalState } from '../../services/epics/Epics';
import TickerStatusComponent from './TickerStatusComponent';

const mapStateToProps = (state: GlobalState) => {
  return {
    sessionId: state.app.sessionId,
    tickerStatus: state.app.tickerStatus
  };
};

export default connect(mapStateToProps)(TickerStatusComponent);
