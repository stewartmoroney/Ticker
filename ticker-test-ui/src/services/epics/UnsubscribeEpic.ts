import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';

import { UNSUBSCRIBE } from '../redux/actions/ActionTypes';

import { ApplicationEpic } from './Epics';

export const unSubscribeEpic: ApplicationEpic = (action$, state$, { subscribeService })  =>
  action$.pipe(
    ofType(UNSUBSCRIBE),
    mergeMap(action => {
      return subscribeService.unsubscribe();
    })
  );
