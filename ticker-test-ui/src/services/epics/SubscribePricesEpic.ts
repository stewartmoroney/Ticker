import { ofType } from 'redux-observable';
import { mergeMap, withLatestFrom } from 'rxjs/operators';

import { ActionTypes } from '../redux/actions';

import { ApplicationEpic } from './Epics';

export const subscribePricesEpic: ApplicationEpic = (action$, state$, { subscribeService }) =>
  action$.pipe(
    ofType(ActionTypes.SUBSCRIBE),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      const { sessionId } = state.system;
      return subscribeService.subscribe(sessionId);
    })
  );
