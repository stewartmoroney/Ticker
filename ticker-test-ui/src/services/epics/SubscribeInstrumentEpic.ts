import { ofType } from 'redux-observable';
import { mergeMap, map, takeUntil} from 'rxjs/operators';

import { ApplicationEpic } from './Epics';
import { SUBSCRIBE_INSTRUMENT, UNSUBSCRIBE_INSTRUMENT, newPrice, IStringAppAction, ISubscribeAction } from '../redux/actions';
import { Price } from '../../state/types';

const mapToPrice = (instrumentId: string, price: number):Price => {
  return {
    instrumentId: instrumentId,
    value: price,
  };
}

export const subscribeInstrumentEpic: ApplicationEpic = (action$, state$, { instrumentPriceService }) => 
  action$.pipe(
    ofType(SUBSCRIBE_INSTRUMENT),
    mergeMap(action => {
      const { payload } = action;
      // return instrumentPriceService.subscribe(action.payload.id).pipe(
      return instrumentPriceService.subscribe(payload).pipe(
        map(price => newPrice(mapToPrice('1', price))) 
      )
    }),
    takeUntil(
      action$.pipe(
        ofType(UNSUBSCRIBE_INSTRUMENT)
      )
    )
  );
