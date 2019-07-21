import { Action } from 'redux';
import { Epic } from 'redux-observable';

import { connectEpic } from './ConnectEpic';
import { subscribeEpic } from './SubscribeEpic';
import { unSubscribeEpic } from './UnsubscribeEpic';

import rootReducer from '../redux/reducers/rootReducer';
import { instrumentEpic } from './InstrumentEpic';
import { IServices } from '../Bootstraper';

export type GlobalState = ReturnType<typeof rootReducer>;

export type ApplicationEpic<
  T extends Action = Action
> = Epic<T, T, GlobalState, IServices>;

export default [connectEpic,
  instrumentEpic,
  subscribeEpic,
  unSubscribeEpic
];
