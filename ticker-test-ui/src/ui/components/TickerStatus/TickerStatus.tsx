import { connect } from 'react-redux';

import { GlobalState } from '../../../services/epics/Epics';
import TickerStatusComponent from './TickerStatusComponent';

const mapStateToProps = (state: GlobalState) => {
  return {
    sessionId: state.app.sessionId,
    connectionStatus: state.app.connectionStatus
  };
};

export default connect(mapStateToProps)(TickerStatusComponent);
