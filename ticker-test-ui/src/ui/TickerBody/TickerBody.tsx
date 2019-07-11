import { connect } from 'react-redux';

import ITickerAppState from '../../state/TickerAppState';
import TickerBodyComponent from './TickerBodyComponent';

const mapStateToProps = (state: ITickerAppState) => {
  return { value: state.tickerValue };
};

export default connect(mapStateToProps)(TickerBodyComponent);
