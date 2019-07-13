import { connect } from 'react-redux';

import { GlobalState } from '../../services/epics/Epics';
import TickerBodyComponent from './TickerBodyComponent';

const mapStateToProps = (state: GlobalState) => {
  return { value: state.app.tickerValue };
};

export default connect(mapStateToProps)(TickerBodyComponent);
