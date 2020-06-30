import { connect } from 'react-redux';

import { GlobalState } from '../../../services/epics/Epics';
import TickerBody from './TickerBody';

const mapStateToProps = (state: GlobalState) => {
  return { 
    id: state.data.tickerValue.id, 
    timeStamp: state.data.tickerValue.timeStamp
  };
};

export default connect(mapStateToProps)(TickerBody);
