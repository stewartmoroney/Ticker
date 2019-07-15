import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IAppAction } from '../../../services/redux/Actions';

import { subscribe } from '../../../services/redux/Actions';

import TickerLogonComponent from './TickerLogonComponent';

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
  TickerLogonComponent
);
