import { connect } from 'react-redux';

import { GlobalState } from '../../../services/epics/Epics';
import TickerBodyComponent from './TickerBody';

const mapStateToProps = (state: GlobalState) => {
  return { value: state.data.tickerValue };
};

export default connect(mapStateToProps)(TickerBodyComponent);
