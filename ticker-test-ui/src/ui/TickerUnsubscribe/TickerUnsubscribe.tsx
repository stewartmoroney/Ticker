import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { unsubscribe } from '../../services/redux/Actions';

import ITickAction from './../../services/redux/TickAction';

import { GlobalState } from '../../services/epics/Epics';

import TickerUnsubscribeComponent from './TickerUnsubscribeComponent';

const mapStateToProps = (state: GlobalState) => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch<ITickAction>) => {
  return {
    unsubscribe: () => dispatch(unsubscribe())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  TickerUnsubscribeComponent
);
