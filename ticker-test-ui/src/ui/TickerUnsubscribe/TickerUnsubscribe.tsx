import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { unsubscribe } from '../../services/redux/Actions';

import ITickAction from './../../services/redux/TickAction';

import ITickerAppState from '../../state/TickerAppState';

import TickerUnsubscribeComponent from './TickerUnsubscribeComponent';

const mapStateToProps = (state: ITickerAppState) => {
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
