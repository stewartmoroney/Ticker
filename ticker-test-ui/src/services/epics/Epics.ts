import { Epic } from 'redux-observable';

import { connectEpic } from './ConnectEpic';
import { subscribePricesEpic } from './SubscribePricesEpic';
import { unSubscribeEpic } from './UnsubscribeEpic';

import rootReducer from '../redux/reducers/rootReducer';
import { instrumentEpic } from './InstrumentEpic';
import { IServices } from '../Bootstraper';
import { subscribeInstrumentEpic } from './SubscribeInstrumentEpic';
import { IAppAction } from '../redux/actions';

export type GlobalState = ReturnType<typeof rootReducer>;

export type ApplicationEpic<
  T extends IAppAction = IAppAction
> = Epic<T, T, GlobalState, IServices>;

export default [connectEpic,
  subscribeInstrumentEpic,
  instrumentEpic,
  subscribePricesEpic,
  unSubscribeEpic
];
