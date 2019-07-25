import { ofType } from 'redux-observable';

import { ApplicationEpic } from './Epics';
import { ActionTypes, IInstrumentSubscribeAction, IAppAction, ack } from '../redux/actions';
import { map, mergeMap } from 'rxjs/operators';

export const subscribePriceEpic: ApplicationEpic = (action$, state$, { instrumentPriceService }) => 
  action$.pipe(
    ofType<IAppAction, IInstrumentSubscribeAction>(ActionTypes.SUBSCRIBE_INSTRUMENT),
    mergeMap(action => {
      const { payload } = action;
      return instrumentPriceService.sendSubscribeRequest(payload).pipe(
        map(sucess => ack())
      );
    })
  );
