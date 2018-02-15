import SubscribeEpic from './SubscribeEpic';
import UnSubscribeEpic from './UnsubscribeEpic';

import { combineEpics } from 'redux-observable';
import 'rxjs';

export const rootEpic = combineEpics(
  SubscribeEpic,
  UnSubscribeEpic
);
