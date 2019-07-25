import { ofType } from 'redux-observable';
import { mergeMap, withLatestFrom, map } from 'rxjs/operators';

import { ActionTypes, IAppAction, INewSessionAction, newPrice } from '../redux/actions';

import { ApplicationEpic } from './Epics';
import { Price } from '../../state/types';

const mapToPrice = (instrumentId: string, price: number):Price => {
  return {
    instrumentId: instrumentId,
    value: price,
  };
}

export const subscribePricesEpic: ApplicationEpic = (action$, state$, { instrumentPriceService }) =>
  action$.pipe(
    ofType<IAppAction, INewSessionAction>(ActionTypes.NEW_SESSION),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      const { payload } = action;
      return instrumentPriceService.subscribeToPrices(payload).pipe(
        map(price => newPrice(mapToPrice(payload, price))) 
      )
    })
  );
