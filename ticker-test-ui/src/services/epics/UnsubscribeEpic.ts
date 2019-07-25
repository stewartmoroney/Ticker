import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';

import { ActionTypes } from '../redux/actions';

import { ApplicationEpic } from './Epics';

export const unSubscribeEpic: ApplicationEpic = (action$, state$, { subscribeService })  =>
  action$.pipe(
    ofType(ActionTypes.UNSUBSCRIBE),
    mergeMap(action => {
      return subscribeService.unsubscribe();
    })
  );
