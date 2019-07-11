import { Action } from 'redux';
import { ActionsObservable, Epic } from 'redux-observable';

import { connectEpic } from './ConnectEpic';
import { subscribeEpic } from './SubscribeEpic';
import { unSubscribeEpic } from './UnsubscribeEpic';

import ITickerAppState from '../../state/TickerAppState';

export type ApplicationEpic<
  T extends Action = Action
> = Epic<T, T, ITickerAppState>;

export default [connectEpic,
  subscribeEpic,
  unSubscribeEpic
];
