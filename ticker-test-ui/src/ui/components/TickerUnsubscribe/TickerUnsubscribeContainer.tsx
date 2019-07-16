import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { unsubscribe } from '../../../services/redux/Actions';

import { IAppAction } from '../../../services/redux/Actions';

import { GlobalState } from '../../../services/epics/Epics';

import TickerUnsubscribe from './TickerUnsubscribe';

const mapStateToProps = (state: GlobalState) => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch<IAppAction>) => {
  return {
    unsubscribe: () => dispatch(unsubscribe())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  TickerUnsubscribe
);
