import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IAppAction } from '../../../services/redux/actions/Actions';

import { subscribe } from '../../../services/redux/actions/Actions';

import TickerLogon from './TickerLogon';

import { GlobalState } from '../../../services/epics/Epics';

const mapStateToProps = (state: GlobalState) => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch<IAppAction>) => {
  return {
    logon: () => dispatch(subscribe())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  TickerLogon
);
