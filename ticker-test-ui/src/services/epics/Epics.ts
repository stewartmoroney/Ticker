import ConnectEpic from './ConnectEpic';
import SubscribeEpic from './SubscribeEpic';
import UnSubscribeEpic from './UnsubscribeEpic';

import { combineEpics } from 'redux-observable';
import 'rxjs';

export default combineEpics(ConnectEpic, SubscribeEpic, UnSubscribeEpic);
