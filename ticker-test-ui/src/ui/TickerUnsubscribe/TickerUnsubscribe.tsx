import { connect } from 'react-redux';

import { unsubscribe } from '../../services/redux/Actions';

import TickerAppState from '../../state/TickerAppState';
import TickerUnsubscribeComponent from './TickerUnsubscribeComponent';

const mapStateToProps = (state: TickerAppState) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
     unsubscribe: () => dispatch(unsubscribe())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TickerUnsubscribeComponent);