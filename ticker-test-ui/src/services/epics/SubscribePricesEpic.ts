import { ofType } from 'redux-observable';
import { mergeMap, withLatestFrom } from 'rxjs/operators';

import { ActionTypes, IAppAction, IConnectedAction } from '../redux/actions';

import { ApplicationEpic } from './Epics';

export const subscribePricesEpic: ApplicationEpic = (action$, state$, { priceService, webSocketService }) =>
  action$.pipe(
    ofType<IAppAction, IConnectedAction>(ActionTypes.CONNECTED),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      return priceService.subscribe(webSocketService.webSocket())
    })
  );
