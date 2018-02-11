import { connect } from 'react-redux';

import Services from '../../services/Services';

import TickerAppState from '../../state/TickerAppState';
import TickerUnsubscribeComponent from './TickerUnsubscribeComponent';

const mapDispatchToProps = (dispatch: any) => {
  return {
     unsubscribe: (userName: string) => Services.subscribeService().unsubscribe(userName)
  };
};

const mapStateToProps = (state: TickerAppState) => {
  return { userName: state.userName};
};

export default connect(mapStateToProps, mapDispatchToProps)(TickerUnsubscribeComponent);