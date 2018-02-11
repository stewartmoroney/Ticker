import { connect } from 'react-redux';

import TickerAppState from '../../state/TickerAppState';
import TickerBodyComponent from './TickerBodyComponent';

interface Props {
  value: string;
}

const mapStateToProps = (state: TickerAppState) => {
  return { value: state.tickerValue };
};

export default connect(mapStateToProps)(TickerBodyComponent);