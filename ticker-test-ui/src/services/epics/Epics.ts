import { Epic } from 'redux-observable';

import { connectEpic } from './ConnectEpic';
import { subscribeEpic } from './SubscribeEpic';
import { subscribePricesEpic } from './SubscribePricesEpic';
import { subscribeInstrumentsEpic } from './SubscribeInstrumentsEpic';

import { subscribePriceEpic } from './SubscribePriceEpic';

import { unSubscribeEpic } from './UnsubscribeEpic';

import rootReducer from '../redux/reducers/rootReducer';
import { IServices } from '../Bootstraper';
import { IAppAction } from '../redux/actions';
import { unsubscribePriceEpic } from './UnsubscribePriceEpic';

export type GlobalState = ReturnType<typeof rootReducer>;

export type ApplicationEpic<
  T extends IAppAction = IAppAction
> = Epic<T, T, GlobalState, IServices>;

export default [connectEpic,
  subscribeEpic,
  subscribePricesEpic,
  subscribeInstrumentsEpic,
  subscribePriceEpic,
  unsubscribePriceEpic,
  unSubscribeEpic
];
