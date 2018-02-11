import { connect } from 'react-redux';

import { InstancePerDependency } from 'eye-oh-see';

import Services from '../../services/Services';

import { updateUser } from '../../services/redux/Actions';

import TickerAppState from '../../state/TickerAppState';
import TickerLogonComponent from './TickerLogonComponent';

const mapDispatchToProps = (dispatch: any) => {
  return {
     setUid: (userName: string) => dispatch(updateUser(userName)),
     logon: (userName: string) =>  Services.subscribeService().subscribe(userName)
  };
};

const mapStateToProps = (state: TickerAppState) => {
  return {
    userName: state.userName 
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(TickerLogonComponent);