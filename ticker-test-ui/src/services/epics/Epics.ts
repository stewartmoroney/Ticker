import { Action } from 'redux';
import { ActionsObservable, Epic } from 'redux-observable';

import { connectEpic } from './ConnectEpic';
import { subscribeEpic } from './SubscribeEpic';
import { unSubscribeEpic } from './UnsubscribeEpic';

import ITickerAppState from '../../state/TickerAppState';

import rootReducer from './../../services/redux/Reducer';

export type GlobalState = ReturnType<typeof rootReducer>;

export type ApplicationEpic<
  T extends Action = Action
> = Epic<T, T, GlobalState>;

export default [connectEpic,
  subscribeEpic,
  unSubscribeEpic
];
