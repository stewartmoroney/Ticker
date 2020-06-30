import { ofType } from 'redux-observable';

import { ApplicationEpic } from './Epics';
import { ActionTypes, IInstrumentSubscribeAction, IAppAction, ack } from '../redux/actions';
import { map, mergeMap } from 'rxjs/operators';

export const subscribePriceEpic: ApplicationEpic = (action$, state$, { priceSubscribeService, webSocketService }) => 
  action$.pipe(
    ofType<IAppAction, IInstrumentSubscribeAction>(ActionTypes.SUBSCRIBE_INSTRUMENT),
    mergeMap(action => {
      const { payload } = action;
      return priceSubscribeService.sendSubscribeRequest(webSocketService.webSocket(), payload).pipe(
        map(sucess => ack())
      );
    })
  );
