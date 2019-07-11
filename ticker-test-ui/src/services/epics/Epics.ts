import { Action } from 'redux'
import { Epic } from 'redux-observable'

import { connectEpic } from './ConnectEpic';
import { subscribeEpic } from './SubscribeEpic';
import { unSubscribeEpic } from './UnsubscribeEpic';
import TickerAppState from '../../state/TickerAppState';

export type ApplicationEpic<
  T extends Action = Action
> = Epic<T, T, TickerAppState>

export default [connectEpic, 
  subscribeEpic, 
  unSubscribeEpic
];
