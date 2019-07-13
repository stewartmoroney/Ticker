import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { InstancePerDependency } from 'eye-oh-see';

import Services from '../../services/Services';

import ITickAction from './../../services/redux/TickAction';

import { subscribe, TickActionCreator } from '../../services/redux/Actions';

import ITickerAppState from '../../state/TickerAppState';

import TickerLogonComponent from './TickerLogonComponent';

import { GlobalState } from '../../services/epics/Epics';

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
