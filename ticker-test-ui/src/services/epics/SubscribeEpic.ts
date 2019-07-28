import { ofType } from 'redux-observable';
import { mergeMap, withLatestFrom } from 'rxjs/operators';

import { ActionTypes, IAppAction, INewSessionAction } from '../redux/actions';

import { ApplicationEpic } from './Epics';

export const subscribeEpic: ApplicationEpic = (action$, state$, { subscribeService }) =>
  action$.pipe(
    ofType<IAppAction, INewSessionAction>(ActionTypes.NEW_SESSION),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      const { sessionId } = state.system;
      return subscribeService.subscribe(sessionId);
    })
  );
