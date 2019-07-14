import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import ITickAction from '../../../services/redux/TickAction';

import { subscribe } from '../../../services/redux/Actions';

import TickerLogonComponent from './TickerLogonComponent';

import { GlobalState } from '../../../services/epics/Epics';

const mapStateToProps = (state: GlobalState) => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch<ITickAction>) => {
  return {
    logon: () => dispatch(subscribe())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  TickerLogonComponent
);
