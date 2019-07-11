import { connect } from 'react-redux';

import ITickerAppState from '../../state/TickerAppState';
import TickerStatusComponent from './TickerStatusComponent';

const mapStateToProps = (state: ITickerAppState) => {
  return {
    sessionId: state.sessionId,
    tickerStatus: state.tickerStatus
  };
};

export default connect(mapStateToProps)(TickerStatusComponent);
