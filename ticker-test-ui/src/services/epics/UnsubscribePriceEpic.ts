import { ofType } from 'redux-observable';

import { ApplicationEpic } from './Epics';
import { ActionTypes, IAppAction, ack, IInstrumentUnsubscribeAction } from '../redux/actions';
import { map, mergeMap } from 'rxjs/operators';

export const unsubscribePriceEpic: ApplicationEpic = (action$, state$, { priceSubscribeService, webSocketService }) => 
  action$.pipe(
    ofType<IAppAction, IInstrumentUnsubscribeAction>(ActionTypes.UNSUBSCRIBE_INSTRUMENT),
    mergeMap(action => {
      const { payload } = action;
      return priceSubscribeService.sendUnsubscribeRequest(webSocketService.webSocket(), payload).pipe(
        map(sucess => ack())
      );
    })
  );
