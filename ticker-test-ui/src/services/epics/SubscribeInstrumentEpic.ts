import { ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';

import { ApplicationEpic } from './Epics';
import { ActionTypes, newPrice, IInstrumentSubscribeAction, IAppAction } from '../redux/actions';
import { Price } from '../../state/types';

const mapToPrice = (instrumentId: string, price: number):Price => {
  return {
    instrumentId: instrumentId,
    value: price,
  };
}

export const subscribeInstrumentEpic: ApplicationEpic = (action$, state$, { instrumentPriceService }) => 
  action$.pipe(
    ofType<IAppAction, IInstrumentSubscribeAction>(ActionTypes.SUBSCRIBE_INSTRUMENT),
    mergeMap(action => {
      const { payload } = action;
      return instrumentPriceService.subscribe(payload).pipe(
        map(price => newPrice(mapToPrice(payload, price))) 
      )
    })
  );
