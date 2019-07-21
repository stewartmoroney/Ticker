import { ofType } from 'redux-observable';
import { mergeMap, withLatestFrom } from 'rxjs/operators';

import { SUBSCRIBE } from '../redux/actions/ActionTypes';

import { ApplicationEpic } from './Epics';

export const subscribeEpic: ApplicationEpic = (action$, state$, { subscribeService }) =>
  action$.pipe(
    ofType(SUBSCRIBE),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      const { sessionId } = state.system;
      return subscribeService.subscribe(sessionId);
    })
  );
