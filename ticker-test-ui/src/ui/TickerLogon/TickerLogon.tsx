import { connect } from 'react-redux';

import { InstancePerDependency } from 'eye-oh-see';

import Services from '../../services/Services';

import { TickActionCreator, subscribe } from '../../services/redux/Actions';

import TickerAppState from '../../state/TickerAppState';
import TickerLogonComponent from './TickerLogonComponent';

const mapStateToProps = (state: TickerAppState) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
     logon: () =>  dispatch(subscribe())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TickerLogonComponent);