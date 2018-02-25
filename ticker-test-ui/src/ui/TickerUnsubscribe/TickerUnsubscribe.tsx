import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { unsubscribe } from '../../services/redux/Actions';

import TickAction from './../../services/redux/TickAction';
import TickerAppState from '../../state/TickerAppState';
import TickerUnsubscribeComponent from './TickerUnsubscribeComponent';

const mapStateToProps = (state: TickerAppState) => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch<TickAction>) => {
  return {
    unsubscribe: () => dispatch(unsubscribe())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  TickerUnsubscribeComponent
);
