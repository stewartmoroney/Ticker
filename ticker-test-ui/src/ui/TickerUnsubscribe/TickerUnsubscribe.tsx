import { connect } from 'react-redux';

import { unsubscribe } from '../../services/redux/Actions';

import TickerAppState from '../../state/TickerAppState';
import TickerUnsubscribeComponent from './TickerUnsubscribeComponent';

const mapDispatchToProps = (dispatch: any) => {
  return {
     unsubscribe: (userName: string) => dispatch(unsubscribe(userName))
  };
};

const mapStateToProps = (state: TickerAppState) => {
  return { userName: state.userName};
};

export default connect(mapStateToProps, mapDispatchToProps)(TickerUnsubscribeComponent);