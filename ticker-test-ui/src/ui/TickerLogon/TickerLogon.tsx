import { connect } from 'react-redux';

import { InstancePerDependency } from 'eye-oh-see';

import { logon } from '../../services/redux/Actions';

import TickerAppState from '../../state/TickerAppState';
import TickerLogonComponent from './TickerLogonComponent';

const mapDispatchToProps = (dispatch: any) => {
  return {
     logon: (userName: string) => dispatch(logon(userName))
  };
};

const mapStateToProps = (state: TickerAppState) => {
  return {
    userName: state.userName 
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(TickerLogonComponent);